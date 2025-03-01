import React from "react";
import CharacterProfile from "./CharacterProfile";

const Libro = () => {
  return (
    <CharacterProfile
      name="Libro"
      image="omen.png"
      role="Controller"
      description="Libro adalah agen yang bisa menghilang dalam kegelapan dan menyerang secara tiba-tiba."
      theme="text-purple-400"
      abilities={[
        { name: "Shadow Step", type: "kanan" },
        { name: "Dark Veil", type: "kanan" },
        { name: "Phantom Strike", type: "kanan" },
      ]}
    />
  );
};

export default Libro;
