import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { PiListLight, PiXLight } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
const NavBar = ({ setShowSearch, showSearch }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileNavVariants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: 300,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        duration: 0.5,
        delay: 0.3,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
        delay: 0.3,
      },
    },
  };
  return (
    <div className="w-full top-0 fixed md:w-[90%] px-[20px] p-5 md:px-8 flex justify-between rounded-lg bg-white/30 md:bg-white/20  items-center mx-auto md:top-5 left-0 right-0 backdrop-blur-xl  z-20">
      <h2 className="flex items-center space-x-4 w-fit">
        {/* Logo Image */}
        <img src="/bac.png" alt="Oncourt Logo" className="h-10 md:h-16" />

        {/* Text next to logo */}
        <span className="font-orbitron text-xl md:text-3xl font-bold">
          Bola Ao Cesto
        </span>
      </h2>

      <nav className="hidden md:flex">
        <ul className="flex items-center justify-between gap-10 font-orbitron ">
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "#5e27c5", fontWeight: "bold" } : {};
              }}
              to="/"
              href=""
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "#5e27c5", fontWeight: "bold" } : {};
              }}
              to="/novidades"
            >
              Novidades
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "#5e27c5", fontWeight: "bold" } : {};
              }}
              to="/torneio"
            >
              Torneio
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "#5e27c5", fontWeight: "bold" } : {};
              }}
              to="/equipe"
            >
              Equipe
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/momentos"}
              style={({ isActive }) => {
                return isActive ? { color: "#5e27c5", fontWeight: "bold" } : {};
              }}
            >
              {" "}
              Momentos
            </NavLink>
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        {mobileMenu && (
          <motion.nav
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=" md:hidden fixed bg-white  top-[70px] w-full  left-0 px-[20px] py-5 "
          >
            <ul className="flex flex-col items-start z-[10] justify-between gap-10 font-orbitron ">
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive
                      ? { color: "#5e27c5", fontWeight: "bold" }
                      : {};
                  }}
                  to="/"
                >
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive
                      ? { color: "#5e27c5", fontWeight: "bold" }
                      : {};
                  }}
                  to="/novidades"
                >
                  Novidades
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive
                      ? { color: "#5e27c5", fontWeight: "bold" }
                      : {};
                  }}
                  to="/torneio"
                >
                  Torneio
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive
                      ? { color: "#5e27c5", fontWeight: "bold" }
                      : {};
                  }}
                  to="/equipe"
                >
                  Equipe
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/momentos"}
                  style={({ isActive }) => {
                    return isActive
                      ? { color: "#5e27c5", fontWeight: "bold" }
                      : {};
                  }}
                >
                  {" "}
                  Momentos
                </NavLink>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <ul className="flex items-center justify-between gap-1 md:gap-5 font-orbitron ">
        <li>
          <NavLink
            to="/bilhetes"
            className="bg-gradient-to-br from-blue-100 to-yellow hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-royal-blue"
          >
            Bilhetes
          </NavLink>
        </li>
        <li>
          <Link
            onClick={() => {
              setShowSearch(!showSearch);
            }}
          >
            <CiSearch size={30} />
          </Link>
        </li>
        <div className="flex md:hidden">
          {mobileMenu ? (
            <PiXLight
              className="cursor-pointer"
              size={30}
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <PiListLight
              className="cursor-pointer"
              size={30}
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
