// src/components/HomePage.js

import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // CSS dosyasını ekleyin
const HomePage = () => (
  <div>
    <h1>Teknolojik Yemekler</h1>

    <div className="company-container">
      <div className="company">
        <img src={process.env.PUBLIC_URL + '/Assets/Pizza.png'} alt="Pizza Company 1" />
        <p>Company 1</p>
        <p>Working Hours: 9 AM - 5 PM</p>
      </div>

      <div className="company">
        <img src={process.env.PUBLIC_URL + '/Assets/Pizza.png'} alt="Pizza Company 2" />
        <p>Company 2</p>
        <p>Working Hours: 10 AM - 6 PM</p>
      </div>

      <div className="company">
        <img src={process.env.PUBLIC_URL + '/Assets/Pizza.png'} alt="Pizza Company 3" />
        <p>Company 3</p>
        <p>Working Hours: 11 AM - 7 PM</p>
      </div>
    </div>

    <div className="company-container">
      <div className="company">
        <img src={process.env.PUBLIC_URL + '/Assets/Pizza.png'} alt="Pizza Company 4" />
        <p>Company 4</p>
        <p>Working Hours: 9 AM - 5 PM</p>
      </div>

      <div className="company">
        <img src={process.env.PUBLIC_URL + '/Assets/Pizza.png'} alt="Pizza Company 5" />
        <p>Company 5</p>
        <p>Working Hours: 10 AM - 6 PM</p>
      </div>

      <div className="company">
        <img src={process.env.PUBLIC_URL + '/Assets/Pizza.png'} alt="Pizza Company 6" />
        <p>Company 6</p>
        <p>Working Hours: 11 AM - 7 PM</p>
      </div>
    </div>

    <Link to="/pizza" id="pizza">
      <button>Add to Order</button>
    </Link>
  </div>
);

export default HomePage;
