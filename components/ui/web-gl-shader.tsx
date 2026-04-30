"use client";

import dynamic from "next/dynamic";

const FaultyTerminal = dynamic(() => import("@/components/ui/faulty-terminal"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7EF] via-[#C5312E]/5 to-[#C5312E]/10" />
  ),
});

type WebGLShaderProps = {
  className?: string;
};

export function WebGLShader({ className = "" }: WebGLShaderProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`.trim()} aria-hidden="true">
      <FaultyTerminal
        scale={1.35}
        gridMul={[1.2, 1.2]}
        digitSize={1.65}
        timeScale={0.18}
        pause={false}
        scanlineIntensity={0.08}
        glitchAmount={0.02}
        flickerAmount={0.005}
        noiseAmp={0.12}
        chromaticAberration={0}
        dither={0}
        curvature={0}
        tint="#ffffff"
        mouseReact={false}
        mouseStrength={0}
        pageLoadAnimation={false}
        brightness={0.9}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(250,247,239,0.4)_0%,rgba(250,247,239,0)_60%),radial-gradient(70%_55%_at_100%_100%,rgba(197,49,46,0.08)_0%,rgba(197,49,46,0)_70%),radial-gradient(55%_40%_at_0%_100%,rgba(197,49,46,0.06)_0%,rgba(197,49,46,0)_75%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/12" />
    </div>
  );
}
