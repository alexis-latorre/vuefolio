<template>
  <form v-if="!user">
    <TextInput
      @input="this.error.message = null"
      :value="username"
      @update-value="changeValue('username', $event)"
      id="username"
      label="Username"
      class="mr-6 mb-6"
    />
    <TextInput
      @input="this.error.message = null"
      :value="name"
      @update-value="changeValue('name', $event)"
      id="name"
      label="Name"
      class="mr-6 mb-6"
    />
    <TextInput
      @input="this.error.message = null"
      :value="lastname"
      @update-value="changeValue('lastname', $event)"
      id="lastname"
      label="Lastname"
      class="mr-6 mb-6"
    />
    <TextInput
      @input="this.error.message = null"
      :value="email"
      @update-value="changeValue('email', $event)"
      id="email"
      label="Email"
      class="mr-6 mb-6"
    />
    <TextInput
      @input="this.error.message = null"
      :value="emailConfirm"
      @update-value="changeValue('emailConfirm', $event)"
      id="emailConfirm"
      label="Confirm Email"
      class="mr-6 mb-6"
    />
    <PasswordInput
      @input="this.error.message = null"
      :value="password"
      @update-value="changeValue('password', $event)"
      id="password"
      label="Password"
      class="mr-6 mb-6"
    />
    <Button class="mt-1-rem mr-1-rem" @click="createUser($event)"
      >Sign up</Button
    >
    <slot></slot>
  </form>
  <Message v-if="error && error.message" type="error">{{
    error.message
  }}</Message>
  <Message v-if="success" type="success">{{ success }}</Message>
  <div v-if="user">You are logged as {{ user.displayName }}</div>
</template>

<script>
import Button from "@/components/atoms/Button";
import TextInput from "@/components/atoms/input/TextInput";
import PasswordInput from "@/components/atoms/input/PasswordInput";
import Message from "@/components/atoms/Message";
import { db, auth } from "@/firebase";
import sha256 from "crypto-js/sha256";

export default {
  data() {
    return {
      username: "",
      email: "",
      emailConfirm: "",
      password: "",
      name: "",
      lastname: "",
      user: undefined,
      error: { message: null },
      success: undefined,
    };
  },
  components: {
    Button: Button,
    TextInput: TextInput,
    PasswordInput: PasswordInput,
    Message: Message,
  },
  methods: {
    changeValue(target, val) {
      this[target] = val;
    },
    userDoesntExist(callback) {
      db.collection("users")
        .where("username", "==", this.username)
        .get()
        .then((users) => {
          let exists = false;

          users.forEach((user) => {
            exists = true;
            return;
          });

          if (exists) {
            this.error.message = "User already exists";
            return;
          }
          callback();
        })
        .catch((error) => {
          this.error = error;
        });
      return true;
    },
    createUser(e) {
      e.preventDefault();
      this.error.message = null;

      if (this.email !== this.emailConfirm) {
        this.error.message = "Email addresses don't match";
        return;
      }
      this.userDoesntExist(() => {
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            userCredential.user
              .updateProfile({
                displayName: this.name + " " + this.lastname,
              })
              .then(
                (user) => {
                  this.user = userCredential.user;
                  this.success = "User created";
                  db.collection("users")
                    .doc(userCredential.user.uid)
                    .set({
                      username: this.username,
                      email: this.email,
                      name: this.name,
                      lastname: this.lastname,
                      password: sha256(this.password).toString(),
                      elevation: 0,
                    })
                    .catch((error) => {
                      this.error = error;
                    });
                },
                function (error) {
                  this.error = error;
                }
              );
          })
          .catch((error) => {
            this.error = error;
          });
      });
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