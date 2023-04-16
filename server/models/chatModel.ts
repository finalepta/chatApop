import { Schema, model } from "mongoose";

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

const chatModel: Schema<IChat> = new Schema({
  name: {
    type: String,
    required: true,
  },
  users: [
    {
      username: String,
    },
  ],
  messages: [
    {
      user: String,
      color: String,
      timestamp: Number,
      message: String,
    },
  ],
  password: String,
});

export default model("Chat", chatModel);
