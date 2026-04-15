import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
export default function ChecklistItem({ id, text }) {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(localStorage.getItem(`chk_${id}`) === 'true');
  }, [id]);
  const toggle = () => {
    const next = !checked;
    setChecked(next);
    localStorage.setItem(`chk_${id}`, String(next));
  };
  return (
    <div onClick={toggle} className="flex items-start gap-3 py-2.5 cursor-pointer group">
      <div style={{
        width: 20, height: 20, borderRadius: 5, flexShrink: 0, marginTop: 1,
        border: checked ? 'none' : '2px solid #8B4513',
        background: checked ? '#8B4513' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.15s ease',
      }}>
        {checked && <Check size={11} color="white" strokeWidth={3} />}
      </div>
      <span style={{
        fontSize: '14px', lineHeight: 1.6, color: checked ? '#A07060' : '#2C1810',
        textDecoration: checked ? 'line-through' : 'none', transition: 'all 0.15s',
      }}>{text}</span>
    </div>
  );
}
