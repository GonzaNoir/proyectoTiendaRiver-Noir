import '../css/body.css';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList';

export default function ItemListContainer(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <h1 className="titulosBody col-lg-12"><em>Lista de Productos</em></h1>
                </div>
                <div className="row">
                    {/* <h1 className="col-lg-8 productosFlex">Producto de Prueba</h1> */}
                    <ItemList item={0}/>
                    <ItemList item={1}/>
                    <ItemList item={2}/>
                    <ItemCount stock={10} initial={1}/>
                    <ItemCount stock={10} initial={1}/>
                    <ItemCount stock={10} initial={1}/>

                </div>
                
            </div>
        </>
    )
}