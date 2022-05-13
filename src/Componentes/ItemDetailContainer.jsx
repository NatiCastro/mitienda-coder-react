import React from "react";
import "../Estilos/Items.css";
import { useState, useEffect } from "react";
import '../Estilos/Items.css';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';


export default function ItemDetailContainer() {
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idItem } = useParams();

    useEffect(()=>{
        setTimeout(()=> {

        const db = getFirestore();
       
        const productosRef = doc(db, 'productos', idItem);

        getDoc(productosRef).then((res)=> setItems({id: res.id, ...res.data()}))
                            .catch(error=> console.log(error))
                            .finally(() => setLoading(false));

                        }, 1000);

    }, [idItem]);

    return (
        <>  
        {loading ? (
                <div className="spinner">
                    <Spinner animation="grow" variant="secondary" />
                </div>
                ) : (

                <div className="card-producto">

                    <ItemDetail producto= {items} />
    
                </div>
        ) }
            
        </>
    )
}


    