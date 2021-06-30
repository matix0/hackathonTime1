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
        const response = await axios.post(`${baseUrl}/user`, values)
        return response;

    } catch (error) {
        console.error(`Falha na requisição: ${error}`);
    }
}

export {getUser, postUser};