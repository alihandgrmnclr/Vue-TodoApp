<script setup>
import { onBeforeMount } from 'vue';
import { useAuthStore } from './stores/use-auth';
import NavbarComp from "./components/NavbarComp.vue"

const authStore = useAuthStore();

onBeforeMount(async() => {
   authStore.getCurrentUser();
});


</script>

<template>

  <NavbarComp></NavbarComp>
</template>

<style lang="scss" scoped>

</style>
