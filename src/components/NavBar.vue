<template>
  <ul>
    <li v-for="link of links" :key="link.id">
      <router-link :to="link.href">
        <i v-if="undefined !== link.icon" :class="link.icon + ' ma-2'"></i>
        {{ link.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    links: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  background: var(--primary-nav-bg);
}
li {
  display: inline-block;
}
a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 1rem;
}
a:hover {
  background: var(--secondary-nav-bg);
}
</style>
