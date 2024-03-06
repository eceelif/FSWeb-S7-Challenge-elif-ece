import React from "react";

const Pizza = ({ customerInfo, setPizzaDetails }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPizzaDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e, type) => {
    const { value } = e.target;
    const updatedItems = customerInfo[type].includes(value)
      ? customerInfo[type].filter((item) => item !== value)
      : [...customerInfo[type], value];

    setPizzaDetails((prevDetails) => ({
      ...prevDetails,
      [type]: updatedItems,
    }));
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
    <div>
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
  <table className="sauces-table">
    <tbody>
      {["tomato", "pesto", "alfredo", "bbq"].map((sauce, index) => (
        <tr key={index}>
          <td>
            <input
              type="checkbox"
              name={`sauce${index}`}
              value={sauce}
              checked={customerInfo.sauces.includes(sauce)}
              onChange={(e) => handleCheckboxChange(e, "sauces")}
            />
          </td>
          <td>{`${sauce.charAt(0).toUpperCase() + sauce.slice(1)} Sauce`}</td>
        </tr>
      ))}
    </tbody>
  </table>
</label>

<label>
  Toppings:
  <table className="toppings-table">
    <thead>
      <tr>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {toppingNames.map((topping, index) => (
        <tr key={index}>
          <td>
            <label>
              <input
                type="checkbox"
                name={`topping${index}`}
                value={`topping${index}`}
                checked={customerInfo.toppings.includes(`topping${index}`)}
                onChange={(e) => handleCheckboxChange(e, "toppings")}
              />
              {topping}
            </label>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
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
    </div>
  );
};

export default Pizza;
