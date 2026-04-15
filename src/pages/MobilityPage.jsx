import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const destinations = [
  {
    flag: '🇪🇸', name: 'Spain', path: '/mobility/spain',
    university: 'Universidad Rey Juan Carlos, Madrid',
    description: 'Semester 1 — Foundation in Global Change & Biodiversity',
    accent: '#8B4513', sections: ['Housing', 'Transport', 'TIE Process', 'Banking', 'Tips'],
  },
  {
    flag: '🇬🇧', name: 'United Kingdom', path: '/mobility/uk',
    university: 'Bangor University, Wales',
    description: 'Semester 2 — Biodiversity Conservation in practice',
    accent: '#2E5B8A', sections: ['Housing', 'Transport', 'Visa Guide', 'Tips'],
  },
  {
    flag: '🇲🇽', name: 'Mexico', path: '/mobility/mexico',
    university: 'Universidad Autónoma de Tlaxcala',
    description: 'Summer School — Field research & ecosystem experience',
    accent: '#3A7A2C', sections: ['Visa', 'Accommodation', 'Summer School Prep', 'Tips'],
  },
  {
    flag: '🇵🇹', name: 'Portugal', path: '/mobility/portugal',
    university: 'Universidade de Lisboa',
    description: 'Semester 3 — Environmental management & policy',
    accent: '#7A3045', sections: ['Visa & Residence', 'Housing', 'Transport', 'Tips'],
  },
];

export default function MobilityPage() {
  return (
    <div>
      <PageHeader
        title="Mobility Guide"
        subtitle="Everything you need to navigate each GLOBE destination — housing, transport, visas, and real student tips."
        emoji="🌍"
      />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {destinations.map(d => (
            <Link key={d.path} to={d.path} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#FFFFFF', borderRadius: 14, overflow: 'hidden',
                border: '1px solid #E8C99A', transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(44,24,16,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ height: 4, background: d.accent }} />
                <div style={{ padding: '20px 22px 22px' }}>
                  <div style={{ fontSize: 44, marginBottom: 10 }}>{d.flag}</div>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, fontWeight: 600, color: '#2C1810', margin: 0 }}>{d.name}</h2>
                  <p style={{ fontSize: 12, color: '#8B6A55', margin: '3px 0 8px', fontStyle: 'italic' }}>{d.university}</p>
                  <p style={{ fontSize: 13, color: '#5A3A28', marginBottom: 14, lineHeight: 1.5 }}>{d.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {d.sections.map(s => (
                      <span key={s} style={{ background: '#FAF3E8', border: '1px solid #E8C99A', borderRadius: 20, padding: '3px 10px', fontSize: 11, color: '#6B3410' }}>{s}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: 14, fontSize: 13, fontWeight: 600, color: d.accent, display: 'flex', alignItems: 'center', gap: 4 }}>
                    Explore guide →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
