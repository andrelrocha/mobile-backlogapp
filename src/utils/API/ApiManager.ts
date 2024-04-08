import axios from "axios";

export const ApiManager = axios.create({
    baseURL: "https://9195-2804-14c-de86-851f-9d2a-3860-1375-447e.ngrok-free.app",
    responseType: "json"
});