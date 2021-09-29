<template>
  <Button
    @click="
      openModal = true;
      modalTemplate = 'data';
    "
    >Show data</Button
  >
  <TextInput
    label="Library name"
    type="text"
    :value="libraryId"
    @update-value="changeValue('libraryId', $event)"
  />
  <Button @click="newPeople">New</Button>
  <Button
    v-if="null !== libraryId && libraryId.replace(/\s/g, '').length > 0"
    @click="load"
  >
    Load
  </Button>
  <Button v-if="canSave" @click="save">Save</Button>
  <Button @click="addPerson">+</Button>
  <Button @click="canLive ? live() : null">
    <template v-if="canLive">Next step</template>
    <template v-else><i class="fas fa-spinner"></i></template>
  </Button>
  <div v-if="peopleLibrary && peopleLibrary.people">
    {{ formatDate(peopleLibrary.date) }} - Population:
    {{ peopleLibrary.people.filter((person) => !person.deceased).length }} ({{
      peopleLibrary.people.filter((person) => person.deceased).length
    }}
    dead)
    <template v-for="person of peopleLibrary.people" :key="person.id">
      <div
        :class="`my-6 pa-6${
          hovered === person.id || (linked && linked.indexOf(person.id) !== -1)
            ? ' linked'
            : ''
        }`"
        style="border: solid 1px"
        @mouseover="hovered = person.id"
        @mouseout="hovered = null"
      >
        <template v-if="relationMode">
          <div v-if="person.id === relation.personA">
            <SLPerson :person="person" />
          </div>
          <div v-else @click="addPersonToRelation(person.id)">
            <SLPerson :person="person" />
          </div>
        </template>
        <template v-else>
          <SLPerson :person="person" />
          <Button
            class="mx-1-rem"
            :action="true"
            :iconOnly="true"
            middleIcon="fas fa-project-diagram"
            @click="showFamily(person)"
          >
            Add relation
          </Button>
          <Button
            class="mr-1-rem"
            :action="true"
            :iconOnly="true"
            middleIcon="fas fa-trash-alt"
            @click="removePerson(person.id)"
            >Remove</Button
          >
        </template>
      </div>
    </template>
  </div>
  <Modal
    :title="modalTitle"
    :opened="openModal"
    v-on:close="
      openModal = false;
      modalTitle = null;
    "
  >
    <div v-show="modalTemplate === 'relation'">
      <p>Select the type of the relation</p>
      <select v-model="selectedRelation">
        <option v-for="type of relationTypes" :key="type">
          {{ type }}
        </option>
      </select>
      <Button @click="createRelation" :opened="openModal">Select</Button>
    </div>
    <div v-show="modalTemplate === 'confirm'">
      {{ confirm.message }}
      <div class="mt-2-rem float-right">
        <Button class="mr-1-rem" :action="true" @click="confirm.onCancel">
          {{ confirm.cancel }}
        </Button>
        <Button @click="confirm.onOk">{{ confirm.ok }}</Button>
      </div>
    </div>
    <div v-show="modalTemplate === 'familyTree'">
      <div id="familyTree-container">
        <canvas ref="familyTree" height="0"></canvas>
      </div>
    </div>
    <div v-show="modalTemplate === 'data'">
      <pre>{{ peopleLibrary }}</pre>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import Button from "@/components/atoms/Button";
import TextInput from "@/components/atoms/input/TextInput";
import SLPerson from "./SLPerson";

export default {
  components: { Modal, Button, TextInput, SLPerson },
  data() {
    return {
      url: `${this.$backendUrl}/rng`,
      libraryId: null,
      importedLibrary: {},
      peopleLibrary: {},
      relationMode: false,
      relationTypes: ["MARRIED_TO", "CHILD_OF", "SIBLING_OF"],
      relation: {},
      hovered: null,
      openModal: false,
      selectedPerson: null,
      selectedRelation: null,
      modalTitle: null,
      modalTemplate: null,
      confirm: {
        message: null,
        onCancel: null,
        onOk: null,
        cancel: "Cancel",
        ok: "Ok",
      },
      names: null,
      canLive: true,
      i: 0,
    };
  },
  methods: {
    getFamilyTree(generation) {
      return this.names.data.filter((it) => {
        return it.generation === generation;
      });
    },
    getGenerations() {
      const generations = [];
      let olderGeneration = 0;
      this.names.data.sort((a, b) => a.generation - b.generation);
      this.names.data.forEach((it) => {
        if (it && it.generation > olderGeneration) {
          generations.push(olderGeneration);
          olderGeneration = it.generation;
        }
      });
      generations.push(olderGeneration);
      console.log(generations);
      return generations;
    },
    updateFamilyTree() {
      const boxWidth = 100;
      const boxHeight = 40;
      const marginRight = 10;
      const marginBottom = 80;
      const generations = this.getGenerations();
      const canvas = this.$refs["familyTree"];
      canvas.height = generations.length * (boxHeight + marginBottom);
      canvas.width =
        this.getFamilyTree(generations.length - 1).length *
        (boxWidth + 4 * marginRight);
      canvas.width = canvas.width < 400 ? canvas.width : 400;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "8pt sans-serif";
      this.boxes = [];
      for (let i = 0; i < generations.length; i++) {
        const people = this.getFamilyTree(generations[i]);
        let j = 0;
        people.forEach((person) => {
          ctx.strokeStyle = person.gender === "M" ? "#3f62c4" : "#c43f91";
          ctx.fillStyle = person.gender === "M" ? "#c2ebff" : "#ffdeee";
          const boundingBox = {
            x:
              (canvas.width - boxWidth * people.length) / 2 +
              j * boxWidth -
              marginRight,
            y: i * (boxHeight + marginBottom) + 10,
          };
          ctx.strokeRect(
            boundingBox.x + marginRight,
            boundingBox.y,
            boxWidth - marginRight,
            boxHeight
          );
          ctx.fillRect(
            boundingBox.x + marginRight,
            boundingBox.y,
            boxWidth - marginRight,
            boxHeight
          );
          ctx.fillStyle = "black";
          ctx.fillText(
            person.firstname,
            boundingBox.x + marginRight + 12,
            boundingBox.y + 20
          );
          ctx.fillText(
            person.surname,
            boundingBox.x + marginRight + 12,
            boundingBox.y + 32
          );
          j++;
          const links = [];
          const father = this.getParent(person, "M");
          const mother = this.getParent(person, "F");
          if (father) links.push(father.id);
          if (mother) links.push(mother.id);
          this.boxes.push({
            id: person.id,
            boundingBox: boundingBox,
            links: links,
          });
        });
      }
      this.boxes.forEach((box) => {
        if (box.links) {
          box.links.forEach((link) => {
            const from = box.boundingBox;
            const related = this.boxes.filter((it) => {
              return it.id === link;
            });
            let to = null;
            if (related.length > 0) to = related[0].boundingBox;
            if (to) {
              const orig = {
                x: from.x + boxWidth / 2,
                y: from.y,
              };
              const dest = {
                x: to.x + boxWidth / 2,
                y: to.y + boxHeight,
              };
              const c1 = {
                x: orig.x,
                y: orig.y - marginBottom / 2,
              };
              const c2 = {
                x: to.x + boxWidth / 2,
                y: from.y - marginBottom / 2,
              };
              ctx.beginPath();
              ctx.strokeStyle = "black";
              ctx.moveTo(orig.x, orig.y);
              ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, dest.x, dest.y);
              ctx.stroke();
            }
          });
        }
      });
    },
    getParent(person, gender) {
      let parent = null;
      person.relations
        .filter((relation) => relation.type === "CHILD_OF")
        .forEach((relation) => {
          const tmp = this.getPerson(relation.personB);
          if (tmp.gender === gender) parent = tmp;
        });
      return parent;
    },
    getPerson(id) {
      const filter = this.peopleLibrary.people.filter(
        (person) => person.id === id
      );
      if (filter.length > 0) return filter[0];
      return null;
    },
    getRelatives(person) {
      person.relations.forEach((relation) => {
        if (relation.type === "CHILD_OF") {
          const relative = this.getPerson(relation.personB);
          this.names.data.push(relative);
          this.getRelatives(relative);
        }
      });
    },
    showFamily(person) {
      this.modalTitle = `${person.firstname} ${person.surname}'s family tree`;
      this.modalTemplate = "familyTree";
      this.openModal = true;
      this.names = { data: [] };
      this.names.data.push(person);
      this.getRelatives(person);
      person.relations.forEach((relation) => {
        if (relation.type === "SIBLING_OF") {
          const relative = this.getPerson(relation.personB);
          this.names.data.push(relative);
        }
      });
      this.updateFamilyTree();
    },
    formatDate(date) {
      const d = new Date(Date.parse(date));
      return `${d.getDate()}/${
        ((d.getMonth() + 1) / 100).toFixed(2).split(".")[1]
      }/${d.getFullYear()}`;
    },
    live() {
      this.canLive = false;
      this.axios.get(`${this.url}/live`).then((response) => {
        this.peopleLibrary = response.data.peopleLibrary;
        this.relationMode = false;
        this.selectedPerson = null;
        this.selectedRelation = null;
        this.canLive = true;

        if (this.i < 100) {
          this.i++;
          this.live();
        }
      });
    },
    changeValue(target, value) {
      this[target] = value;
    },
    commitRelation() {
      if (
        this.relation &&
        this.relation.personA &&
        this.relation.type &&
        this.relation.personB
      ) {
        this.axios
          .post(`${this.url}/relation/add`, this.relation)
          .then((response) => {
            this.peopleLibrary = response.data.peopleLibrary;
            this.relationMode = false;
            this.selectedPerson = null;
            this.selectedRelation = null;
          });
      }
    },
    addPersonToRelation(id) {
      if (id === this.relation.personA) {
        console.error("Person cannot be linked to self.");
        return;
      }
      this.relation.personB = id;
      this.commitRelation();
    },
    openRelationModal(id) {
      this.modalTemplate = "relation";
      this.selectedPerson = id;
      this.openModal = true;
      this.modalTitle = "Type of the relation";
    },
    createRelation() {
      this.relation = {
        personA: this.selectedPerson,
        type: this.selectedRelation,
      };
      this.relationMode = true;
      this.openModal = false;
    },
    newPeople() {
      const sendAxios = (callback) => {
        this.axios.post(`${this.url}/new`, { people: 50 }).then((response) => {
          this.peopleLibrary = response.data.peopleLibrary;
          this.importedLibrary = this.peopleLibrary;
          this.libraryId = null;
          if (callback) {
            callback();
          }
        });
      };

      if (this.canSave) {
        this.modalTemplate = "confirm";
        this.modalTitle = "Unsaved changes";
        this.openModal = true;
        this.confirm.ok = "Yes, I'm sure";
        this.confirm.cancel = "No";
        this.confirm.message = "You'll lose unsaved changes. Are you sure?";
        this.confirm.onCancel = () => {
          this.openModal = false;
        };
        this.confirm.onOk = () => {
          sendAxios(() => {
            this.openModal = false;
          });
        };
      } else {
        sendAxios();
      }
    },
    save() {
      this.axios.get(`${this.url}/save`).then((response) => {
        this.libraryId = response.data.insertedId;
        this.load();
      });
    },
    load() {
      if (this.libraryId)
        this.axios
          .get(`${this.url}/load/${this.libraryId}`)
          .then((response) => {
            this.peopleLibrary = response.data.peopleLibrary;
            this.importedLibrary = this.peopleLibrary;
          });
    },
    addPerson() {
      this.axios.get(`${this.url}/person/add`).then((response) => {
        this.peopleLibrary = response.data.peopleLibrary;
      });
    },
    removePerson(id) {
      this.axios.get(`${this.url}/person/remove/${id}`).then((response) => {
        this.peopleLibrary = response.data.peopleLibrary;
      });
    },
  },
  computed: {
    canSave() {
      return (
        JSON.stringify(this.importedLibrary) !==
        JSON.stringify(this.peopleLibrary)
      );
    },
    linked() {
      if (!this.peopleLibrary || !this.peopleLibrary.people) return null;
      else {
        const personA = this.peopleLibrary.people.filter((it) => {
          return it.id === this.hovered;
        })[0];
        const personB = this.peopleLibrary.people
          .filter((it) => {
            return it.id !== this.hovered;
          })
          .filter((it) => {
            let linked = false;
            if (personA && personA.relations)
              personA.relations.forEach((relation) => {
                if (relation.personA === it.id || relation.personB === it.id)
                  linked = true;
              });
            return linked;
          });
        return personB.length > 0 ? personB.flatMap((it) => it.id) : null;
      }
    },
  },
};
</script>

<style scoped>
.linked {
  background: #ffffe2;
}

.generation {
  display: block;
  min-height: 80px;
  border: solid 1px gray;
  margin: 1rem;
}
.person {
  display: inline-block;
  height: 60px;
  width: 90px;
  border: solid 1px gray;
  margin: 10px;
  font-size: 8pt;
  position: relative;
}
.name {
  position: absolute;
  left: 0;
  top: 0;
}
#familyTree-container {
  overflow-x: auto;
  max-width: 100%;
}
</style>