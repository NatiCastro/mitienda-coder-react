import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import '../Estilos/Items.css';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Footer from "./Footer";

export default function ItemListContainer() {

    const [items, setItems] = useState([]);

    const { id } = useParams();

    useEffect(()=>{

        const db = getFirestore();
        
        let productosRef;

        if (id){        
            productosRef = query(collection(db, 'productos'), where("categoria", "==", id));
        } else {
            productosRef = collection(db, 'productos')
        };

        getDocs(productosRef).then((res)=>{
            if (res.size === 0) {
                console.log("Error");
            } else {
                setItems(res.docs.map((item) => ({ id: item.id, ...item.data()})));
            }})

    }, [id]);


    return (
        <>  

            <div className="cards-productos">
                <ItemList productos= {items} />
            </div>

            <Footer />
           
        </>
    );
}

