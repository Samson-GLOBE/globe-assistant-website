import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/',         label: 'Home' },
  { to: '/mobility', label: 'Mobility' },
  { to: '/visa',     label: 'Visa Checker' },
  { to: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>

        {/* Logo */}
        <Link to="/" style={styles.logoLink}>
          <img
            src="/icon-192.png.png"
            alt="GLOBE logo"
            style={styles.logoImg}
          />
          <span style={styles.logoText}>GLOBE Assistant</span>
        </Link>

        {/* Desktop links */}
        <ul style={styles.desktopLinks}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                style={{
                  ...styles.link,
                  ...(pathname === to ? styles.linkActive : {}),
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          style={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span style={styles.bar} />
          <span style={styles.bar} />
          <span style={styles.bar} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                ...styles.mobileLink,
                ...(pathname === to ? styles.mobileLinkActive : {}),
              }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    background: '#ffffff',
    borderBottom: '2px solid #2ad2c9',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 1.25rem',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    textDecoration: 'none',
  },
  logoImg: {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  logoText: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#32373c',
    letterSpacing: '-0.01em',
  },
  desktopLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '0.25rem',
    alignItems: 'center',
  },
  link: {
    display: 'block',
    padding: '0.4rem 0.85rem',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '0.95rem',
    color: '#32373c',
    textDecoration: 'none',
    transition: 'background 0.15s, color 0.15s',
  },
  linkActive: {
    background: '#2ad2c9',
    color: '#ffffff',
    fontWeight: '600',
  },
  hamburger: {
    display: 'none',   // shown via @media in real CSS; we'll use inline workaround
    flexDirection: 'column',
    gap: '4px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '6px',
  },
  bar: {
    display: 'block',
    width: '22px',
    height: '2px',
    background: '#32373c',
    borderRadius: '2px',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff',
    borderTop: '1px solid #e5e5e5',
    padding: '0.5rem 0',
  },
  mobileLink: {
    padding: '0.75rem 1.5rem',
    fontWeight: '500',
    color: '#32373c',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'background 0.15s',
  },
  mobileLinkActive: {
    color: '#2ad2c9',
    fontWeight: '700',
    background: '#f0fffe',
  },
};

// Make hamburger visible on small screens via a style tag
const responsiveStyle = `
  @media (max-width: 640px) {
    [data-hamburger] { display: flex !important; }
    [data-desktop-links] { display: none !important; }
  }
`;
