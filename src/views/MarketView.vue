<script setup>
import TodosAdd from '../components/Todos/TodosAdd.vue';
import TodosMarket from '../components/Todos/TodosMarket.vue';
import { useTodoStore } from '../stores/use-todo';

const todoStore = useTodoStore();

const todoHandler = (content) => {
  let text = content.trim();
  if (text.length <1 || text == "") return alert("Invalid input");
  todoStore.addTodoList("market",content)
}

</script>

<template>
  <div class="wrapper">
    <h1>Market Todos</h1>
    <TodosAdd @todo="todoHandler"></TodosAdd>
    <TodosMarket></TodosMarket>
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