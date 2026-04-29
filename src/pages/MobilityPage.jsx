import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
 import.meta.env.VITE_SUPABASE_URL,
import.meta.env.VITE_SUPABASE_ANON_KEY
);

const sectionIcon = {
  'Housing':   '🏠',
  'Transport': '🚌',
  'T.I.E':     '🪪',
  'General':   '📋',
  'Visa':      '📄',
  'Health':    '🏥',
  'Banking':   '🏦',
};

const destinations = [
  {
    country: 'Spain',
    dbName: 'Spain',
    university: 'Universidad Rey Juan Carlos (URJC)',
    city: 'Madrid',
    flag: '🇪🇸',
    flagCode: 'ES',
    image: '/spain-campus.JPG',
    imageFallback: '/spain-campus.jpg',
    duration: 'Semester 1',
  },
  {
    country: 'United Kingdom',
    dbName: 'UK',
    university: 'Bangor University',
    city: 'Bangor, Wales',
    flag: '🇬🇧',
    flagCode: 'GB',
    image: '/uk-campus.JPG',
    imageFallback: '/uk-campus.jpg',
    duration: 'Semester 2',
  },
  {
    country: 'Mexico',
    dbName: 'Mexico',
    university: 'Universidad Autónoma de Tlaxcala (UATx)',
    city: 'Tlaxcala',
    flag: '🇲🇽',
    flagCode: 'MX',
    image: '/mexico-campus.jpg',
    imageFallback: '/mexico-campus.jpg',
    duration: 'Summer School',
  },
  {
    country: 'Portugal',
    dbName: 'Portugal',
    university: 'Partner University — Lisbon',
    city: 'Lisbon',
    flag: '🇵🇹',
    flagCode: 'PT',
    image: '/portugal-campus.JPG',
    imageFallback: '/portugal-campus.jpg',
    duration: 'Semester 3',
  },
];

function CampusImage({ src, fallback, alt, flagCode }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  function handleError() {
    if (currentSrc === src && fallback !== src) {
      setCurrentSrc(fallback);
    } else {
      setFailed(true);
    }
  }

  if (failed) {
    return (
      <div style={styles.imgPlaceholder}>
        <span style={styles.flagCodeText}>{flagCode}</span>
      </div>
    );
  }
  return (
    <img src={currentSrc} alt={alt} style={styles.img} onError={handleError} />
  );
}

