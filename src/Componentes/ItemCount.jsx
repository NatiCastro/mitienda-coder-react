import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


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

     const [show, setShow] = useState(false);
  
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
   
    return (
        <>
       <div>
            <div className="contenedor-botones">
                <button className="botones-itemcount" onClick={Resta}>-</button>
                <p className="cantidad-itemcount">{count}</p>
                <button className="botones-itemcount" onClick={Suma}>+</button>
            </div>
            {/* <button className="agregar-carrito" 
            onClick={()=>{  
                            addToCart({id, nombre, precio, count});
                            setCount(1);
                            onAdd(count);
                        }}>
                Agregar al carrito
            </button>    */}
        <Button variant="dark" size="lg" onClick={()=>{handleShow();
                                            addToCart({id, nombre, precio, count});
                                            setCount(1);
                                            onAdd(count);
                                        }}>
          Agregar al carrito
        </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tienda Mainhdra</Modal.Title>
          </Modal.Header>
          <Modal.Body>Agregaste {nombre} al carrito.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Link to={"/cart"} className="ver-carrito">Ver carrito</Link>
          </Modal.Footer>
        </Modal>
        </>
    )
}

