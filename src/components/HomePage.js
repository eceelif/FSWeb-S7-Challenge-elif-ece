// src/components/HomePage.js

import "./HomePage.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import PizzaItems from "./HomePageFolder/PizzaItems";



const HomePage = () => (
  <div>
    <h1>Teknolojik Yemekler</h1>
    <Header />
    <PizzaItems />
    <Link to="/pizza" id="pizza">
      <button>Add to Order</button>
    </Link>
  </div>
);

export default HomePage;
