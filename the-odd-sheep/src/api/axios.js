import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // Your backend URL
  withCredentials: true,            // Allows cookies/session
});

export default instance;
