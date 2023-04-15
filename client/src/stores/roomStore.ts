import { defineStore } from "pinia";
import type { IUser } from "./userStore";

interface IMessage {
  user: string;
  timestamp: string;
  message: string;
}

export const useRoomStore = defineStore("roomStore", {
  state: () => ({
    name: "",
    password: "" as string | undefined,
    users: [] as Array<IUser>,
    messages: [] as Array<IMessage>,
  }),
  actions: {
    setName(name: string) {
      this.name = name;
    },
    setPassword(name: string) {
      this.name = name;
    },
    setUsers(users: Array<IUser>) {
      this.users = users;
    },
    setMessages(msgs: Array<IMessage>) {
      this.messages = msgs;
    },
    addMessage(msg: IMessage) {
      this.messages.push(msg);
    },
  },
});
