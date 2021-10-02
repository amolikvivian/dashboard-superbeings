<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      min-h-screen
      main-container
    "
  >
    <div
      class="
        flex flex-wrap
        items-center
        md:justify-between
        justify-center
        bg-transparent
        glass-container
      "
      data-aos="fade-in"
      data-aos-duration="600"
    >
      <div
        class="
          flex
          items-center
          bg-transparent
          justify-center
          md:w-3/5
          w-4/5
          md:h-full
        "
      >
        <img src="../assets/login.svg" alt="login" class="bg-transparent" />
      </div>

      <div
        class="
          flex flex-col
          items-center
          md:h-full
          md:w-2/5
          px-1
          justify-center
          bg-transparent
        "
      >
        <h2
          class="
            md:text-3xl
            text-xl text-gray-800
            bg-transparent
            text-center
            mt-5
            mb-6
          "
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          Welcome to<span class="bg-transparent font-extrabold logo-text">
            SuperBeings!</span
          ><br />
        </h2>
        <small
          class="
            md:text-sm
            text-xs
            w-full
            font-medium
            text-center
            mb-6
            bg-transparent
          "
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="600"
          >Choose your role and login to your dashboard!</small
        >

        <div
          class="
            md:flex
            flex flex-reverse-row
            justify-evenly
            items-center
            mb-4
            w-full
            mt-2
            bg-transparent
            choice-container
          "
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="700"
        >
          <button
            @click="changeRole('Manager')"
            class="
              md:text-base
              text-xs
              focus:outline-none
              focus:border-none
              px-3
              py-1
              choice-btn
            "
            :class="managerActive"
          >
            <i class="fas fa-user-clock bg-transparent mr-1"></i>
            Manager
          </button>
          <button
            @click="changeRole('HR')"
            class="
              md:text-base
              text-xs
              focus:outline-none
              focus:border-none
              px-3
              py-1
              choice-btn
            "
            :class="hrActive"
          >
            <i class="fas fa-users bg-transparent mr-2"></i>Human Resources
          </button>
        </div>
        <div
          class="
            flex
            items-center
            cursor-pointer
            bg-transparent
            login-btn-container
            mt-7
          "
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="800"
          @click="login()"
        >
          <img src="@/assets/google.jpg" class="md:w-9 w-7 tiny-img bg-white" />
          <button
            class="
              bg-blue-500
              hover:bg-blue-500
              text-white
              focus:outline-none
              focus:border-none
              px-3
              login-btn
              md:text-base
              md:w-60
              text-xs
            "
          >
            Continue with Google
          </button>
        </div>

        <div class="fixed preloader">
          <Loader v-if="loading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Loader from "@/components/Preloader";
export default {
  data() {
    return {
      role: "",
      loading: false,
      managerActive: "",
      hrActive: "",
    };
  },
  components: {
    Loader,
  },
  mounted() {
    this.changeRole("Manager");
  },
  methods: {
    async login() {
      this.loading = true;
      this.$store.commit("setUserType", this.role);
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        const signin = await firebase.auth().signInWithPopup(provider);
        this.$store.commit("setUserData", signin.additionalUserInfo.profile);
        this.loading = false;
        if (this.$store.state.userType == "Manager") {
          this.$router.push({ path: "/manager/home" });
        } else {
          this.$router.push({ path: "/hr/home" });
        }
      } catch (err) {
        console.log(err);
      }
    },
    changeRole(val) {
      this.role = val;
      if (val == "Manager") {
        this.hrActive = "";
        this.managerActive = "active";
      } else {
        this.managerActive = "";
        this.hrActive = "active";
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 100%;
  background-image: url("https://user-images.githubusercontent.com/45116992/135501310-7abe61e6-f8c7-49c0-ac7c-7f6bca73822f.png");
}
.glass-container {
  background: rgb(255, 255, 255, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  height: 500px;
  width: 75%;
}
.login-img {
  border-radius: 15px;
  background-color: transparent;
}
.tiny-img {
  padding: 4px;
  border-radius: 3px 0 0 3px;
  border: 0.5px solid grey;
}

.logo-text {
  color: #fbac6a;
}
.choice-btn {
  transition: ease-in-out 0.2s;
  color: #333333;
  border: 2px solid transparent;
}
.active {
  border: 2px solid #ffcd7a;
  color: rgb(17, 17, 17);
  border-radius: 3px;
}
.login-illustration {
  width: 10rem;
}

.login-btn-container {
  border-radius: 3px;
}
.login-btn {
  border: thin solid #3b82f6;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 0 3px 3px 0;
}

.preloader {
  margin-top: 8rem;
}

@media screen and (max-width: 1024px) {
  .main-container {
    background-image: url("https://uploads-ssl.webflow.com/5ea18d0bbd4a5ad52498ae3e/5ea18d0b275cba9783d3b5d8_header-background.svg");
    background-position: 100% 0;
    background-size: 60%;
    background-color: rgb(245, 245, 245);
  }
  .active {
    border: 2px solid #ff9781;
  }
}
</style>
