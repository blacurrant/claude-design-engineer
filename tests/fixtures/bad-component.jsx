import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function BadGenericAiCard() {
  const [open, setOpen] = useState(false);

  return (
    // Violates CDE001: generic flat border without inner glow/specular depth
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
      {/* Violates CDE005: metric without tabular-nums */}
      <h3 className="text-xl font-bold text-white">$14,250 Revenue</h3>

      {/* Violates CDE004: animating layout property 'height' on main thread */}
      <motion.div animate={{ height: open ? 140 : 0 }}>
        <p>Details collapsed content.</p>
      </motion.div>

      {/* Violates CDE002 (robotic transition-all duration-300) and CDE003 (missing active:scale compression) */}
      <button 
        onClick={() => setOpen(!open)}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-all duration-300 ease-in-out"
      >
        Toggle Details
      </button>
    </div>
  );
}
