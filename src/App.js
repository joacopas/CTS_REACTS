import React from "react";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Nosotros from "./components/Nosotros";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="#CREATUSPOT" />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route
            path="/category/:category"
            element={<ItemListContainer greeting="Productos" />}
          />
          <Route
            path="/productos"
            element={<ItemListContainer greeting="Todos los porductos" />}
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
