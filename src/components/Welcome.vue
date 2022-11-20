<script setup>
import { useAuthStore } from '../stores/use-auth';

const authStore = useAuthStore();

</script>

<template>

  <div class="welcome">
    <template v-if="authStore.userInfo">
      <h1>Welcome <span class="username">{{ authStore.userInfo.displayName }}</span></h1>
      <p>Todos app</p>
    </template>
    <template v-else>
      <h1>Welcome To My Todo Application</h1>
    </template>
  </div>
 
</template>

<style lang="scss" scoped>
h1 {
  @apply text-2xl;
}

.username{
  text-transform: capitalize
}
.welcome {
  @apply flex flex-col justify-center items-center min-h-[20vh];
  
}
</style>