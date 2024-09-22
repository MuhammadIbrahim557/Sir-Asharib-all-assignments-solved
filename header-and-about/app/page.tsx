import React from "react";

import About from "./components/header/header";
import Header from "./components/about/about";
import styles from "../app/styles.home.module.css";
const Home = () => {
  return (
    <div className="bg-blue-900">
      <a className="bg-yellow-100 text-center h-22 text-black text-center font-bold text-4xl md:text-6xl p-4 rounded-lg shadow-lg flex text-center" href="">Home</a>
      
      <About />
      <Header />
    </div>
  );
};
export default Home;
