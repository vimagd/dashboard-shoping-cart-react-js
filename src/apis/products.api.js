import axios from "axios";

//created and exported axiox api with baseUrl
export default axios.create({
    baseURL: "https://fakestoreapi.com"
})