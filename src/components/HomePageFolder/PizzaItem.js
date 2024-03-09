// src/components/PizzaItem.js

import React from "react";

const PizzaItem = ({ company }) => (
  <div className="company">
    <img src={process.env.PUBLIC_URL + company.image} alt={company.name} />
    <p>{company.name}</p>
    <p>Working Hours: {company.workingHours}</p>
  </div>
);

export default PizzaItem;
