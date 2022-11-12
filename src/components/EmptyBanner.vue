<script setup>

</script>

<template>

  <div class="empty__banner">
    <img class="empty__banner__logo" src="/photos/todo.png" alt="">
    <p class="empty__banner__text">Add your first todo!</p>
  </div>

</template>

<style lang="scss" scoped>

.empty__banner{
  @apply flex flex-col items-center justify-center mt-10 opacity-60;

  &__logo{
    @apply h-[30vh];
  }

  &__text{
    @apply ml-8;
    transform: rotateZ(-9deg);
  }
}

</style>