import axios from "axios";

// Update the baseURL to your online backend server URL
const baseURL = "https://bee-aware-08ab5a1c994e.herokuapp.com/api";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  }
});
