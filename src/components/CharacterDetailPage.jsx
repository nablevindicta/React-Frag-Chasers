import React from "react";
import { useParams } from "react-router-dom";
import DetailPlayer from "./DetailPlayer";
import { FaMapMarkerAlt, FaGlobe, FaEnvelope, FaTwitter } from "react-icons/fa";

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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <header className="text-center">
        <h1 className={`text-4xl font-bold ${character.theme}`}>{name}</h1>
        <p className="text-gray-400 text-lg">{character.role}</p>
      </header>

      {/* Profile Section */}
      <div className="relative flex flex-col md:flex-row items-center bg-black/50 p-8 rounded-2xl shadow-lg mt-8">
        <img
          src={`/images/${character.image}`}
          alt={name}
          className="w-48 h-48 object-cover rounded-full border-4 border-gray-400 shadow-lg"
        />

        <div className="md:ml-8 text-center md:text-left">
          <h2 className={`text-3xl font-semibold ${character.theme}`}>About</h2>
          <p className="text-gray-300 mt-2">{character.description}</p>

          {/* Stats */}
          <div className="flex justify-around md:justify-start gap-6 mt-6">
            <div className="text-center">
              <h3 className="text-xl font-bold">{character.experience}</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">{character.projects}</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">{character.clients}</h3>
              <p className="text-gray-400">Allies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <section className="mt-12">
        <h2 className={`text-3xl font-semibold ${character.theme}`}>Skills</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {character.skills.map((skill, index) => (
            <div key={index} className="bg-black/60 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Abilities */}
      <section className="mt-12">
        <h2 className={`text-3xl font-semibold ${character.theme}`}>Abilities</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {character.abilities.map((ability, index) => (
            <div key={index} className="bg-black/60 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">{ability.name}</h3>
              <p className="text-gray-400">{ability.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12">
        <h2 className={`text-3xl font-semibold ${character.theme}`}>Contact</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-2 bg-black/60 p-4 rounded-lg">
            <FaMapMarkerAlt className="text-gray-400" />
            <p>Unknown Territory</p>
          </div>
          <div className="flex items-center gap-2 bg-black/60 p-4 rounded-lg">
            <FaGlobe className="text-gray-400" />
            <p>www.characterwebsite.com</p>
          </div>
          <div className="flex items-center gap-2 bg-black/60 p-4 rounded-lg">
            <FaEnvelope className="text-gray-400" />
            <p>contact@character.com</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <FaTwitter className="text-gray-400 text-2xl" />
          <p>@character_handle</p>
        </div>
      </section>
    </div>
  );
};

export default CharacterDetailPage;
