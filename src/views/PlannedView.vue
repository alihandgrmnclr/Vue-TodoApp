<script setup>
import TodosAdd from '../components/Todos/TodosAdd.vue';
import TodosPlanned from '../components/Todos/TodosPlanned.vue';
import { useTodoStore } from '../stores/use-todo';

const todoStore = useTodoStore();

const todoHandler = (content) => {
  let text = content.trim();
  if (text.length < 1 || text == "") return alert("Invalid input");
  todoStore.addTodoList("planned", content);
}

</script>

<template>
  <div class="wrapper">
    <h1>Planned Todos</h1>
    <TodosAdd @todo="todoHandler"></TodosAdd>
    <TodosPlanned></TodosPlanned>
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