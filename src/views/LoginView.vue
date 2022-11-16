<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import ButtonComp from '../components/ButtonComp.vue';
import { useAuthStore } from '../stores/use-auth';

const emits = defineEmits(["login"]);

const email = ref("");
const password = ref("");
const errMsg = ref();

const authStore = useAuthStore();
const router = useRouter();

const loginHandler = async (e) => {
  e.preventDefault();
  await authStore.loginHandler(email.value, password.value);
  if(!authStore.isLoggedIn) return; 
  emits("login", true);
  router.push("/");
};

const goToRegister = () => {
  router.push("/register");
};

const isValidEmail = computed(() => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
});

</script>

<template>

  <div class="login">
    <h1>Login your account</h1>
    <form @submit="loginHandler">
      <input type="email" v-model="email" placeholder="email">
      <template v-if="!isValidEmail && email.length > 0">
        <div class="errmsg">
          <p >Please enter a valid email</p>
        </div>
      </template>
      <input type="password" v-model="password" placeholder="password">
      <template v-if="errMsg">
        <p class="errmsg">{{ errMsg }}</p>
      </template>
      <ButtonComp :isValid="isValidEmail" text="Login"></ButtonComp>
      <p>Don't you have an accout? <span @click="goToRegister" class="register__link">Register</span></p>
    </form>
  </div>

</template>

<style lang="scss" scoped>
.login {
  @apply flex flex-col justify-center items-center h-[400px];

  h1{
    @apply mb-5;
  }

  input {
    @apply outline-none w-full p-3 rounded-full;
  }

  form {
    @apply flex flex-col justify-center items-center w-[300px] gap-3;
  }

  .register__link {
    @apply underline font-bold cursor-pointer text-blue-500 hover:text-blue-700
  }

  .errmsg {
    @apply flex w-full text-red-500 text-sm ml-5;
  }
}
</style>