import React from "react";
import Navbar from "./Navbar";
import './Home.css';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        {/* Hero Section */}
        <section className="relative items-center justify-center text-center p-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/detail.png')" }}>
          <h1 className="text-5xl font-bold drop-shadow-lg">WELCOME TO FRAG CHASERS</h1>
          <button className="button mt-4 px-6 py-3">DISCORD</button>
        </section>
      
        {/* Latest Trailer & News */}
        <section className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Latest Trailer */}
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-white">Favorite Video</h2>
            <video
              src="/videos/valo_neon.mp4"
              controls
              className="mt-4 w-full rounded-lg"
            ></video>
          </div>
        
          {/* Latest News */}
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-white">Developer</h2>
            <img
              src="/images/vindicta.png"
              alt="Latest News"
              className="mt-4 w-full rounded-lg"
            />
          </div>
        </section>

        {/* Content Creator */}
        <section className="p-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">Content Creator</h2>

          {/* Container Responsive */}
          <div className="flex flex-wrap justify-center gap-6">

            {/* Sam */}
            <div className="w-full max-w-xs flex flex-col items-center bg-gray-900 rounded-lg  p-6 transition-transform duration-300 hover:scale-105">
              <img src="/images/sam.jpeg" className="w-40 h-40 object-cover rounded-full border-4 border-gray-700 shadow-lg" alt="Sam" />
              <h3 className="mt-3 text-center text-xl font-semibold text-white">Nologicsam</h3>
              <p className="text-center text-gray-400 text-sm">Jett Main</p>
            </div>

            {/* Libro */}
            <div className="w-full max-w-xs flex flex-col items-center bg-gray-900 rounded-lg  p-6 transition-transform duration-300 hover:scale-105">
              <img src="/images/libro.jpeg" className="w-40 h-40 object-cover rounded-full border-4 border-gray-700 shadow-lg" alt="Libro" />
              <h3 className="mt-3 text-center text-xl font-semibold text-white">Libro</h3>
              <p className="text-center text-gray-400 text-sm">Omen Main</p>
            </div>

            {/* Vindicta */}
            <div className="w-full max-w-xs flex flex-col items-center bg-gray-900 rounded-lg  p-6 transition-transform duration-300 hover:scale-105">
              <img src="/images/vin.jpeg" className="w-40 h-40 object-cover rounded-full border-4 border-gray-700 shadow-lg" alt="Vindicta" />
              <h3 className="mt-3 text-center text-xl font-semibold text-white">Vindicta</h3>
              <p className="text-center text-gray-400 text-sm">Neon Main</p>
            </div>


          </div>
        </section>

        {/* Characters Section */}
        <section className="p-10 bg-gray-800">
          <h2 className="text-4xl font-bold text-center text-white mb-6">PLAYERS</h2>

          {/* Container Scrollable */}
          <div className="flex flex-wrap justify-center gap-6">

            {/* Character 1 - Vindicta */}
            <div className="w-64 flex-shrink-0 flex flex-col items-center bg-gray-900 rounded-lg shadow-lg p-6 snap-center transition-transform duration-300 hover:scale-105">
              <img src="/images/neon.png" className=" h-60 object-cover border-4 border-gray-700 shadow-lg" alt="Vindicta" />
              <h3 className="mt-3 text-center text-xl font-semibold text-white">Vindicta</h3>
              <p className="text-center text-gray-400 text-sm">Movement Player</p>
            </div>

            {/* Character 2 - Sam */}
            <div className="w-64 flex-shrink-0 flex flex-col items-center bg-gray-900 rounded-lg shadow-lg p-6 snap-center transition-transform duration-300 hover:scale-105">
              <img src="/images/jett.png" className="w-48 h-60 object-cover border-4 border-gray-700 shadow-lg" alt="Sam" />
              <h3 className="mt-3 text-center text-xl font-semibold text-white">Nologicsam</h3>
              <p className="text-center text-gray-400 text-sm">One Tap Master</p>
            </div>

            {/* Character 3 - Libro */}
            <div className="w-64 flex-shrink-0 flex flex-col items-center bg-gray-900 rounded-lg shadow-lg p-6 snap-center transition-transform duration-300 hover:scale-105">
              <img src="/images/omen.png" className="w-48 h-60 object-cover border-4 border-gray-700 shadow-lg" alt="Libro" />
              <h3 className="mt-3 text-center text-xl font-semibold text-white">Libro</h3>
              <p className="text-center text-gray-400 text-sm">Agressive Player</p>
            </div>

            {/* Character 4 - Nox */}
            <div className="w-64 flex-shrink-0 flex flex-col items-center bg-gray-900 rounded-lg shadow-lg p-6 snap-center transition-transform duration-300 hover:scale-105">
              <img src="/images/cyper.png" className="w-48 h-60 object-cover border-4 border-gray-700 shadow-lg" alt="Nox" />
              <h3 className="mt-3 text-center text-xl font-semibold text-white">Nox</h3>
              <p className="text-center text-gray-400 text-sm">Calm Player</p>
            </div>

          </div>
        </section>

        {/* About Section */}
<section className="p-10 bg-gray-900 text-white flex flex-col items-center text-center">
  <h2 className="text-4xl font-bold mb-6">ABOUT DEVELOPER</h2>

  {/* Foto Profil */}
  <div className="relative w-40 h-40">
    <img 
      src="/images/vin.jpeg" 
      alt="Profile Picture" 
      className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-lg transition-transform duration-300 hover:scale-110"
    />
  </div>

  {/* Deskripsi */}
  <div className="mt-6 max-w-2xl">
    <p className="text-lg text-gray-300">
      Halo! Saya <span className="font-semibold text-blue-400">Nable Vindicta</span>, seorang mahasiswa 
      Teknik Informatika di Universitas Komputer Indonesia yang bercita-cita menjadi <span className="font-semibold text-blue-400">Game Developer</span>.  
      Saya sangat antusias dalam pengembangan website, UI/UX, dan pembuatan game berbasis Unity dan Unreal Engine.
    </p>
    
    <p className="mt-4 text-gray-400 text-sm">
      "Kode adalah senjata, kreativitas adalah perisai. Mari ciptakan dunia yang lebih menarik dengan teknologi!"
    </p>
  </div>

  {/* Skillset */}
  <div class="mt-6 w-4/5 max-w-6xl text-center">
        <h2 class="text-2xl font-bold mb-8">SKILLS</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">HTML & CSS</h3>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">JavaScript</h3>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">Python</h3>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">React</h3>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">PHP</h3>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">UI/UX Design</h3>
            </div>
        </div>
    </div>

  {/* Contact Button */}
  <a 
    href="https://github.com/nablevindicta" 
    target="_blank" 
    className="button mt-6 px-6 py-3"
  >
    View My Projects
  </a>
</section>

    </div>
  );
};

export default Home;
