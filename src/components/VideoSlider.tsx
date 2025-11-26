import React from "react";
import { DotScreenShader } from "./DotScreenShader";

const videos = [
  {
    id: "An8IM-kPyms",
    title: "Vibe Coding Workshop Recording",
    thumbnail: "https://img.youtube.com/vi/An8IM-kPyms/maxresdefault.jpg"
  },
  {
    id: "aNNaVhnJdYc",
    title: "Vibe Coding Weekend Workshop Recording",
    thumbnail: "https://img.youtube.com/vi/aNNaVhnJdYc/maxresdefault.jpg"
  },
];

export const VideoSlider = () => {
  // Duplicate videos for seamless infinite scroll (2 copies for -50% animation)
  const duplicatedVideos = [...videos, ...videos];

  return (
    <section className="relative border-b border-white/10 bg-black py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Shader effects */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
        style={{ animation: "glowMove 8s ease-in-out infinite" }}
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" 
        style={{ animation: "glowPulse 6s ease-in-out infinite" }}
        aria-hidden="true" 
      />
      
      <style>
        {`
          @keyframes glowMove {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.25;
            }
            50% {
              transform: translate(20px, -30px) scale(1.1);
              opacity: 0.35;
            }
          }
          @keyframes glowPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.2;
            }
            50% {
              transform: scale(1.15);
              opacity: 0.3;
            }
          }
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 md:mb-10 text-center">Projects You Will Build</h2>
        
        <div className="relative w-full overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />
          
          <div 
            className="flex gap-6 hover:[animation-play-state:paused]"
            style={{
              animation: 'scroll-left 15s linear infinite'
            }}
          >
            {duplicatedVideos.map((video, index) => (
              <div
                key={`${video.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[400px] md:w-[600px] lg:w-[700px]"
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Header Cards Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Getting Started Master Prompt",
              action: "Start your journey"
            },
            {
              title: "Learn About Different Techniques and Trips",
              action: "Discover advanced techniques"
            },
            {
              title: "Learn How to Orchestrate Workflows",
              action: "Streamline your workflow"
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-white/10 hover:border-white/30 transition-all overflow-hidden group bg-black cursor-pointer"
            >
              {/* DotScreenShader Background */}
              <div className="absolute inset-0 opacity-60">
                <DotScreenShader />
              </div>
              
              {/* Header Content */}
              <div className="relative p-6 sm:p-8 min-h-[100px] sm:min-h-[120px] flex flex-col items-center justify-center">
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-white text-center">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

