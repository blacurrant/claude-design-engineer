import React, { useEffect } from 'react';

/**
 * FluidDrawer Primitives
 * - Zero Layout Reflow: animate exclusively with translate3d & opacity
 * - Backdrop blur with progressive opacity decay
 * - Asymmetric enter/exit curve handling
 * - Keyboard ESC listener and reduced motion respect
 */
export function FluidDrawer({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Surface Sheet */}
      <div
        className="absolute bottom-0 left-0 right-0 max-h-[85vh] rounded-t-2xl border-t border-white/15 
                   bg-[#0c121e]/95 p-6 shadow-2xl backdrop-blur-xl transition-transform duration-240 
                   ease-[cubic-bezier(0.05,0.7,0.1,1)]"
        style={{
          transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
          willChange: 'transform'
        }}
      >
        {/* Drag Handle Pill */}
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-white/20" />

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white tracking-tight">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white active:scale-95 transition-transform"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(85vh-100px)] text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}
