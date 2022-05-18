
import axios from "../config/instance"; 


export const allProducts = async(cat) => {  
    const response = await axios.get("/products",{
        params: { "category":cat},
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
 