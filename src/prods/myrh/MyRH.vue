<template>
  <template v-if="loggedIn">
    <button @click="logout">Logout</button>
    <h2>Add user</h2>
    <label
      >Username:
      <input type="text" name="addUserName" v-model="addUser.name" /></label
    ><br />
    <label>
      Pass:
      <input
        type="password"
        name="addUserPassword"
        v-model="addUser.password"
      />
    </label>
    <br />
    <label
      >Firstname:
      <input
        type="text"
        name="addUserUserName"
        v-model="addUser.user.name" /></label
    ><br />
    <label
      >Lastname:
      <input
        type="text"
        name="addUserUserName"
        v-model="addUser.user.surname" /></label
    ><br />
    <label
      >Is Administrator: <input type="checkbox" v-model="addUser.isAdmin"
    /></label>
    <br />
    <button @click="addUserAPI">Add user</button>
  </template>
  <template v-else>
    <label>User: <input type="text" name="login" v-model="login" /></label
    ><br />
    <label>
      Pass: <input type="password" name="password" v-model="password" />
    </label>
    <br />
    <button @click="connect">Connect</button>
  </template>
  <pre>{{ getData() }}</pre>
</template>

<script>
export default {
  data() {
    return {
      url: "https://djvcc.sse.codesandbox.io/",
      login: "alatorre",
      password: "1234",
      config: null,
      loggedIn: false,
      addUser: {
        name: null,
        password: null,
        user: {
          name: null,
          surname: null,
        },
        roles: ["USER"],
        isAdmin: false,
      },
    };
  },
  methods: {
    getData() {
      return this;
    },
    setToken(token) {
      this.config = {
        headers: { Authorization: `Bearer ${token}` },
      };
    },
    connect() {
      const payload = {
        login: this.login,
        password: this.password,
      };

      this.axios
        .post(`${this.url}admin/login`, payload)
        .then((res) => {
          if (res.status === 200) {
            this.setToken(res.data);
            this.loggedIn = true;
          }
        })
        .catch((res) => {
          console.error(res);
        });
    },
    logout() {
      this.axios
        .get(`${this.url}admin/logout`, this.config)
        .then((res) => {
          this.setToken(null);
          this.config = null;
          this.loggedIn = false;
        })
        .catch((res) => {
          console.error(res);
        });
    },
    addUserAPI() {
      this.axios
        .post(`${this.url}admin/user/add`, { data: this.addUser }, this.config)
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.error(res);
        });
    },
  },
};
</script>