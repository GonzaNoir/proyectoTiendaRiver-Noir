import { collection, doc, setDoc, updateDoc, increment, serverTimestamp } from '@firebase/firestore';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/body.css';
import db from '../utils/firebaseConfig';
import { CartContext } from './CartContext';

const Cart = () =>{
    
    const context = useContext(CartContext);

    const crearOrden = () => {

        const itemsDataBase = context.listaCarrito.map(item => ({
            id: item.idItem,
            title: item.nameItem,
            precio: item.costItem,
            cantidad: item.qtyItem
        }))

        context.listaCarrito.forEach(async (item) => {
            const itemRef = doc(db, "Item", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(- item.qtyItem)
            });
        });

        let orden = {
            comprador: {
                nombre: "Gonzalo Noir",
                email: "gonza@noir.com",
                telefono: "2244667788"
            },
            total: context.calcTotal(),
            items: itemsDataBase,
            date: serverTimestamp()
        };

        console.log(orden);
        
        const crearOrdernFirestore = async () => {
            const referenciaNuevaOrden = doc(collection(db, "ordenes"));
            await setDoc(referenciaNuevaOrden, orden);
            return referenciaNuevaOrden;
        }

        crearOrdernFirestore()
            .then(result => alert("Su orden fue creada con Exito! \nEste es su numero de orden: " + result.id ))
            .catch(err => console.log(err))
            .finally(context.vaciarCarrito())
    }

    return(
        <div className="container paddingCart">
            <div className="row">
                <h1 className="col-lg-12 titulosBody fontStyle">Carrito de Compras</h1>
            </div>
            <div className="row flexBtns">
                {
                    (context.listaCarrito.length > 0)
                    ? <button className="col-lg-6 fontStyle" type="button" className="btn btn-secondary fontStyle" onClick={context.vaciarCarrito}>VACIAR CARRITO</button>
                    : <div className='col-lg-12 paddingCartEmpty fontStyle'><h2 className="">El Carrito se encuentra vacio.</h2><Link to='/'><button type="button" className="btn btn-outline-dark" style={{textDecoration: "none", color: "black"}}>Continuar Comprando</button></Link></div>
                }
                
                {
                    (context.listaCarrito.length > 0)
                    ? <h5 className="col-lg-2 totalCompra fontStyle">Total: $ {context.calcTotal()}</h5>
                    : <h5></h5>
                }
                {  
                    (context.listaCarrito.length > 0)
                    ? <button type="button" className="col-lg-2 btn btn-outline-success fontStyle" onClick={crearOrden}>Comprar</button>
                    : <h3></h3>
                }
            </div>
            {
                context.listaCarrito.length > 0 ?
                <div className="row fontStyle">
                    <h2 className="col-lg-8">PRODUCTO</h2>
                    <h2 className="col-lg-4">CANTIDAD</h2>
                    <hr className="col-lg-12"/>
                </div>
                : <h2></h2>
            }
            {
                context.listaCarrito.length > 0 ?
                <div className='row flexCart fontStyle'>
                    <h3 className='col-lg-2'></h3>
                    <h3 className='col-lg-5'></h3>
                    <h3 className='col-lg-1 totalPorItemPrecio'>Precio X Item</h3>
                    <h3 className='col-lg-1 totalPorItem'>Subtotal</h3>
                    <h3 className='col-lg-1'></h3>
                </div>
                : <h2></h2>
            }
            {
                context.listaCarrito.length > 0 ?
                context.listaCarrito.map(item =>
                    <div className="row flexCart fontStyle" key={item.idItem}>
                        <img className="col-lg-2 imgCart" src={item.imgItem}/>
                        <h5 className="col-lg-3">{item.nameItem}</h5>
                        <h3 className="col-lg-1  totalPorItem">{item.qtyItem} item(s)</h3>
                        <h5 className="col-lg-1 totalPorItem">$ {item.costItem} </h5>
                        <h5 className="col-lg-1 totalPorItem">$ {context.calcTotalPorItem(item.idItem)} </h5>
                        <button className="col-lg-4" type="button" className="btn btn-danger" onClick={() => context.borrarItem(item.idItem)}>BORRAR</button>
                    </div>
                )
                : <h1 className=""></h1>
            }
        </div>
    )
}

export default Cart;