import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiListLight, PiXLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = ({ setShowSearch, showSearch }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { name: "Sobre", to: "/" },
    { name: "Novidades", to: "/novidades" },
    { name: "Torneio", to: "/torneio" },
    { name: "Equipe", to: "/equipe" },
    { name: "Momentos", to: "/momentos" },
  ];

  const mobileNavVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const activeStyle = {
    color: "#5e27c5",
    fontWeight: "bold",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="w-full md:w-[90%] mx-auto mt-2 px-4 md:px-8 py-4 flex items-center justify-between rounded-xl bg-white/20 backdrop-blur-xl shadow-lg">
        
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/bac.png" alt="Oncourt Logo" className="h-10 md:h-14" />
          <span className="font-orbitron text-2xl md:text-3xl font-bold">
            Bola Ao Cesto
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10 font-orbitron text-[17px]">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                  className="hover:text-[#5e27c5] transition"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <NavLink
            to="/bilhetes"
            className="font-orbitron bg-gradient-to-br from-blue-100 to-yellow text-royal-blue px-5 py-2 rounded-lg text-sm shadow hover:brightness-110 transition"
          >
            Bilhetes
          </NavLink>

          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <PiXLight size={32} /> : <PiListLight size={32} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileNavVariants}
            className="md:hidden bg-white/90 backdrop-blur-xl shadow-lg rounded-b-xl px-6 py-6"
          >
            <ul className="flex flex-col gap-6 font-orbitron text-lg">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                    onClick={() => setMobileMenu(false)}
                    className="block hover:text-[#5e27c5] transition"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
