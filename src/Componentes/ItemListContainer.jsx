import React from "react";
import '../Estilos/ItemCount.css';
import ItemCount from "./ItemCount";
import { useState } from "react";

export default function ItemListContainer() {

    //Indico la cantidad inicial
    const [cantidadInicial, setCantidadInicial] = useState(1);
    //Indico el stock 
    const [stock] = useState(5);

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

    //Función para el botón de Agregar al carrito 
    const OnAdd = () => {
        alert(`Agregaste  ${cantidadInicial} unidades`)
    }

    return (
        <>  
            {/* Primer botón - resta items */}
             <ItemCount 
                sumaOResta={Resta}
                texto='-'
            />
            {/* Div con número de items */}
            <div className="cantidad-itemcount">{cantidadInicial}</div>

            {/* Segundo botón - suma items */}
            <ItemCount 
                sumaOResta={Suma}
                texto='+'
            />
            {/* Botón agregar al carrito */}
            <button 
                className="agregar-carrito"
                onClick={OnAdd} >
                    
                Agregar al Carrito

            </button>
        </>
    );
}