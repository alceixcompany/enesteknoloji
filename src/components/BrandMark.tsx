import { FiSmartphone, FiTool } from 'react-icons/fi';

export default function BrandMark({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="Enes Teknoloji">
      <span className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-[inset_0_-3px_0_rgba(0,0,0,.12)] ${dark ? 'bg-[var(--ink)] text-[var(--taxi-yellow)]' : 'bg-[var(--taxi-yellow)] text-[var(--ink)]'}`}>
        <FiSmartphone className="h-6 w-6" strokeWidth={2.2} />
        <FiTool className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full p-[3px] ${dark ? 'bg-[var(--taxi-yellow)] text-[var(--ink)]' : 'bg-[var(--ink)] text-[var(--taxi-yellow)]'}`} />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-[10px] font-bold uppercase tracking-[.28em] text-current/55">Enes Teknoloji</span>
          <span className="mt-1 block text-xl font-black tracking-[-.04em]">ENTECH<span className="text-[var(--taxi-deep)]">.</span></span>
        </span>
      )}
    </div>
  );
}
