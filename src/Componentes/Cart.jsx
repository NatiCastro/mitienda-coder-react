import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Estilos/Items.css";
import { CartContext } from "./CartContext";

export default function Cart() {

    const {cart, removerItem, precioTotal, cantidadTotal } = useContext(CartContext);

    console.log(cart);

    let noStock = false;
    

    return (
        <>
       
        <h2 className="titulo-cart">Mi carrito de compras</h2>

        {/* Condicional para sacar mensaje de "Tu carrito está vacío" */}

        {cart.length >= 1 ?  cart.map((c) => (
            <div className="carrito" key={c.id}>
                <ul>
                    <li>
                        <b>Producto:</b> {c.nombre} | 
                        <b> Precio:</b> $ {c.precio} | 
                        <b> Cantidad:</b> {c.count} | 
                        <b> Total:</b> $ {c.precio * c.count}  
                        <button className="boton-remover" onClick={() => removerItem(c.id)}> Remover </button>                    
                        {c.stock < c.count  ?  (<p style={{color:'red', textAlign: 'center'}}>
                                                No hay suficiente stock de este producto {noStock=true}</p>                                                                                    
                                            ) : ( <p></p>
                        )}
                    </li>
                </ul>  
            </div>))   : 

            <div className="carrito">
                <h2>Tu Carrito está vacío</h2>
                <Link to= {"/"} className="ir-a-tienda">Ir a Tienda</Link>
            </div>
        }

        {cart.length >= 1 ? 
            <div className="contenedor-boton-comprar">
                <p><b>Precio Total: </b>$ {precioTotal}</p>
                <p><b>Cantidad Total: </b>{cantidadTotal()}</p>
                <Link to= {"/orderform"}>
                <button type="button" className="boton-comprar" disabled={noStock}>Comprar</button>               
                </Link>
            </div>  :
            <div></div>     
        }
        </>
   
        
    )
}