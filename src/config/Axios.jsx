// import axios from "axios";
// //instance axios
// export const http = axios.create({
//     baseURL: import.meta.env.VITE_BACKEND_API,
//     headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
// });
import axios from "axios";

const token = localStorage.getItem("accessToken")
export const http = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_API,
    headers: {
        Authorization:token
    }
})