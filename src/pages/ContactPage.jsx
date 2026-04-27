export default function ContactPage() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Contact & Information</h1>
          <p style={styles.subtitle}>
            Reach out to your programme coordinator or partner university for any questions about your GLOBE mobility.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={styles.columns}>

          {/* ── LEFT COLUMN ── */}
          <div style={styles.col}>

            {/* Programme Coordination */}
            <div style={styles.card}>
              <div style={styles.cardTitleRow}>
                <span style={styles.cardIcon}>🎓</span>
                <h2 style={styles.cardTitle}>Programme Coordination</h2>
              </div>
              <p style={styles.cardIntro}>
                For general questions about the GLOBE Erasmus Mundus programme, applications, grants, and schedules, contact the programme coordination team.
              </p>

              <div style={styles.contactList}>
                <ContactItem
                  role="Programme Coordinator"
                  name="GLOBE Coordination Office"
                  email="info@globe-master.eu"
                  note="General enquiries & applications"
                />
                <ContactItem
                  role="Student Mobility Officer"
                  name="International Relations Office"
                  email="mobility@globe-master.eu"
                  note="Mobility placements & grant support"
                />
                <ContactItem
                  role="Academic Coordinator"
                  name="Academic Affairs Team"
                  email="academic@globe-master.eu"
                  note="Course recognition & transcripts"
                />
              </div>

              <a
                href="https://globe-master.eu"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.websiteBtn}
              >
                🌐 Visit globe-master.eu ↗
              </a>
            </div>

            {/* Partner Universities */}
            <div style={styles.card}>
              <div style={styles.cardTitleRow}>
                <span style={styles.cardIcon}>🏛️</span>
                <h2 style={styles.cardTitle}>Partner Universities</h2>
              </div>
              <p style={styles.cardIntro}>
                Contact your host university's International Relations office directly for housing, enrolment, and local administrative queries.
              </p>

              <div style={styles.uniList}>
                <UniItem
                  flag="🇪🇸"
                  country="Spain — Semester 1"
                  name="Universidad Rey Juan Carlos (URJC)"
                  email="internacional@urjc.es"
                  website="https://www.urjc.es"
                />
                <UniItem
                  flag="🇬🇧"
                  country="United Kingdom — Semester 2"
                  name="Bangor University"
                  email="international@bangor.ac.uk"
                  website="https://www.bangor.ac.uk"
                />
                <UniItem
                  flag="🇲🇽"
                  country="Mexico — Summer School"
                  name="Universidad Autónoma de Tlaxcala (UATx)"
                  email="internacionales@uatx.mx"
                  website="https://www.uatx.mx"
                />
                <UniItem
                  flag="🇵🇹"
                  country="Portugal — Semester 3"
                  name="Partner University — Lisbon"
                  email="international@partner.pt"
                  website="https://globe-master.eu"
                />
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <div style={styles.col}>

            {/* Disclaimer */}
            <div style={{ ...styles.card, ...styles.disclaimerCard }}>
              <div style={styles.cardTitleRow}>
                <span style={styles.cardIcon}>⚠️</span>
                <h2 style={styles.cardTitle}>Important Disclaimer</h2>
              </div>

              <div style={styles.disclaimerBody}>
                <p style={styles.disclaimerText}>
                  All visa and entry requirement information provided on this platform is sourced from <strong>official government and embassy websites</strong> at the time of publication.
                </p>
                <p style={styles.disclaimerText}>
                  However, <strong>immigration rules, visa policies, and required documentation are subject to change</strong> without prior notice. It is the sole responsibility of each student to verify the current and up-to-date requirements directly with the relevant embassy, consulate, or official immigration authority of their destination country <strong>before</strong> making any travel or application arrangements.
                </p>
                <p style={styles.disclaimerText}>
                  The GLOBE programme and this platform <strong>do not accept liability</strong> for any inaccuracies, outdated information, or consequences arising from reliance on the information provided here.
                </p>
                <p style={styles.disclaimerText}>
                  When in doubt, always consult your home country's embassy of the destination country or an accredited immigration advisor.
                </p>
              </div>

              <div style={styles.disclaimerFooter}>
                <span style={styles.disclaimerFooterIcon}>ℹ️</span>
                <span style={styles.disclaimerFooterText}>
                  Last reviewed: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                </span>
              </div>
            </div>

            {/* Useful Links */}
            <div style={styles.card}>
              <div style={styles.cardTitleRow}>
                <span style={styles.cardIcon}>🔗</span>
                <h2 style={styles.cardTitle}>Useful Links</h2>
              </div>
              <p style={styles.cardIntro}>
                Official resources to help you prepare for your mobility period.
              </p>

              <div style={styles.linkGroups}>

                <LinkGroup title="GLOBE Programme">
                  <LinkRow icon="🌍" label="GLOBE Official Website" url="https://globe-master.eu" />
                  <LinkRow icon="📋" label="Erasmus+ Programme Guide" url="https://erasmus-plus.ec.europa.eu" />
                  <LinkRow icon="💶" label="EU Funding & Grants" url="https://ec.europa.eu/programmes/erasmus-plus" />
                </LinkGroup>

                <LinkGroup title="Visa & Entry">
                  <LinkRow icon="🇪🇸" label="Spain — Visa Applications (Exteriores)" url="https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Citas-previas.aspx" />
                  <LinkRow icon="🇬🇧" label="UK — Student Visa (Gov.uk)" url="https://www.gov.uk/student-visa" />
                  <LinkRow icon="🇲🇽" label="Mexico — INM Immigration Portal" url="https://www.inm.gob.mx" />
                  <LinkRow icon="🇵🇹" label="Portugal — SEF / AIMA Portal" url="https://aima.gov.pt" />
                </LinkGroup>

                <LinkGroup title="Accommodation">
                  <LinkRow icon="🏠" label="Idealista (Spain)" url="https://www.idealista.com" />
                  <LinkRow icon="🏠" label="Spotahome (Europe)" url="https://www.spotahome.com" />
                  <LinkRow icon="🏠" label="HousingAnywhere (International)" url="https://housinganywhere.com" />
                  <LinkRow icon="🏠" label="Uniplaces (Portugal)" url="https://www.uniplaces.com" />
                </LinkGroup>

                <LinkGroup title="Travel & Health">
                  <LinkRow icon="✈️" label="Skyscanner — Flights" url="https://www.skyscanner.net" />
                  <LinkRow icon="🏥" label="EHIC / European Health Card" url="https://ec.europa.eu/social/main.jsp?catId=559" />
                  <LinkRow icon="🛡️" label="Travel Insurance — Allianz" url="https://www.allianz-travel.com" />
                </LinkGroup>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

