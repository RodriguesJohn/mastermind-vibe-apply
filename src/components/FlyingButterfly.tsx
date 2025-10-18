import { useEffect, useState } from "react";

export const FlyingButterfly = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [position, setPosition] = useState({ x: 20, y: 20 });

  useEffect(() => {
    let frameId: number;
    let time = 0;
    let sparkleId = 0;

    const animate = () => {
      time += 0.01;
      
      // Create random flying path using sine waves
      const x = 30 + Math.sin(time) * 25 + Math.sin(time * 2) * 15;
      const y = 30 + Math.cos(time * 1.5) * 25 + Math.cos(time * 0.8) * 15;
      
      setPosition({ x, y });

      // Add sparkles to the trail
      if (Math.random() > 0.7) {
        const newSparkle = {
          id: sparkleId++,
          x,
          y,
        };
        setSparkles((prev) => [...prev, newSparkle]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
        }, 1000);
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Butterfly */}
      <div
        className="absolute transition-all duration-500 ease-out"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative animate-pulse">
          {/* Butterfly wings */}
          <div className="flex items-center gap-0.5">
            {/* Left wings */}
            <div className="relative">
              <div
                className="w-4 h-6 bg-gradient-to-br from-primary via-accent to-primary-glow rounded-full opacity-80 animate-[flutter_0.3s_ease-in-out_infinite]"
                style={{ transformOrigin: 'right center' }}
              />
              <div
                className="w-3 h-5 bg-gradient-to-br from-accent via-primary to-primary-glow rounded-full opacity-70 absolute top-1 left-0.5 animate-[flutter_0.3s_ease-in-out_infinite_0.15s]"
                style={{ transformOrigin: 'right center' }}
              />
            </div>
            
            {/* Body */}
            <div className="w-1 h-6 bg-foreground/80 rounded-full" />
            
            {/* Right wings */}
            <div className="relative">
              <div
                className="w-4 h-6 bg-gradient-to-bl from-primary via-accent to-primary-glow rounded-full opacity-80 animate-[flutter_0.3s_ease-in-out_infinite]"
                style={{ transformOrigin: 'left center' }}
              />
              <div
                className="w-3 h-5 bg-gradient-to-bl from-accent via-primary to-primary-glow rounded-full opacity-70 absolute top-1 right-0.5 animate-[flutter_0.3s_ease-in-out_infinite_0.15s]"
                style={{ transformOrigin: 'left center' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sparkle trail */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-[sparkle_1s_ease-out_forwards]"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
        >
          <div className="w-2 h-2 bg-gradient-to-br from-primary via-accent to-primary-glow rounded-full blur-[1px]" />
        </div>
      ))}
    </div>
  );
};
