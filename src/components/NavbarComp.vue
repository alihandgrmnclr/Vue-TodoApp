<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from "../stores/use-auth"
import ButtonComp from './ButtonComp.vue';

// Burger menus
const router = useRouter();
const authStore = useAuthStore();

const signOutHandler = () => {
  authStore.userSignOut();
  alert("Successfully signed out");
  router.push("/");
};

const loginHandler = () => {
  alert("Successfully logged in");
};

document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');
    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
</script>

<template>
  <nav class="navbar">
    <div class="navbar__logo" @click="router.push('/')">
      <img class="navbar__logo" src="/photos/todo.png">
      <p>Todos App</p>
    </div>
    <div class="lg:hidden">
      <button class="navbar-burger flex items-center text-blue-600 p-3">
        <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <ul
      class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
      <li>
        <RouterLink class="navbar__route" to="/">User</RouterLink>
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
        <RouterLink to="/login" class="navbar__log__login" @login="loginHandler"><ButtonComp text="Login" :isValid="true" height="40px" width="100px"></ButtonComp></RouterLink>
        <RouterLink to="/register" class="navbar__log__register"><ButtonComp text="Register" :isValid="true" height="40px" width="100px"></ButtonComp></RouterLink>
      </div>
    </template>
    <template v-else>
        <button class="navbar__log__logout" @click="signOutHandler"><ButtonComp :text="'Logout'" :isValid="true"></ButtonComp></button>
    </template>

  </nav>

  <div class="navbar-menu relative z-10 hidden">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav class="z-50 fixed top-0 left-0 bottom-0 flex flex-col w-[80vw] max-w-sm p-3 bg-white border-r overflow-y-auto">
      <div class="flex items-center mb-8">
        <div class="navbar__logo mr-auto text-3xl font-bold leading-none ">
          <img class="navbar__logo" src="/photos/todo.png">
          <p>Todos App</p>
        </div>
        <button class="navbar-close">
          <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li class="mb-1" >
            <RouterLink to="/" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">User</RouterLink>
          </li>
          <template v-if="authStore.isLoggedIn">
            <li class="mb-1">
              <RouterLink to="/planned"  class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Planned</RouterLink>
            </li>
            <li class="mb-1">
              <RouterLink to="/important" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Important</RouterLink>
            </li>
            <li class="mb-1">
              <RouterLink to="/daily" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Daily</RouterLink>
            </li>
            <li class="mb-1">
              <RouterLink to="/market" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Market</RouterLink>
            </li>
          </template>
        </ul>
      </div>
      <template v-if="!authStore.isLoggedIn">
        <div class="mt-auto">
         <div class="pt-6">
            <RouterLink to="/login" class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-300 hover:bg-gray-400 rounded-xl">Login</RouterLink>
            <RouterLink to="/register" class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl">Register</RouterLink>
          </div>
      </div>
      </template>
    </nav>
  </div>
  <RouterView />
</template>

<style lang="scss" scoped>
.navbar {
  @apply w-full relative px-4 py-4 flex justify-between items-center bg-white mb-6;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  &__logo{
    @apply flex justify-center items-center text-lg h-10 cursor-pointer ; 
    @apply hover:scale-110;
  }
  &__route{
    @apply text-sm;
    @apply hover:font-extrabold;
  }
  &__log{
    @apply hidden sm:flex;
    .navbar__log__login, .navbar__log__register, .navbar__log__logout {
      @apply hidden lg:inline-block lg:ml-auto lg:mr-3;
    }
  }
}

.router-link-active {
  @apply text-blue-600 font-bold
}
</style>