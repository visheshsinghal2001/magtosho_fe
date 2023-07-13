import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from './components/Register';
import HomeAfterLogin from './components/HomeAfterLogin';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import HomeAround from './components/HomeAround';
import Products from './components/Products';
import Customer from './components/Customer';
import Order from './components/Order';
import Name from './components/Name';
import NotFound from './components/NotFound';
import Accordion from './components/Accordion';


function App() {
  const url=process.env.REACT_APP_URL
  return (
    // <>
    //   <Accordion url={url}/>
    //   <Accordion url={url}/>
    //   <Accordion url={url}/>
    // </>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeAround url={url}></HomeAround>}>
          <Route index element={<Register ></Register>}></Route>
          <Route path="register" element={<Register ></Register>}/>
          <Route path="login" element={<Login  ></Login>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
         <Route path="/user" element={<PrivateRoute ><HomeAfterLogin url={url} /></PrivateRoute>}  >
                      <Route path="products" element={<PrivateRoute> <Products url={url}/></PrivateRoute>}  />
                      <Route path="customers" element={<PrivateRoute> <Customer url={url} /></PrivateRoute>}  />
                      <Route path="orders" element={<PrivateRoute> <Order url={url} /></PrivateRoute>}  />
                      <Route path="name" element={<PrivateRoute> <Name url={url}/></PrivateRoute>}  />
                      <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// data={{
//   authorisation:{
//     token:"urlisGreat"
//   },user:{
//     name:"Vishesh Singhal"
//   }
// }} url={url}