import React from "react";
import { useParams } from "react-router-dom";
import DetailPlayer from "./DetailPlayer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt,FaDiscord, FaTiktok, FaInstagram } from "react-icons/fa";
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
        </div>
      </header>

      {/* Profile and Skills Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start bg-black/50 p-12 shadow-lg gap-12">
      {/* Profile */}
        <div className="md:w-1/2 flex flex-col md:flex-row items-center md:items-start">
          <img
            src={`/images/${character.image}`}
            alt={name}
            className="w-60 h-60 object-cover rounded-full border-4 border-gray-400 shadow-lg"
          />
          <div className="md:ml-6 text-center md:text-left mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-400">{name}</h2>
            <p className="text-gray-300 mt-4 leading-relaxed">{character.description}</p>

            {/* Social Media Buttons */}
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              {character.socials.discord && (
                <a href={character.socials.discord} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-4xl hover:text-blue-600">
                  <FaDiscord />
                </a>
              )}
              {character.socials.tiktok && (
                <a href={character.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-purple-400 text-4xl hover:text-purple-600">
                  <FaTiktok />
                </a>
              )}
              {character.socials.instagram && (
                <a href={character.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 text-4xl hover:text-pink-600">
                  <FaInstagram />
                </a>
              )}
            </div>
          </div>
        </div>

      {/* Skills */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-semibold text-white text-center md:text-left">My Skills</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full">
            {character.skills.map((skill, index) => (
              <div key={index} className="bg-black/60 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-blue-400">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agents Showcase Section */}
      <section className="mt-8 mb-16 text-center">
        <h2 className="text-4xl font-semibold text-white">Agents Used</h2>
        <div className="mt-8 flex flex-wrap gap-8 justify-center">
          {character.agent?.length > 0 ? (
            character.agent.map((agentImage, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={`/images/${agentImage}`}
                  alt={`Agent ${idx + 1}`}
                  className="w-96 h-96 object-cover"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-400">No agents available</p>
          )}
        </div>
      </section>

    </div>
  );
};

export default CharacterDetailPage;