import api from "./api";


const getFeed = async () => {
  const token = await localStorage.getItem("token");
  
  const response = await api.get("/feed", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const feedPost = async (values: any) => {
  const token = await localStorage.getItem("token");
  const { userId, text, username } = values;
  const response = await api.post(
    "/feed",
    {
      userId,
      text,
      username
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

export { getFeed, feedPost };
