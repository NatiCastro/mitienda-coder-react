import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import '../Estilos/Items.css';
import { useParams } from "react-router-dom";
import { categorys } from "../Utils/promises";

export default function ItemListContainer() {

    const [items, setItems] = useState([]);
    
    const {id} = useParams();
    
    useEffect(() => {

        console.log(id);
        
        categorys(id)

        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
       

    }, [id])

    return (
        <>  

        <div className="cards-productos">

            <ItemList productos= {items} />


        </div>
            
        </>
    );
}

