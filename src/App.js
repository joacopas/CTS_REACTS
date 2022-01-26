import React from "react";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <body className="App">
      <NavBar />
      <ItemListContainer greeting="CREA TU SPOT" />
    </body>
  );
}

export default App;