/* ── Sub-components ── */

function ContactItem({ role, name, email, note }) {
  return (
    <div style={styles.contactItem}>
      <p style={styles.contactRole}>{role}</p>
      <p style={styles.contactName}>{name}</p>
      <a href={`mailto:${email}`} style={styles.contactEmail}>✉️ {email}</a>
      {note && <p style={styles.contactNote}>{note}</p>}
    </div>
  );
}

function UniItem({ flag, country, name, email, website }) {
  return (
    <div style={styles.uniItem}>
      <div style={styles.uniTop}>
        <span style={styles.uniFlag}>{flag}</span>
        <div>
          <p style={styles.uniCountry}>{country}</p>
          <p style={styles.uniName}>{name}</p>
        </div>
      </div>
      <div style={styles.uniLinks}>
        <a href={`mailto:${email}`} style={styles.uniLink}>✉️ {email}</a>
        <a href={website} target="_blank" rel="noopener noreferrer" style={styles.uniLink}>🌐 Website ↗</a>
      </div>
    </div>
  );
}

function LinkGroup({ title, children }) {
  return (
    <div style={styles.linkGroup}>
      <p style={styles.linkGroupTitle}>{title}</p>
      <div style={styles.linkGroupItems}>{children}</div>
    </div>
  );
}

function LinkRow({ icon, label, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={styles.linkRow}>
      <span style={styles.linkRowIcon}>{icon}</span>
      <span style={styles.linkRowLabel}>{label}</span>
      <span style={styles.linkRowArrow}>↗</span>
    </a>
  );
}

