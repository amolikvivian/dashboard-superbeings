import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import firebase from "firebase";
import AOS from "aos";
import "aos/dist/aos.css";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
const app = createApp(App);
app.AOS = new AOS.init();

const firebaseConfig = {
  apiKey: "AIzaSyBYWBSgHdVqtyqbwsASNDd4ir7oHBZOpHM",
  authDomain: "superbeings-dash.firebaseapp.com",
  projectId: "superbeings-dash",
  storageBucket: "superbeings-dash.appspot.com",
  messagingSenderId: "78415819667",
  appId: "1:78415819667:web:69ace57c9bc1c560ee6e66",
};

firebase.initializeApp(firebaseConfig);

app
  .use(router)
  .use(store)
  .use(VueToast)
  .mount("#app");
