<script setup>
import { ref } from 'vue';

const emits = defineEmits(["todo"])
const todo = ref("");

const addTodo = (Todo) => {
  emits("todo",Todo)
  todo.value = "";
}

</script>

<template>
  <div class="addtodo">
    <input class="addtodo__input" v-model="todo" type="text" placeholder="Add todo...">
    <button
      class="addtodo__button"
      @click="addTodo(todo)"
      :disabled="!todo">
      <img
      class="addtodo__icon"
      src="https://cdn-icons-png.flaticon.com/512/992/992651.png">
      </button>
  </div>
</template>
<style lang="scss" scoped>

.addtodo{
  @apply flex justify-center items-center w-[80%] bg-white h-10 rounded-lg;
  @apply max-w-[600px];

  &__input{
    @apply w-full ml-2 outline-none;
  }

  &__button{
    @apply flex justify-center items-center w-10 h-full;
  }

  &__icon{
    @apply w-5 ;
    @apply hover:scale-110;
  }

  
}

</style>