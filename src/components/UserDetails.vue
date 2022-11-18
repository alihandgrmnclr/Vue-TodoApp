<script setup>
import { useAuthStore } from '../stores/use-auth';

const authStore = useAuthStore();



</script>

<template>

  <template v-if="authStore.userInfo">
    <div class="user">
      <p>Username:  {{ authStore.userInfo.displayName }}</p>
      <p>User mail:  {{ authStore.userInfo.email }}</p>
      <p>Your email is <strong>{{ authStore.userInfo.emailVerified ? "verified" : "not verified"}}</strong></p>
    </div>
  </template>

</template>

<style lang="scss" scoped>

.user{
  @apply flex flex-col justify-center items-center;
}

</style>