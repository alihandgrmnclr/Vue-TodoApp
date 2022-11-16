<script setup>
import { onBeforeMount } from 'vue';
import { useRouter, RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/use-auth';

const router = useRouter();
const authStore = useAuthStore();

onBeforeMount(() => {
  authStore.getCurrentUser();
});


const loginHandler = () => {
  alert("Successfully logged in");
  login.value = true;
};

const signOutHandler = () => {
  authStore.userSignOut();
  alert("Successfully signed out");
  router.push("/");
};


</script>

<template>
  <div class="navbar">
    <div class="navs">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <template v-if="authStore.isLoggedIn">
          |<RouterLink to="/planned">Planned</RouterLink>|
          <RouterLink to="/important">Important</RouterLink>|
          <RouterLink to="/market">Market</RouterLink>|
          <RouterLink to="/daily">Daily</RouterLink>
        </template>
          <div class="user">
            <template v-if="!authStore.isLoggedIn">
              <RouterLink to="/login" @login="loginHandler">Login</RouterLink>|
              <RouterLink to="/register">Register</RouterLink>
            </template>
            <template v-else>
              <button @click="signOutHandler">Logout</button>
            </template>
          </div>
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
      @apply flex font-medium text-[14px] gap-1;
      @apply sm:gap-8 sm:text-[18px];
    }

    .router-link-active {
      @apply font-black text-lg;
      @apply sm:text-2xl;
    }

    .user {
      @apply flex gap-4 fixed right-0 mt-6 bg-neutral-50 rounded-l-lg pl-3 py-1;
    }
  }
}


</style>
