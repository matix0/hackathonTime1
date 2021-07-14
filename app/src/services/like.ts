import api from "./api";
import axios from 'axios';

const token = localStorage.getItem("token");
const baseUrl = 'http://localhost:3001';

const getLike = async () => {
  const response = await api.get("/like", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const postLike = async (values:any) => {
  try {
      const response = await axios.request({
          url: `${baseUrl}/like`,
          method: 'post',
          headers: { Authorization: `Bearer ${token}` },
          data: values
      })
      return response;
  } catch (error) {
      //console.error(`Falha na requisição: ${error}`);
      throw new Error(error.response.data.message);
  }
}

export {getLike, postLike};
