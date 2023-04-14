import axios from "axios";
const $host = axios.create({
  baseURL: import.meta.env.VITE_APP_HOST_URL,
});

export { $host };
