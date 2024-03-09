// src/components/PizzaItems.js

import React from "react";
import PizzaItem from "./PizzaItem";

const companiesData = [
  { name: "Company 1", workingHours: "9 AM - 5 PM", image: "/Assets/Pizza.png" },
  { name: "Company 2", workingHours: "10 AM - 6 PM", image: "/Assets/Pizza.png" },
  { name: "Company 3", workingHours: "11 AM - 7 PM", image: "/Assets/Pizza.png" },
  { name: "Company 4", workingHours: "9 AM - 5 PM", image: "/Assets/Pizza.png" },
  { name: "Company 5", workingHours: "10 AM - 6 PM", image: "/Assets/Pizza.png" },
  { name: "Company 6", workingHours: "11 AM - 7 PM", image: "/Assets/Pizza.png" },
];

const PizzaItems = () => (
  <div className="company-container">
    {companiesData.map((company, index) => (
      <PizzaItem key={index} company={company} />
    ))}
  </div>
);

export default PizzaItems;
