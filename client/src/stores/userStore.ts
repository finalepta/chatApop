import { defineStore } from "pinia";

export interface IUser {
  username?: string;
}

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: {} as IUser,
  }),
  actions: {
    setUser(user: IUser) {
      this.user = user;
    },
    deleteUser() {
      this.user = {};
    },
  },
});
