<template>
  <div>
    <NavBar :links="links" :user="user" />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { db, auth } from "@/firebase";
import { setInterval } from "core-js";

export default {
  name: "App",
  components: {
    NavBar: NavBar,
  },
  data() {
    return {
      url: "",
      anonymousPaths: ["/", "/login", "/signup"],
      links: [
        { id: 1, title: "Home", href: "/", icon: "fas fa-home", elevation: 0 },
        {
          id: 2,
          title: "Draggable",
          href: "/draggable",
          icon: "fas fa-list",
          elevation: 999,
        },
        {
          id: 3,
          title: "TODO",
          href: "/todo",
          icon: "fas fa-tasks",
          elevation: 999,
        },
        {
          id: 3.5,
          title: "Budget",
          href: "/budget",
          icon: "fas fa-hand-holding-usd",
          elevation: 999,
        },
        {
          id: 4,
          title: "Quiz",
          href: "/quiz",
          icon: "fas fa-question",
          elevation: 999,
        },
        {
          id: 5,
          title: "Battleships",
          href: "/battleships",
          icon: "fas fa-anchor",
          elevation: 999,
        },
        {
          id: 5,
          title: "MyRH",
          href: "/myrh",
          icon: "far fa-id-badge",
          elevation: 999,
        },
        {
          id: 99,
          title: "Lab",
          href: "/lab",
          icon: "fas fa-flask",
          elevation: 999,
        },
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
          elevation: 0,
        },
      ],
      mouse: { x: 0, y: 0 },
      debug: false,
      user: undefined,
    };
  },
  mounted() {
    setInterval(() => {
      this.url = window.location.href.substr(this.$appUrl.length);
      if (this.url.indexOf("#") !== -1) this.url = this.url.split("#")[0];
    }, 1);
    auth.onAuthStateChanged((gUser) => {
      if (gUser) {
        this.user = gUser;
        db.collection("users")
          .where("email", "==", gUser.email)
          .get()
          .then((users) => {
            users.forEach((user) => {
              this.user.elevation = user.data().elevation;
            });
          });
      } else {
        this.user = undefined;
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
