import React from "react";
//Importando Fontawesome-Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
// Hoja de estilo
import '../Estilos/NavBarStyle.css';



export default function IconoCarrito () {

    return (
        <div className= "icono-carrito">

            <FontAwesomeIcon 
                icon={faBagShopping} 
                style={{fontSize:36, color:'rgb(110, 114, 113)'}} 
            />

            <span className="contador" >2</span>

        </div>
    

    )
}