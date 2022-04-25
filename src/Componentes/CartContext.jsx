import React, { createContext, useEffect, useState } from "react";


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

            } else {
                setCart([...cart, item]);
            }  
        
    }; 

    //Función para remover un item 
    const removerItem = (id) => {setCart(cart.filter((r) => r.id !== id))};

    //Función de "comprar" y resetear el array con los items
    const comprarTodo = () => {console.log(setCart([]))};

       //Funcion para sumar precio de todos los items 
       const [precioTotal, setPrecioTotal] = useState(0);

       useEffect(() => {

           let total = 0;
           cart.forEach(item => {
             total+= item.precio * item.count;
           });

           setPrecioTotal(total);
           
       }, [cart])
       console.log(precioTotal)

        //Función para sumar la cantidad total de productos
        const cantidadTotal= ()=> (cart.reduce((total, item)=> total+= item.count, 0));
        useEffect(()=>{

           cantidadTotal();

        },[cart])


    return (
        <CartContext.Provider value={{cart, addToCart, removerItem, comprarTodo, precioTotal, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    )

}