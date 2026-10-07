import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function ServiceCard({ service, index, featured = false, delay = 0 }) {
  const img = service.image
  return (
    <Link
      to={`/services/${service.slug}`}
      className={`service-card reveal${featured ? ' service-card--featured' : ''}`}
      style={{ '--delay': `${delay}ms` }}
    >
      <div className="service-card__media">
        <img src={featured ? img.src : img.sm || img.src} alt={img.alt} loading="lazy" decoding="async" width="800" height="600" />      </div>
      <div className="service-card__body">
        {typeof index === 'number' && <span className="service-card__num">{String(index + 1).padStart(2, '0')}</span>}
        <h3>{service.name}</h3>
        <p>{service.short}</p>
        <span className="service-card__more">
          Learn more <Icon name="arrowRight" />
        </span>
      </div>
    </Link>
  )
}
