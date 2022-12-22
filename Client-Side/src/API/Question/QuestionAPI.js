import axios from "axios";
const baseUrl = 'http://localhost:8080/api/question'

export default axios.create({
    baseURL: baseUrl
})