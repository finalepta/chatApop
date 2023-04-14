//@ts-nocheck
import { $host } from ".";
import jwt_decode from "jwt-decode";
import type { StateTree } from "pinia";

interface Token {
  token: string;
}

interface IUser {
  username: string;
  room: string;
  iat: Date;
  eat: Date;
}

export const sign = async (
  username: string,
  room: string,
  password: string
): Promise<object> => {
  try {
    const data = await $host.post<Token>("/api/create", {
      username,
      name: room,
      password,
    });
    const { token } = data.data;
    localStorage.setItem("token", token);
    return jwt_decode(token);
  } catch (e) {
    console.log(e);
  }
};

export const join = async (
  username: string,
  room: string,
  password: string
): Promise<IUser> => {
  const data = await $host.post<Token>("/api/join", {
    username,
    room,
    password,
  });

  const { token } = data.data;
  localStorage.setItem("token", token);
  return jwt_decode(token);
};

export const check = async (): Promise<IUser> => {
  const data = await $host.get<Token>("/api/check");
  const { token } = data.data;
  if (!token) return;
  localStorage.setItem("token", token);
  return jwt_decode(token);
};
