import { ExternalLink } from 'lucide-react';
export default function LinkButton({ label, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px',
        border: '1.5px solid #8B4513', borderRadius: 8, color: '#8B4513',
        fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: 'all 0.15s',
        background: 'transparent', cursor: 'pointer', margin: '4px 6px 4px 0' }}
      onMouseEnter={e => { e.currentTarget.style.background = '#8B4513'; e.currentTarget.style.color = '#FAF3E8'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8B4513'; }}>
      <ExternalLink size={13} />
      {label}
    </a>
  );
}
