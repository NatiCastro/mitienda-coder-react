import React from "react";
import "../Estilos/Items.css";
import { useState, useEffect } from "react";
import '../Estilos/Items.css';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../Utils/promises";


export default function ItemDetailContainer() {
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idItem} = useParams();

    useEffect(() => {
        console.log(idItem);
        
        getItemDetail(idItem)

        .then(resultado => setItems(resultado))
        .catch(error => console.log(error))
        .finally(() => {
            setLoading(false);
        });

    }, [idItem])

    console.log(items)

    return (
        <>  
            {loading ? (

                <h3 className="text-loading">Cargando producto...</h3>

            ) : (
                <div className="card-producto">

                    <ItemDetail producto= {items} />
    
                </div>
            )}
            
        </>
    )
}


    