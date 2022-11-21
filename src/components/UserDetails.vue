<script setup>
import { useAuthStore } from '../stores/use-auth';

const authStore = useAuthStore();



</script>

<template>

  <template v-if="authStore.userInfo">
    <div class="user">
      <p>Username:  {{ authStore.userInfo.displayName }}</p>
      <p>User mail:  {{ authStore.userInfo.email }}</p>
    </div>
  </template>
  <div class="personal">
    <h1>Contact with me</h1>
    <a href="https://www.linkedin.com/in/alihan-degirmenciler/" target="_blank">Linkedin</a>
    <a href="https://github.com/alihandgrmnclr" target="_blank">Github</a>
    
  </div>

</template>

<style lang="scss" scoped>

.personal{
  @apply flex flex-col mt-[10vh] justify-center items-center;
}

a{
  @apply text-blue-600 font-extrabold underline;
  @apply hover:text-blue-800;

}
.user{
  @apply flex flex-col justify-center items-center;
}

</style>