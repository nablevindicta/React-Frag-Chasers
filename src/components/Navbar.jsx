import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import ikon dari lucide-react

const Navbar = () => {
  const location = useLocation(); // Untuk mengetahui halaman saat ini
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol visibilitas menu

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
      <h1 className="text-xl md:text-2xl font-bold">FRAG CHASERS</h1>
      </div>

      {/* Tombol Hamburger untuk Mobile */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state isMenuOpen
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" /> // Ikon "X" untuk menutup menu
        ) : (
          <Menu className="w-6 h-6" /> // Ikon "Menu" untuk membuka menu
        )}
      </button>

      {/* Menu Desktop */}
      <div className="hidden md:flex space-x-4">
        <NavLink to="/" currentPath={location.pathname}>
          Home
        </NavLink>
        <NavLink to="/characters" currentPath={location.pathname}>
          Character List
        </NavLink>
      </div>

      {/* Menu Mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-full right-0 bg-gray-900 w-48 shadow-lg py-2 z-50`}
      >
        <NavLink to="/" currentPath={location.pathname} onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/characters" currentPath={location.pathname} onClick={() => setIsMenuOpen(false)}>
          Character List
        </NavLink>
      </div>
    </nav>
  );
};

// Komponen NavLink untuk animasi garis bawah
const NavLink = ({ to, children, currentPath, onClick }) => {
  const isActive = currentPath === to; // Cek apakah link saat ini aktif

  return (
    <Link
      to={to}
      className={`relative block px-4 py-2 transition-colors duration-300 ${
        isActive ? "text-blue-400" : "hover:text-blue-400"
      }`}
      onClick={onClick} // Menutup menu setelah klik
    >
      {children}
      {/* Garis bawah animasi */}
      <span
        className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transition-all duration-300 ${
          isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      />
    </Link>
  );
};

export default Navbar;