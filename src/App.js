import Home from './pages/Home.js'
import ProductList from './pages/ProductList.js'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Login from './pages/Login'

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/ProductList" element={<ProductList/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
    </Routes>
   </Router>
  );
}

export default App;
