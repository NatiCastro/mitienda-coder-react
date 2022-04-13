import React from "react";
import { useState, useEffect } from "react";
import '../Estilos/Items.css';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../Utils/promises";


export default function ItemDetailContainer() {
    
    const [items, setItems] = useState([]);
    const {idItem} = useParams();

    useEffect(() => {
        console.log(idItem);
        
        getItemDetail(idItem)

        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
        

    }, [idItem])

    console.log(items)
    return (
        <>  

        <div className="card-producto">

            <ItemDetail producto= {items} />

        </div>
            
        </>
    );
}


    