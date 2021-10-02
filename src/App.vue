<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <div
      v-if="pathTo != 'Login'"
      data-aos="fade-right"
      data-aos-duration="600"
      class="shadow-md"
    >
      <Navbar />
    </div>
    <div class="w-full min-h-screen bg-custom">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },

  data() {
    return {
      pathTo: "",
      pathFrom: "",
    };
  },

  watch: {
    $route(to, from) {
      this.pathTo = to.name;
      this.pathFrom = from.name;
      if (to.name == "Manager" && this.$store.state.userType != "Manager") {
        this.$router.push({ path: "/hr/home" });
      }
      if (to.name == "HR" && this.$store.state.userType != "HR") {
        this.$router.push({ path: "/manager/home" });
      }
      if (to.name == "Login" && this.$store.state.userType == "Manager")
        this.$router.push({ path: "/manager/home" });

      if (to.name == "Login" && this.$store.state.userType == "HR")
        this.$router.push({ path: "/hr/home" });
    },
  },
  methods: {
    toast(message) {
      this.$toast.open({
        message: message,
        type: "error",
        duration: 3000,
        dismissible: true,
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
.bg-custom {
  background-color: rgb(252, 252, 252);
  background-position: 100% 0%;
  background-size: 15%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-image: url("https://uploads-ssl.webflow.com/5ea18d0bbd4a5ad52498ae3e/5ea18d0b275cba9783d3b5d8_header-background.svg");
}
</style>