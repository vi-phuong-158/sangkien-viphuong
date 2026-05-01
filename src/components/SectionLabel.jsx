import React from "react";

const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-[3px] h-4 bg-police-accent rounded-[2px]" />
    <span className="font-mono text-[10px] text-police-accent tracking-[0.14em] uppercase font-black">
      {text}
    </span>
  </div>
);

export default SectionLabel;
