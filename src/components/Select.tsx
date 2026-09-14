import { useState, useRef, useEffect, useId } from "react";

interface SelectProps {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  label: string;
  className?: string;
}

export default function Select({ value, onChange, options, label, className = "" }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const uid = useId();
  const btnId = `select-btn-${uid}`;
  const listId = `select-list-${uid}`;

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function keyHandler(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <span id={btnId} className="sr-only">{label}</span>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={btnId}
        aria-controls={listId}
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold text-[#2C3A52] border border-[#D6E1F2] rounded-lg bg-white hover:border-[#2563EB] transition-colors min-w-[160px] w-full"
      >
        <span className="flex-1 text-left truncate">{value}</span>
        <span
          className="material-symbols-outlined text-[16px] text-[#435070] transition-transform duration-200 shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          className="absolute top-full left-0 mt-1 min-w-full bg-white border border-[#D6E1F2] rounded-xl shadow-xl z-50 py-1 overflow-hidden"
          style={{ boxShadow: "0 8px 24px -4px rgba(10,25,47,0.12), 0 2px 8px -2px rgba(10,25,47,0.08)" }}
        >
          {options.map(opt => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { onChange(opt); setOpen(false); } }}
              tabIndex={0}
              className={`flex items-center gap-2 px-3 py-2 text-[13px] cursor-pointer transition-colors select-none ${
                value === opt
                  ? "bg-[#EBF0F9] font-bold text-[#0A192F]"
                  : "text-[#2C3A52] hover:bg-[#F5F8FC] font-medium"
              }`}
            >
              <span
                className="material-symbols-outlined text-[14px] text-[#2563EB] shrink-0"
                aria-hidden="true"
                style={{ visibility: value === opt ? "visible" : "hidden" }}
              >
                check
              </span>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
