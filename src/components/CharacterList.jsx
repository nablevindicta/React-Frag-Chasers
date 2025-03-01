import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Vindicta from "./Vindicta"; // Karakter default

const CharacterList = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(<Vindicta />);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="flex"> {/* Tambah padding agar tidak tertutup navbar */}
        <Sidebar setSelectedCharacter={setSelectedCharacter} />
        <div className="flex-1 flex justify-center">
          <div className="w-full">{selectedCharacter}</div>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