function SectionCard({ section }) {
  const isComing = section.description === 'Content coming soon...';
  const icon = sectionIcon[section.section_name] || '📌';

  return (
    <div style={isComing ? styles.sectionCardMuted : styles.sectionCard}>
      <div style={styles.sectionHeader}>
        <span style={styles.sectionIcon}>{icon}</span>
        <h4 style={styles.sectionTitle}>{section.section_name}</h4>
      </div>

      <p style={isComing ? styles.sectionDescMuted : styles.sectionDesc}>
        {section.description}
      </p>

      {section.required_documents && (
        <div style={styles.docsBlock}>
          <p style={styles.docsTitle}>📎 Required documents</p>
          <p style={styles.docsText}>{section.required_documents}</p>
        </div>
      )}

      {section.useful_links && section.useful_links.length > 0 && (
        <div style={styles.linksRow}>
          {section.useful_links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.linkBtn}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MobilityPage() {
  const [expanded, setExpanded] = useState(null);
  const [contentMap, setContentMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      const { data, error } = await supabase
        .from('country_content')
        .select('*')
        .order('id');

      if (!error && data) {
        const grouped = {};
        data.forEach(row => {
          if (!grouped[row.country_name]) grouped[row.country_name] = [];
          grouped[row.country_name].push(row);
        });
        setContentMap(grouped);
      }
      setLoading(false);
    }
    fetchContent();
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.header}>
          <h1 style={styles.title}>Destination Countries</h1>
          <p style={styles.subtitle}>
            Explore your mobility options across four partner universities in the GLOBE Erasmus+ programme.
            Click <strong>Learn more</strong> on any card to see housing, transport, and practical guides.
          </p>
        </div>

        <div style={styles.grid}>
          {destinations.map((dest, i) => {
            const isOpen = expanded === i;
            const sections = contentMap[dest.dbName] || [];

            return (
              <div key={dest.country} style={styles.card}>
                <div style={styles.imgWrapper}>
                  <CampusImage
                    src={dest.image}
                    fallback={dest.imageFallback}
                    alt={`${dest.university} campus`}
                    flagCode={dest.flagCode}
                  />
                  <div style={styles.flagBadge}>{dest.flag}</div>
                </div>

                <div style={styles.cardBody}>
                  <div style={styles.cardTop}>
                    <h2 style={styles.countryName}>{dest.country}</h2>
                    <span style={styles.cityTag}>{dest.city}</span>
                  </div>
                  <h3 style={styles.uniName}>{dest.university}</h3>
                  <div style={styles.metaRow}>
                    <span style={styles.metaItem}>📅 {dest.duration}</span>
                  </div>

                  <button
                    style={styles.expandBtn}
                    onClick={() => setExpanded(isOpen ? null : i)}
                  >
                    {isOpen ? 'Show less ▲' : 'Learn more ▼'}
                  </button>

                  {isOpen && (
                    <div style={styles.expandedSection}>
                      {loading ? (
                        <p style={styles.loadingText}>Loading…</p>
                      ) : sections.length === 0 ? (
                        <p style={styles.loadingText}>No information available yet.</p>
                      ) : (
                        sections.map(section => (
                          <SectionCard key={section.id} section={section} />
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: { flex: 1, padding: '2rem 1rem' },
  container: { maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' },
  header: {
    background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '12px', padding: '2rem 2.5rem', textAlign: 'center',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)', borderTop: '4px solid #2ad2c9',
  },
  title: { fontSize: '2rem', fontWeight: '800', color: '#32373c', marginBottom: '0.75rem' },
  subtitle: { fontSize: '1rem', color: '#555', lineHeight: '1.6', maxWidth: '640px', margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' },
  card: {
    background: 'rgba(255,255,255,0.93)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
    border: '1px solid rgba(255,255,255,0.7)',
  },
  imgWrapper: { position: 'relative', height: '200px', overflow: 'hidden', background: '#e8f8f7' },
  img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  imgPlaceholder: {
    width: '100%', height: '100%', background: 'linear-gradient(135deg, #e8f8f7, #d0f0ee)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  flagCodeText: { fontSize: '2.5rem', fontWeight: '800', color: '#2ad2c9', opacity: 0.6 },
  flagBadge: {
    position: 'absolute', top: '12px', right: '12px', fontSize: '1.8rem',
    background: 'rgba(255,255,255,0.9)', borderRadius: '50%', width: '44px', height: '44px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
  cardBody: { padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  countryName: { fontSize: '1.3rem', fontWeight: '800', color: '#32373c' },
  cityTag: { fontSize: '0.78rem', background: '#e8f8f7', color: '#1fb8b0', padding: '0.2rem 0.6rem', borderRadius: '20px', fontWeight: '600' },
  uniName: { fontSize: '0.88rem', color: '#555', fontWeight: '500', lineHeight: '1.4' },
  metaRow: { display: 'flex', gap: '1rem', marginTop: '0.25rem' },
  metaItem: { fontSize: '0.8rem', color: '#6c757d' },
  expandBtn: {
    marginTop: '0.75rem', background: 'none', border: '1px solid #2ad2c9', color: '#2ad2c9',
    borderRadius: '6px', padding: '0.4rem 0.8rem', cursor: 'pointer',
    fontSize: '0.82rem', fontWeight: '600', alignSelf: 'flex-start',
  },
  expandedSection: {
    marginTop: '1rem', borderTop: '1px solid #e8e8e8', paddingTop: '1rem',
    display: 'flex', flexDirection: 'column', gap: '0.75rem',
  },
  loadingText: { fontSize: '0.88rem', color: '#999', fontStyle: 'italic' },
  sectionCard: {
    background: '#f8fffe', border: '1px solid #d0f0ee', borderRadius: '10px',
    padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
  },
  sectionCardMuted: {
    background: '#f9f9f9', border: '1px solid #e8e8e8', borderRadius: '10px',
    padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
  },
  sectionHeader: { display: 'flex', alignItems: 'center', gap: '0.5rem' },
  sectionIcon: { fontSize: '1.1rem' },
  sectionTitle: { fontSize: '0.95rem', fontWeight: '700', color: '#32373c' },
  sectionDesc: { fontSize: '0.85rem', color: '#444', lineHeight: '1.6' },
  sectionDescMuted: { fontSize: '0.85rem', color: '#aaa', fontStyle: 'italic', lineHeight: '1.6' },
  docsBlock: { background: '#fff8e6', border: '1px solid #ffe9a0', borderRadius: '7px', padding: '0.65rem 0.85rem' },
  docsTitle: { fontSize: '0.78rem', fontWeight: '700', color: '#b87c00', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.04em' },
  docsText: { fontSize: '0.82rem', color: '#555', lineHeight: '1.65', whiteSpace: 'pre-line' },
  linksRow: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' },
  linkBtn: {
    fontSize: '0.78rem', fontWeight: '600', color: '#ffffff', background: '#2ad2c9',
    padding: '0.3rem 0.7rem', borderRadius: '20px', textDecoration: 'none',
  },
};
