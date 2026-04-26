import { useState } from 'react';

const destinations = [
  {
    country: 'Spain',
    university: 'Universidad Rey Juan Carlos (URJC)',
    city: 'Madrid',
    flag: '🇪🇸',
    flagCode: 'ES',
    image: '/spain-campus.JPG',
    imageFallback: '/spain-campus.jpg',
    description:
      'Located in the vibrant capital Madrid, URJC offers a rich academic environment with strong links to European institutions. Students enjoy world-class research facilities and a dynamic student life.',
    highlights: ['Full EU member', 'Erasmus+ hub', 'Spanish & English programmes', 'Vibrant city life'],
    duration: 'Semester 1',
  },
  {
    country: 'United Kingdom',
    university: 'Bangor University',
    city: 'Bangor, Wales',
    flag: '🇬🇧',
    flagCode: 'GB',
    image: '/uk-campus.JPG',
    imageFallback: '/uk-campus.jpg',
    description:
      'Nestled between mountains and sea in North Wales, Bangor University combines stunning natural surroundings with excellent academic provision and a welcoming international community.',
    highlights: ['Top research university', 'Mountain & coastal setting', 'Strong student support', 'Historic Welsh culture'],
    duration: 'Semester 2',
  },
  {
    country: 'Mexico',
    university: 'Universidad Autónoma de Tlaxcala (UATx)',
    city: 'Tlaxcala',
    flag: '🇲🇽',
    flagCode: 'MX',
    image: '/mexico-campus.jpg',
    imageFallback: '/mexico-campus.jpg',
    description:
      'UATx is one of Mexico\'s distinguished public universities, located in the historic state of Tlaxcala. It offers a unique Latin American academic and cultural experience with strong exchange programmes.',
    highlights: ['Historic UNESCO city', 'Latin American culture', 'Affordable living', 'Warm community'],
    duration: 'Summer School',
  },
  {
    country: 'Portugal',
    university: 'Partner University — Lisbon',
    city: 'Lisbon',
    flag: '🇵🇹',
    flagCode: 'PT',
    image: '/portugal-campus.JPG',
    imageFallback: '/portugal-campus.jpg',
    description:
      'Lisbon, one of Europe\'s oldest and most beautiful capitals, hosts our Portuguese partner institution. Students benefit from exceptional quality of life, a sunny climate, and a thriving international community.',
    highlights: ['EU member state', 'Atlantic coast location', 'Affordable European capital', 'Rich cultural heritage'],
    duration: 'Semester 3',
  },
];

