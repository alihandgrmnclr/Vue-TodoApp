<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import ButtonComp from '../components/ButtonComp.vue';

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref();

const signupHandler = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) => {
    alert("successfully registered");
    router.push("/planned")
  })
  .catch((err) => error.value = err)
};

const goToLogin = () => {
  router.push("/login");
};

const isValidEmail = computed(() => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
});

const isvalidPassword = computed(() => {
  return /^[A-Za-z0-9]\w{5,}$/.test(password.value);
});

</script>

<template>

<div class="signup">
  <h1>Create an account</h1>
  <form @submit="signupHandler">
    <input type="email" v-model="email" placeholder="email">
    <template v-if="!isValidEmail && email.length>0">
      <div class="errmsg">
        <p>Please enter a valid email</p>
      </div>
    </template>
    <input type="password" v-model="password" placeholder="password">
    <template v-if="!isvalidPassword && password.length>0">
      <div class="errmsg">
        <p>Min 6 characters</p>
      </div>
    </template>
    <ButtonComp :isValid="isValidEmail" text="Register"></ButtonComp>
    <template v-if="error">
      <div class="errmsg">
        {{ error }}
      </div>
    </template>
    <p>Do you have an accout? <span @click="goToLogin" class="login__link">Login</span></p>
  </form>
</div>

</template>

<style lang="scss" scoped>

.signup {
  @apply flex flex-col justify-center items-center h-[400px];
  
  h1{
    @apply mb-5;
  }

  input{
    @apply outline-none w-full p-3 rounded-full;
  }

  form {
    @apply flex flex-col justify-center items-center w-[300px] gap-3;
  }
  .login__link{
    @apply underline font-bold cursor-pointer text-blue-500 hover:text-blue-700
  }
  .errmsg{
    @apply flex w-full text-red-500 text-sm ml-5;
  }
}

</style>