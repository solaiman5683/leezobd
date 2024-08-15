import axios from "axios";
import { BASE_API_URL, SYSTEM_KEY } from "@/config/app";
import { getToken } from "@/hooks/auth/useAuth";

export const Headertoken = () => {
  const options = {
    headers: {
      "System-Key": SYSTEM_KEY,
    },
  };
  if (getToken()) {
    options.headers.Authorization = `Bearer ${getToken()}`;
  }
  return options;
};

export const HTTP = axios.create({
  baseURL: `${BASE_API_URL}`,
  headers: {
    // Authorization: `Bearer ${getToken()}`,
    "System-Key": SYSTEM_KEY,
  },
});
