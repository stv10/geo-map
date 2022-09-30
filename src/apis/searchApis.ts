import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://nominatim.openstreetmap.org',
    params: {
        // language: 'es',
        // access_token: 'pk.eyJ1Ijoic3R2MTAiLCJhIjoiY2w4YzVrMHBuMDNrMTNwcHA5Z3VpZ212MSJ9.sg-PkET99yjyR9OBEVrpzA'
    }
});

export default searchApi;