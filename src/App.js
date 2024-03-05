

// src/App.js

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PizzaForm from "./components/PizzaForm";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/order-pizza" component={PizzaForm} />
    </Router>
  );
};

export default App;

