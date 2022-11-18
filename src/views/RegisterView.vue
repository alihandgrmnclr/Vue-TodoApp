<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { useRegexpStore } from '../stores/use-regexp';
import ButtonComp from '../components/ButtonComp.vue';

const username = ref("");
const email = ref("");
const password = ref("");
const error = ref();

const regexpStore = useRegexpStore();
const router = useRouter();
const auth = getAuth();

const signupHandler = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  .then(async (res) => {
    await updateProfile(auth.currentUser, {
      displayName: username.value
    })
    alert("successfully registered");
    router.push("/")
  })
  .catch((err) => error.value = err)
};

const goToLogin = () => {
  router.push("/login");
};

const isValidUsername = computed(() => {
  return regexpStore.checkUsername(username.value);
});

const isValidEmail = computed(() => {
  return regexpStore.checkEmail(email.value);
});

const isValidPassword = computed(() => {
  return regexpStore.checkPassword(password.value);
});

</script>

<template>

<div class="signup">
  <h1>Create an account</h1>
  <form @submit="signupHandler">
    <input type="text" v-model="username" placeholder="username">
    <template v-if="!isValidUsername && username.length>0">
      <div class="errmsg">
        <p>Min 6 characters</p>
      </div>
    </template>
    <input type="email" v-model="email" placeholder="email">
    <template v-if="!isValidEmail && email.length>0">
      <div class="errmsg">
        <p>Please enter a valid email</p>
      </div>
    </template>
    <input type="password" v-model="password" placeholder="password">
    <template v-if="!isValidPassword && password.length>0">
      <div class="errmsg">
        <p>Min 6 characters</p>
      </div>
    </template>
    <ButtonComp :isValid="isValidEmail" text="Register" width="120px" height="40px"></ButtonComp>
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