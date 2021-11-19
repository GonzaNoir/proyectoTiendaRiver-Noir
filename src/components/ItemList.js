import Items from "./Item";

export default function ItemList({productos}){ 
    return(
        <>
            {
                productos.map((producto)=> <Items {...producto}/>)
            }  
        </>
    )
}