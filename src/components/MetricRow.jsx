import React from "react";

const MetricRow = ({ label, before, after }) => (
  <div className="grid grid-cols-3 gap-[6px] py-2 border-bottom border-white/5">
    <span className="text-[10px] text-white/55 leading-[1.4]">{label}</span>
    <span className="text-[10px] text-red-400 leading-[1.4] text-center">
      {before}
    </span>
    <span className="text-[10px] text-green-400 leading-[1.4] text-right">
      {after}
    </span>
  </div>
);

export default MetricRow;
