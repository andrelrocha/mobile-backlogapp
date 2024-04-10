import axios from "axios";

export const ApiManager = axios.create({
    baseURL: "https://2c45-2804-248-fb33-4000-8163-75a5-1302-2dc5.ngrok-free.app",
    responseType: "json"
});