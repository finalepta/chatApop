import { $host } from ".";

interface IUser {
  username: string;
}

export interface IMessage {
  user: string;
  color?: string;
  timestamp: number;
  message: string;
}
export interface IChat {
  name: string;
  users: Array<IUser>;
  messages: Array<IMessage>;
  password: string;
}
interface Response {
  chat: IChat;
  user: string;
}

export const getRoom = async (room: string): Promise<Response> => {
  const response = await $host.get(`/api/chat/${room}`);
  const chat = response.data.room;
  return { chat, user: response.data.user };
};

export const removeUser = async (room: string, username: string) => {
  console.log("disconnected");
  await $host.delete("/api/chat/", {
    data: {
      name: room,
      username,
    },
  });
};
