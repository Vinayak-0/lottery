import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,
  Route } from "react-router-dom";
import LotteryCreate from "./components/lottery-create"
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Register from './components/register';


ReactDOM.render(
  <>
  
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="create-lottery" element={<LotteryCreate />} />
      <Route path="register" element={<Register />} />
      <Route path="" element={<App />} />
    </Routes>

  </BrowserRouter>
  <Footer/>
  </>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
