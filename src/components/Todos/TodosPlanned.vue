<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useTodoStore } from "../../stores/use-todo";
import { useSoundStore } from "../../stores/use-sound"
import DeleteModal from "../DeleteModal.vue"
import EmptyBanner from "../EmptyBanner.vue";

const showAlert = ref(false);
const showAlertID = ref(null);
const showTodoList = ref(false);

const todoStore = useTodoStore();
const plannedRef = collection(db, "planned")
const todoSortedRef = query(plannedRef, orderBy("date", "desc"));

const soundStore = useSoundStore();

onBeforeMount(async () => {
  todoStore.loadTodos(todoSortedRef);
});

onMounted(() => {
  showTodoList.value = true;
});

const deleteModalOpen = (id) => {
  showAlertID.value = id;
  showAlert.value = true;
};

const alertHandler = (status) => {
  if (!status) return showAlert.value = false;
  todoStore.deleteTodoList("planned", showAlertID.value);
  soundStore.deleteSound();
  showAlertID.value = null;
  showAlert.value = false;
};

const setDone = (id, todo) => {
  todoStore.setTodoDone(id, plannedRef);
  return soundStore.doneSound();
};

const setUnDone = (id) => {
  todoStore.setTodoUndone(id, plannedRef);
};

const editTodo = (id, todo) => {
  todoStore.editTodo(id, plannedRef, todo);
};


</script>

<template>
  <Teleport to="#app">
    <template v-if="showAlert">
      <DeleteModal @setStatus="alertHandler"></DeleteModal>
    </template>
  </Teleport>
  <div class="planned">
    <template v-if="!todoStore.todos || todoStore.todos.length < 1">
      <EmptyBanner></EmptyBanner>
    </template>
    <!-- <TransitionGroup name="fade" class="transition-style" appear> -->
      <template v-if="showTodoList">
        <TransitionGroup tag="ul" name="list" class="transition-group-style" appear>
          <li class="planned__list" :class="{ 'done': todo.done }" v-for="todo in todoStore.todos" :key="todo.id">
            <!-- <input type="radio" class="mr-3"> -->
            <input class="planned__list__text" v-model="todo.content" @keyup.enter="editTodo(todo.id, todo.content)">
            <div class="planned__btn">
              <div @click="editTodo(todo.id, todo.content)" class="planned__btn__delete"><img class="icon"
                  src="https://cdn-icons-png.flaticon.com/512/4476/4476194.png" alt=""></div>
              <div @click="setDone(todo.id, todo)" class="planned__btn__done"><img class="icon"
                  src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" alt=""></div>
              <div @click="deleteModalOpen(todo.id)" class="planned__btn__delete"><img class="icon"
                  src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt=""></div>
            </div>
          </li>
        </TransitionGroup>

          <div class="z-10">
            <img src="/photos/hr.png" class="h-10 w-full" alt="">
          </div>

        <TransitionGroup tag="ul" name="list" class="transition-group-style" appear>
          <li class="planned__list" :class="{ 'done': todo.done }" v-for="todo in todoStore.doneTodos" :key="todo.id">
            <!-- <input type="radio" class="mr-3"> -->
            <input class="planned__list__text" v-model="todo.content" @keyup.enter="editTodo(todo.id, todo.content)">
            <div class="planned__btn">
              <div @click="editTodo(todo.id, todo.content)" class="planned__btn__delete"><img class="icon"
                  src="https://cdn-icons-png.flaticon.com/512/4476/4476194.png" alt=""></div>
              <div @click="setUnDone(todo.id, todo)" class="planned__btn__done"><img class="icon"
                  src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" alt=""></div>
              <div @click="deleteModalOpen(todo.id)" class="planned__btn__delete"><img class="icon"
                  src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt=""></div>
            </div>
          </li>
        </TransitionGroup>
      </template>
    <!-- </TransitionGroup> -->
  </div>
</template>

<style lang="scss" scoped>
.planned {
  @apply w-[50%];
  @apply min-w-[350px] min-h-[50px];

  &__list {
    @apply flex items-center p-2 bg-white mb-3 rounded-md hover:scale-105 transition;
    @apply min-h-[50px] min-w-[300px];
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }

  &__list__text {
    @apply flex-1 overflow-hidden outline-none;
    background-color: rgba(240, 248, 255, 0);
  }

  &__btn {
    @apply flex ml-auto gap-2;
    @apply min-w-[60px];

    .icon {
      @apply w-[25px] cursor-pointer hover:scale-110;
    }
  }
  .done {
    @apply text-gray-400 line-through bg-green-300;
  }



}
</style>