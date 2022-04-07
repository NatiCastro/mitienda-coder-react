//Promesa para ItemDetailContainer

let isOk = true;

const getItems = (time, task) => {
    return new Promise ((resolve, reject) => {

        setTimeout (() => {
            if (isOk) {
                resolve(task);
            } else {
                reject('Error');
            }

        }, time)}
    
    
    )
}

export default getItems;
