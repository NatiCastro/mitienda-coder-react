import React from "react";
import { useState, useEffect } from "react";
import customFetch from "../Utils/customFetch";
import productos from "../Utils/productos";
import ItemList from "./ItemList";
import '../Estilos/Items.css';

export default function ItemListContainer() {

    const [items, setItems] = useState([]);

    //UseEffect
    useEffect(() => {

        customFetch(5000, productos)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));

    }, [items])

    return (
        <>  

        <div className="cards-productos">

            <ItemList productos= {items} />

        </div>
            
        </>
    );
}