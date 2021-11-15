import axios from "axios";

const baseUrl = "http://localhost:3001";

const getUser = async () => {
  try {
    const response = await axios.get(`${baseUrl}/user`);
    return response;
  } catch (error) {
    console.error(`Falha na requisição: ${error}`);
  }
};

const postUser = async (values: any) => {
  try {
    const response = await axios.request({
      url: `${baseUrl}/user`,
      method: "post",
      data: values,
    });

    return response;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

const postUserLogin = async (values: any) => {
  try {
    const response = await axios.request({
      url: `${baseUrl}/user/login`,
      method: "post",
      data: values,
    });

    return response;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

const getUserById = async (id: string | undefined) => {
  try {
    const response = await axios.request({
      url: `${baseUrl}/user/${id}`,
      method: "get",
    });
    return response;
  } catch (error) {
    console.error(`Falha na requisição: ${error}`);
  }
};

const changeUserById = async (id: string | undefined, values: any) => {
  try {
    const response = await axios.request({
      url: `${baseUrl}/password/${id}`,
      method: "put",
      data: values,
    });
    return response;
  } catch (error: any) {
    console.log(error.response);
    throw new Error(error.response.data.message);
  }
};

const postEmailUser = async (values: any) => {
  try {
    const response = await axios.request({
      url: `${baseUrl}/password`,
      method: "post",
      data: values,
    });

    return response;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export {
  getUser,
  postUser,
  postUserLogin,
  getUserById,
  changeUserById,
  postEmailUser,
};
