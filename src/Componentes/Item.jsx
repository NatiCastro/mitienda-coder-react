import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Item ({id, nombre, precio, imagen, idItem}) {

    return (
                <Card key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Container>
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
           $ {precio}
            </Card.Text>
            <Link to={`/item/${idItem}`}>Más info</Link>
        </Card.Body>
        </Container>
        </Card>
    )
    

}