import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export async function getAllProducts(){
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
}

export async function getProductId(id){
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
}

export async function getProductImage(id){
    const response = await axios.get(`${BASE_URL}/products/${id}/image`);
    return response.data;
}

export const GET_RESTAURANT_MENU = "https://instafood.onrender.com/api/menu?lat=12.9351929&lng=77.62448069999999&restaurantId=";
