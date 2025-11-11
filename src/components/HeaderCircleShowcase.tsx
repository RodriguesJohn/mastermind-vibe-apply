// Static imports for better compatibility with build tools
import headerCircleImages from "@/assets/HeaderCircle";

// Position offsets for organic cloud-like arrangement
const positions = [
  { top: "10%", left: "5%", size: "w-24 h-24" },
  { top: "5%", left: "20%", size: "w-20 h-20" },
  { top: "15%", left: "35%", size: "w-28 h-28" },
  { top: "8%", left: "50%", size: "w-22 h-22" },
  { top: "20%", left: "15%", size: "w-26 h-26" },
  { top: "25%", left: "40%", size: "w-24 h-24" },
  { top: "12%", left: "60%", size: "w-20 h-20" },
  { top: "30%", left: "25%", size: "w-28 h-28" },
  { top: "35%", left: "55%", size: "w-22 h-22" },
  { top: "18%", left: "70%", size: "w-26 h-26" },
  { top: "40%", left: "10%", size: "w-24 h-24" },
  { top: "45%", left: "45%", size: "w-20 h-20" },
  { top: "28%", left: "75%", size: "w-28 h-28" },
  { top: "50%", left: "30%", size: "w-22 h-22" },
  { top: "38%", left: "65%", size: "w-26 h-26" },
];

export const HeaderCircleShowcase = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black" />
      
      {/* Circular images arranged organically */}
      <div className="relative w-full h-full">
        {headerCircleImages.map((image, index) => {
          const position = positions[index % positions.length];
          return (
            <div
              key={index}
              className={`absolute ${position.size} rounded-full overflow-hidden border-2 border-white/20 shadow-lg transition-transform hover:scale-110 hover:border-white/40 hover:z-10`}
              style={{
                top: position.top,
                left: position.left,
              }}
            >
              <img
                src={image}
                alt={`Community member ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />
    </div>
  );
};

