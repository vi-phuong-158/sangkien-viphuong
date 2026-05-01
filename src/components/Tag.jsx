import React from "react";

const Tag = ({ text }) => (
  <span
    className="text-[9px] font-mono px-3 py-1 rounded-full tracking-[0.1em] whitespace-nowrap bg-white/5 text-police-accent border border-white/10 font-black uppercase shadow-neo-inner"
  >
    {text}
  </span>
);

export default Tag;
