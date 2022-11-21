import { defineStore } from "pinia";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "@firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    auth: getAuth(),
    isLoggedIn: false,
    errMsg: "",
    userInfo: null,
  }),
  actions: {
    async loginHandler(email, password) {
      await signInWithEmailAndPassword(getAuth(), email, password)
        .then((data) => {
          this.isLoggedIn = true;
        })
        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
              this.errMsg = "Invalid email";
              break;
            case "auth/wrong-password":
              this.errMsg = "Incorrect password";
              break;
            case "auth/user-not-found":
              this.errMsg = "No account found with that email";
              break;
            default:
              this.errMsg = "Invalid email or password";
              break;
          }
        });
    },
    getCurrentUser() {
     onAuthStateChanged(this.auth, async(user) => {
        this.userInfo = this.auth.currentUser;
        if (user) return (this.isLoggedIn = true);
        this.isLoggedIn = false;
      });
    },
    userSignOut() {
      signOut(this.auth);
      this.isLoggedIn = false;
    },
  },
});
