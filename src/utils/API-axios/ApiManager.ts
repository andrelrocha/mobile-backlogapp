import axios from "axios";

export const ApiManager = axios.create({
    baseURL: "https://bd60-2804-248-fb33-4000-d984-607a-f9bb-8f7e.ngrok-free.app",
    responseType: "json"
});