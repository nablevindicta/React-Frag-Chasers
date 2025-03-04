import React from "react";
import CharacterProfile from "./CharacterProfile";

const Libro = () => {
  return (
    <CharacterProfile
      name="Libro"
      image="omen.png"
      role="Omen Main"
      description="Libro merupakan Seorang player Omen yang agresif. Selalu memanfaatkan kemampuannya untuk menerobos pertahanan musuh dengan cepat dan menciptakan kekacauan di medan perang."
      theme="text-purple-400"
      abilities={[
        { name: "Agressive Teleport", type: "kanan" },
        { name: "Sometimes Good Sometimes Bad", type: "kanan" },
        { name: "Bucky Master", type: "kanan" },
      ]}
    />
  );
};

export default Libro;
