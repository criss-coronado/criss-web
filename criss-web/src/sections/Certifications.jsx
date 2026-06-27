import { ExternalLink, Award } from 'lucide-react';
import './Certifications.css';

const CERTS = [
  {
    id: 1,
    provider: 'Coursera · UPC',
    providerEmoji: '🎓',
    title: 'Carrera Universitaria en Comunicación y Marketing',
    description: 'Décimo superior, período 2024-02. Mención en Publicidad (en proceso, 2027).',
    date: 'Mar. 2020 — Actualidad',
    type: 'Universidad',
    typeClass: '',
    color: 'accent',
  },
  {
    id: 2,
    provider: 'Coursera Inc.',
    providerEmoji: '📚',
    title: 'Planificación y Estrategia de Marketing Digital',
    description: 'Estrategia digital: segmentación, planificación, ejecución, medición y adaptación al entorno digital.',
    date: 'Agosto 2025',
    type: 'Certificación',
    typeClass: 'tag-coral',
    color: 'coral',
    verifyUrl: '#',
  },
  {
    id: 3,
    provider: 'Coursera Inc.',
    providerEmoji: '🏷️',
    title: 'Gestión de Marca — Programa Especializado',
    description: 'Identidad de marca, comunicación, experiencia del cliente (UX), gestión de marca y estrategia digital.',
    date: 'Abril 2026',
    type: 'Certificación',
    typeClass: '',
    verifyUrl: '#',
  },
  {
    id: 4,
    provider: 'Coursera Inc.',
    providerEmoji: '💡',
    title: 'Diseño y Creación de un Emprendimiento Social',
    description: 'Identidad de marca, posicionamiento, valor emocional, design thinking, innovación e ideación.',
    date: 'Oct. 2021',
    type: 'Certificación',
    typeClass: 'tag-coral',
    verifyUrl: '#',
  },
  {
    id: 5,
    provider: 'Master Reader',
    providerEmoji: '📖',
    title: 'Lector Ideal',
    description: 'Certificación en lectura rápida y comprensión lectora avanzada.',
    date: 'May. 2019',
    type: 'Curso',
    typeClass: '',
  },
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="section certs">
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">Formación</span>
          <h2 className="section-title">Educación y certificaciones</h2>
          <p className="section-subtitle">
            Mi formación continua en plataformas reconocidas complementa mi base
            académica universitaria.
          </p>
        </div>

        <div className="certs__list">
          {CERTS.map((cert, i) => (
            <div
              key={cert.id}
              className={`card certs__card reveal ${cert.color === 'accent' ? 'certs__card--featured' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="certs__card-left">
                <div className="certs__icon">
                  <span aria-hidden="true">{cert.providerEmoji}</span>
                </div>
              </div>

              <div className="certs__card-body">
                <div className="certs__card-header">
                  <span className={`tag ${cert.typeClass}`}>{cert.type}</span>
                  <span className="certs__date">{cert.date}</span>
                </div>

                <h3 className="certs__title">{cert.title}</h3>
                <p className="certs__provider">{cert.provider}</p>
                <p className="certs__desc">{cert.description}</p>

                {cert.verifyUrl && (
                  <a href={cert.verifyUrl} className="certs__verify" target="_blank" rel="noopener noreferrer">
                    <Award size={14} />
                    Verificar credencial
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
