import Manager from "@/views/Manager.vue";
import HR from "@/views/HR.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";

const routes = [
  {
    path: "/login",
    parent: "auth",
    name: "Login",
    component: Login,
    alias: ["/"],
  },
  {
    path: "/manager/home",
    name: "Manager",
    component: Manager,
  },
  {
    path: "/hr/home",
    name: "HR",
    component: HR,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

export default routes;
