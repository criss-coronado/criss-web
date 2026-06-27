import { ExternalLink } from 'lucide-react';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    type: 'Caso de Estudio Académico',
    typeClass: '',
    emoji: '👗',
    title: 'Plan de Marketing Digital — Marca de Ropa Sostenible',
    description:
      'Desarrollo de un plan integral de marketing digital para una marca ficticia de moda sostenible. Se elaboraron estrategias de segmentación, posicionamiento, canales digitales y medición de KPIs.',
    tags: ['Marketing Digital', 'Segmentación', 'KPIs', 'Redes Sociales'],
    results: ['+35% de alcance orgánico proyectado', 'Estrategia de 3 fases definida'],
    period: '2024',
  },
  {
    id: 2,
    type: 'Proyecto Universitario',
    typeClass: 'tag-coral',
    emoji: '🏪',
    title: 'Estrategia de Marca — Emprendimiento Social',
    description:
      'Aplicación de metodologías de design thinking e innovación para desarrollar la identidad de marca y el posicionamiento de un emprendimiento social, incluyendo propuesta de valor emocional.',
    tags: ['Branding', 'Design Thinking', 'Emprendimiento', 'UX'],
    results: ['Identidad visual completa', 'Modelo de negocio social validado'],
    period: '2021',
  },
  {
    id: 3,
    type: 'Proyecto Voluntario',
    typeClass: '',
    emoji: '📲',
    title: 'Gestión de Redes Sociales — Negocio Familiar',
    description:
      'Apoyo en la gestión de contenido y estrategia de redes sociales para un pequeño negocio local. Creación de calendarios de contenido, diseño de piezas en Canva y análisis de métricas básicas.',
    tags: ['Canva', 'Social Media', 'Contenido', 'Métricas'],
    results: ['+15% en interacción mensual', 'Calendario de contenido implementado'],
    period: '2023',
  },
  {
    id: 4,
    type: 'Caso de Estudio',
    typeClass: 'tag-coral',
    emoji: '📊',
    title: 'Análisis de Comportamiento del Consumidor',
    description:
      'Investigación y análisis del comportamiento del consumidor digital en el sector retail peruano. Uso de herramientas de analítica para identificar patrones de compra y proponer estrategias de mejora.',
    tags: ['Analítica', 'Consumer Insights', 'IBM', 'Power BI'],
    results: ['Informe de 40 páginas entregado', 'Recomendaciones estratégicas presentadas'],
    period: '2024',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">Portafolio</span>
          <h2 className="section-title">Proyectos y casos de estudio</h2>
          <p className="section-subtitle">
            Trabajos académicos y voluntarios que demuestran mi aplicación práctica
            del marketing y la comunicación.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className="card projects__card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="projects__card-header">
                <span className={`tag ${project.typeClass}`}>{project.type}</span>
                <span className="projects__period">{project.period}</span>
              </div>

              <div className="projects__emoji" aria-hidden="true">
                {project.emoji}
              </div>

              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__desc">{project.description}</p>

              {/* Tags */}
              <div className="projects__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="projects__tag">{tag}</span>
                ))}
              </div>

              {/* Results */}
              <div className="projects__results">
                <span className="projects__results-label">Resultados:</span>
                <ul>
                  {project.results.map(r => (
                    <li key={r}>
                      <span className="projects__result-dot" aria-hidden="true">✓</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="projects__cta reveal">
          <p>¿Tienes un proyecto en mente? Me encantaría colaborar.</p>
          <a href="#contacto" className="btn btn-primary">
            Hablemos <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
