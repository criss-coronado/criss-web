import './About.css';

const STATS = [
  { value: '8vo', label: 'Ciclo en UPC' },
  { value: 'Top 10%', label: 'Décimo superior' },
  { value: '4+', label: 'Certificaciones' },
  { value: '2027', label: 'Mención Publicidad' },
];

const INTERESTS = [
  { emoji: '📱', label: 'Marketing Digital' },
  { emoji: '🎯', label: 'Estrategia de Marca' },
  { emoji: '📊', label: 'Analítica & Datos' },
  { emoji: '🎨', label: 'Diseño Creativo' },
  { emoji: '🛒', label: 'Comportamiento del Consumidor' },
  { emoji: '📣', label: 'Gestión de Campañas' },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="container">
        <div className="about__inner">
          {/* Left: text */}
          <div className="about__text reveal">
            <span className="section-eyebrow">Sobre mí</span>
            <h2 className="section-title">
              Construyendo el puente entre
              <span className="gradient-text"> marcas y personas</span>
            </h2>

            <p>
              Soy estudiante de Comunicación y Marketing en la{' '}
              <strong>Universidad Peruana de Ciencias Aplicadas (UPC)</strong>,
              perteneciente al décimo superior. Me caracterizo por un enfoque
              analítico, organización y proactividad, con orientación a resultados
              y capacidad para el trabajo en equipo.
            </p>

            <p style={{ marginTop: '16px' }}>
              Me apasiona el marketing digital, la planificación y ejecución de
              campañas, la gestión de marcas y el análisis del comportamiento del
              consumidor. Busco entornos dinámicos donde pueda aportar y seguir
              aprendiendo.
            </p>

            <p style={{ marginTop: '16px' }}>
              Actualmente curso la mención en{' '}
              <strong>Publicidad</strong> (2027) y me mantengo en constante
              actualización a través de certificaciones en plataformas como
              Coursera y HubSpot.
            </p>

            {/* Interests */}
            <div className="about__interests">
              {INTERESTS.map(({ emoji, label }) => (
                <span key={label} className="tag">
                  {emoji} {label}
                </span>
              ))}
            </div>

            <div className="about__ctas">
              <a href="#contacto" className="btn btn-primary">
                Trabajemos juntos
              </a>
              <a href="#proyectos" className="btn btn-outline">
                Ver proyectos
              </a>
            </div>
          </div>

          {/* Right: stats + info */}
          <div className="about__side reveal" style={{ transitionDelay: '0.15s' }}>
            {/* Stats grid */}
            <div className="about__stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="about__stat card">
                  <div className="about__stat-value gradient-text">{value}</div>
                  <div className="about__stat-label">{label}</div>
                </div>
              ))}
            </div>

            {/* Info card */}
            <div className="card about__info-card">
              <h3>Información de contacto</h3>
              <div className="about__info-list">
                <div className="about__info-item">
                  <span className="about__info-icon">📍</span>
                  <span>Villa Alejandro, Lurín — Lima, Perú</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-icon">📧</span>
                  <a href="mailto:Criss.ccoronado@gmail.com">Criss.ccoronado@gmail.com</a>
                </div>
                <div className="about__info-item">
                  <span className="about__info-icon">📞</span>
                  <a href="tel:+51921891942">(51) 921 891 942</a>
                </div>
                <div className="about__info-item">
                  <span className="about__info-icon">🌐</span>
                  <span>Español (nativo) · Inglés (básico-intermedio)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
