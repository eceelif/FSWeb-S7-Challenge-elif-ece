// Header.js

import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link> <br></br>
      <Link to="/help">Help</Link>
    </nav>
  </header>
);

export default Header;
