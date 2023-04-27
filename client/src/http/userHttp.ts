//@ts-nocheck
import { $host } from ".";
import jwt_decode from "jwt-decode";
import { AxiosError } from "axios";

interface Token {
  token: string;
}

export interface IToken {
  username: string;
  room: string;
  iat: Date;
  eat: Date;
}

export const sign = async (username: string, room: string, password: string): Promise<IToken> => {
  try {
    const response = await $host.post<Token>("/api/create", {
      username,
      name: room,
      password,
    });
    if (response.data.token) {
      const { token } = response.data;
      localStorage.setItem("token", token);
      return jwt_decode(token);
    } else {
      throw new Error(response.data.message).message;
    }
  } catch (e) {
    if (typeof e == AxiosError) {
      console.log(e);
      throw new Error("There is some problem. Try again later");
    } else throw new Error(e).message;
  }
};

export const join = async (username: string, room: string, password: string): Promise<IToken> => {
  try {
    const response = await $host.post<Token>("/api/join", {
      username,
      name: room,
      password,
    });
    if (response.data.token) {
      const { token } = response.data;
      localStorage.setItem("token", token);
      return jwt_decode(token);
    } else {
      throw new Error(response.data.message).message;
    }
  } catch (e) {
    if (typeof e == AxiosError) throw new Error("There is some problem. Try again later");
    else throw new Error(e).message;
  }
};

export const check = async (): Promise<IToken> => {
  const header = localStorage.getItem("token");
  if (header) {
    const data = await $host.get<Token>("/api/check", {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    });
    const { token } = data.data;
    if (!token) return;
    localStorage.setItem("token", token);
    return jwt_decode(token);
  } else {
    return;
  }
};
