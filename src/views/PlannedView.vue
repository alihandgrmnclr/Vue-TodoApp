<script setup>
import TodosAdd from '../components/Todos/TodosAdd.vue';
import TodosPlanned from '../components/Todos/TodosPlanned.vue';
import { addTodoList } from "../utils/TodoUtils"


const todoHandler = (content) => {
  let text = content.trim();
  if (text.length <1 || text == "") return alert("Invalid input");
  addTodoList("planned",content);
}

</script>

<template>
  <div class="wrapper">
    <TodosAdd @todo="todoHandler"></TodosAdd>
    <TodosPlanned></TodosPlanned>
  </div>

</template>

<style scoped>
.wrapper {
  @apply flex flex-col justify-center items-center gap-4;
}
</style>