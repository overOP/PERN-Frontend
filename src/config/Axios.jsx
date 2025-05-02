import axios from "axios";
//instance axios
export const http = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API,
});
