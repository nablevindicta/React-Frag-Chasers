import React from "react";
import Navbar from "./Navbar";
import './Home.css';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        {/* Hero Section */}
        <section className="relative items-center justify-center text-center p-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/homee.jpg')" }}>
          {/* Lapisan Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Konten Section */}
          <div className="relative z-10">
            <h1 className="text-5xl font-bold drop-shadow-lg">WELCOME TO FRAG CHASERS</h1>
            <button className="button mt-4 px-6 py-3">DISCORD</button>
          </div>
        </section>
      
        <section className="p-10 bg-gray-800 flex flex-col items-center">
          {/* Header Image */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/logo.png"
              alt="Vindicta"
              className="w-64 h-64 border-4 rounded-2xl border-gray-700"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            FRAG CHASERS
          </h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
  {/* Card 1 */}
  <div className="flex flex-col items-center bg-gray-900 p-4 sm:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
    <img
      src="/images/vin.jpeg"
      alt="Support"
      className="w-32 sm:w-48 rounded-lg border-4 border-gray-700"
    />
    <div className="mt-4 text-white text-center">
      <h2 className="text-lg sm:text-xl font-semibold">VINDICTA</h2>
      <p className="text-xs sm:text-sm mt-2">
        Vindicta menerobos pertahanan lawan dengan pergerakan cepat dan chaos yang sulit ditebak.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center bg-gray-900 p-4 sm:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
    <img
      src="/images/libro.jpeg"
      alt="Feedback"
      className="w-32 sm:w-48 rounded-lg border-4 border-gray-700"
    />
    <div className="mt-4 text-white text-center">
      <h2 className="text-lg sm:text-xl font-semibold">LIBRO</h2>
      <p className="text-xs sm:text-sm mt-2">
        Libro bermain agresif sebagai Omen, mengendalikan map dengan smoke dan teleportasinya untuk mengecoh lawan.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center bg-gray-900 p-4 sm:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
    <img
      src="/images/sam.jpeg"
      alt="Feedback"
      className="w-32 sm:w-48 rounded-lg border-4 border-gray-700"
    />
    <div className="mt-4 text-white text-center">
      <h2 className="text-lg sm:text-xl font-semibold">NOLOGICSAM</h2>
      <p className="text-xs sm:text-sm mt-2">
        Nologicsam adalah eksekutor dengan one tap mematikan, mengakhiri duel dengan satu peluru ke kepala.
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="flex flex-col items-center bg-gray-900 p-4 sm:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
    <img
      src="/images/nox.jpeg"
      alt="Feedback"
      className="w-32 sm:w-48 rounded-lg border-4 border-gray-700"
    />
    <div className="mt-4 text-white text-center">
      <h2 className="text-lg sm:text-xl font-semibold">NOX</h2>
      <p className="text-xs sm:text-sm mt-2">
        Nox, sang eksekutor tenang, menjaga ketertiban di tengah kekacauan dengan aim yang stabil dan keputusan yang dingin.
      </p>
    </div>
  </div>
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
        <section className="p-10 bg-gray-800 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center text-white mb-6">PLAYERS</h2>

          {/* Grid Container */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">

            
            {/* Character 1 - Vindicta */}
            <div className="sm:w-48 flex flex-col items-center bg-gray-900 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <img src="/images/neon.png" className="h-40 object-cover border-4 border-gray-700 shadow-lg" alt="Vindicta" />
              <h3 className="mt-3 text-center text-xl font-semibold text-white">Vindicta</h3>
              <p className="text-center text-gray-400 text-sm">Movement Player</p>
            </div>

            {/* Character 2 - Sam */}
            <div className="sm:w-48 flex flex-col items-center bg-gray-900 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <img src="/images/jett.png" className="h-40 object-cover border-4 border-gray-700 shadow-lg" alt="Sam" />
              <h3 className="mt-3 text-center text-xl font-semibold text-white">Nologicsam</h3>
              <p className="text-center text-gray-400 text-sm">One Tap Master</p>
            </div>

            {/* Character 3 - Libro */}
            <div className="sm:w-48 flex flex-col items-center bg-gray-900 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <img src="/images/omen.png" className="h-40 object-cover border-4 border-gray-700 shadow-lg" alt="Libro" />
              <h3 className="mt-3 text-center text-xl font-semibold text-white">Libro</h3>
              <p className="text-center text-gray-400 text-sm">Agressive Player</p>
            </div>

            {/* Character 4 - Nox */}
            <div className="sm:w-48 flex flex-col items-center bg-gray-900 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <img src="/images/cyper.png" className="h-40 object-cover border-4 border-gray-700 shadow-lg" alt="Nox" />
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
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
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
