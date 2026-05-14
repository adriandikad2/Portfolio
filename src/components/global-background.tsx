"use client";

import { MouseSpotlight } from "@/components/ui/spotlight";
import { Particles } from "@/components/ui/particles";

export function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Mouse-tracking spotlight - needs pointer-events for tracking */}
      <div className="pointer-events-auto absolute inset-0">
        <MouseSpotlight />
      </div>

      {/* Floating particles */}
      <Particles quantity={50} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
