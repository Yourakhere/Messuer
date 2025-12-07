import axios from "axios";

const axiosInstance = axios.create({
 
  baseURL: "https://messuer-backend.onrender.com/api",
  withCredentials: true,
});

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
