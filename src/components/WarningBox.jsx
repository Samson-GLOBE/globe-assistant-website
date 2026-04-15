import { AlertTriangle } from 'lucide-react';
export default function WarningBox({ title = 'Warning', text }) {
  return (
    <div style={{ background: '#FDECEA', borderLeft: '3px solid #B03A2E', borderRadius: '0 8px 8px 0' }} className="p-4 my-3">
      <div className="flex items-center gap-2 mb-1">
        <AlertTriangle size={14} color="#B03A2E" />
        <p style={{ fontWeight: 600, color: '#8B1A1A', fontSize: '13px' }}>{title}</p>
      </div>
      <p style={{ fontSize: '13px', color: '#2C1810', lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}
