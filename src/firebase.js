import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

//UPDATE WITH YOUR CONFIG

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcjiQp_nTMql2pbasZPLxKB4YDK-SRlV8",
  authDomain: "vue-training-a36ae.firebaseapp.com",
  projectId: "vue-training-a36ae",
  storageBucket: "vue-training-a36ae.appspot.com",
  messagingSenderId: "560482673600",
  appId: "1:560482673600:web:1d399c835122dfc4379e25"
});

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
