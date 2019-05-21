import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Defaults from './components/Defaults';

function App() {
  return (
    <React.Fragment>
      Hello Form App
      <Navbar></Navbar>
      <ProductList></ProductList>
      <Details></Details>
      <Defaults></Defaults>
    </React.Fragment>
  );
}

export default App;
