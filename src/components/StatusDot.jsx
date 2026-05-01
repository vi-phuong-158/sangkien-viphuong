import React from "react";

const StatusDot = ({ online }) => (
  <span className="flex items-center gap-[5px]">
    <span className="relative inline-block w-2.5 h-2.5">
      <span
        className={`w-2.5 h-2.5 rounded-full block ${online ? "bg-police-accent shadow-[0_0_10px_#D4AF37]" : "bg-danger shadow-[0_0_10px_#ef4444]"}`}
      />
      {online && (
        <span
          className="absolute inset-0 rounded-full bg-police-accent animate-ping opacity-40"
          style={{ animationDuration: "2.5s" }}
        />
      )}
    </span>
    <span
      className={`text-[9px] font-mono tracking-widest font-black ${online ? "text-police-accent" : "text-danger"}`}
    >
      {online ? "ONLINE" : "OFFLINE"}
    </span>
  </span>
);

export default StatusDot;
