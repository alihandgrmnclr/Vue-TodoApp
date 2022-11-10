import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export const addDaily = () => {};
export const deleteDaily = () => {};

export const addImportant = () => {};
export const deleteImportant = () => {};

export const addMarket = () => {};
export const deleteMarket = () => {};

export const addPlanned = (text) => {
  addDoc(collection(db, "planned"), {
    content: text,
    done: false,
  });
};

export const deletePlanned = () => {

};
