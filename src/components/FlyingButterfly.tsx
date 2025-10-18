import { useEffect, useState } from "react";

interface ButterflyProps {
  delay: number;
  speed: number;
  size: number;
}

const Butterfly = ({ delay, speed, size }: ButterflyProps) => {
  const [position, setPosition] = useState({ x: 20, y: 20 });

  useEffect(() => {
    let frameId: number;
    let time = delay;

    const animate = () => {
      time += speed;
      
      // Create random flying path using sine waves
      const x = 30 + Math.sin(time) * 25 + Math.sin(time * 2) * 15;
      const y = 30 + Math.cos(time * 1.5) * 25 + Math.cos(time * 0.8) * 15;
      
      setPosition({ x, y });

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [delay, speed]);

  const scale = size;

  return (
    <div
      className="absolute transition-all duration-700 ease-out"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
    >
      <div className="relative">
        {/* Antennae */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1">
          <div className="w-px h-3 bg-foreground/60 origin-bottom rotate-[-20deg]">
            <div className="w-1 h-1 bg-foreground/60 rounded-full absolute -top-0.5 left-1/2 -translate-x-1/2" />
          </div>
          <div className="w-px h-3 bg-foreground/60 origin-bottom rotate-[20deg]">
            <div className="w-1 h-1 bg-foreground/60 rounded-full absolute -top-0.5 left-1/2 -translate-x-1/2" />
          </div>
        </div>

        {/* Butterfly wings */}
        <div className="flex items-center gap-0.5">
          {/* Left wings */}
          <div className="relative">
            {/* Upper left wing */}
            <div
              className="w-5 h-7 bg-gradient-to-br from-primary via-accent to-primary-glow rounded-full opacity-90 animate-[flutter_0.3s_ease-in-out_infinite] relative"
              style={{ transformOrigin: 'right center' }}
            >
              {/* Wing pattern spots */}
              <div className="absolute top-2 left-1 w-1.5 h-1.5 bg-white/30 rounded-full" />
              <div className="absolute top-3.5 left-1.5 w-1 h-1 bg-white/40 rounded-full" />
            </div>
            {/* Lower left wing */}
            <div
              className="w-4 h-5 bg-gradient-to-br from-accent via-primary to-primary-glow rounded-full opacity-80 absolute top-2 left-0.5 animate-[flutter_0.3s_ease-in-out_infinite_0.15s] relative"
              style={{ transformOrigin: 'right center' }}
            >
              <div className="absolute top-1.5 left-1 w-1 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
          
          {/* Body */}
          <div className="relative z-10">
            <div className="w-1.5 h-7 bg-foreground/90 rounded-full" />
            {/* Body segments */}
            <div className="absolute top-1 left-0 w-1.5 h-px bg-foreground/40" />
            <div className="absolute top-2.5 left-0 w-1.5 h-px bg-foreground/40" />
            <div className="absolute top-4 left-0 w-1.5 h-px bg-foreground/40" />
          </div>
          
          {/* Right wings */}
          <div className="relative">
            {/* Upper right wing */}
            <div
              className="w-5 h-7 bg-gradient-to-bl from-primary via-accent to-primary-glow rounded-full opacity-90 animate-[flutter_0.3s_ease-in-out_infinite] relative"
              style={{ transformOrigin: 'left center' }}
            >
              {/* Wing pattern spots */}
              <div className="absolute top-2 right-1 w-1.5 h-1.5 bg-white/30 rounded-full" />
              <div className="absolute top-3.5 right-1.5 w-1 h-1 bg-white/40 rounded-full" />
            </div>
            {/* Lower right wing */}
            <div
              className="w-4 h-5 bg-gradient-to-bl from-accent via-primary to-primary-glow rounded-full opacity-80 absolute top-2 right-0.5 animate-[flutter_0.3s_ease-in-out_infinite_0.15s] relative"
              style={{ transformOrigin: 'left center' }}
            >
              <div className="absolute top-1.5 right-1 w-1 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FlyingButterfly = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <Butterfly delay={0} speed={0.003} size={1} />
      <Butterfly delay={5} speed={0.0025} size={0.8} />
      <Butterfly delay={10} speed={0.0035} size={0.9} />
      <Butterfly delay={15} speed={0.003} size={0.85} />
    </div>
  );
};
