import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>

        {/* Left — GLOBE branding */}
        <div style={styles.col}>
          <div style={styles.logoRow}>
            <img
              src="/icon-192.png.png"
              alt="GLOBE logo"
              style={styles.logoImg}
            />
            <div>
              <div style={styles.logoTitle}>GLOBE Mobility Assistant</div>
              <div style={styles.logoSub}>Global Opportunities & Beyond</div>
            </div>
          </div>
          <p style={styles.description}>
            Supporting student mobility across Europe and beyond through the
            GLOBE Erasmus+ programme.
          </p>
        </div>

        {/* Centre — Quick links */}
        <div style={styles.col}>
          <h4 style={styles.colTitle}>Quick Links</h4>
          <ul style={styles.linkList}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/mobility" style={styles.link}>Mobility Guide</Link></li>
            <li><Link to="/visa" style={styles.link}>Visa Checker</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact</Link></li>
          </ul>
        </div>

        {/* Right — EU badge */}
        <div style={{ ...styles.col, alignItems: 'center' }}>
          <img
            src="/eu-badge.png"
            alt="Co-funded by the European Union"
            style={styles.euBadge}
            onError={e => { e.target.style.display = 'none'; }}
          />
          <p style={styles.euText}>
            Co-funded by the European Union
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={styles.bottomBar}>
        <span>© {new Date().getFullYear()} GLOBE Programme · Erasmus+</span>
        <a
          href="https://globe-master.eu"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.bottomLink}
        >
          globe-master.eu ↗
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#32373c',
    color: '#d0d5da',
    marginTop: 'auto',
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2.5rem 1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'space-between',
  },
  col: {
    flex: '1 1 220px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoImg: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #2ad2c9',
  },
  logoTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 1.2,
  },
  logoSub: {
    fontSize: '0.75rem',
    color: '#2ad2c9',
    letterSpacing: '0.03em',
  },
  description: {
    fontSize: '0.85rem',
    lineHeight: '1.6',
    color: '#9aa0a8',
  },
  colTitle: {
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#2ad2c9',
    marginBottom: '0.25rem',
  },
  linkList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  link: {
    color: '#b0b8c2',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.15s',
  },
  euBadge: {
    maxWidth: '180px',
    width: '100%',
    borderRadius: '8px',
  },
  euText: {
    fontSize: '0.75rem',
    color: '#9aa0a8',
    textAlign: 'center',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255,255,255,0.08)',
    padding: '1rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '0.5rem',
    fontSize: '0.8rem',
    color: '#6c757d',
    maxWidth: '1100px',
    margin: '0 auto',
    width: '100%',
  },
  bottomLink: {
    color: '#2ad2c9',
    textDecoration: 'none',
  },
};
