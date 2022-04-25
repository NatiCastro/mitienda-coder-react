import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import '../Estilos/Items.css';
import { Link } from "react-router-dom";


export default function ItemDetail ({producto}) {


    const [cantidad, setCantidad] = useState(0);

    function handleOnAdd (c) {
        setCantidad(c);
    }
    console.log(cantidad);


    return (

                <Card key={producto.id} style={{ width: '24rem' }}>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Precio: $ {producto.precio}</Card.Subtitle>
                    <Card.Text>
                        {producto.descripcion}
                        <br/>
                        Peso Neto: {producto.peso}
                    </Card.Text>
                    <ItemCount  stock={producto.stock} 
                                nombre={producto.nombre} 
                                id={producto.id} 
                                precio={producto.precio} 
                                onAdd={handleOnAdd} />
                    <br/>
                    <Link to={"/cart"} className="ver-carrito">Ver carrito</Link> 
                </Card.Body>
                </Card>     
             
    )
}

