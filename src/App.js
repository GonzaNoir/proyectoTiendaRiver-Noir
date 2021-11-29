import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import CartContextProvider from "./components/CartContext"

import './App.css';

const App = () => {
    return(
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;
