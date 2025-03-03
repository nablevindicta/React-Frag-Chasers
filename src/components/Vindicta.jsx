import React from "react";
import CharacterProfile from "./CharacterProfile";

const Vindicta = () => {
  return (
    <CharacterProfile
      name="Vindicta"
      image="neon.png"
      role="Neon Main"
      description="Vindicta merupakan player dengan movement yang ga jelas dan selalu nge bait tim nya."
      theme="text-blue-400"
      abilities={[
        { name: "Sleding Mulu", type: "kanan" },
        { name: "Stun Teman", type: "kanan" },
        { name: "Wall Ga Jelas", type: "kanan" },
      ]}
    />
  );
};

export default Vindicta;
