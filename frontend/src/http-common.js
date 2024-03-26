import axios from "axios";

const baseURL = "https://bee-aware-2b421aedee22.herokuapp.com/api" || "http://localhost:5050/api";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  }
});