import React ,{ useState, useEffect } from "react";
// import getItem from "../utils/getItem.js";
import data from "../data/data";
import ItemDetail from "./ItemDetail.js";
// import { useParams } from "react-router-dom";
// import Items from "../components/Item.js";


const ItemDetailContainer = () =>{

    const [item, setItem] = useState({});

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
        getItem(2000, data[0])
            .then((res) => setItem(res))
            .catch(err => console.log(err))
    }, []);

    return(
        <div className="container">
            <ItemDetail item={item}/>
        </div>
    );

}

export default ItemDetailContainer;