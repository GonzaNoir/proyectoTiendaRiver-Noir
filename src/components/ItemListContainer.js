import '../css/body.css';
// import ItemCount from './ItemCount.js';
import ItemList from './ItemList';
import Item from "../data/data.js"
import { useState, useEffect } from 'react';

export default function ItemListContainer(){

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getItem = new Promise((res) => {
          setTimeout(() => {
            res(Item);
          }, 2000);
        });
        getItem.then((data) => {
            setProductos(data);
        });
    }, []);

    return(
        <>
            <div className="container">
                <div className="row">
                    <h1 className="titulosBody col-lg-12"><em>Lista de Productos</em></h1>
                </div>
                <div className="row">
                    
                    <ItemList productos={productos}/>
                    
                    {/* <ItemCount stock={10} initial={1}/>
                    <ItemCount stock={10} initial={1}/>
                    <ItemCount stock={10} initial={1}/> */}

                </div>
                
            </div>
        </>
    )
}