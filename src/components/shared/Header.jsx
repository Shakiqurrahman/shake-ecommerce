import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

import { CiSearch } from "react-icons/ci";
import { VscHeart } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="max-width">
      <div className="bg-white flex py-5 w-full justify-between items-center border-b ">
      <div
          className="md:hidden w-10 h-[38px] p-2 bg-red-500 rounded-[4px] cursor-pointer flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={isOpen ? "active-hamburger" : "hamburger"}></div>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <img className="max-w-[150px]" src={logo} alt="Logo" />
            {/* <h1>Logo</h1> */}
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <div className="relative border border-lightGray/30 px-3 py-2.5 hidden md:block">
            <input
              type="text"
              className="w-[35vw] lg:w-[40vw] text-[13px] text-lightGray placeholder:text-[13px] placeholder:font-thin placeholder:text-lightGray outline-none"
              placeholder="Search for products"
            />
            <button className="absolute bg-white w-10 h-full top-0  right-0 border-l border-lightGray/30 flex justify-center items-center">
              <CiSearch className="text-[22px]" />
            </button>
          </div>
          <div className="hidden md:block">
            <Link to='#' className="text-[#333] text-[15px]">Login <span className="text-[12px] font-thin">/</span> Registar</Link>
          </div>
          <div className="flex gap-4">
            <Link to='#'>
            <VscHeart className="text-[24px]" />
            </Link>
            <div className="relative">
              <Link>
            <HiOutlineShoppingBag className="text-[24px]" />
              </Link>
            <span className="absolute -top-2 -right-2.5 size-5 flex justify-center items-center rounded-full bg-red-500 text-white text-[10px]">0</span>
            </div>
            <span className="hidden md:block">৳ </span>
          </div>
        </div>

        {/* <div
          className="md:hidden w-10 h-[38px] p-2 bg-blue-600 rounded-[4px] cursor-pointer flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={isOpen ? "active-hamburger" : "hamburger"}></div>
        </div> */}
      </div>
      <div className="flex justify-between py-4">
      <nav>
        <ul
          className={
            isOpen
              ? "side-nav"
              : "nav-links  md:flex gap-x-10 text-sm font-semibold"
          }
        >
          <NavLink to="/">
            <li
              className="hover:text-[#2030e0] duration-300 uppercase"
              onClick={handleClose}
            >
              Home
            </li>
          </NavLink>
          <NavLink to="/shop">
            <li
              className="hover:text-[#2030e0] duration-300 uppercase"
              onClick={handleClose}
            >
              Shop
            </li>
          </NavLink>

          <NavLink to="/about">
            <li
              className="hover:text-[#2030e0] duration-300 uppercase"
              onClick={handleClose}
            >
              About Us
            </li>
          </NavLink>

          <li
            className="hover:text-[#2030e0] duration-300 uppercase"
            onClick={handleClose}
          >
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
      <div className="hidden md:block">
        <p className="text-sm">HOTLINE: 01761094636</p>
      </div>
      </div>
    </header>
  );
};

export default Header;
