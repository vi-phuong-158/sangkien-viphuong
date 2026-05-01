import React from "react";

const Tag = ({ text, color = "#b5c229" }) => (
  <span
    className="text-[10px] font-mono px-2 py-[2px] rounded-full tracking-wider whitespace-nowrap"
    style={{
      border: `1px solid ${color}44`,
      color,
      background: `${color}11`,
    }}
  >
    {text}
  </span>
);

export default Tag;
