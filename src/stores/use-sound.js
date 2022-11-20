import { defineStore } from "pinia";

export const useSoundStore = defineStore("sound", {
  state: () => ({
	}),
  actions: {
    doneSound() {
      const audio = new Audio();
      audio.src = "/sounds/done.mp3";
      return audio.play();
    },
    deleteSound(){
      const audio = new Audio();
      audio.src = "/sounds/delete.mp3";
      return audio.play();
    },
  },
});

