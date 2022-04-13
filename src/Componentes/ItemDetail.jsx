import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

export default function ItemDetail ({producto}) {
 
    console.log(producto)
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
                    <ItemCount stock={producto.stock} />
                </Card.Body>
                </Card>     
             
    )
}

