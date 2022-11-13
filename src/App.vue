<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const login = ref(true)

const loginHandler = () => {
  console.log("entered");
  login.value = true;
};

</script>

<template>
  <div class="navbar">
    <div class="navs">
      <nav>
        <RouterLink to="/" @login="loginHandler">Home</RouterLink>
        <template v-if="login">
          <RouterLink to="/planned">Planned</RouterLink>
          <RouterLink to="/important">Important</RouterLink>
          <RouterLink to="/market">Market</RouterLink>
          <RouterLink to="/daily">Daily</RouterLink>
        </template>
      </nav>
    </div>
  </div>
  <RouterView />
</template>

<style lang="scss" scoped>
.navbar {
  .navs {
    @apply flex justify-center items-center w-full h-[10vh];
    @apply min-h-[50px];


    nav {
      @apply flex font-medium text-[14px] gap-4;
      @apply sm:gap-8 sm:text-[18px];
    }

    .router-link-active {
      @apply font-black text-lg;
      @apply sm:text-2xl;
    }
  }
}
</style>
