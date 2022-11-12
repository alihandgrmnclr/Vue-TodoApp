<script setup>
import TodosAdd from '../components/Todos/TodosAdd.vue';
import TodosImportant from '../components/Todos/TodosImportant.vue';
import { addTodoList } from "../utils/TodoUtils"


const todoHandler = (content) => {
  let text = content.trim();
  if (text.length <1 || text == "") return alert("Invalid input");
  addTodoList("important",content);
}

</script>

<template>
  <div class="wrapper">
    <TodosAdd @todo="todoHandler"></TodosAdd>
    <TodosImportant></TodosImportant>
  </div>

</template>

<style scoped>
.wrapper {
  @apply flex flex-col justify-center items-center gap-4;
}
</style>