import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from './components/Register';
import HomeAfterLogin from './components/HomeAfterLogin';
import Login from './components/Login';

import HomeAround from './components/HomeAround';
import Products from './components/Products';
import Customer from './components/Customer';
import Order from './components/Order';
import Name from './components/Name';

function App() {
  const url="http://157.230.14.52:9089/api"
  return (
  
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeAround url={url}></HomeAround>}>
          <Route index element={<Register ></Register>}></Route>
          <Route path="register" element={<Register ></Register>}/>
          <Route path="login" element={<Login  ></Login>}/>
        </Route>
        <Route path="/user" element={
        <HomeAfterLogin data={{
          authorisation:{
            token:"urlisGreat"
          },user:{
            name:"Vishesh Singhal"
          }
        }} url={url}>

        </HomeAfterLogin>
        }>
          <Route path="products" element={<Products></Products>} />
          <Route path="customers" element={<Customer></Customer>} />
          <Route path="orders" element={<Order></Order>} />
          <Route path="name" element={  <Name></Name>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
