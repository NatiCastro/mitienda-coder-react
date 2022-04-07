import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

export default function ItemDetail ({productos}) {
    //Filtro un producto de mi array por Id
    const filtro = productos.filter(p =>(p.id===2))
    
    console.log(filtro);

    return (
        
            filtro.map (f => (
                <Card key={f.id} style={{ width: '24rem' }}>
                <Card.Img variant="top" src={f.imagen} />
                <Card.Body>
                    <Card.Title>{f.nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Precio: $ {f.precio}</Card.Subtitle>
                    <Card.Text>
                        {f.descripcion}
                        <br/>
                        Peso Neto: {f.peso}
                    </Card.Text>
                    <ItemCount stock={f.stock} />
                </Card.Body>
                </Card>
            
            ))      
            
    )
}

