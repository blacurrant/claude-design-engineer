import React, { useState } from 'react';

export function GoodTactileCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0d1321]/80 p-6 
                    shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_12px_36px_-8px_rgba(0,0,0,0.6)] 
                    backdrop-blur-md transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {/* Tabular numeric typography prevents layout jitter */}
      <h3 className="text-xl font-bold tracking-tight text-white tabular-nums font-mono">$14,250 Revenue</h3>

      {/* Zero layout reflow: using transform & opacity */}
      <div 
        className="overflow-hidden transition-transform duration-240 ease-[cubic-bezier(0.05,0.7,0.1,1)]"
        style={{
          transform: open ? 'scaleY(1)' : 'scaleY(0)',
          willChange: 'transform'
        }}
      >
        <p className="text-slate-400">Details fluid content.</p>
      </div>

      {/* Tactile button with micro-compression active state and calibrated curve */}
      <button 
        onClick={() => setOpen(!open)}
        className="mt-4 inline-flex items-center rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-black 
                   transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] 
                   hover:-translate-y-0.5 active:scale-[0.98] outline-none"
        style={{ willChange: 'transform' }}
      >
        Toggle Details
      </button>
    </div>
  );
}
