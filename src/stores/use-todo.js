import { defineStore } from "pinia";
import { db } from "../firebase/config";
import { collection, onSnapshot, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: null,
  }),
  actions: {
    async loadTodos(sortedRef) {
      onSnapshot(sortedRef, (querySnapshot) => {
        const fbTodos = [];
        querySnapshot.forEach((doc) => {
          const todo = {
            id: doc.id,
            content: doc.data().content,
            done: doc.data().done,
          }
          fbTodos.push(todo);
        });
        this.todos = fbTodos;
      });
    },
    addTodoList(list, text) {
      addDoc(collection(db, list), {
        content: text,
        done: false,
        date: Date.now(),
      });
    },
    deleteTodoList(list, id) {
      deleteDoc(doc(db, list, id));
    },
    setTodoDone(id, ref) {
      const index = this.todos.findIndex(todo => todo.id === id); // to find index of selected id
      updateDoc(doc(ref, id), {
        done: !this.todos[index].done
      });
    },
  },
});
