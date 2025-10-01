import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://messuer-backend.vercel.app/api" : "/api",
  withCredentials: true,
});

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
