import {ADD_TO_CART} from '../Constants'
import {REMOVE_TO_CART} from '../Constants'


export const addToCart=(data)=>{
    console.log("action", data);
return{
    type:ADD_TO_CART,
    data:data
}
}




