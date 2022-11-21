<script setup>

const emits = defineEmits(["setStatus"]);

const buttonHandler = (status) => {
  emits("setStatus",status)
};

</script>

<template>
  <div class="buttons">
    <button class="accept" @click="buttonHandler(true)"> <p>Accept</p> </button>
    <button class="decline" @click="buttonHandler(false)"> <p>Decline</p> </button>
  </div>

</template>

<style scoped>
.buttons {
  @apply flex justify-center gap-3 text-white;
}
.accept {
  @apply bg-green-600 rounded-lg w-[75px] h-10;
}

.decline{
  @apply bg-red-600 rounded-lg w-[75px] h-10;
}
</style>