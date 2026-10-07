import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function ContactCard({ icon, label, value, action, href, to, external, delay = 0 }) {
  const content = (
    <>
      <span className="contact-card__icon">
        <Icon name={icon} />
      </span>
      <span className="contact-card__label">{label}</span>
      <span className="contact-card__value">{value}</span>
      {action && (
        <span className="contact-card__action">
          {action} <Icon name="arrowRight" />
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link className="contact-card reveal" style={{ '--delay': `${delay}ms` }} to={to}>
        {content}
      </Link>
    )
  }

  if (!href) {
    return (
      <div className="contact-card reveal" style={{ '--delay': `${delay}ms` }}>
        {content}
      </div>
    )
  }

  return (
    <a
      className="contact-card reveal"
      style={{ '--delay': `${delay}ms` }}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
