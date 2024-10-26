import axios from "axios";

const api = axios.create({
    baseURL: "https://frlllance-swiftrut.onrender.com",
});

export default api;