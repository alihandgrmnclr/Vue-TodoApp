<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import ButtonComp from '../components/ButtonComp.vue';

const emits = defineEmits(["login"]);

const email = ref("");
const password = ref("");
const errMsg = ref();

const router = useRouter();

const loginHandler = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      alert("successfully logged in");
      emits("login",true)
      router.push("/planned")
    })
    .catch((err) => {
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
          <p>Please enter a valid email</p>
        </div>
      </template>
      <input type="password" v-model="password" placeholder="password">
      <template v-if="errMsg">
        <p>{{ errMsg }}</p>
      </template>
      <ButtonComp :isValid="isValidEmail" text="Login"></ButtonComp>
      <p>Don't you have an accout? <span @click="goToRegister" class="register__link">Register</span></p>
    </form>
  </div>

</template>

<style lang="scss" scoped>
.login {
  @apply flex flex-col justify-center items-center h-[400px];

  input {
    @apply outline-none w-full;
  }

  form {
    @apply flex flex-col justify-center items-center w-[300px] gap-3;
  }

  .register__link {
    @apply underline font-bold cursor-pointer text-blue-500 hover:text-blue-700
  }

  .errmsg {
    @apply flex w-full text-red-500 text-sm;
  }
}
</style>