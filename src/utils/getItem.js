import Items from "../utils/Item.js";

const getItem = () =>{
    return new Promise ((resolve, reject) =>{
        if(Items.length > 0){
            setTimeout(() => {
                resolve(Items);
            }, 2000);
        }else{
            reject("Cargando...");
        }
    })
}

  
export default getItem;