import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import characters from "./characters";

export default function Sidebar({ setSelectedCharacter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Vindicta");

  // Tutup sidebar otomatis jika ukuran layar lebih besar dari 768px (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Tombol Toggle Sidebar (Mobile) */}
      <button
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-full shadow-lg md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 w-64 h-full bg-gray-900 p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        style={{ zIndex: 40 }}
      >

        <div className="space-y-2">
          {characters.map((char) => (
            <div
              key={char.name}
              className={`relative cursor-pointer rounded-lg overflow-hidden transition-opacity duration-200 ${
                selected === char.name
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-80"
              }`}
              onClick={() => {
                setSelected(char.name);
                setSelectedCharacter(React.createElement(char.component));
                setIsOpen(false); // Tutup sidebar setelah memilih karakter di mobile
              }}
            >
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-24 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-white font-bold text-lg">{char.name}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Overlay di belakang sidebar agar bisa ditutup dengan klik di luar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 30 }}
        />
      )}
    </>
  );
}
