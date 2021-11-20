import React ,{ useState, useEffect } from "react";
import { useParams } from "react-router";
// import getItem from "../utils/getItem.js";
import data from "../data/data";
import ItemDetail from "./ItemDetail.js";
// import { useParams } from "react-router-dom";
// import Items from "../components/Item.js";


const ItemDetailContainer = () =>{

    const [dato, setDato] = useState({});
    const { idItem } = useParams();
    
    const getItem = (time, task) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.length > 0) {
                    resolve(task);
                } else {
                    reject("Error");
                }
            }, time);
        });
    }

    useEffect(() => {
        getItem(1000, data.find(item => item.id === parseInt(idItem)))
            .then((res) => setDato(res))
            .catch(err => console.log(err))
    }, []);

    return(
        <div className="container">
            <ItemDetail item={dato}/>
        </div>
    );

}

export default ItemDetailContainer;