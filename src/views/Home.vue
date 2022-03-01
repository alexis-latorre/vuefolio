<template>
  <div>
    <Product title="Home">
      <p>Access all my work done with VueJs</p>
      <p><router-link to="/pokedex">Pokedex</router-link></p>
      <p><router-link to="/wordle">Wordle</router-link></p>
      <ul>
        <li v-if="user && user.elevation >= 1">
          <router-link to="/bin2dec">Bin2dec</router-link>
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/border-radius">Border-radius editor</router-link>
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/calculator">Calculator</router-link>
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/cause-effect">Cause & Effect</router-link>
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/galaxy">Galaxy</router-link>
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/xmas">Christmas lights</router-link>
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/countdown">Countdown timer</router-link>
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/svg">SVG generator</router-link>
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/memory-game">Memory game</router-link>
        </li>
        <li v-if="user && user.elevation >= 0">
          <router-link to="/csv2json"
            ><i class="fas fa-tools mr-4"></i>CSV to JSON</router-link
          >
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/fs">File system</router-link>
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/gameoflife">Game of Life</router-link>
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/css">CSS</router-link>
        </li>
        <li v-if="user && user.elevation > 10">
          <router-link to="/anagram">Anagram</router-link>
        </li>
      </ul>
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
  name: "Home",
  components: {
    Product: Product,
  },
  props: {
    user: Object,
  },
};
</script>