<template>
  <div @mousemove="updateMouse($event)">
    <div id="mouse">Mouse: x={{ mouse.x }}, y={{ mouse.y }}</div>
    <NavBar :links="links" />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar: NavBar,
  },
  data() {
    return {
      links: [
        { id: 1, title: "Home", href: "/", icon: "fas fa-home" },
        { id: 2, title: "Draggable", href: "/draggable", icon: "fas fa-list" },
        { id: 3, title: "TODO", href: "/todo", icon: "fas fa-tasks" },
        { id: 4, title: "Lab", href: "/lab", icon: "fas fa-flask" },
      ],
      mouse: { x: 0, y: 0 },
    };
  },
  methods: {
    updateMouse(e) {
      this.mouse.x = e.pageX;
      this.mouse.y = e.pageY;
    },
  },
};
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
}

.size {
  font-size: sizeBtn(var(--size));
}

:root {
  --text-color: #2c3e50;
  --selector: rgb(18, 5, 27);
  --nav-bg: 56, 16, 83;
  --primary-nav-bg: rgba(var(--nav-bg), 0.8);
  --secondary-nav-bg: rgba(var(--nav-bg), 1.0);
  --tertiary-nav-bg: #c22828;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}
.main {
  padding: 1rem;
}
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;

  * {
    flex: 1;
    margin-right: 0;
  }

  .ta-right {
    text-align: right;
  }
}
#mouse {
  position: fixed;
  top: 0;
  right: 0;
  background: #f8ffd3;
  border: solid 1px #b9b49b;
  font-size: 0.8rem;
  line-height: 1em;
  padding: 0.4em;
}
</style>
