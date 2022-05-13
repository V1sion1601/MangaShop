
import axios from 'axios';
import queryString from 'query-string';

const api = axios.create({
baseURL: 'http://localhost:8000',
headers: {
'content-type': 'application/json',
},
});
api.interceptors.request.use(async (config) => {
// Handle token here ...
return config;
})
api.interceptors.response.use((response) => {
if (response && response.data) {
   
return response.data;
}
return response;
}, (error) => {
// Handle errors
throw error;
});
export default api;