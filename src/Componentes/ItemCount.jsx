import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";



export default function ItemCount ({stock, nombre, id, precio, onAdd}) {
     //Indico la cantidad inicial
     const [count, setCount] = useState(1);
    
     //Me traigo la función con useContext
    const { addToCart } = useContext(CartContext);

     //Función para sumar cantidad según el stock
     const Suma = () => {
         if (count < stock) {
         setCount(count + 1);
         }
     }    
 
     //Función de resta hasta la cantidad inicial
     const Resta = () => {
         if (count > 1) {
         setCount(count - 1);
         }
     } 
 
    return (
        <>
       <div>
            <div className="contenedor-botones">
                <button className="botones-itemcount" onClick={Resta}>-</button>
                <p className="cantidad-itemcount">{count}</p>
                <button className="botones-itemcount" onClick={Suma}>+</button>
            </div>
            <button className="agregar-carrito" 
            onClick={()=>{  
                            addToCart({id, nombre, precio, count});
                            setCount(1);
                            onAdd(count);
                        }}>
                Agregar al carrito
            </button>   
        </div>
        
        </>
    )
}


