import api from "./api";

const token = localStorage.getItem("token");

const getLike = async () => {
  const response = await api.get("/like", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default getLike;
