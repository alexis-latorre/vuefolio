<template>
  {{ canSave }}
  <input type="text" v-model="libraryId" />
  <button class="pa-6" @click="load">Load</button>
  <button v-if="canSave" class="pa-6" @click="save">Save</button>
  <template v-for="person of peopleLibrary.people" :key="person.id">
    <p>{{ person.firstname }} {{ person.surname }}</p>
  </template>
  <button class="pa-6" @click="addPerson">+</button>
</template>

<script>
export default {
  data() {
    return {
      url: `${this.$backendUrl}/rng`,
      libraryId: null,
      importedLibrary: {},
      peopleLibrary: {},
    };
  },
  methods: {
    save() {
      console.log("saving");
      this.axios.get(`${this.url}/save`).then((response) => {
        console.log(response.data);
        this.libraryId = response.data;
        this.load();
      });
    },
    load() {
      if (this.libraryId)
        this.axios
          .get(`${this.url}/load/${this.libraryId}`)
          .then((response) => {
            this.peopleLibrary = response.data.peopleLibrary;
          });
    },
    addPerson() {
      this.axios.get(`${this.url}/person/add`).then((response) => {
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
  },
};
</script>