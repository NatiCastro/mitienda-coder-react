import React from "react";
import { useState } from "react";
import '../Estilos/Items.css';


export default function ItemCount ({stock}) {
     //Indico la cantidad inicial
     const [cantidadInicial, setCantidadInicial] = useState(1);

     //Función para sumar cantidad según el stock
     const Suma = () => {
         if (cantidadInicial < stock) {
         setCantidadInicial(cantidadInicial + 1);
         }
     }    
 
     //Función de resta hasta la cantidad inicial
     const Resta = () => {
         if (cantidadInicial > 1) {
         setCantidadInicial(cantidadInicial - 1);
         }
     } 
 
     //Función con mensaje para agregar al carrito
     const OnAdd = () => {
         alert(`Agregaste  ${cantidadInicial} unidades`)
     }
    return (
        <>
       <div>
            <div className="contenedor-botones">
                <button className="botones-itemcount" onClick={Resta}>-</button>
                <p className="cantidad-itemcount">{cantidadInicial}</p>
                <button className="botones-itemcount" onClick={Suma}>+</button>
            </div>
            <button className="agregar-carrito" onClick={OnAdd}>Agregar al carrito</button>   
        </div>
        
        </>
    )
}


