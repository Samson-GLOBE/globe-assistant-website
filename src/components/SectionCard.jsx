import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
export default function SectionCard({ title, emoji, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E8C99A', borderRadius: 12, overflow: 'hidden', marginBottom: 10 }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 18px', background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#2C1810' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {emoji && <span style={{ fontSize: 18 }}>{emoji}</span>}
          {title}
        </span>
        <ChevronDown size={16} color="#8B4513" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
      </button>
      {open && <div style={{ padding: '0 18px 16px', borderTop: '1px solid #F2E0C8' }}>{children}</div>}
    </div>
  );
}
