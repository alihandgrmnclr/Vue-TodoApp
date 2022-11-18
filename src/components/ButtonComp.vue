<script setup>

const props = defineProps(["text","isValid","height","width"])

</script>

<template>
  <div class="buttoncomp">
      <button :disabled="!props.isValid">{{ text }}</button>
  </div>
</template>

<style scoped>
  button{
    /* @apply flex justify-center items-center bg-blue-800 w-24 h-12 rounded-md text-white;
    @apply hover:bg-blue-900; */
    @apply cursor-pointer w-[v-bind(props.width)] h-[v-bind(props.height)] py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200;
    

  }
</style>