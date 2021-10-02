<template>
  <div>
    <div
      class="
        flex flex-col
        w-full
        md:w-64
        text-gray-700
        bg-white
        dark-mode:text-gray-200 dark-mode:bg-gray-800
        flex-shrink-0
      "
    >
      <div
        class="
          flex-shrink-0
          px-4
          py-4
          flex flex-row
          items-center
          justify-between
        "
      >
        <a
          href="#"
          class="
            text-lg
            font-semibold
            tracking-widest
            main-logo
            uppercase
            focus:outline-none
            focus:shadow-outline
          "
          >Superbeings.ai</a
        >
        <button
          class="
            rounded-lg
            md:hidden
            focus:outline-none
            focus:shadow-outline
            justify-around
            align-middle
          "
          @click="toggleOpen"
        >
          <i class="fas fa-align-right text-gray-600"></i>
        </button>
      </div>
      <nav
        :class="{ block: open, hidden: !open }"
        class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto"
      >
        <a
          v-for="route in filteredRoutes"
          :key="route.name"
          :class="route.name === $route.name ? 'link-active' : null"
          @click="handleNavClick(route)"
          class="
            link
            block
            px-4
            py-2
            mt-2
            text-sm
            font-bold
            rounded-lg
            focus:outline-none
            focus:shadow-outline
          "
          >{{ route.name }}
        </a>

        <a
          @click="logout()"
          class="
            link
            block
            px-4
            py-2
            mt-2
            text-sm
            font-semibold
            bg-transparent
            rounded-lg
            focus:outline-none
            focus:shadow-outline
          "
          >Logout</a
        >
      </nav>
    </div>
  </div>
</template>

<script>
import routes from "@/router/routes";
export default {
  data() {
    return {
      open: false,
      loading: false,
      routes,
    };
  },

  computed: {
    filteredRoutes() {
      return routes.filter((ele) => ele.parent !== "auth");
    },
  },

  methods: {
    handleNavClick(route) {
      if (this.$store.state.userType != "HR" && route.name === "HR")
        this.toast("Looks like you need to be an HR to access this page!");
      else if (
        this.$store.state.userType != "Manager" &&
        route.name === "Manager"
      )
        this.toast("Looks like you need to be a Manager to access this page!");
      else this.$router.push({ path: route.path });
    },
    toggleOpen() {
      this.open = !this.open;
    },
    logout() {
      this.loading = true;
      this.toast("Logging out in 3 seconds!");
      setTimeout(() => {
        this.$store.commit("setUserData", null);
        this.$router.push({ path: "/login" });
      }, 3000);
    },
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

<style scoped>
.main-logo {
  color: #fbac6a;
}
a {
  cursor: pointer;
}
.link {
  color: #363636;
  letter-spacing: 0.5px;
  border: 2px solid transparent;
}
.link:hover {
  color: #363636;
  border: 2px solid #fe9c84e3;
}
.link-active,
.router-link-active {
  background-color: #fe9c84;
  color: #fff;
  border: 2px solid #fe9c84e3;
}
</style>