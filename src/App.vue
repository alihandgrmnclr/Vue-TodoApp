<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, RouterLink, RouterView } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';

const isLoggedIn = ref(false)

const router = useRouter();
let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) return isLoggedIn.value = true;
    isLoggedIn.value = false;
  });
});


const loginHandler = () => {
  console.log("entered");
  login.value = true;
};

const signOutHandler = () => {
  signOut(auth);
  alert("Successfully signed out")
  isLoggedIn.value = false;
  router.push("/");
};

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

</script>

<template>
  <div class="navbar">
    <div class="navs">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <template v-if="isLoggedIn">
          <RouterLink to="/planned">Planned</RouterLink>
          <RouterLink to="/important">Important</RouterLink>
          <RouterLink to="/market">Market</RouterLink>
          <RouterLink to="/daily">Daily</RouterLink>
        </template>
          <div class="user">
            <template v-if="!isLoggedIn">
              <RouterLink to="/login" @login="loginHandler">Login</RouterLink>
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
    @apply flex justify-center items-center w-[100vw] h-[10vh];
    @apply min-h-[50px];


    nav {
      @apply flex font-medium text-[14px] gap-4;
      @apply sm:gap-8 sm:text-[18px];
    }

    .router-link-active {
      @apply font-black text-lg;
      @apply sm:text-2xl;
    }

    .user {
      @apply flex gap-4 fixed right-0 mr-5;
    }
  }
}
</style>
