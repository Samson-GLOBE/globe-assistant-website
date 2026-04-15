export default function PageHeader({ title, subtitle, emoji }) {
  return (
    <div style={{ background: 'linear-gradient(135deg, #2C1810 0%, #4A2208 100%)' }} className="px-4 py-12 text-center">
      {emoji && <div className="text-5xl mb-3">{emoji}</div>}
      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#FAF3E8', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, lineHeight: 1.1 }}>{title}</h1>
      {subtitle && <p style={{ color: '#C08040', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', marginTop: '10px', maxWidth: '560px', margin: '10px auto 0' }}>{subtitle}</p>}
    </div>
  );
}
