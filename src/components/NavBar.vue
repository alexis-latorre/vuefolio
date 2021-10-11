<template>
  <ul>
    <template v-for="link of links" :key="link.id">
      <li
        v-if="
          link.elevation === 0 || (user && link.elevation <= user.elevation)
        "
        :class="link.right ? 'right' : ''"
      >
        <router-link v-if="link.href" :to="link.href">
          <i v-if="undefined !== link.icon" :class="link.icon + ' ma-2'"></i>
          {{ link.title }}
        </router-link>
        <div class="parent" v-if="link.children && link.children.length > 0">
          <a href="#">
            <i v-if="undefined !== link.icon" :class="link.icon + ' ma-2'"></i>
            <ul>
              <template v-for="child of link.children" :key="child.id">
                <li
                  class="child-link"
                  v-if="
                    (child.logged && user) ||
                    (!child.logged && undefined === user)
                  "
                >
                  <router-link v-if="child.href" :to="child.href">
                    <i
                      v-if="undefined !== child.icon"
                      :class="child.icon + ' ma-2'"
                    ></i>
                    {{ child.title }}
                  </router-link>
                  <a v-else @click="child.clickFunction">
                    <i
                      v-if="undefined !== child.icon"
                      :class="child.icon + ' ma-2'"
                    ></i>
                    {{ child.title }}
                  </a>
                </li>
              </template>
            </ul>
          </a>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    links: Object,
    user: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.parent {
  ul {
    display: none;
    position: relative;
    top: 1rem;
  }

  &:hover {
    ul {
      display: block;
    }
  }
}
li.child-link {
  display: block;

  a {
    margin: -1rem;
  }
}
a:hover {
  background: var(--secondary-nav-bg);
}
.right {
  float: right;
}
</style>
