import React from "react";
import BrandName from "../../../assets/branding/brand_name.png";

const Header = () => {
  return (
    <div className="pl-12 p-36 bg-red-50 flex justify-between mx-10">
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
