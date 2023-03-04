import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

function App() {
  let Component;

  switch (window.location.pathname) {
    case "/about":
      Component = <About />;
      break;
    case "/pricing":
      Component = <Pricing />;
      break;
    default:
      Component = <Home />;
  }

  return (
    <>
      <Navbar />
      <div className="container">{Component}</div>
    </>
  );
}

export default App;
