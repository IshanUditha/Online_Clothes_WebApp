import { createContext, useState } from "react"
import all_product from "../Assets/AllProduct";


export const ShopContext = createContext(null);

const getDefaultCart =() =>{
    let cart ={};
    for(let index=0; index <all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = ({children}) => {
    
    const [cartItems,setCartItems] =useState(getDefaultCart())

    const addToCart =(itemId) =>{
        setCartItems((pre)=>(
            {
                ...pre,
                [itemId]:pre[itemId]+1
                
            }
        ))
        console.log(cartItems);
    }
    const removeFromCart =(itemId)=>{
        setCartItems((pre)=>(
            {
                ...pre,
                [itemId]:pre[itemId]-1
            }
        ))
    }
    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((p)=>p.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            return totalAmount;
        }
        
    }
   
    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount}
  
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
