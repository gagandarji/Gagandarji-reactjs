import axios from "../config/instance"; 


export const createProduct = async(productData) => { 
    const response = await axios.post("/products/", productData, {
        headers: {
            "Content-Type": "application/json",
        }
    }); 
    return response;
} 