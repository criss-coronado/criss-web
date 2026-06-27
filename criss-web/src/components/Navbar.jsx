import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#certificaciones', label: 'Certificaciones' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#inicio" className="navbar__logo" aria-label="Inicio">
          <span className="navbar__logo-text">CC</span>
          <span className="navbar__logo-dot" aria-hidden="true" />
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Navegación principal">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link ${active === href.replace('#', '') ? 'navbar__link--active' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <button
            className="navbar__theme-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/criss-web/cv-cristell-coronado.pdf"
            download
            className="btn btn-primary navbar__cv-btn"
            aria-label="Descargar CV"
          >
            Descargar CV
          </a>

          {/* Mobile hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="navbar__mobile-link"
              onClick={handleLinkClick}
              tabIndex={menuOpen ? 0 : -1}
            >
              {label}
            </a>
          ))}
          <a
            href="/criss-web/cv-cristell-coronado.pdf"
            download
            className="btn btn-primary"
            style={{ marginTop: '8px', justifyContent: 'center' }}
            tabIndex={menuOpen ? 0 : -1}
          >
            Descargar CV
          </a>
        </nav>
      </div>
    </header>
  );
}
