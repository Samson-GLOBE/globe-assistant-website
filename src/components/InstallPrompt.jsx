import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
export default function InstallPrompt() {
  const [prompt, setPrompt] = useState(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const handler = e => { e.preventDefault(); setPrompt(e); setShown(true); };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);
  if (!shown || !prompt) return null;
  const install = async () => { prompt.prompt(); const { outcome } = await prompt.userChoice; if (outcome === 'accepted') setShown(false); };
  return (
    <div style={{ position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 32px)', maxWidth: 420,
      background: '#2C1810', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      boxShadow: '0 8px 30px rgba(44,24,16,0.35)', zIndex: 9999 }}>
      <div>
        <p style={{ color: '#FAF3E8', fontSize: 13, fontWeight: 600, margin: 0 }}>Install GLOBE app</p>
        <p style={{ color: '#C08040', fontSize: 11, margin: 0 }}>Access offline on your phone</p>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={install} style={{ background: '#8B4513', color: '#FAF3E8', border: 'none', borderRadius: 8, padding: '7px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
          <Download size={12} /> Install
        </button>
        <button onClick={() => setShown(false)} style={{ background: 'transparent', border: 'none', color: '#C08040', cursor: 'pointer', padding: '7px 4px' }}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
