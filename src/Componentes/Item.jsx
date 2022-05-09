import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../Estilos/Items.css";

export default function Item ({id, nombre, precio, imagen, idItem}) {

    return (
        <Link to={`/item/${idItem}`} className={"card-item"}>
                <Card key={id} style={{ width: '18rem', 
                height: '28rem', 
                borderRadius: '10px', 
                boxShadow: '2px 2px 2px rgba(110, 114, 113, 0.274)' }}>
        <Card.Img variant="top" src= {imagen} />
        <Container>
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
           Precio: $ {precio}
            </Card.Text>   
        </Card.Body>
        </Container>
        </Card>
        </Link>
    )
    

}