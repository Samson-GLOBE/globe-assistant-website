import { useState, useEffect, useMemo } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://hmsvuqawwjywtkqvsznp.supabase.co',
  'sb_publishable_h_Av3qxNbMDCbVNaHGYPFg_AetCueCP'
);

const DESTINATIONS = ['Spain', 'United Kingdom', 'Mexico', 'Portugal'];

const destFlag = {
  'Spain':          '🇪🇸',
  'United Kingdom': '🇬🇧',
  'Mexico':         '🇲🇽',
  'Portugal':       '🇵🇹',
};

function statusStyle(row) {
  if (!row) return { bg: '#f0f0f0', color: '#888', label: 'No data', dot: '#ccc' };
  if (!row.visa_required)         return { bg: '#e8faf0', color: '#1a7a45', label: 'No Visa Required', dot: '#2ecc71' };
  if (row.visa_type?.toLowerCase().includes('eta') ||
      row.visa_type?.toLowerCase().includes('evisa'))
                                  return { bg: '#fff8e6', color: '#a06000', label: 'eVisa / ETA',       dot: '#f39c12' };
  return                                 { bg: '#fdecea', color: '#922b21', label: 'Visa Required',     dot: '#e74c3c' };
}

export default function VisaCheckerPage() {
  const [allData, setAllData]           = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [search, setSearch]             = useState('');
  const [selected, setSelected]         = useState(null);
  const [loading, setLoading]           = useState(true);
  const [detailOpen, setDetailOpen]     = useState(null);

  // Load everything once on mount
  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from('visa_requirements')
        .select('*')
        .order('nationality');
      if (!error && data) {
        setAllData(data);
        const unique = [...new Set(data.map(r => r.nationality))].sort();
        setNationalities(unique);
      }
      setLoading(false);
    }
    load();
  }, []);

  // Filter nationality list by search
  const filtered = useMemo(() =>
    nationalities.filter(n => n.toLowerCase().includes(search.toLowerCase())),
    [nationalities, search]
  );

  // Get results for selected nationality
  const results = useMemo(() => {
    if (!selected) return {};
    const map = {};
    allData
      .filter(r => r.nationality === selected)
      .forEach(r => { map[r.destination_country] = r; });
    return map;
  }, [selected, allData]);

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Title */}
        <div style={styles.header}>
          <h1 style={styles.title}>Visa Requirements Checker</h1>
          <p style={styles.subtitle}>
            Select your nationality to instantly see what you need for each GLOBE destination.
          </p>
        </div>

        {/* Two-panel layout */}
        <div style={styles.panels}>

          {/* LEFT — nationality list */}
          <div style={styles.leftPanel}>
            <div style={styles.searchWrapper}>
              <span style={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search nationality…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={styles.searchInput}
              />
              {search && (
                <button style={styles.clearBtn} onClick={() => setSearch('')}>✕</button>
              )}
            </div>

            {loading ? (
              <p style={styles.hint}>Loading nationalities…</p>
            ) : filtered.length === 0 ? (
              <p style={styles.hint}>No match found.</p>
            ) : (
              <ul style={styles.natList}>
                {filtered.map(nat => (
                  <li key={nat}>
                    <button
                      style={{
                        ...styles.natBtn,
                        ...(selected === nat ? styles.natBtnActive : {}),
                      }}
                      onClick={() => { setSelected(nat); setDetailOpen(null); }}
                    >
                      {nat}
                      {selected === nat && <span style={styles.natChevron}>›</span>}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* RIGHT — results */}
          <div style={styles.rightPanel}>
            {!selected ? (
              <div style={styles.placeholder}>
                <span style={styles.placeholderIcon}>🌍</span>
                <p style={styles.placeholderText}>Select your nationality on the left to see visa requirements for all four destinations.</p>
              </div>
            ) : (
              <>
                <h2 style={styles.resultTitle}>
                  Showing requirements for <span style={styles.natHighlight}>{selected}</span>
                </h2>

                <div style={styles.destGrid}>
                  {DESTINATIONS.map(dest => {
                    const row = results[dest];
                    const s   = statusStyle(row);
                    const isOpen = detailOpen === dest;

                    return (
                      <div key={dest} style={{ ...styles.destCard, background: s.bg, borderColor: s.dot + '55' }}>
                        {/* Card header */}
                        <div style={styles.destHeader}>
                          <span style={styles.destFlag}>{destFlag[dest]}</span>
                          <div style={styles.destInfo}>
                            <h3 style={styles.destName}>{dest}</h3>
                            <span style={{ ...styles.statusBadge, background: s.dot, color: '#fff' }}>
                              {s.label}
                            </span>
                          </div>
                        </div>

                        {row && (
                          <>
                            <p style={{ ...styles.visaType, color: s.color }}>
                              {row.visa_type}
                            </p>

                            {/* Toggle full details */}
                            <button
                              style={{ ...styles.detailToggle, color: s.color, borderColor: s.dot + '88' }}
                              onClick={() => setDetailOpen(isOpen ? null : dest)}
                            >
                              {isOpen ? 'Hide details ▲' : 'Full details ▼'}
                            </button>

                            {isOpen && (
                              <div style={styles.detailSection}>
                                {row.documents_required && (
                                  <div style={styles.detailBlock}>
                                    <p style={styles.detailLabel}>📎 Required documents</p>
                                    <p style={styles.detailText}>{row.documents_required}</p>
                                  </div>
                                )}
                                {row.notes && (
                                  <div style={styles.detailBlock}>
                                    <p style={styles.detailLabel}>📝 Notes</p>
                                    <p style={styles.detailText}>{row.notes}</p>
                                  </div>
                                )}
                                {row.official_link && (
                                  <a
                                    href={row.official_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.officialLink}
                                  >
                                    Official application portal ↗
                                  </a>
                                )}
                              </div>
                            )}
                          </>
                        )}

                        {!row && (
                          <p style={styles.noData}>No data available for this destination.</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: { flex: 1, padding: '2rem 1rem' },
  container: { maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' },

  header: {
    background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '12px', padding: '1.75rem 2.5rem', textAlign: 'center',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)', borderTop: '4px solid #2ad2c9',
  },
  title: { fontSize: '1.9rem', fontWeight: '800', color: '#32373c', marginBottom: '0.5rem' },
  subtitle: { fontSize: '0.95rem', color: '#666', lineHeight: '1.5' },

  panels: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },

  /* LEFT panel */
  leftPanel: {
    flex: '0 0 260px',
    background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: '1px solid rgba(255,255,255,0.7)',
    overflow: 'hidden',
    minWidth: '220px',
  },
  searchWrapper: {
    display: 'flex', alignItems: 'center', gap: '0.5rem',
    padding: '0.85rem 1rem', borderBottom: '1px solid #eee',
    position: 'sticky', top: 0, background: '#fff', zIndex: 2,
  },
  searchIcon: { fontSize: '0.9rem', flexShrink: 0 },
  searchInput: {
    flex: 1, border: 'none', outline: 'none', fontSize: '0.88rem',
    color: '#32373c', background: 'transparent',
  },
  clearBtn: {
    background: 'none', border: 'none', cursor: 'pointer',
    color: '#aaa', fontSize: '0.8rem', padding: '0 2px',
  },
  hint: { padding: '1rem', fontSize: '0.85rem', color: '#aaa', textAlign: 'center' },
  natList: {
    listStyle: 'none',
    maxHeight: '520px',
    overflowY: 'auto',
    padding: '0.4rem 0',
  },
  natBtn: {
    width: '100%', textAlign: 'left', background: 'none', border: 'none',
    padding: '0.55rem 1.1rem', fontSize: '0.88rem', color: '#32373c',
    cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    transition: 'background 0.12s',
  },
  natBtnActive: {
    background: '#2ad2c9', color: '#fff', fontWeight: '700',
  },
  natChevron: { fontSize: '1.1rem', fontWeight: '300' },

  /* RIGHT panel */
  rightPanel: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  placeholder: {
    background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '12px', padding: '3rem 2rem', textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid rgba(255,255,255,0.6)',
  },
  placeholderIcon: { fontSize: '2.5rem', display: 'block', marginBottom: '0.75rem' },
  placeholderText: { fontSize: '0.95rem', color: '#888', lineHeight: '1.6', maxWidth: '320px', margin: '0 auto' },

  resultTitle: {
    fontSize: '1rem', fontWeight: '600', color: '#444',
    background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
    borderRadius: '8px', padding: '0.7rem 1.1rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
  },
  natHighlight: { color: '#2ad2c9', fontWeight: '800' },

  destGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1rem',
  },
  destCard: {
    borderRadius: '12px', padding: '1.25rem 1.4rem',
    border: '1px solid', display: 'flex', flexDirection: 'column', gap: '0.6rem',
    boxShadow: '0 3px 14px rgba(0,0,0,0.07)',
  },
  destHeader: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  destFlag: { fontSize: '2rem', lineHeight: 1 },
  destInfo: { display: 'flex', flexDirection: 'column', gap: '0.3rem' },
  destName: { fontSize: '1.05rem', fontWeight: '700', color: '#32373c' },
  statusBadge: {
    alignSelf: 'flex-start', fontSize: '0.72rem', fontWeight: '700',
    padding: '0.2rem 0.6rem', borderRadius: '20px', letterSpacing: '0.03em',
  },
  visaType: { fontSize: '0.88rem', fontWeight: '600', lineHeight: '1.4' },
  detailToggle: {
    alignSelf: 'flex-start', background: 'none', border: '1px solid',
    borderRadius: '6px', padding: '0.3rem 0.65rem',
    fontSize: '0.78rem', fontWeight: '600', cursor: 'pointer',
  },
  detailSection: { display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.25rem' },
  detailBlock: {
    background: 'rgba(255,255,255,0.6)', borderRadius: '7px', padding: '0.65rem 0.85rem',
  },
  detailLabel: {
    fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase',
    letterSpacing: '0.05em', color: '#555', marginBottom: '0.3rem',
  },
  detailText: { fontSize: '0.82rem', color: '#444', lineHeight: '1.65', whiteSpace: 'pre-line' },
  officialLink: {
    display: 'inline-block', fontSize: '0.82rem', fontWeight: '700',
    color: '#fff', background: '#2ad2c9', padding: '0.4rem 0.9rem',
    borderRadius: '20px', textDecoration: 'none', alignSelf: 'flex-start',
  },
  noData: { fontSize: '0.85rem', color: '#aaa', fontStyle: 'italic' },
};
