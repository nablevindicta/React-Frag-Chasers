import React from "react";
import { FaAngleRight } from "react-icons/fa";
import './styles.css';

const icons = {
  kanan: <FaAngleRight className="text-blue-600" />
};

const CharacterProfile = ({ name, image, description, role, abilities, theme }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`/images/${image}`}
          alt={name}
          className="w-full h-full object-cover opacity-20"
        />
      </div>

        {/* Content Card */}
        <div className="relative z-10 w-full max-w-xl md:max-w-2xl bg-black/60 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6">

        {/* Character Image */}
        <img
          src={`/images/${image}`}
          alt={name}
          className={`w-48 h-48 object-cover rounded-full border-4 border-blue-400 shadow-lg`}
        />

        {/* Info Section */}
        <div className="flex flex-col">
          <h1 className={`text-5xl font-bold ${theme}`}>{name}</h1>
          <h2 className="text-lg font-semibold text-gray-300">{role}</h2>
          <p className="mt-3 text-gray-300">{description}</p>

          {/* Abilities Section */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-blue-300">Abilities</h3>
            <ul className="mt-2 space-y-2">
              {abilities.map(({ name, type }, index) => (
                <li key={index} className="flex items-center gap-2">
                  {icons[type]}
                  <span className="text-gray-300">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detail Button */}
          <button className="btn">Detail</button>

        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;
