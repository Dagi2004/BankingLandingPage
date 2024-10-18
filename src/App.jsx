import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

import Home from "./components/Home";
import Blog from "./components/Blog";

import Footer from "./components/Footer";
import Information from "./components/Information";
function App() {
  return (
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <Header />
      <Home />
      <Information />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
