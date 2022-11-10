<script setup>
import ButtonComp from "./ButtonComp.vue"

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
        <ButtonComp @setStatus="handleStatus"></ButtonComp>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.delete {
  @apply absolute flex justify-center items-center left-0 right-0 mr-auto ml-auto top-0 w-full h-full;
  background-color: rgba(0, 0, 0, 0.572);

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