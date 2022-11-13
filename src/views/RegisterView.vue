<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';

const router = useRouter();

const email = ref("");
const password = ref("");

const signupHandler = (e) => {
  e.preventDefault();
  console.log("signup");
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) => {
    alert("successfully registered");
    router.push("/planned")
  })
  .catch((err) => console.log("error",err))
};

</script>

<template>

<div class="signup">
  <h1>Create an account</h1>
  <form @submit="signupHandler">
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <button>SignUp</button>
  </form>
</div>

</template>

<style lang="scss" scoped>

.signup {
  @apply flex flex-col justify-center items-center h-[400px];
  form{
    @apply flex flex-col w-[300px] gap-3;
  }
  
}

</style>