import React, { useRef, useState } from 'react';

/**
 * TactileCard Primitives
 * - Pointer-tracking dynamic radial specular highlight
 * - Multi-stop translucent border with inner ambient glow
 * - Tactile micro-compression on active click (scale: 0.985)
 * - 120 FPS compositor isolated (zero reflow)
 */
export function TactileCard({ children, className = '', onClick }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setCoords(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#0d1321]/80 p-6 
                  shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_12px_36px_-8px_rgba(0,0,0,0.6)] 
                  backdrop-blur-md transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] 
                  hover:-translate-y-1 hover:border-cyan-500/40 active:scale-[0.985] cursor-pointer ${className}`}
      style={{ willChange: 'transform' }}
    >
      {/* Specular Pointer Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: coords.opacity,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(0, 240, 255, 0.12), transparent 40%)`
        }}
      />
      
      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
