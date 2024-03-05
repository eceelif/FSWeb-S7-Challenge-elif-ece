// src/components/PizzaForm.js

import React, { useState } from "react";
import Pizza from "./Pizza"

const PizzaForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [pizzaSize, setPizzaSize] = useState("");
  const [selectedSauces, setSelectedSauces] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [substitute, setSubstitute] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  
  
  const handleNameChange = (e) => {
    setName(e.target.value);
    setError("");
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 2) {
      setError("İsim en az 2 karakter olmalıdır");
    } else {
        onFormSubmit({
            name,
            pizzaSize,
            selectedSauces,
            selectedToppings,
            substitute,
            specialInstructions,
          });
    }
  };

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      {/* İsim */}
      <label>
        İsim:
        <input
          type="text"
          id="name-input"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <div style={{ color: "red" }}>{error}</div>
      <label>
        <Pizza />
      </label>

    

      {/* Siparişi Tamamla Butonu */}
      <button id="order-button" type="submit">Siparişlere Ekle</button>
    </form>
  );
};

export default PizzaForm;
