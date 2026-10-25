import React, { useRef, useState } from 'react';

/**
 * MagneticButton Primitives
 * - Calibrated spring physics for pointer pull
 * - Active tactile haptic scale compression
 * - Tabular typography alignment
 */
export function MagneticButton({ children, onClick, className = '', variant = 'primary' }) {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * 0.22;
    const deltaY = (e.clientY - centerY) * 0.22;
    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const variantStyles = variant === 'primary'
    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] font-bold'
    : 'border border-white/15 bg-white/5 text-slate-100 hover:border-white/40 hover:bg-white/10';

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm 
                  font-medium transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] 
                  active:scale-[0.96] outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${variantStyles} ${className}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        willChange: 'transform'
      }}
    >
      {children}
    </button>
  );
}
