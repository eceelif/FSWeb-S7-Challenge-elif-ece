// src/components/PizzaForm.js

import React, { useState } from "react";
import "./Form.css"; // Include the CSS file if needed

const Pizza = ({ onFormSubmit }) => {
  const [customerInfo, setCustomerInfo] = useState({
    size: "",
    sauces: [],
    toppings: [],
    substitute: "",
    special_instructions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e, type) => {
    const { value } = e.target;
    const updatedItems = customerInfo[type].includes(value)
      ? customerInfo[type].filter((item) => item !== value)
      : [...customerInfo[type], value];

    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [type]: updatedItems,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(customerInfo);
  };

  const toppingNames = [
    "Margherita Pizza",
    "Pepperoni Pizza",
    "Mushroom Pizza",
    "Hawaiian Pizza",
    "BBQ Chicken Pizza",
    "Vegetarian Pizza",
    "Meat Lovers Pizza",
    "Buffalo Chicken Pizza",
    "Mediterranean Pizza",
    "Pesto Chicken Pizza",
    "White Pizza",
    "Taco Pizza",
    "Alfredo Pizza",
    "Caprese Pizza",
  ];

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label>
        Size:
        <select
          name="size"
          value={customerInfo.size}
          onChange={handleInputChange}
        >
          <option value="">Select size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>

      <label>
        Sauces:
        <div>
          {["tomato", "pesto", "alfredo", "bbq"].map((sauce, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name={`sauce${index}`}
                value={sauce}
                checked={customerInfo.sauces.includes(sauce)}
                onChange={(e) => handleCheckboxChange(e, "sauces")}
              />
              {`${sauce.charAt(0).toUpperCase() + sauce.slice(1)} Sauce`}
            </label>
          ))}
        </div>
      </label>

      <label>
        Toppings:
        <div>
          {toppingNames.map((topping, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name={`topping${index}`}
                value={`topping${index}`}
                checked={customerInfo.toppings.includes(`topping${index}`)}
                onChange={(e) => handleCheckboxChange(e, "toppings")}
              />
              {topping}
            </label>
          ))}
        </div>
      </label>

      <label>
        Substitute:
        <input
          type="text"
          name="substitute"
          value={customerInfo.substitute}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Special Instructions:
        <textarea
          name="special_instructions"
          value={customerInfo.special_instructions}
          onChange={handleInputChange}
        />
      </label>

      
    </form>
  );
};

export default Pizza;
