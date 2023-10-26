"use client";

import { useState } from "react";
import DareScare from "./DareScare";
// import { AIResponse } from "./aiResponse";
import { AIResponse } from "./api";

export default function AI() {
  const [spooky, setSpooky] = useState("");

  console.log(spooky);

  const handleClick = async (spooky: string) => {
    setSpooky(spooky);

    const data = await AIResponse(spooky);

    console.log(data);
  };

  if (spooky !== "") {
  }

  return (
    <div>
      <DareScare setSelectedOption={handleClick} />
      {/* <AIResponse option={spooky} /> */}
      <div className="text-green">{spooky}</div>
    </div>
  );
}
