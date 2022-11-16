import { defineStore } from "pinia";
import { db } from "../firebase/config";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";

export const useTodoStore = defineStore("todo", {
  state: () => ({}),
  actions: {
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
  },
});
