import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../Estilos/Items.css";

export default function Item ({id, nombre, precio, imagen, idItem}) {

    return (
                <Card key={id} style={{ width: '18rem', height: '28rem' }}>
        <Card.Img variant="top" src= {imagen} />
        <Container>
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
           $ {precio}
            </Card.Text>
            <Link to={`/item/${idItem}`} className="link-masinfo">Más info</Link>
        </Card.Body>
        </Container>
        </Card>
    )
    

}