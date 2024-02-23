import axios from "axios";

export const publicGateway = axios.create({
    baseURL: "https://mulearn.org/",
    headers: {
        "Content-Type": "application/json",
    }
});