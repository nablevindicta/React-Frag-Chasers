import React from "react";
import CharacterProfile from "./CharacterProfile";

const Nologisam = () => {
  return (
    <CharacterProfile
      name="Nologisam"
      image="jett.png"
      role="Duelist"
      description="Nologisam memiliki kemampuan untuk ngekill dengan cara one tap."
      theme="text-green-400"
      abilities={[
        { name: "X-Ray Vision", type: "kanan" },
        { name: "Strategic Scan", type: "kanan" },
        { name: "Predictive Analysis", type: "kanan" },
      ]}
    />
  );
};

export default Nologisam;
