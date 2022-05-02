import React, { useState, useEffect, useContext } from "react";
import "../Estilos/Items.css";
import { CartContext } from "./CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function FormularioCompra() {

    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);
   
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [phone, setPhone] = useState('');

    //Función para subir la venta a Firestore con mensaje de "Compra exitosa"
    function terminarCompra() {

            let buyer = {

            buyer: { name, phone, email },

            items: [...cart],

            total: precioTotal,

            }; 
            console.log(buyer);

        const db = getFirestore();

        const ventasrRef = collection(db, 'ventas');

        addDoc(ventasrRef, buyer).then(({id})=> {
            alert('Tu compra fue exitosa! El id de tu compra es: '+ id);
            console.log(id);
        })
    }

    //Función para vaciar los input
    function resetearInput () {
        setName('');
        setEmail('');
        setPhone('');
    }

    //Función para "disabled" en botón finalizar compra
    function validarTodo() {
        return (cart.length===0 ||
                name.length===0 ||
                email.length===0 ||
                phone.length===0)
    }

    //Función prevent default
    const handleSubmit = (e) => {
        e.preventDefault();
      }

    useEffect(() => {

        console.log(name, email, phone);

    }, [name, email, phone]);

    return (

            <>
             {cart.map((c) => (
            <div className="carrito" key={c.id}>
                <ul>
                    <li>
                        <b>Producto:</b> {c.nombre} | 
                        <b> Precio:</b> $ {c.precio} | 
                        <b> Cantidad:</b> {c.count}  
                    </li>
                </ul>  
            </div>))}
            <h5 style={{textAlign:'center'}}><b> Total:</b> $ {precioTotal}  </h5>
            <br />
            <p style={{textAlign:'center'}}>Por favor, llene con sus datos para continuar con la compra</p>
            <div>
                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <label className="form-label" htmlFor={"name"}>Nombre</label>
                    <input className="form-input"
                            type="text"
                            value={name}
                            placeholder={"Campo requerido"}
                            onChange={(e)=>setName(e.currentTarget.value)}
                    />

                    <label className="form-label" htmlFor={"email"}>Email</label>
                    <input className="form-input"
                            type="email" 
                            placeholder={"Campo requerido"}
                            value={email}
                            required={true}
                            onChange={(e)=>setEmail(e.currentTarget.value)}
                    />
                    
                    <label className="form-label" htmlFor={"phone"}>Celular</label>
                    <input className="form-input"
                            type="number"
                            placeholder={"Campo requerido"} 
                            value={phone}
                            required={true}
                            onChange={(e)=>setPhone(e.currentTarget.value)}

                    /> 
                    <br />
                <button className="boton-comprar"   type="submit"
                                                    disabled={validarTodo()} 
                                                    onClick={()=>{
                                                                    terminarCompra();
                                                                    vaciarCarrito();
                                                                    resetearInput();
                                                            }}>Finalizar Compra</button> 
                </form>
            </div>
        
            </>
    )
}

    