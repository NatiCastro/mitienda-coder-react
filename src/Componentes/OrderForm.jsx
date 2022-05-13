import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Estilos/Items.css";
import { CartContext } from "./CartContext";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { useForm } from 'react-hook-form';

export default function FormularioCompra() {

    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);

    const [idCompra, setIdCompra] = useState("");

    const [disabled, setDisabled] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
   

    //Función para subir la venta a Firestore con mensaje de "Compra exitosa"
    function terminarCompra(data) {

        console.log('Procesando...');    

        setDisabled(true);

            let buyer = {

                buyer: data,

                items: [...cart],

                date: serverTimestamp(),

                total: precioTotal,

            }; 
            console.log(buyer);

        const db = getFirestore();

        const ventasrRef = collection(db, 'ventas');

        addDoc(ventasrRef, buyer).then(({id})=> {
                                    setIdCompra(id)
                                    console.log(id);
                                    vaciarCarrito();
                                    reset();
                                })
                                .catch(error=> console.log(error))
        
    }


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

            {cart.length >= 1 ? (     
            <div>
            <p style={{textAlign:'center'}}>Por favor, llene con sus datos para continuar con la compra</p>
            <form className="form" onSubmit={handleSubmit(terminarCompra)}>
                <label className="form-label" htmlFor={"name"}>Nombre</label>
                <input className="form-input" 
                        type="text" 
                        name="name" 
                        placeholder="Nombre"{...register("name", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
                        {errors.name?.type === 'required' && <p className="errors">Campo Requerido</p>}
                <label className="form-label" htmlFor={"lastname"}>Apellido</label>
                <input className="form-input" 
                        type="text" 
                        placeholder="Apellido" {...register("LastName", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
                        {errors.LastName?.type === 'required' && <p className="errors">Campo Requerido</p>}
                <label className="form-label" htmlFor={"email"}>Email</label>
                <input className="form-input" 
                        type="email" 
                        placeholder="Email" {...register("Email", { required: true, min: 5, maxLength: 60, pattern: /^\S+@\S+$/i })} />
                        {errors.Email?.type === 'required' && <p className="errors">Campo Requerido</p>}
                <label className="form-label" htmlFor={"phone"}>Teléfono</label>
                <input className="form-input" 
                        type="tel" 
                        placeholder="Teléfono" {...register("phone", { required: true, minLength: 10, maxLength: 10, pattern: /[0-9]+/i })} />
                        {errors.phone?.type === 'required' && <p className="errors">Completa tu teléfono</p>}
                        {errors.phone?.type === 'maxLength' && <p className="errors">Debe contener 10 caracteres</p>}
                        {errors.phone?.type === 'pattern' && <p className="errors">Debe contener solo números </p>}
                <input className="boton-comprar" 
                        type="submit" 
                        value="Comprar"
                        disabled={disabled}>
                </input>
            </form>
                </div> ) : (
                <div className="carrito">
                <h2>Tu Carrito está vacío</h2>
                <Link to= {"/"} className="ir-a-tienda">Ir a Tienda</Link>
            </div>)
            }
            {idCompra === "" ? "" : (<p className="mensaje-compra"> COMPRA EXITOSA!!! <br /> 
                                                                    Tu código de compra es : {idCompra}</p>
                                    )
            }
            </>
    )
}

    