import './Skills.css';

const TOOL_SKILLS = [
  { name: 'Microsoft Excel', level: 60, emoji: '📊', levelLabel: 'Intermedio' },
  { name: 'IBM Analytics', level: 60, emoji: '💻', levelLabel: 'Intermedio' },
  { name: 'Canva', level: 40, emoji: '🎨', levelLabel: 'Básico' },
  { name: 'Power BI', level: 40, emoji: '📈', levelLabel: 'Básico' },
  { name: 'Adobe Illustrator', level: 40, emoji: '✏️', levelLabel: 'Básico' },
];

const MARKETING_TOOLS = [
  { name: 'Meta Ads', emoji: '📣' },
  { name: 'Google Analytics', emoji: '🔍' },
  { name: 'HubSpot', emoji: '🧡' },
  { name: 'Google Ads', emoji: '🎯' },
  { name: 'Mailchimp', emoji: '📧' },
  { name: 'Hootsuite', emoji: '🦉' },
];

const SOFT_SKILLS = [
  { label: 'Proactividad y orientación a resultados', emoji: '🚀' },
  { label: 'Pensamiento analítico', emoji: '🧠' },
  { label: 'Comunicación y trabajo en equipo', emoji: '🤝' },
  { label: 'Organización y gestión del tiempo', emoji: '⏱️' },
  { label: 'Creatividad', emoji: '💡' },
  { label: 'Responsabilidad y compromiso', emoji: '⭐' },
];

function SkillBar({ name, level, emoji, levelLabel, delay = 0 }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">
          <span aria-hidden="true">{emoji}</span> {name}
        </span>
        <span className="skill-bar__level">{levelLabel}</span>
      </div>
      <div className="skill-bar__track" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${name}: ${levelLabel}`}>
        <div
          className="skill-bar__fill"
          style={{ '--target-width': `${level}%`, animationDelay: `${delay}s` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">Habilidades</span>
          <h2 className="section-title">Herramientas y competencias</h2>
          <p className="section-subtitle">
            Tecnologías y habilidades que aplico para ejecutar estrategias de
            marketing efectivas y basadas en datos.
          </p>
        </div>

        <div className="skills__grid">
          {/* Tool skills with bars */}
          <div className="card reveal">
            <h3 className="skills__card-title">Herramientas técnicas</h3>
            <div className="skills__bars">
              {TOOL_SKILLS.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="skills__right">
            {/* Marketing platforms */}
            <div className="card reveal" style={{ transitionDelay: '0.1s' }}>
              <h3 className="skills__card-title">Plataformas de marketing</h3>
              <div className="skills__platform-grid">
                {MARKETING_TOOLS.map(({ name, emoji }) => (
                  <div key={name} className="skills__platform">
                    <span className="skills__platform-icon" aria-hidden="true">{emoji}</span>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div className="card reveal" style={{ transitionDelay: '0.2s' }}>
              <h3 className="skills__card-title">Habilidades blandas</h3>
              <div className="skills__soft-list">
                {SOFT_SKILLS.map(({ label, emoji }) => (
                  <div key={label} className="skills__soft-item">
                    <span aria-hidden="true">{emoji}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
