import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getFeed = async () => {
    return await axios.get(`${baseUrl}/feed`);
}

export default getFeed;