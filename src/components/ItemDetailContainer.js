import React ,{ useState, useEffect } from "react";
import { useParams } from "react-router";

import ItemDetail from "./ItemDetail.js";

import { firestoreFetchItem } from "../utils/firestoreFetch"

const ItemDetailContainer = () =>{

    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchItem(idItem)
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