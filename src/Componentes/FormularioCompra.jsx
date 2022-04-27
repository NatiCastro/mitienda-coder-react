// import React, { useState, useEffect, useContext } from "react";
// import { CartContext } from "./CartContext";
// //import { doc, getDoc, getFirestore } from "firebase/firestore";

// export default function FormularioCompra() {

//     const { cart, precioTotal } = useContext(CartContext);
   
//     const [name, setName] = useState('');

//     const [email, setEmail] = useState('');

//     const [phone, setPhone] = useState('');

// function terminarCompra() {

//         let buyer = {

//         buyer: { name, phone, email },

//         items: [...cart],

//         total: precioTotal,

//         }; 

//         console.log(buyer);
// }

//     // useEffect(() => {

//     //     console.log(name, email, phone);

//     // }, [name, email, phone]);

//     return (

//             <>
//                 <input type={"text"} 
//                         value={name}
//                         onChange={(e)=>{setName(e.currentTarget.value)}}

//                 />
//                 <input type={"email"} 
//                         value={email}
//                         onChange={(e)=>setEmail(e.currentTarget.value)}

//                 />
//                 <input type={"number"} 
//                         value={phone}
//                         onChange={(e)=>setPhone(e.currentTarget.value)}

//                 />

//             <button onClick={terminarCompra()}>COMPRAR</button> 

//             </>
//     )
// }

    