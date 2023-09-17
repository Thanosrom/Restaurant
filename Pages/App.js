//React
import React from 'react';
//Pages
import Home from "./Home";
import Informations from "./Informations";
import Order from "./Order";
//CSS
import '../CSS/App.css';
//Other libs
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import {CartProvider,CartContext} from "./CartProvider";

function App() {
  return (
    <CartProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Informations/:dishID" element={<Informations />} />
            <Route path="/Order" element={<Order />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </CartProvider>
  );
}

export default App;
