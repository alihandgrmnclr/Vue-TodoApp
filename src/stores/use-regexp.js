import { defineStore } from "pinia";

export const useRegexpStore = defineStore("regexp", {
  state: () => ({}),
  actions: {
    checkEmail(email) {
      const check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      if (!check) return false;
      return true;
    },
    checkUsername(username) {
      const check = /^[A-Za-z0-9]\w{5,}$/.test(username);
      if (!check) return false;
      return true;
    },
    checkPassword(password) {
      const check = /^[A-Za-z0-9]\w{5,}$/.test(password);
      if (!check) return false;
      return true;
    },
  },
});
