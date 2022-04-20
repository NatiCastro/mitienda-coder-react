import React, {useContext} from "react";
import "../Estilos/Items.css";
import { CartContext } from "./CartContext";

export default function Cart() {

    const {cart, removerItem, comprarTodo } = useContext(CartContext);
    console.log(cart);
    return (
        <>
        <h2 className="titulo-cart">Mi carrito de compras</h2>

        {cart.map((c) => (
            <div className="carrito" key={c.id}>
                <ul>
                    <li>
                        <b>Producto:</b> {c.nombre} | 
                        <b> Precio:</b> $ {c.precio} | 
                        <b> Cantidad:</b> {c.count}
                        <button className="boton-remover" onClick={() => removerItem(c.id)}> Remover </button>
                    </li>
                </ul>  
            </div>
        ))}

        <div className="contenedor-boton-comprar">
            <button className="boton-comprar" onClick={()=>comprarTodo()}>Comprar</button>
        </div>
        </>
        
        
        
        
    )
}