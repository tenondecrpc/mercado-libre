import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </>
  );
};

export default App;