function CampusImage({ src, fallback, alt, flagCode }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  function handleError() {
    if (currentSrc === src && fallback !== src) {
      // Try the lowercase fallback first
      setCurrentSrc(fallback);
    } else {
      // Both failed — show text placeholder
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
    <img
      src={currentSrc}
      alt={alt}
      style={styles.img}
      onError={handleError}
    />
  );
}

export default function MobilityPage() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Destination Countries</h1>
          <p style={styles.subtitle}>
            Explore your mobility options across four partner universities in the GLOBE Erasmus+ programme.
            Click any card to learn more.
          </p>
        </div>

        {/* Cards grid */}
        <div style={styles.grid}>
          {destinations.map((dest, i) => (
            <div
              key={dest.country}
              style={styles.card}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {/* Photo */}
              <div style={styles.imgWrapper}>
                <CampusImage
                  src={dest.image}
                  fallback={dest.imageFallback}
                  alt={`${dest.university} campus`}
                  flagCode={dest.flagCode}
                />
                <div style={styles.flagBadge}>{dest.flag}</div>
              </div>

              {/* Card body */}
              <div style={styles.cardBody}>
                <div style={styles.cardTop}>
                  <h2 style={styles.countryName}>{dest.country}</h2>
                  <span style={styles.cityTag}>{dest.city}</span>
                </div>
                <h3 style={styles.uniName}>{dest.university}</h3>

                {/* Duration only — no language */}
                <div style={styles.metaRow}>
                  <span style={styles.metaItem}>📅 {dest.duration}</span>
                </div>

                {/* Expand toggle */}
                <button
                  style={styles.expandBtn}
                  onClick={e => { e.stopPropagation(); setExpanded(expanded === i ? null : i); }}
                >
                  {expanded === i ? 'Show less ▲' : 'Learn more ▼'}
                </button>

                {/* Expanded details */}
                {expanded === i && (
                  <div style={styles.expandedSection}>
                    <p style={styles.description}>{dest.description}</p>
                    <h4 style={styles.highlightsTitle}>Highlights</h4>
                    <ul style={styles.highlightsList}>
                      {dest.highlights.map(h => (
                        <li key={h} style={styles.highlightItem}>
                          <span style={styles.highlightDot}>✦</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info box */}
        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>How to Apply</h3>
          <p style={styles.infoText}>
            Mobility placements are arranged through your home institution's International Relations office.
            Contact your local GLOBE coordinator for eligibility requirements, application deadlines, and grant information.
            Visit <a href="https://globe-master.eu" target="_blank" rel="noopener noreferrer" style={styles.infoLink}>globe-master.eu</a> for full programme details.
          </p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    flex: 1,
    padding: '2rem 1rem',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  header: {
    background: 'rgba(255,255,255,0.90)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '12px',
    padding: '2rem 2.5rem',
    textAlign: 'center',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    borderTop: '4px solid #2ad2c9',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#32373c',
    marginBottom: '0.75rem',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: 'rgba(255,255,255,0.93)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '14px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
    border: '1px solid rgba(255,255,255,0.7)',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  imgWrapper: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
    background: '#e8f8f7',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imgPlaceholder: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #e8f8f7, #d0f0ee)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagCodeText: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#2ad2c9',
    opacity: 0.6,
  },
  flagBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    fontSize: '1.8rem',
    background: 'rgba(255,255,255,0.9)',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
  cardBody: {
    padding: '1.25rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countryName: {
    fontSize: '1.3rem',
    fontWeight: '800',
    color: '#32373c',
  },
  cityTag: {
    fontSize: '0.78rem',
    background: '#e8f8f7',
    color: '#1fb8b0',
    padding: '0.2rem 0.6rem',
    borderRadius: '20px',
    fontWeight: '600',
  },
  uniName: {
    fontSize: '0.88rem',
    color: '#555',
    fontWeight: '500',
    lineHeight: '1.4',
  },
  metaRow: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.25rem',
  },
  metaItem: {
    fontSize: '0.8rem',
    color: '#6c757d',
  },
  expandBtn: {
    marginTop: '0.75rem',
    background: 'none',
    border: '1px solid #2ad2c9',
    color: '#2ad2c9',
    borderRadius: '6px',
    padding: '0.4rem 0.8rem',
    cursor: 'pointer',
    fontSize: '0.82rem',
    fontWeight: '600',
    alignSelf: 'flex-start',
    transition: 'background 0.15s, color 0.15s',
  },
  expandedSection: {
    marginTop: '0.75rem',
    borderTop: '1px solid #e8e8e8',
    paddingTop: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  description: {
    fontSize: '0.88rem',
    color: '#444',
    lineHeight: '1.6',
  },
  highlightsTitle: {
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: '#2ad2c9',
  },
  highlightsList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
  },
  highlightItem: {
    fontSize: '0.85rem',
    color: '#444',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  highlightDot: {
    color: '#2ad2c9',
    fontSize: '0.7rem',
  },
  infoBox: {
    background: 'rgba(255,255,255,0.90)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '12px',
    padding: '1.75rem 2rem',
    borderLeft: '4px solid #2ad2c9',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  infoTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#32373c',
    marginBottom: '0.5rem',
  },
  infoText: {
    fontSize: '0.92rem',
    color: '#555',
    lineHeight: '1.65',
  },
  infoLink: {
    color: '#2ad2c9',
    fontWeight: '600',
  },
};
