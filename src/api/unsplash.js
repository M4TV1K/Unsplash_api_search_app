import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID tPCBPyWe8Waz-OgZJbIp3PBeHYnK6i16b-LMTqYin6I"
  }
});