import React from "react";
import CharacterProfile from "./CharacterProfile";

const Vindicta = () => {
  return (
    <CharacterProfile
      name="Vindicta"
      image="neon.png"
      role="Duelist"
      description="Vindicta adalah agen dengan kecepatan luar biasa dan serangan mematikan."
      theme="text-blue-400"
      abilities={[
        { name: "Hyper Dash", type: "kanan" },
        { name: "Lightning Strike", type: "kanan" },
        { name: "Phase Shift", type: "kanan" },
      ]}
    />
  );
};

export default Vindicta;
