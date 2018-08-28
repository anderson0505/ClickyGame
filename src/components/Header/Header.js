import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">
    <h3>Click on an image, your score will be reset to 0 if you click the same image twice...</h3>
    <br></br>
    <h4>Best Possible Score is 12, Good Luck!</h4>
  </header>
);

export default Header;
