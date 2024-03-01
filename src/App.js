// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import {Login} from './Sign.js/Login.js';
import { Register } from './Sign.js/Register.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    </BrowserRouter>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       My Project <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Online Food Delivery Service
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
