import React from "react";
import { useState, useEffect } from "react";
import getItems from "../Utils/getItems";
import productos from "../Utils/productos";
import '../Estilos/Items.css';
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const [items, setItems] = useState([]);

    //UseEffect
    useEffect(() => {

        getItems(2000, productos)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));

    }, [items])

    return (
        <>  

        <div className="card-producto">

            <ItemDetail productos= {items} />

        </div>
            
        </>
    );
}