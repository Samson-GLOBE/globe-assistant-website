import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
export default function CopyButton({ label, text }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  return (
    <button onClick={copy} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 18px',
      borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600,
      background: copied ? '#3A7A2C' : '#8B4513', color: '#FAF3E8', transition: 'background 0.2s',
    }}>
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? 'Copied!' : label}
    </button>
  );
}
