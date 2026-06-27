import { useState, useEffect } from 'react';
import { ArrowDown, Linkedin, Mail, Instagram, Github } from 'lucide-react';
import './Hero.css';

const TYPED_WORDS = [
  'Marketing Digital',
  'Estrategia de Marca',
  'Analítica & Métricas',
  'Gestión de Campañas',
  'Comunicación Creativa',
];

function useTypewriter(words) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1400);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex(i => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(s => s + (reverse ? -1 : 1));
      setDisplayed(words[index].substring(0, subIndex));
    }, reverse ? 50 : 85);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index, words]);

  return displayed;
}

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/cristell-coronado',
    label: 'LinkedIn',
    icon: <Linkedin size={20} />,
  },
  {
    href: 'mailto:Criss.ccoronado@gmail.com',
    label: 'Email',
    icon: <Mail size={20} />,
  },
  {
    href: 'https://github.com/criss-coronado',
    label: 'GitHub',
    icon: <Github size={20} />,
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: <Instagram size={20} />,
  },
];

export default function Hero() {
  const word = useTypewriter(TYPED_WORDS);

  return (
    <section id="inicio" className="hero">
      {/* Background decorations */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        {/* Text content */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__status-dot" aria-hidden="true" />
            Disponible para prácticas y trabajo
          </div>

          <h1 className="hero__title">
            Hola, soy{' '}
            <span className="gradient-text">Cristell</span>
            <br />
            Coronado
          </h1>

          {/* Typewriter */}
          <div className="hero__typewriter" aria-live="polite" aria-atomic="true">
            <span>{word}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero__desc">
            Estudiante de 8vo ciclo de Comunicación y Marketing en la{' '}
            <strong>UPC</strong>, perteneciente al décimo superior. Apasionada por
            la analítica digital y la creación de estrategias que conectan marcas
            con personas.
          </p>

          {/* CTAs */}
          <div className="hero__ctas">
            <a href="#proyectos" className="btn btn-primary">
              Ver mi portafolio
              <ArrowDown size={16} />
            </a>
            <a href="#contacto" className="btn btn-outline">
              Contáctame
            </a>
          </div>

          {/* Social links */}
          <div className="hero__socials">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                className="hero__social-link"
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar / visual */}
        <div className="hero__visual">
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-ring" aria-hidden="true" />
            <div className="hero__avatar">
              <span className="hero__avatar-initials">CX</span>
            </div>

            {/* Floating stat cards */}
            <div className="hero__float hero__float--top" aria-hidden="true">
              <span className="hero__float-icon">📊</span>
              <div>
                <div className="hero__float-val">Décimo</div>
                <div className="hero__float-label">Superior UPC</div>
              </div>
            </div>

            <div className="hero__float hero__float--bottom" aria-hidden="true">
              <span className="hero__float-icon">🎯</span>
              <div>
                <div className="hero__float-val">8vo</div>
                <div className="hero__float-label">Ciclo activo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#sobre-mi" className="hero__scroll" aria-label="Ir a Sobre mí">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
