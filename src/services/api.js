import axios from "axios";

const API = axios.create({
  baseURL: "ecommerce-backend-production-fe52.up.railway.app/api"
});

export default API;
