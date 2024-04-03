import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewIn from './Pages/NewIn'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import SignLogin from './Pages/SignLogin'
import User from './Pages/User'



function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/newin' element = {<NewIn/>} />
        <Route path='/shop' element = {<Shop/>} />
        <Route path='/product' element = {<Product/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/signlogin' element = {<SignLogin/>} />
        <Route path='/user' element = {<User/>} />
      </Routes>
     </BrowserRouter>
    </div >
  );
}

export default App;