/* ── Styles ── */
const styles = {
  page: { flex: 1, padding: '2rem 1rem' },
  container: { maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' },

  header: {
    background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '12px', padding: '1.75rem 2.5rem', textAlign: 'center',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)', borderTop: '4px solid #2ad2c9',
  },
  title: { fontSize: '1.9rem', fontWeight: '800', color: '#32373c', marginBottom: '0.5rem' },
  subtitle: { fontSize: '0.95rem', color: '#666', lineHeight: '1.5', maxWidth: '560px', margin: '0 auto' },

  columns: { display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' },
  col: { flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: '1.5rem' },

  card: {
    background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '14px', padding: '1.5rem 1.75rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.09)', border: '1px solid rgba(255,255,255,0.7)',
    display: 'flex', flexDirection: 'column', gap: '1rem',
  },
  disclaimerCard: { borderLeft: '4px solid #f39c12', background: 'rgba(255,253,245,0.95)' },

  cardTitleRow: { display: 'flex', alignItems: 'center', gap: '0.6rem' },
  cardIcon: { fontSize: '1.3rem' },
  cardTitle: { fontSize: '1.15rem', fontWeight: '800', color: '#32373c' },
  cardIntro: { fontSize: '0.88rem', color: '#666', lineHeight: '1.6', marginTop: '-0.25rem' },

  /* Contact items */
  contactList: { display: 'flex', flexDirection: 'column', gap: '0.85rem' },
  contactItem: {
    background: '#f8fffe', border: '1px solid #d0f0ee', borderRadius: '10px',
    padding: '0.85rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.2rem',
  },
  contactRole: { fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#2ad2c9' },
  contactName: { fontSize: '0.92rem', fontWeight: '700', color: '#32373c' },
  contactEmail: { fontSize: '0.84rem', color: '#2ad2c9', textDecoration: 'none', fontWeight: '600' },
  contactNote: { fontSize: '0.78rem', color: '#888', marginTop: '0.1rem' },

  websiteBtn: {
    alignSelf: 'flex-start', background: '#2ad2c9', color: '#fff',
    padding: '0.45rem 1rem', borderRadius: '20px', textDecoration: 'none',
    fontSize: '0.84rem', fontWeight: '700',
  },

  /* University items */
  uniList: { display: 'flex', flexDirection: 'column', gap: '0.85rem' },
  uniItem: {
    background: '#f9f9ff', border: '1px solid #e0e0f0', borderRadius: '10px',
    padding: '0.85rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
  },
  uniTop: { display: 'flex', alignItems: 'flex-start', gap: '0.65rem' },
  uniFlag: { fontSize: '1.6rem', lineHeight: 1, marginTop: '2px', flexShrink: 0 },
  uniCountry: { fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888' },
  uniName: { fontSize: '0.9rem', fontWeight: '700', color: '#32373c' },
  uniLinks: { display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingLeft: '2.25rem' },
  uniLink: { fontSize: '0.82rem', color: '#2ad2c9', textDecoration: 'none', fontWeight: '600' },

  /* Disclaimer */
  disclaimerBody: { display: 'flex', flexDirection: 'column', gap: '0.65rem' },
  disclaimerText: { fontSize: '0.87rem', color: '#4a4a4a', lineHeight: '1.7' },
  disclaimerFooter: {
    display: 'flex', alignItems: 'center', gap: '0.5rem',
    background: '#fff8e6', borderRadius: '8px', padding: '0.55rem 0.85rem',
    border: '1px solid #ffe9a0',
  },
  disclaimerFooterIcon: { fontSize: '0.9rem' },
  disclaimerFooterText: { fontSize: '0.78rem', color: '#a06000', fontWeight: '600' },

  /* Useful links */
  linkGroups: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  linkGroup: { display: 'flex', flexDirection: 'column', gap: '0.35rem' },
  linkGroupTitle: {
    fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase',
    letterSpacing: '0.07em', color: '#2ad2c9', marginBottom: '0.1rem',
  },
  linkGroupItems: { display: 'flex', flexDirection: 'column', gap: '0.15rem' },
  linkRow: {
    display: 'flex', alignItems: 'center', gap: '0.5rem',
    padding: '0.45rem 0.7rem', borderRadius: '7px',
    textDecoration: 'none', transition: 'background 0.12s',
    color: '#32373c',
  },
  linkRowIcon: { fontSize: '0.9rem', flexShrink: 0 },
  linkRowLabel: { flex: 1, fontSize: '0.85rem', color: '#333' },
  linkRowArrow: { fontSize: '0.78rem', color: '#aaa' },
};
