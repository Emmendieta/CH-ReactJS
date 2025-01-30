import Navbar from './components/header/Navbar/Navbar';
import Home from './components/body/Home';
import Error from './components/body/error/Error';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from './components/body/itemListContainer/ItemDetailContainer/ItemDetail/ItemDetail';
import ItemListContainer from './components/body/itemListContainer/ItemListContainer';
import { CartProvider } from './assets/Context/cartContext.jsx';
import Cart from './components/body/Cart/Cart.jsx'; 

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path='productos/:categoria/:id' element={<ItemDetail />} />
                        <Route path='categoria/:categoria' element={<ItemListContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
