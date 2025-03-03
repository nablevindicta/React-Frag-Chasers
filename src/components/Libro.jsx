import React from "react";
import CharacterProfile from "./CharacterProfile";

const Libro = () => {
  return (
    <CharacterProfile
      name="Libro"
      image="omen.png"
      role="Omen Main"
      description="Libro merupakan player dengan permainan yang cukup agresif sampe musuh nya kesal, apalagi
      kalau sudah bermain dengan teleport nya."
      theme="text-purple-400"
      abilities={[
        { name: "Teleport Ga Jelas", type: "kanan" },
        { name: "Diajak Mabar Sulit", type: "kanan" },
        { name: "Ngeluh Mulu", type: "kanan" },
      ]}
    />
  );
};

export default Libro;
