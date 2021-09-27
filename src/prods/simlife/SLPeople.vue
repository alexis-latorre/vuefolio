<template>
  <Button
    @click="
      openModal = true;
      modalTemplate = 'pre';
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
  <Button @click="live">Next step</Button>
  <div v-if="peopleLibrary && peopleLibrary.people">
    {{ formatDate(peopleLibrary.date) }}
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
            @click="openRelationModal(person.id)"
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
    <template v-if="modalTemplate === 'relation'">
      <p>Select the type of the relation</p>
      <select v-model="selectedRelation">
        <option v-for="type of relationTypes" :key="type">
          {{ type }}
        </option>
      </select>
      <Button @click="createRelation" :opened="openModal">Select</Button>
    </template>
    <template v-else-if="modalTemplate === 'confirm'">
      {{ confirm.message }}
      <div class="mt-2-rem float-right">
        <Button class="mr-1-rem" :action="true" @click="confirm.onCancel">
          {{ confirm.cancel }}
        </Button>
        <Button @click="confirm.onOk">{{ confirm.ok }}</Button>
      </div>
    </template>
    <template v-else>
      <pre>{{ peopleLibrary }}</pre>
    </template>
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
    };
  },
  methods: {
    formatDate(date) {
      const d = new Date(Date.parse(date));
      return `${d.getDate()}/${
        ((d.getMonth() + 1) / 100).toFixed(2).split(".")[1]
      }/${d.getFullYear()}`;
    },
    live() {
      this.axios.get(`${this.url}/live`).then((response) => {
        this.peopleLibrary = response.data.peopleLibrary;
        this.relationMode = false;
        this.selectedPerson = null;
        this.selectedRelation = null;
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
        this.axios.post(`${this.url}/new`, { people: 5 }).then((response) => {
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
                if (
                  relation.startsWith(`${it.id};`) ||
                  relation.endsWith(`;${it.id}`)
                )
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
</style>