import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: 'Mobility',      to: '/mobility' },
    { label: 'Visa Checker',  to: '/visa-checker' },
    { label: 'About',         to: '/about' },
    { label: 'Contact',       to: '/contact' },
  ];
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-150 pb-0.5 border-b-2 ${
      isActive
        ? 'text-amber-300 border-amber-300'
        : 'text-stone-300 border-transparent hover:text-white hover:border-stone-500'
    }`;

  return (
    <nav style={{ background: '#2C1810', borderBottom: '1px solid #4A2208' }} className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5">
          <Globe size={18} color="#D4A96A" />
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '18px', color: '#FAF3E8', letterSpacing: '1px' }}>GLOBE</span>
          <span style={{ fontSize: '11px', color: '#A07060', letterSpacing: '0.5px', marginTop: '2px' }}>Mobility Assistant</span>
        </NavLink>
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>)}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-stone-300 hover:text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div style={{ background: '#1A0E08', borderTop: '1px solid #4A2208' }} className="md:hidden px-4 py-4 flex flex-col gap-4">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
