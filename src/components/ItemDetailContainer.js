import React ,{ useState, useEffect } from "react";
import getItem from "../utils/getItem.js";
import ItemDetail from "./ItemDetail.js";
// import { useParams } from "react-router-dom";
import Items from "../utils/Item.js";


const ItemDetailContainer = () =>{

    // const [item, setItem] = useState({});
    // const { id } = useParams();

    // useEffect(() => {

    //     const getItem = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(Items);
    //             console.log(Items);
    //         }, 2000);
    //     });

    //     getItem()
    //       .then((resolve) => {
    //         setItem(resolve.find((i) => i.id === id));
    //     })
    // }, [id]);

    return(
        <div className="container">
            
            <ItemDetail />
            
        </div>
    );

}

export default ItemDetailContainer;