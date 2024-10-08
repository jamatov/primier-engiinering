import './App.scss';
import './Adaptive.scss'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import ScrollToTop from './Components/ScrollToTop';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScrollToTop/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/онас' element={<About/>}/>
          <Route path='/продукция' element={<Products/>}/>
          <Route path='/новости' element={<News/>}/>
          <Route path='/контакты' element={<Contact/>}/>
          {/* <Route path='/'><Home/></Route>  
          <Route path='/онас'><About/></Route>    
          <Route path='/продукция'><Products/></Route>    
          <Route path='/новости'><News/></Route>    
          <Route path='/контакты'><Contact/></Route>     */}

        </Routes>
      {/* <Header/>  */}
     
      <Footer/>
      <ToastContainer />

      
    </div>
  );
}

export default App;
