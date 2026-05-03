import { API_CONFIG } from "@/config/api";
import axios from "axios";

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add any headers here (e.g., Auth token if needed in future)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Standardized error handling
    const message = error.response?.data?.error || error.message || "An unexpected error occurred";
    console.error(`[API Error] ${message}`, error);
    return Promise.reject(new Error(message));
  },
);

export default apiClient;
