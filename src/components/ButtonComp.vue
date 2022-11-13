<script setup>

const props = defineProps(["text","isValid"])

</script>

<template>
  <div class="buttoncomp">
      <button :disabled="!props.isValid">{{ text }}</button>
  </div>
</template>

<style scoped>
  button{
    @apply flex justify-center items-center bg-blue-800 w-24 h-12 rounded-md text-white;
    @apply hover:bg-blue-900;

  }
</style>