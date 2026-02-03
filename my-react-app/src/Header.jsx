import { useState } from "react";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleClick = (linkName, e) => {
    e.preventDefault();
    setActiveLink(linkName);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">Black Star Burger</h1>
      </div>
    </header>
  );
}

export default Header;
