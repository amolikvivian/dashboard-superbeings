<template>
  <div class="bg-transparent">
    <div
      class="
        bg-transparent
        flex flex-col
        justify-center
        text-left
        profile-container
        px-4
        py-4
      "
      data-aos="fade-in"
      data-aos-duration="800"
    >
      <h1
        class="bg-transparent md:text-2xl text-lg mb-2 text-left text-gray-900"
      >
        Name: {{ this.$store.state.userData.name }}
      </h1>
      <h1 class="bg-transparent md:text-lg text-base text-gray-600 text-left">
        Designation : {{ this.$store.state.userType }}
      </h1>
      <h1 class="bg-transparent md:text-lg text-base text-gray-600 text-left">
        Email : {{ this.$store.state.userData.email }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>