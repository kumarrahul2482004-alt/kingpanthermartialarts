export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 shadow-glow">
        <span className="text-lg font-black text-cyan-300">KP</span>
      </div>
      <div>
        <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">King Panther</p>
        <p className="text-xs text-slate-400">Martial Arts Academy</p>
      </div>
    </div>
  );
}
