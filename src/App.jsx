import Navbar from './components/header/Navbar/Navbar';
import ItemListContainer from './components/body/itemListContainer/ItemListContainer';
import Footer from './components/footer/Footer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 



function App() {

  return (
    <>
    <Navbar/>
    <ItemListContainer mensaje= "Mensaje de Bienvenida correspondiente a la Pre-Entrega N° 1"/>
    <Footer/>
    </>
  )
}

export default App


