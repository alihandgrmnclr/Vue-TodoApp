import { defineStore } from "pinia";
import { db } from "../firebase/config";
import {collection, onSnapshot, addDoc, deleteDoc, updateDoc, doc} from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: null,
    auth: getAuth(),
  }),
  actions: {
    async loadTodos(sortedRef) {
      onSnapshot(sortedRef, (querySnapshot) => {
        const fbTodos = [];
        querySnapshot.forEach((doc) => {
          if ( doc._document.data.value.mapValue.fields.userId.stringValue === this.auth.currentUser.uid ) {
            const todo = {
              id: doc.id,
              content: doc.data().content,
              done: doc.data().done,
            };
            fbTodos.push(todo);
          }
        });
        this.todos = fbTodos;
      });
    },
    addTodoList(list, text) {
      addDoc(collection(db, list), {
        userMail: this.auth.currentUser.email,
        userId: this.auth.currentUser.uid,
        content: text,
        done: false,
        date: Date.now(),
      });
    },
    deleteTodoList(list, id) {
      deleteDoc(doc(db, list, id));
    },
    deleteAllTodos() {

    },
    setTodoDone(id, ref) {
      const index = this.todos.findIndex((todo) => todo.id === id); // to find index of selected id
      updateDoc(doc(ref, id), {
        done: !this.todos[index].done,
      });
    },
    editTodo(id, ref, changedContent){
      updateDoc(doc(ref, id), {
        content: changedContent
      });
    },
  },
});
