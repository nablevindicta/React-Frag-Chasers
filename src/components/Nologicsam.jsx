import React from "react";
import CharacterProfile from "./CharacterProfile";

const Nologisam = () => {
  return (
    <CharacterProfile
      name="Nologisam"
      image="jett.png"
      role="Jett Main"
      description="Nologisam sering kali menjadi penentu kemenangan dalam pertandingan karena mampu mengeliminasi musuh dengan efektif tanpa membuang banyak peluru."
      theme="text-green-400"
      abilities={[
        { name: "Montage Number One", type: "kanan" },
        { name: "Sometimes Good Sometimes Bad", type: "kanan" },
        { name: "Playing For Clips", type: "kanan" },
      ]}
    />
  );
};

export default Nologisam;
