<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

const email = ref("");
const password = ref("");
const errMsg = ref();

const router = useRouter();



const loginHandler = (e) => {
  e.preventDefault();
  console.log("Login");
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      alert("successfully logged in");
      router.push("/planned")
    })
    .catch((err) => {
      console.log("error", err);
      switch (err.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email"
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password"
          break;
        case "auth/user-not-found":
          errMsg.value = "No account found with that email"
          break;
        default:
          errMsg.value = "Invalid email or password";
          break;
      }
    })
};

</script>

<template>

  <div class="login">
    <h1>Login your account</h1>
    <form @submit="loginHandler">
      <input type="email" v-model="email">
      <input type="password" v-model="password">
      <template v-if="errMsg">
        <p>{{ errMsg }}</p>
      </template>
      <button>Login</button>
    </form>
  </div>

</template>

<style lang="scss" scoped>
.login {
  @apply flex flex-col justify-center items-center h-[400px];

  form {
    @apply flex flex-col w-[300px] gap-3;
  }

}
</style>