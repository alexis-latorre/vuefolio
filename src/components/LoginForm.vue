<template>
  <div v-if="!user">
    <div v-if="!signupForm">
      <h3 class="h3">
        <span class="h3__content">Already have an account?</span>
      </h3>
      <form class="mb-3-rem">
        <TextInput
          v-on:change="changeEmailValue"
          id="email"
          label="Email or Username"
          class="mr-6 mb-6"
        />
        <PasswordInput
          id="password"
          v-on:change="changePasswordValue"
          label="Password"
        />
        <Button class="mt-1-rem mr-1-rem" @click="signIn($event)"
          >Log In</Button
        >
        <router-link to="/signup">Forgot your password?</router-link>
      </form>
      <h3 class="h3">
        <span class="h3__content">No account yet?</span>
      </h3>
      <div>
        <a @click="signupForm = true" href="#username">Create my account</a>
      </div>
    </div>
    <div v-else>
      <h3 class="h3">
        <span class="h3__content">Create my account</span>
      </h3>
      <SignUp>
        <a @click="signupForm = false" href="#email">Go to the login page</a>
      </SignUp>
    </div>
  </div>
  <div v-else>You are logged as {{ user.displayName }}</div>
  <Message v-if="error && error.message" type="error">{{
    error.message
  }}</Message>
</template>

<script>
import Button from "@/components/atoms/Button";
import Message from "@/components/atoms/Message";
import TextInput from "@/components/atoms/input/TextInput";
import PasswordInput from "@/components/atoms/input/PasswordInput";
import SignUp from "@/views/user/SignUp";
import { db, auth } from "@/firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      user: undefined,
      error: null,
      signupForm: false,
    };
  },
  components: {
    Button: Button,
    TextInput: TextInput,
    PasswordInput: PasswordInput,
    Message: Message,
    SignUp: SignUp,
  },
  methods: {
    changeEmailValue(value) {
      if (typeof value === "string") this.email = value;
    },
    changePasswordValue(value) {
      if (typeof value === "string") this.password = value;
    },
    sendSignIn(id, pass) {
      auth
        .signInWithEmailAndPassword(id, pass)
        .then((userCredential) => {
          this.user = userCredential.user;
        })
        .catch((error) => {
          this.error = error;
        });
    },
    signIn(e) {
      e.preventDefault();
      this.error = null;
      let id = this.email;

      // If we are signing with username
      if (null === id.match(/.*@.*\..*/)) {
        db.collection("users")
          .where("username", "==", this.email)
          .get()
          .then((users) => {
            users.forEach((user) => {
              id = user.data().email;
            });
            this.sendSignIn(id, this.password);
          })
          .catch((error) => {
            this.error = error;
          });
      } else {
        this.sendSignIn(id, this.password);
      }
    },
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