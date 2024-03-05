// src/components/PizzaForm.js

import React, { useState } from "react";

const PizzaForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [pizzaSize, setPizzaSize] = useState("");
  const [selectedSauces, setSelectedSauces] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState("");
  const [substitute, setSubstitute] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError("");
  };

  const handleSizeChange = (e) => {
    setPizzaSize(e.target.value);
  };

  const handleSauceChange = (e) => {
    const value = e.target.value;
    setSelectedSauces((prevSauces) =>
      prevSauces.includes(value)
        ? prevSauces.filter((sauce) => sauce !== value)
        : [...prevSauces, value]
    );
  };

  const handleToppingsChange = (e) => {
    const value = e.target.value;
    setSelectedToppings((prevToppings) =>
      prevToppings.includes(value)
        ? prevToppings.filter((topping) => topping !== value)
        : [...prevToppings, value]
    );
  };

  const handleSubstituteChange = (e) => {
    setSubstitute(e.target.value);
  };

  const handleSpecialInstructionsChange = (e) => {
    setSpecialInstructions(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 2) {
      setError("İsim en az 2 karakter olmalıdır");
    } else {
      const formData = {
        name,
        pizzaSize,
        selectedSauces,
        selectedToppings,
        substitute,
        specialInstructions,
      };
      onFormSubmit(formData);
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

      {/* Pizza Boyutu */}
      <label>
        Pizza Boyutu:
        <select value={pizzaSize} onChange={handleSizeChange}>
          <option value="">Boyut Seçin</option>
          <option value="small">Küçük</option>
          <option value="medium">Orta</option>
          <option value="large">Büyük</option>
        </select>
      </label>

      {/* Soslar */}
      <label>
        Soslar:
        <div>
          <label>
            <input
              type="checkbox"
              value="tomato"
              checked={selectedSauces.includes("tomato")}
              onChange={handleSauceChange}
            />
            Domates Sos
          </label>
          {/* Diğer soslar için benzer şekilde devam edebilirsiniz */}
        </div>
      </label>

      {/* Toppings */}
      <label>
        Toppings:
        <div>
          {["mushrooms", "olives", "peppers"].map((topping) => (
            <label key={topping}>
              <input
                type="checkbox"
                value={topping}
                checked={selectedToppings.includes(topping)}
                onChange={handleToppingsChange}
              />
              {topping}
            </label>
          ))}
        </div>
      </label>

      {/* Diğer alanlar */}
      {/* ... (Substitute, Special Instructions) */}

      {/* Siparişi Tamamla Butonu */}
      <button type="submit">Siparişi Tamamla</button>
    </form>
  );
};

export default PizzaForm;
