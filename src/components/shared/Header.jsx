import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="bg-white fixed top-0 z-10 w-full">
      <div className="max-width bg-white flex h-16 w-full justify-between items-center border-b ">
        <div className="flex items-center">
          <Link to="/">
            {/* <img className="h-14" src={logo} alt="Logo" /> */}
            <h1>Logo</h1>
          </Link>
        </div>

        <nav>
          <ul
            className={
              isOpen ? "side-nav" : "nav-links  md:flex gap-x-10 text-[15px]"
            }
          >
            <NavLink to="/">
              <li
                className="hover:text-[#2030e0] duration-300"
                onClick={handleClose}
              >
                Home
              </li>
            </NavLink>
            <NavLink to="/shop">
              <li
                className="hover:text-[#2030e0] duration-300"
                onClick={handleClose}
              >
                Shop
              </li>
            </NavLink>

            <NavLink to="/about">
              <li
                className="hover:text-[#2030e0] duration-300"
                onClick={handleClose}
              >
                About Us
              </li>
            </NavLink>

            <li
              className="hover:text-[#2030e0] duration-300"
              onClick={handleClose}
            >
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
        <div
          className="md:hidden w-10 h-[38px] p-2 bg-blue-600 rounded-[4px] cursor-pointer flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={isOpen ? "active-hamburger" : "hamburger"}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
