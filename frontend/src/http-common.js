import axios from "axios";

const baseURL = "https://bee-aware-08ab5a1c994e.herokuapp.com/api" || "http://localhost:5050/api";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  }
});