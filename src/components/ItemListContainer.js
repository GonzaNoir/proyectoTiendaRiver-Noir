import '../css/body.css';
import ItemList from './ItemList';
// import Item from "../data/data.js"
import firestoreFetch from '../utils/firestoreFetch';  
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Cargando from '../utils/Cargando';

export default function ItemListContainer(){

    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();
    const [cargando, setCargando] = useState(true);

    

    // ComponentDidUpdate
    useEffect(() => {
        firestoreFetch(categoryId)
            .then(result => setProductos(result))
            .catch(err => console.log(err))
            .finally(() => setCargando(false));
    }, [categoryId]);

    // ComponentWillUnmount
    useEffect(() => {
        return (() => {
            setProductos([]);
        })
    }, []);

    return(
        <div className="container">
            <div className="row">
                <h1 className="titulosBody col-lg-12"><em>Lista de Productos</em></h1>
            </div>
            {
                cargando ? (
                    <div className="centerCargando"><Cargando /></div>
                ) : (
                    <div className="row">
                        <ItemList productos={productos}/>
                    </div>
                )
            }
            
            
        </div>
    )
}