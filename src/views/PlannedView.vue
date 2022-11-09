<script setup>
import TodosAdd from '../components/Todos/TodosAdd.vue';
import TodosPlanned from '../components/Todos/TodosPlanned.vue';


</script>

<template>
  <div class="wrapper">
    <TodosAdd></TodosAdd>
    <TodosPlanned></TodosPlanned>
  </div>

</template>

<style scoped>
.wrapper{
  @apply flex flex-col justify-center items-center gap-4;
}

</style>