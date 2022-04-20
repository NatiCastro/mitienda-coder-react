import React, { createContext, useState } from "react";


export const CartContext = createContext();

export default function CartContextProvider ({children}) {

    const [cart, setCart] = useState([]);

    //Función para agregar items a cart sin duplicar
    const addToCart = (item) => {
        
        let i = cart.findIndex(elemento => elemento.id === item.id);

            if (i !== -1) {
                const newCart = [...cart];
                newCart[i].count = newCart[i].count + item.count;
                setCart(newCart);
                console.log(newCart)
            } else {
                setCart([...cart, item]);
            }  
        
    }; 

    //Función para remover un item 
    const removerItem = (id) => {setCart(cart.filter((r) => r.id !== id))};

    //Función de "comprar" y resetear el array con los items
    const comprarTodo = () => {console.log(setCart([]))};
    


    return (
        <CartContext.Provider value={{cart, addToCart, removerItem, comprarTodo}}>
            {children}
        </CartContext.Provider>
    )

}