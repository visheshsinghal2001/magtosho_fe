import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import HomeAround from './components/HomeAround';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeAround></HomeAround>}>
          <Route path="register" element={<Register></Register>}/>
          <Route path="login" element={<Login></Login>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
