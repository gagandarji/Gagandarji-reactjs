
import axios from "../config/instance"; 


export const allProducts = async() => {  
    const response = await axios.get("/products/",{
        headers: {
            "Content-Type": "application/json" 
        } 
    }); 
    return response;
}
export const productDetails = async(prodId) => {  
    const response = await axios.get("/products/"+prodId,{
        headers: {
            "Content-Type": "application/json" 
        } 
    }); 
    return response;
}

export const allCats = async() => {  
    const response = await axios.get("/categories/",{
        headers: {
            "Content-Type": "application/json" 
        } 
    }); 
    return response;
}
 