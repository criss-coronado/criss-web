import { Linkedin, Mail, Instagram, Github, Heart } from 'lucide-react';
import './Footer.css';

const FOOTER_LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#certificaciones', label: 'Certificaciones' },
  { href: '#contacto', label: 'Contacto' },
];

const SOCIALS = [
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/cristell-coronado' },
  { icon: <Mail size={18} />, label: 'Email', href: 'mailto:Criss.ccoronado@gmail.com' },
  { icon: <Instagram size={18} />, label: 'Instagram', href: 'https://instagram.com' },
  { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/criss-coronado' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="divider" />
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#inicio" className="footer__logo" aria-label="Volver al inicio">
            <span className="footer__logo-text gradient-text">CC</span>
          </a>
          <p className="footer__tagline">
            Comunicación + Marketing · UPC · Perú
          </p>
          {/* Social icons */}
          <div className="footer__socials">
            {SOCIALS.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="footer__social"
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <nav className="footer__nav" aria-label="Navegación del pie">
          <p className="footer__nav-title">Navegación</p>
          {FOOTER_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="footer__nav-link">{label}</a>
          ))}
        </nav>

        {/* Contact quick */}
        <div className="footer__contact">
          <p className="footer__nav-title">Contacto rápido</p>
          <a href="mailto:Criss.ccoronado@gmail.com" className="footer__nav-link">
            Criss.ccoronado@gmail.com
          </a>
          <a href="tel:+51921891942" className="footer__nav-link">
            (51) 921 891 942
          </a>
          <a
            href="/criss-web/cv-cristell-coronado.pdf"
            download
            className="footer__nav-link"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className="divider" />
      <div className="container footer__bottom">
        <p>© {year} Cristell Xiomara Coronado Huamaní. Todos los derechos reservados.</p>
        <p className="footer__made">
          Hecho con <Heart size={13} aria-label="amor" /> y mucho café
        </p>
      </div>
    </footer>
  );
}
