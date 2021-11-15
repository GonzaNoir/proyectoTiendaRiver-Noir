import { useEffect } from "react";
import Items from "./Item.js";

export default function ItemList(props){

    const productosPromise = (timeout, data) =>{
        return new Promise ((resolve, reject) =>{
            if(Items.length > 0){
                setTimeout(() => {
                    resolve(data);
                }, timeout);
            }else{
                reject();
            }
        })
    }
    
    
    useEffect(()=>{
        productosPromise(2000, Items)
            .then(() => console.log(Items[props.item].name))
            .catch(() => console.log("No hay productos"))
            
    },[])

    return(
        <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{Items[props.item].name}</h4>
                    <img src={Items[props.item].imagen} alt={Items[props.item].name} className="img-fluid"/>
                    <p className="card-text">Stock: {Items[props.item].stock}</p>
                    <p className="card-text">${Items[props.item].cost}</p>
                </div>
            </div>
        </div>
    )
    
}