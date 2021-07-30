<template>
  <div>
    <Product title="Home">
      <p>Access all my work done with VueJs</p>
      <ul>
        <li><router-link to="/bin2dec">Bin2dec</router-link></li>
        <li>
          <router-link to="/border-radius">Border-radius editor</router-link>
        </li>
        <li>
          <router-link to="/calculator">Calculator</router-link>
        </li>
        <li>
          <router-link to="/cause-effect">Cause & Effect</router-link>
        </li>
        <li>
          <router-link to="/galaxy">Galaxy</router-link>
        </li>
        <li>
          <router-link to="/xmas">Christmas lights</router-link>
        </li>
        <li>
          <router-link to="/countdown">Countdown timer</router-link>
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
};
</script>