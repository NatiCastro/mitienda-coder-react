import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import '../Estilos/NavBarStyle.css';
import { Link } from "react-router-dom";




export default function IconoCarrito () {

    return (
        <div className= "icono-carrito">
            <Link to='/cart'>
                
            <FontAwesomeIcon 
                icon={faBagShopping} 
                style={{fontSize:36, color:'rgb(110, 114, 113)'}} 
                className="icono-fontawesome"
            />
            <span className="contador" >0</span>
            </Link>
        </div>
    

    )
}