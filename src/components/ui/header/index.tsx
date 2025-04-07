import React from "react";
import BrandName from "../../../assets/branding/brand_name.png";

const Header = () => {
  return (
    <div>
      <h1>
        <img src={BrandName} alt="brand-name" />
      </h1>
      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
