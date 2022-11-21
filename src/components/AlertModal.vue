<script setup>
import ButtonComp from './ButtonComp.vue';

const props = defineProps(["text"]);
const emits = defineEmits(["close"]);

const closeModal = () => {
  emits("close");
};

</script>

<template>
    <div class="alert">
      <div class="alert__modal">
        <p class="alert__modal__text">{{ text }}</p>
        <div class="alert__modal__btns">
          <ButtonComp @click="closeModal" text="Accept" width="120px" height="40px" :isValid="true"></ButtonComp>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.alert {
  @apply fixed inset-0 flex justify-center items-center w-full h-full;
  background-color: rgba(0, 0, 0, 0.75);

  &__modal {
    @apply flex flex-col justify-center items-center h-[200px] w-[300px] rounded-md bg-white;
  }

  &__modal__text {
    @apply flex justify-center items-center text-lg;
  }

  &__modal__btns {
    @apply flex justify-center w-full mt-10;
  }
}
</style>