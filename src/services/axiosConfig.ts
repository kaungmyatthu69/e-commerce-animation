import axios from "axios";
import { API_BASE_URL } from "@/constants/config";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor to normalize errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Extract error message from API response if available
    const message =
      error.response?.data?.message || error.message || "Something went wrong";
    return Promise.reject(new Error(message));
  },
);

export default axiosInstance;
