import axios from "axios";

const api = axios.create({
  baseURL: "https://playcodeapi.herokuapp.com",
});

export default api;
