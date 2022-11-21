<script setup>
import TodosAdd from '../components/Todos/TodosAdd.vue';
import TodosDaily from '../components/Todos/TodosDaily.vue';
import { useTodoStore } from '../stores/use-todo';

const todoStore = useTodoStore();

const todoHandler = (content) => {
  let text = content.trim();
  if (text.length <1 || text == "") return alert("Invalid input");
  todoStore.addTodoList("daily",content);
}

</script>

<template>
  <div class="wrapper">
    <h1>Daily Todos</h1>
    <TodosAdd @todo="todoHandler"></TodosAdd>
    <TodosDaily></TodosDaily>
  </div>

</template>

<style lang="scss" scoped>
.wrapper {
  @apply flex flex-col justify-center items-center gap-4;
  
  h1{
    @apply text-lg;
  }
}
</style>