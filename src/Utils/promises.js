//Promesa para ItemListContainer(categorías de productos)

import productos from "./productos";

export const categorys = (id) => {

    return new Promise ((resolve, reject) => {

        setTimeout(()=> {

            let categoria;

            if ((id==="cremas")||(id==="aceites")){
                    categoria = productos.filter(p => p.categoria === id);
            } else {
                    categoria = productos;
            }
            if (categoria) {
                resolve(categoria);

            } else {
                reject("Error")
            }
        }, 2000);
    })
}

//Promesa para ItemDetailContainer(detalle de producto)

export const getItemDetail = (idItem) => {

    return new Promise ((resolve, reject) => {

        setTimeout(()=> {

            let detalleItem = productos.find(p => p.id === parseInt(idItem));

            if (detalleItem) {
                resolve(detalleItem);

            } else {
                reject("Error")
            }
        }, 1000);
    })
}