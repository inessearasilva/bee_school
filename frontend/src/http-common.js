import axios from "axios";

const baseURL = "https://bee-aware-0831ce44e802.herokuapp.com/api" || "http://localhost:5050/api";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  }
});