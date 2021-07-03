import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getUser = async () => {
    try{
        const response = await axios.get(`${baseUrl}/user`);
        return response;
    }catch (error) {
        console.error(`Falha na requisição: ${error}`);
    }
}

const postUser = async (values:any) => {
    try {
        const response = await axios.request({
            url: `${baseUrl}/user`,
            method: 'post',
            data: values
        })
        return response;
    } catch (error) {
        //console.error(`Falha na requisição: ${error}`);
        throw new Error(error.response.data.message);
    }
}

const postUserLogin = async (values: any) => {
    try {
        const response = await axios.request({
            url: `${baseUrl}/user/login`,
            method: 'post',
            data: values
        })
        return response
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export {getUser, postUser, postUserLogin};