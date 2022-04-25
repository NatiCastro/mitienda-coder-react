import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../Estilos/Items.css";
import { CartContext } from "./CartContext";

export default function Cart() {

    const {cart, removerItem, comprarTodo, precioTotal, cantidadTotal } = useContext(CartContext);
    console.log(cart);
 

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
                    </li>
                </ul>  
            </div>)) : 

            <div className="carrito">
                <h2>Tu Carrito está vacío</h2>
                <Link to= {"/"} className="ir-a-tienda">Ir a Tienda</Link>
            </div>
        }

        <div className="contenedor-boton-comprar">
            <p><b>Precio Total: </b>$ {precioTotal}</p>
            <p><b>Cantidad Total: </b>{cantidadTotal()}</p>
            <button className="boton-comprar" onClick={()=>comprarTodo()}>Terminar mi compra</button>
        </div>       
        
        </>
   
        
    )
}