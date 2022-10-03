import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://nominatim.openstreetmap.org',
    params: {
    }
});

export default searchApi;