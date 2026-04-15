import { Lightbulb } from 'lucide-react';
export default function TipBox({ title = 'Student tip', text }) {
  return (
    <div style={{ background: '#EDF7E6', borderLeft: '3px solid #3A7A2C', borderRadius: '0 8px 8px 0' }} className="p-4 my-3">
      <div className="flex items-center gap-2 mb-1">
        <Lightbulb size={14} color="#3A7A2C" />
        <p style={{ fontWeight: 600, color: '#2A5A20', fontSize: '13px' }}>{title}</p>
      </div>
      <p style={{ fontSize: '13px', color: '#2C1810', lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}
