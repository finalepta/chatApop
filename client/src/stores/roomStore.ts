import { defineStore } from "pinia";

export const useRoomStore = defineStore("roomStore", {
  state: () => ({
    users: [] as object[],
    messages: [] as object[],
  }),
  actions: {
    setUsers(users: object[]) {
      this.users = users;
    },
    setMessages(msgs: object[]) {
      this.messages = msgs;
    },
  },
});
