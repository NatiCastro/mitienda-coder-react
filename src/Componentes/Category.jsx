// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ItemList from "./ItemList";
// import productos from "../Utils/productos";




// export default function Category () {

//     const {id} = useParams();

//     const [producto, setProducto] = useState([]);

//     useEffect(() => {
       
//         if (id === "aceites") {
//             setProducto(productos.filter(p=>p.categoria ==="aceites"))        

//         } else if (id === "cremas") {
//             setProducto(productos.filter(p=>p.categoria ==="cremas"))

//         } else  {
//             console.log("no existe")

//         }

//     }, [id]);

//     return (
//         <div className="cards-productos">
//             <ItemList productos={producto} /> 
//         </div>

      
//     )
// }