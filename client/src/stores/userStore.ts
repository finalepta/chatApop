import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: {},
    messages: [] as object[],
  }),
  actions: {
    setUser(user: object) {
      this.user = user;
    },
    setMessages(msgs: object[]) {
      this.messages = msgs;
    },
  },
});
