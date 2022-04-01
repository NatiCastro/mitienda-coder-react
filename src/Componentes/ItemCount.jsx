import React from "react";


export default function ItemCount ({texto, sumaOResta}) {
    return (
        <>
        <button 
                className= 'botones-itemcount'
                onClick= { sumaOResta } > 
                
                {texto}
                        
        </button>
        
  </>
    )
}


