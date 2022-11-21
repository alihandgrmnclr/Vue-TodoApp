<script setup>
import AlertButtonComp from "./AlertButtonComp.vue"

const emits = defineEmits(["setStatus"])

const handleStatus = (status) => {
  emits("setStatus", status);
};

</script>

<template>
  <div class="delete">
    <div class="delete__modal">
      <p class="delete__modal__text">Are you sure you want to delete this ?</p>
      <div class="delete__modal__btns">
        <AlertButtonComp @setStatus="handleStatus"></AlertButtonComp>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.delete {
  @apply fixed inset-0 flex justify-center items-center w-full h-full z-30;
  background-color: rgba(0, 0, 0, 0.75);

  &__modal {
    @apply flex flex-col justify-center items-center h-[200px] w-[300px] rounded-md bg-white;
  }

  &__modal__text {
    @apply flex justify-center items-center;
  }

  &__modal__btns {
    @apply flex justify-center w-full mt-5;
  }
}
</style>