import Items from "./Item";

export default function ItemList({productos}){ 
    return(
        <>
            {
                productos.length > 0
                ? productos.map((producto)=> <Items {...producto}/>)
                : <h1>Cargando...</h1>
            }  
        </>
    )
}