import React, { useState, useEffect } from "react";
import axios from "axios";
import Pizza from "./Pizza";
import "./Form.css";
import { useHistory } from "react-router-dom";

const PizzaForm = () => {
  const history = useHistory();
  const [customerName, setCustomerName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pizzaDetails, setPizzaDetails] = useState({
    size: "",
    sauces: [],
    toppings: [],
    substitute: "",
    special_instructions: "",
  });
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setCustomerName(newName);
    setError("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (customerName.length < 2 || customerName.trim().length === 0) {
      setError("İsim en az 2 karakter olmalıdır");
    } else {
      try {
        setLoading(true);

        const response = await axios.post("https://reqres.in/api/orders", {
          customerName,
          pizzaDetails,
        });

        console.log("Veritabanına gönderilen sipariş:", response.data);

        if (isMounted) {
          history.push({
            pathname: "/confirmation",
            search: `?size=${pizzaDetails.size}&name=${customerName}&sauces=${pizzaDetails.sauces.join(",")}&toppings=${pizzaDetails.toppings.join(",")}&substitute=${pizzaDetails.substitute}&special_instructions=${pizzaDetails.special_instructions}`,
          });
        }
      } catch (error) {
        console.error("Sipariş gönderme hatası:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
  };

  return (
    <form id="pizza-form" onSubmit={handleFormSubmit}>
      <label>
        İsim:
        <input
          type="text"
          id="name-input"
          value={customerName}
          onChange={handleNameChange}
        />
      </label>
      <div style={{ color: "red" }}>{error}</div>

      <Pizza customerInfo={pizzaDetails} setPizzaDetails={setPizzaDetails} />

      <button type="submit">Siparişe Ekle</button>
    </form>
  );
};

export default PizzaForm;
