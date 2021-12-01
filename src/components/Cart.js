import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/body.css';
import { CartContext } from './CartContext';

const Cart = () =>{
    
    const context = useContext(CartContext);
    return(
        <div className="container">
            <div className="row">
                <h1 className="col-lg-12 titulosBody">Carrito de Compras</h1>
            </div>
            <div className="row flexBtns">
                {
                    (context.listaCarrito.length > 0)
                    ? <button className="col-lg-8" type="button" className="btn btn-secondary" onClick={context.vaciarCarrito}>VACIAR CARRITO</button>
                    : <h2 className="col-lg-8">El Carrito se encuentra vacio.</h2>
                }
                <Link to='/'><button className="col-lg-2" type="button" className="btn btn-outline-dark" style={{textDecoration: "none", color: "black"}}>Continuar Comprando</button></Link>
                {  
                    (context.listaCarrito.length > 0)
                    ? <h5 className="col-lg-2">Total: $ {context.calcTotal()}</h5>
                    : <h3></h3>
                }
            </div>
            {
                context.listaCarrito.length > 0 ?
                <div className="row">
                    <h2 className="col-lg-7">PRODUCTO</h2>
                    <h2 className="col-lg-5">CANTIDAD</h2>
                    <hr className="col-lg-12"/>
                </div>
                : <h2></h2>
            }
            {
                context.listaCarrito.length > 0 ?
                context.listaCarrito.map(item =>
                    <div className="row flexCart" key={item.idItem}>
                        {/* {
                            console.log(item.imgItem)
                        } */}
                        <img className="col-lg-2 imgCart" src={item.imgItem}/>
                        <h5 className="col-lg-3">{item.nameItem}</h5>
                        <h3 className="col-lg-1 totalPorItem">{item.qtyItem} item(s)</h3>
                        <h5 className="col-lg-1 totalPorItem">$ {item.costItem} </h5>
                        <h5 className="col-lg-1 totalPorItem">$ {context.calcTotalPorItem(item.idItem)} </h5>
                        <button className="col-lg-2" type="button" className="btn btn-danger" onClick={() => context.borrarItem(item.idItem)}>BORRAR</button>
                    </div>
                )
                : <h1 className=""></h1>
            }
            <div className="row">
                
            </div>
        </div>
    )
}

export default Cart;