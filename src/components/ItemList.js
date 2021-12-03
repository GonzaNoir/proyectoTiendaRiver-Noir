import Items from "./Item";
// import Cargando from "../utils/Cargando";
import '../css/body.css';

export default function ItemList({productos}){ 
    return(
        <>
            {
                productos.map((producto)=> <Items {...producto}/>)
            }  
        </>
    )
}