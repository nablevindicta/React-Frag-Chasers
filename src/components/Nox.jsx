import React from "react";
import CharacterProfile from "./CharacterProfile";

const Nox = () => {
  return (
    <CharacterProfile
      name="Nox"
      image="cyper.png"
      role="Sentinel"
      description="Nox merupakan tipe pemain yang tidak panik saat musuh mendekat. Saat yang lain mulai spray tanpa arah, dia tetap tenang, menyesuaikan crosshair dengan sempurna, dan menunggu momen yang tepat."
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
