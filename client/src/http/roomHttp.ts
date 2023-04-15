import { $host } from ".";

export const getRoom = async (room: string): Promise<void> => {
  const response = await $host.get(`/api/chat/${room}`);
  const chat = response.data.room;
  return chat;
};
