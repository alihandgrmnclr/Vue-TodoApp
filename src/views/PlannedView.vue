<script setup>
import TodosAdd from '../components/Todos/TodosAdd.vue';
import TodosPlanned from '../components/Todos/TodosPlanned.vue';
import { addPlanned } from "../utils/TodoUtils"


const todoHandler = (content) => {
  if (content.length <1) return alert("Invalid input");
  addPlanned(content);
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