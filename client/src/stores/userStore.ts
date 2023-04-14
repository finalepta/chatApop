import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: {},
  }),
  actions: {
    setUser(user: object) {
      this.user = user;
    },
  },
});
