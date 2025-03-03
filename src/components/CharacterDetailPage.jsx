import React from "react";
import { useParams } from "react-router-dom";
import DetailPlayer from "./DetailPlayer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./Navbar";

const CharacterDetailPage = () => {
  const { name } = useParams();
  const character = DetailPlayer[name.charAt(0).toUpperCase() + name.slice(1)];

  if (!character) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Character Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      <Navbar />
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: `url(/images/detail.png)` }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          <h2 className="text-2xl text-gray-400">Hi There!</h2>
          <h1 className="text-6xl font-bold text-blue-400">I am {name}</h1>
          <p className="text-lg text-gray-300 mt-2">{character.role}</p>
          <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600">
            Contact Me
          </button>
        </div>
      </header>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center bg-black/50 p-12 shadow-lg">
        <img
          src={`/images/${character.image}`}
          alt={name}
          className="w-60 h-60 object-cover rounded-full border-4 border-gray-400 shadow-lg"
        />
        <div className="md:ml-12 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold text-blue-400">{name}</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">{character.description}</p>
          <ul className="mt-6 text-gray-400 space-y-2">
            <li><strong>Name:</strong> {name}</li>
            <li><strong>Age:</strong> {character.age}</li>
            <li><strong>From:</strong> {character.location}</li>
            <li><strong>Email:</strong> {character.email}</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600">
            Download CV
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mt-16">
        <h2 className="text-4xl font-semibold text-white text-center">My Skills</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-2">
          {character.skills.map((skill, index) => (
            <div key={index} className="bg-black/60 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-blue-400">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-white">Contact</h2>
        <div className="mt-8 flex flex-wrap gap-8 justify-center">
          <div className="flex items-center gap-3 bg-black/60 p-4 rounded-lg">
            <FaEnvelope className="text-blue-400 text-xl" />
            <p className="text-gray-300">{character.email}</p>
          </div>
          <div className="flex items-center gap-3 bg-black/60 p-4 rounded-lg">
            <FaPhone className="text-blue-400 text-xl" />
            <p className="text-gray-300">{character.phone}</p>
          </div>
          <div className="flex items-center gap-3 bg-black/60 p-4 rounded-lg">
            <FaMapMarkerAlt className="text-blue-400 text-xl" />
            <p className="text-gray-300">{character.location}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharacterDetailPage;