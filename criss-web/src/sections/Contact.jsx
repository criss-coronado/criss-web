import { useState } from 'react';
import { Mail, Linkedin, Phone, Send, Instagram, Github } from 'lucide-react';
import './Contact.css';

const CONTACT_LINKS = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'Criss.ccoronado@gmail.com',
    href: 'mailto:Criss.ccoronado@gmail.com',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'Cristell Coronado',
    href: 'https://www.linkedin.com/in/cristell-coronado',
  },
  {
    icon: <Phone size={20} />,
    label: 'Teléfono',
    value: '(51) 921 891 942',
    href: 'tel:+51921891942',
  },
  {
    icon: <Instagram size={20} />,
    label: 'Instagram',
    value: '@criss.coronado',
    href: 'https://instagram.com',
  },
];

const SOCIAL_BIG = [
  {
    icon: <Linkedin size={24} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cristell-coronado',
    color: '#0A66C2',
  },
  {
    icon: <Mail size={24} />,
    label: 'Email',
    href: 'mailto:Criss.ccoronado@gmail.com',
    color: '#B06EFF',
  },
  {
    icon: <Instagram size={24} />,
    label: 'Instagram',
    href: 'https://instagram.com',
    color: '#E1306C',
  },
  {
    icon: <Github size={24} />,
    label: 'GitHub',
    href: 'https://github.com/criss-coronado',
    color: '#6E40C9',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState(s => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link
    const { name, email, subject, message } = formState;
    const body = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:Criss.ccoronado@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const isValid = formState.name && formState.email && formState.message;

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">Contacto</span>
          <h2 className="section-title">¡Hablemos!</h2>
          <p className="section-subtitle">
            ¿Tienes una oportunidad laboral, proyecto o simplemente quieres conectar?
            Escríbeme y te responderé pronto.
          </p>
        </div>

        <div className="contact__inner">
          {/* Left: info */}
          <div className="contact__info reveal">
            <div className="contact__links">
              {CONTACT_LINKS.map(({ icon, label, value, href }) => (
                <a key={label} href={href} className="contact__link-card card" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <span className="contact__link-icon">{icon}</span>
                  <div>
                    <div className="contact__link-label">{label}</div>
                    <div className="contact__link-value">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social big icons */}
            <div className="contact__social-section">
              <p className="contact__social-title">Sígueme en redes</p>
              <div className="contact__socials">
                {SOCIAL_BIG.map(({ icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    className="contact__social-btn"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--social-color': color }}
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CV download */}
            <a href="/criss-web/cv-cristell-coronado.pdf" download className="btn btn-primary contact__cv-btn">
              📄 Descargar CV completo
            </a>
          </div>

          {/* Right: form */}
          <div className="reveal contact__form-wrap" style={{ transitionDelay: '0.15s' }}>
            <div className="card contact__form-card">
              <h3>Envíame un mensaje</h3>
              {submitted ? (
                <div className="contact__success">
                  <span>🎉</span>
                  <p>¡Mensaje enviado! Te responderé pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="contact__form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="subject">Asunto</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="¿De qué quieres hablar?"
                      value={formState.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto u oportunidad..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary contact__submit" disabled={!isValid}>
                    <Send size={16} />
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
