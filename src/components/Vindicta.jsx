import React from "react";
import CharacterProfile from "./CharacterProfile";

const Vindicta = () => {
  return (
    <CharacterProfile
      name="Vindicta"
      image="neon.png"
      role="Neon Main"
      description="Vindicta memiliki gaya bermain agresif dan unpredictable, sering kali mengandalkan kecepatan untuk menyerang lawan sebelum mereka bisa bereaksi."
      theme="text-blue-400"
      abilities={[
        { name: "Playing For Clips", type: "kanan" },
        { name: "Playing For Fun", type: "kanan" },
        { name: "Softspoken", type: "kanan" },
      ]}
    />
  );
};

export default Vindicta;
