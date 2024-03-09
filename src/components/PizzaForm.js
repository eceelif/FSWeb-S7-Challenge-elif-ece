import React, { useState } from "react";
import axios from "axios";
import Pizza from "./Pizza";
import "./Form.css";

const PizzaForm = ({ onFormSubmit }) => {
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
  
        // Pizza.js'ye bilgileri iletiliyor
        onFormSubmit({
          customerName,
          pizzaDetails,
        });
  
        // Redirect to ConfirmationPage with relevant data
        const confirmationUrl = `/confirmation?size=${pizzaDetails.size}&name=${customerName}&souces=${pizzaDetails.sauces.join(",")}&toppings=${pizzaDetails.toppings.join(",")}&substitute=${pizzaDetails.substitute}&special_instructions=${pizzaDetails.special_instructions}`;
        window.location.href = confirmationUrl;
      } catch (error) {
        console.error("Sipariş gönderme hatası:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form id="pizza-form" onSubmit={handleFormSubmit}>
      {/* İsim */}
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

      {/* Pizza Detayları */}
      {/* Pizza.js'ye bilgileri iletiyoruz */}
      <Pizza customerInfo={pizzaDetails} setPizzaDetails={setPizzaDetails} />

      {/* Siparişi Tamamla Butonu - Loading durumuna göre butonun durumunu kontrol edin */}
      <button id="order-button" type="submit" disabled={loading}>
        {loading ? "Sipariş Gönderiliyor..." : "Siparişlere Ekle"}
      </button>
    </form>
  );
};

export default PizzaForm;
