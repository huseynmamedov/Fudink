import axios from "axios"
let productsUrl = import.meta.env.VITE_PRODUCTS_API
export const productsApi ={
    getAllProduct: function () {
        axios.get(productsUrl)
            .then(response => console.log(response.data));
            
    }
}