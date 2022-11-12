import { db } from "../firebase/config";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";

export const addTodoList = (list,text) => {
  addDoc(collection(db, list), {
    content: text,
    done: false,
    date: Date.now()
  });
};
export const deleteTodoList = (list,id) => {
  deleteDoc(doc(db, list, id));
};