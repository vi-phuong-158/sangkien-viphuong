import React from "react";
import { C } from "../data/projects";

const GlowScene = () => (
  <div className="glow-scene fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div
      className="glow-orb w-[500px] h-[500px] -top-[10%] -left-[15%]"
      style={{
        background: `radial-gradient(circle, ${C.lime}33, transparent 70%)`,
      }}
    />
    <div
      className="glow-orb w-[400px] h-[400px] top-[40%] -right-[15%]"
      style={{
        background: `radial-gradient(circle, ${C.teal}33, transparent 70%)`,
      }}
    />
    <div
      className="glow-orb w-[300px] h-[300px] -bottom-[5%] left-[20%]"
      style={{
        background: `radial-gradient(circle, ${C.olive}44, transparent 70%)`,
      }}
    />
    {/* scanline */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime/10 to-transparent animate-scanline pointer-events-none" />
  </div>
);

export default GlowScene;
