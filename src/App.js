import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PizzaForm from "./components/PizzaForm";
import helpPage from "./components/HelpPage";

const App = () => {
  
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/pizza" component={PizzaForm} />
      <Route path="/help" component={helpPage} />
    </Router>
  );
};

export default App;
