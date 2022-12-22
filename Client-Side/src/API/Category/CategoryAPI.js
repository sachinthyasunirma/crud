import axios from "axios";
const baseUrl = 'http://localhost:8080/api/category'

export default axios.create({
    baseURL: baseUrl
})