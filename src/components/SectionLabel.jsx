import React from "react";

const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-[3px] h-4 bg-lime rounded-[2px]" />
    <span className="font-mono text-[10px] text-lime tracking-[0.14em] uppercase">
      {text}
    </span>
  </div>
);

export default SectionLabel;
