import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "../components/Footer"
import ItemDetailContainer from "../components/ItemDetailContainer"
import ItemListContainer from "../components/ItemListContainer"
import NavBar from "../components/NavBar"

import '../App.css';

const Home = () => {
    return(
        <BrowserRouter>
            <section className="fondoHeader">
                <NavBar />
            </section>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Home;