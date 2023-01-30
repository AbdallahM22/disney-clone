import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Login from "./pages/Login";
import WatchList from "./pages/WatchList";
import Movies from "./pages/Movies";
import Original from "./pages/Original";
import Series from "./pages/Series";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/original" element={<Original />} />
        <Route path="/series" element={<Series />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
