<script setup>
import { onMounted, ref } from "vue";
import { db } from "../../firebase/config";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

const todos = ref([]);
const showAlert = ref(false);

onMounted(async () => {
  onSnapshot(collection(db, "planned"), (querySnapshot) => {
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

const deleteModal = () => {
  showAlert.value = true;
};


</script>

<template>
  <div class="planned">
    <ul>
      <li class="planned__list" :class="{'done' : todo.done}" v-for="todo in todos">
        <p class="planned__list__text"> {{ todo.content }} </p>
        <div class="planned__btn">
          <div class="planned__btn__done"><img class="icon"
              src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" alt=""></div>
          <div @click="deleteModal" class="planned__btn__delete"><img class="icon"
              src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt=""></div>
        </div>
      </li>
    </ul>
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