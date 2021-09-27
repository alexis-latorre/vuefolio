<template>
  <div>
    <NavBar :links="links" />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { auth } from "@/firebase";

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
        {
          id: 3.5,
          title: "Budget",
          href: "/budget",
          icon: "fas fa-hand-holding-usd",
        },
        { id: 4, title: "Quiz", href: "/quiz", icon: "fas fa-question" },
        {
          id: 5,
          title: "Battleships",
          href: "/battleships",
          icon: "fas fa-anchor",
        },
        { id: 99, title: "Lab", href: "/lab", icon: "fas fa-flask" },
        {
          id: 100,
          icon: "fas fa-user",
          title: this.user ? this.user.displayName : null,
          right: true,
          children: [
            {
              id: 101,
              title: "Sign up",
              href: "/signup",
              icon: "fas fa-user-plus",
              logged: false,
            },
            {
              id: 102,
              title: "Log In",
              href: "/login",
              icon: "fas fa-sign-in-alt",
              logged: false,
            },
            {
              id: 103,
              title: "Log Out",
              icon: "fas fa-sign-out-alt",
              logged: true,
              clickFunction: () => {
                auth.signOut();
              },
            },
          ],
        },
      ],
      mouse: { x: 0, y: 0 },
      debug: false,
      user: undefined,
    };
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style lang="scss">
@import "./css/variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: content;
  scroll-behavior: smooth;
}

.size {
  font-size: sizeBtn(var(--size));
}

:root {
  --text-color: $lavander;
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
  color: $blue;
  counter-reset: h1;
  counter-reset: h2;
  counter-reset: h3;
  counter-reset: h4;
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

  .float-right {
    float: right;
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
.h3 {
  font-weight: normal;
  display: inline-block;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border-bottom: solid 1px lighten($blue, 60%);
  line-height: 0;
  padding-left: 2rem;
  padding-right: 2rem;

  &__content, &__content__numbered {
    background: white;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
