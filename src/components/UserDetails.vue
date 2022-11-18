<script setup>
import { useAuthStore } from '../stores/use-auth';
import { useTodoStore } from '../stores/use-todo';

const authStore = useAuthStore();
const todoStore = useTodoStore();

</script>

<template>

  <template v-if="authStore.userInfo">
    <div class="user">
      <p>Username:  {{ authStore.userInfo.displayName }}</p>
      <p>User mail:  {{ authStore.userInfo.email }}</p>
      <p>Your email is <strong>{{ authStore.userInfo.emailVerified ? "verified" : "not verified"}}</strong></p>
      <p>Your Todos</p>
      <!-- <p>{{ todoStore }}</p> -->
    </div>
  </template>

</template>

<style lang="scss" scoped>

.user{
  @apply flex flex-col justify-center items-center;
}

</style>