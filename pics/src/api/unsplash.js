import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID uoEe6KhG_BtFjbM4WAUewKbgp5tUiDPri0VT7--bhEE",
    "Cache-Control": "No-Cache",
  },
});
