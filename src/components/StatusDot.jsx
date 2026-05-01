import React from "react";

const StatusDot = ({ online }) => (
  <span className="flex items-center gap-[5px]">
    <span className="relative inline-block w-2 h-2">
      <span
        className={`w-2 h-2 rounded-full block ${online ? "bg-green-400" : "bg-red-400"}`}
      />
      {online && (
        <span
          className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60"
          style={{ animationDuration: "1.5s" }}
        />
      )}
    </span>
    <span
      className={`text-[9px] font-mono tracking-widest ${online ? "text-green-400" : "text-red-400"}`}
    >
      {online ? "ONLINE" : "OFFLINE"}
    </span>
  </span>
);

export default StatusDot;
