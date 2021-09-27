<template>
  {{ person.gender }}
  <template v-if="person.married"> - <i class="fas fa-ring"></i> </template>
  -
  <template v-if="person.deceased"><i class="fas fa-cross"></i></template>
  <template v-else>({{ person.age }})</template>
  {{ person.firstname }}
  {{ person.surname }}
</template>

<script>
export default {
  props: {
    person: Object,
  },
};
</script>