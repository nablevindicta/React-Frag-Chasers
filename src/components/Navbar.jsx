import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Untuk mengetahui halaman saat ini

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">FRAG CHASERS</h1>
      <div className="space-x-4">
        <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
        <NavLink to="/characters" currentPath={location.pathname}>Character List</NavLink>
      </div>
    </nav>
  );
};

// Komponen NavLink untuk animasi garis bawah
const NavLink = ({ to, children, currentPath }) => {
  const isActive = currentPath === to; // Cek apakah link saat ini aktif

  return (
    <Link
      to={to}
      className={`relative px-4 py-2 transition-colors duration-300 ${
        isActive ? "text-blue-400" : "hover:text-blue-400"
      }`}
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
