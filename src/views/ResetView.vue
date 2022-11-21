<script setup>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { computed, ref } from "vue";
import ButtonComp from "../components/ButtonComp.vue";
import { useRegexpStore } from "../stores/use-regexp";

const email = ref("");
const auth = getAuth();
const regexpStore = useRegexpStore();

const isValidEmail = computed(() => {
  return regexpStore.checkEmail(email.value);
});

const resetPassword = () => {
  if (isValidEmail) {
    sendPasswordResetEmail(auth, email.value)
      .then(() => {
        alert("Password reset email sent!, Check your spam folder");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid email!")
      });
  }
}

</script>

<template>

  <div class="reset">
    <div class="reset__text">
      <p>Enter your email address to reset your password</p>
    </div>
    <input type="text" v-model="email" placeholder="Your email..." maxlength="30">
    <template v-if="!isValidEmail && email.length > 0">
      <p class="errmsg">Enter a valid email!</p>
    </template>
    <ButtonComp @click="resetPassword" text="Reset Password" :isValid="isValidEmail" height="40px" width="160px"></ButtonComp>
  </div>

</template>

<style lang="scss" scoped>
input{
  @apply outline-none w-[350px] p-3 rounded-full mb-5;
}

.reset {
  @apply flex flex-col items-center justify-center mt-[30vh];
  &__text {
    @apply text-center mb-5;
  }
}
.errmsg {
    @apply flex text-red-500 text-sm mb-3;
  }
</style>