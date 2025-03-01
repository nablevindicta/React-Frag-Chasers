import React from "react";
import CharacterProfile from "./CharacterProfile";

const Nox = () => {
  return (
    <CharacterProfile
      name="Nox"
      image="cyper.png"
      role="Sentinel"
      description="Nox adalah agen bertahan dengan perisai yang hampir tidak bisa ditembus."
      theme="text-blue-400"
      abilities={[
        { name: "Iron Shield", type: "kanan" },
        { name: "Unbreakable", type: "kanan" },
        { name: "Last Stand", type: "kanan" },
      ]}
    />
  );
};

export default Nox;
