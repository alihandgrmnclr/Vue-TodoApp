<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from "../stores/use-auth"
import ButtonComp from './ButtonComp.vue';

const router = useRouter();
const authStore = useAuthStore();

const sideBarOpen = ref(false);

const signOutHandler = () => {
  authStore.userSignOut();
  alert("Successfully signed out");
  router.push("/");
};

const loginHandler = () => {
  alert("Successfully logged in");
};

const openSideBar = () => {
  sideBarOpen.value = true;
};

const hideSidebar = () => {
  sideBarOpen.value = false;
};

</script>

<template>
  <nav class="navbar">
    <div class="navbar__logo" @click="router.push('/')">
      <img class="navbar__logo" src="/photos/todo.png">
      <p>Todos App</p>
    </div>
    <div class="lg:hidden">
      <button class="navbar-burger flex items-center text-blue-600 p-3" @click="openSideBar">
        <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <ul
      class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
      <li>
        <RouterLink class="navbar__route" to="/">Home</RouterLink>
      </li>
      <template v-if="authStore.isLoggedIn">
        <li class="text-gray-300">
          |
        </li>
        <li>
          <RouterLink class="navbar__route" to="/planned">Planned</RouterLink>
        </li>
        <li class="text-gray-300">
          |
        </li>
        <li>
          <RouterLink class="navbar__route" to="/important">Important</RouterLink>
        </li>
        <li class="text-gray-300">
          |
        </li>
        <li>
          <RouterLink class="navbar__route" to="/daily">Daily</RouterLink>
        </li>
        <li class="text-gray-300">
          |
        </li>
        <li>
          <RouterLink class="navbar__route" to="/market">Market</RouterLink>
        </li>
      </template>
    </ul>

    <template v-if="!authStore.isLoggedIn">
      <div class="navbar__log">
        <RouterLink to="/login" class="navbar__log__login" @login="loginHandler">
          <ButtonComp text="Login" :isValid="true" height="40px" width="100px"></ButtonComp>
        </RouterLink>
        <RouterLink to="/register" class="navbar__log__register">
          <ButtonComp text="Register" :isValid="true" height="40px" width="100px"></ButtonComp>
        </RouterLink>
      </div>
    </template>
    <template v-else>
      <button class="hidden sm:block navbar__log__logout" @click="signOutHandler">
        <ButtonComp :text="'Logout'" :isValid="true"></ButtonComp>
      </button>
    </template>
  </nav>

  <Transition>
    <template v-if="sideBarOpen">
      <div class="navbar-menu relative z-10">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" @click="hideSidebar"></div>
        <nav
          class="z-50 fixed top-0 left-0 bottom-0 flex flex-col w-[80vw] max-w-sm p-3 bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8 mt-2">
            <div class="navbar__logo mr-auto text-3xl font-bold leading-none ">
              <img class="navbar__logo" src="/photos/todo.png">
              <p>Todos App</p>
            </div>
            <button class="navbar-close" @click="hideSidebar">
              <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li class="mb-1">
                <RouterLink to="/" class="navbar__mobile" @click="hideSidebar">Home</RouterLink>
              </li>
              <template v-if="authStore.isLoggedIn">
                <li class="mb-1">
                  <RouterLink to="/planned" class="navbar__mobile" @click="hideSidebar">Planned</RouterLink>
                </li>
                <li class="mb-1">
                  <RouterLink to="/important" class="navbar__mobile" @click="hideSidebar">Important</RouterLink>
                </li>
                <li class="mb-1">
                  <RouterLink to="/daily" class="navbar__mobile" @click="hideSidebar">Daily</RouterLink>
                </li>
                <li class="mb-1">
                  <RouterLink to="/market" class="navbar__mobile" @click="hideSidebar">Market</RouterLink>
                </li>
              </template>
            </ul>
          </div>
          <template v-if="!authStore.isLoggedIn">
            <div class="mt-auto">
              <div class="pt-6">
                <RouterLink to="/login" class="mobile__log" @click="hideSidebar">Login</RouterLink>
                <RouterLink to="/register" class="mobile__reg" @click="hideSidebar">Register</RouterLink>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="mt-auto">
              <div class="pt-6">
                <RouterLink to="/login" class="mobile__log" @click="hideSidebar(),signOutHandler()">Log Out</RouterLink>
              </div>
            </div>
          </template>
        </nav>
      </div>
    </template>
  </Transition>
  <RouterView />
</template>

<style lang="scss" scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.navbar {
  @apply relative px-4 py-4 flex justify-between items-center bg-white mb-6;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  &__logo {
    @apply flex justify-center items-center text-lg h-10 cursor-pointer;
    @apply hover:scale-110;
  }

  &__route {
    @apply text-sm;
    @apply hover:font-extrabold;
  }

  &__log {
    @apply hidden sm:flex;

    .navbar__log__login,
    .navbar__log__register,
    .navbar__log__logout {
      @apply hidden lg:inline-block lg:ml-auto lg:mr-3;
    }
  }

  &__mobile {
    @apply block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded;
  }
}

.mobile__log {
  @apply text-white block px-4 py-3 mb-3 leading-loose text-base text-center font-semibold bg-blue-500 hover:bg-blue-600 rounded-xl;
}

.mobile__reg {
  @apply text-white block px-4 py-3 mb-3 leading-loose text-base text-center font-semibold bg-gray-300 hover:bg-gray-400 rounded-xl;
}

.router-link-active {
  @apply font-bold;
}
</style>