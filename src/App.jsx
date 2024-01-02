import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Filters from "./components/Filters";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Favourites from "./Pages/Favourite";

function App() {
  return (
    <>
      <Favourites />
    </>
  );
}

export default App;
