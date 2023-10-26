"use client";
import React, { useState } from "react";

interface TextboxProps {
  label?: string;
}

const Textbox: React.FC<TextboxProps> = ({ label }) => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        className="text-black"
        type="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default Textbox;
