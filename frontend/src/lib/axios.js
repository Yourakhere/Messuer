import axios from "axios";

const axiosInstance = axios.create({
 
  baseURL: "https://chat-backend-ten-amber.vercel.app/api",
  withCredentials: true,
});

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
