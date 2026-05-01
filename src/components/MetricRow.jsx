import React from "react";

const MetricRow = ({ label, before, after }) => (
  <div className="grid grid-cols-3 gap-[6px] py-2 border-bottom border-white/5">
    <span className="text-[10px] text-police-text/60 leading-[1.4] font-medium">{label}</span>
    <span className="text-[10px] text-danger leading-[1.4] text-center font-bold">
      {before}
    </span>
    <span className="text-[10px] text-police-accent leading-[1.4] text-right font-black">
      {after}
    </span>
  </div>
);

export default MetricRow;
