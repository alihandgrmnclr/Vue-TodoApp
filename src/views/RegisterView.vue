<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import ButtonComp from '../components/ButtonComp.vue';

const router = useRouter();

const email = ref("");
const password = ref("");

const signupHandler = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) => {
    alert("successfully registered");
    router.push("/planned")
  })
  .catch((err) => console.log("error",err))
};

const goToLogin = () => {
  router.push("/login");
};

const isValidEmail = computed(() => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
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
    <ButtonComp :isValid="isValidEmail" text="Register"></ButtonComp>
    <p>Do you have an accout? <span @click="goToLogin" class="login__link">Login</span></p>
  </form>
</div>

</template>

<style lang="scss" scoped>

.signup {
  @apply flex flex-col justify-center items-center h-[400px];
  
  input{
    @apply outline-none w-full;
  }

  form {
    @apply flex flex-col justify-center items-center w-[300px] gap-3;
  }
  .login__link{
    @apply underline font-bold cursor-pointer text-blue-500 hover:text-blue-700
  }
  .errmsg{
    @apply flex w-full text-red-500 text-sm;
  }
}

</style>