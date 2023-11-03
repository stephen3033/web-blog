import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Function to handle viewport size change
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
      <button className="menu-icon" onClick={toggleMobileMenu}>
        Menu
      </button>
      <ul className="nav-links">
        <li>
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/writings" onClick={closeMobileMenu}>
            Writings
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={closeMobileMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/tech-blog" onClick={closeMobileMenu}>
            Tech Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
