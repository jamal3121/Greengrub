import React, { useState } from "react";
import './Navbar.css'

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div className="bg-white main-nav">
      <ul >
        <li className="relative flex items-center gap-10 justify-center p-4">
          {["Home", "Product", "Collection", "Blog", "Pages"].map((item) => (
            <a
              href="#"
              key={item}
              onClick={() => handleClick(item)}
              className="relative font-bold"
            >
              {item}
            </a>
          ))}

        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
