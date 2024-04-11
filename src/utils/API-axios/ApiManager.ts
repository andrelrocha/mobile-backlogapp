import axios from "axios";

export const ApiManager = axios.create({
    baseURL: "https://09c4-2804-248-fb33-4000-6d00-948-1d40-9b1.ngrok-free.app",
    responseType: "json"
});