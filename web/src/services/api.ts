import axios from 'axios'


//Endereço do Back End- pasta server
const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api; 
