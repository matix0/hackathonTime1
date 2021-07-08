import api from "./api";

const token = localStorage.getItem("token");

const getFeed = async () => {
  const response = await api.get("/feed", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const feedPost = async (values: any) => {
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
