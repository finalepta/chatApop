import axios from "axios";
const $host = axios.create({
  baseURL: import.meta.env.VITE_APP_HOST_URL,
});

$host.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
export { $host };
