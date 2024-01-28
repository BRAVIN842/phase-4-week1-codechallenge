import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Hero from "./Hero";
import HeroPowerForm from "./HeroPowerForm";
import Power from "./Power";
import PowerEditForm from "./PowerEditForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes/:id" element={<Hero />} />
        <Route path="/powers/:id" element={<Power />} />
        <Route path="/powers/:id/edit" element={<PowerEditForm />} />
        <Route path="/hero_powers/new" element={<HeroPowerForm />} />
      </Routes>
    </Router>
  );
}

export default App;