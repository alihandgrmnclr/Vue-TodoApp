<script setup>
import { onMounted, ref } from "vue";
import DeleteModal from "../DeleteModal.vue"
import { db } from "../../firebase/config";
import { collection, onSnapshot, updateDoc, doc, query, orderBy } from "firebase/firestore";
import { deleteTodoList } from "../../utils/TodoUtils";

const todos = ref([]);
const showAlert = ref(false);
const showAlertID = ref(null);

const importantRef = collection(db, "important")
const todoSortedRef = query(importantRef, orderBy("date", "desc"));

onMounted(() => {
  onSnapshot(todoSortedRef, (querySnapshot) => {
    const fbTodos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done,
      }
      fbTodos.push(todo);
    });
    todos.value = fbTodos;
  });
});

const deleteModalOpen = (id) => {
  showAlertID.value = id;
  showAlert.value = true;
};

const alertHandler = (status) => {
  if (!status) return showAlert.value = false;
  deleteTodoList("important", showAlertID.value);
  showAlertID.value = null;
  showAlert.value = false;
};

const setDone = (id) => {
  const index = todos.value.findIndex(todo => todo.id === id); // to find index of selected id
  updateDoc(doc(importantRef, id), {
    done: !todos.value[index].done
  });
};

</script>

<template>
  <Teleport to="#app">
    <template v-if="showAlert">
      <DeleteModal @setStatus="alertHandler"></DeleteModal>
    </template>
  </Teleport>
  <div class="important">
    <template v-if="todos.length < 1">
      <EmptyBanner></EmptyBanner>
    </template>
    <ul>
      <li class="important__list" :class="{ 'done': todo.done }" v-for="todo in todos">
        <p class="important__list__text"> {{ todo.content }} </p>
        <div class="important__btn">
          <div @click="setDone(todo.id)" class="important__btn__done"><img class="icon"
              src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" alt=""></div>
          <div @click="deleteModalOpen(todo.id)" class="important__btn__delete"><img class="icon"
              src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt=""></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.important {
  @apply w-[50%];
  @apply min-w-[350px] min-h-[50px];

  &__list {
    @apply flex items-center p-2 bg-white mb-3 rounded-md hover:scale-105 transition;
    @apply min-h-[50px] min-w-[300px];
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }

  &__list__text {
    @apply min-w-[80%] overflow-hidden;
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