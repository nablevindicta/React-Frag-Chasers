import React from "react";
import CharacterProfile from "./CharacterProfile";

const Nox = () => {
  return (
    <CharacterProfile
      name="Nox"
      image="cyper.png"
      role="Sentinel"
      description="Nox merupakan player dengan calm aim nya yang membuat tim nya terkagum-kagum."
      theme="text-blue-400"
      abilities={[
        { name: "Multitasking", type: "kanan" },
        { name: "Gak Pernah Panik Liat Musuh", type: "kanan" },
        { name: "Konsisten Aim", type: "kanan" },
      ]}
    />
  );
};

export default Nox;
