import { Link } from 'react-router-dom'
import { business, navLinks, services, hours, hoursFallback, warranty } from '../config/business'
import Icon from './Icon'
import CTAButton from './CTAButton'
import Logo from './Logo'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" aria-label={`${business.name} — home`}>
            <Logo lazy />
          </Link>
          <p>{business.shortDescription}</p>
          <div className="social">
            {business.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}>
                <Icon name={s.icon} />
              </a>
            ))}
          </div>
          <div>
            <CTAButton to="/booking" size="sm" icon="calendar">
              Request Service
            </CTAButton>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2>Explore</h2>
          <ul className="footer__list">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/booking">Request Service</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2>Services</h2>
          <ul className="footer__list">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact-col">
          <h2>Contact</h2>
          <ul className="footer__list footer__contact">
            <li>
              <Icon name="pin" />
              <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </a>
            </li>
            <li>
              <Icon name="phone" />
              <a href={business.phoneHref}>{business.phone}</a>
            </li>
            <li>
              <Icon name="mail" />
              <a href={business.emailHref}>{business.email}</a>
            </li>
            <li>
              <Icon name="clock" />
              {hours.length ? (
                <span>
                  {hours.map((h) => (
                    <span key={h.days} style={{ display: 'block' }}>
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              ) : (
                <span>{hoursFallback}</span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {YEAR} {business.legalName}. All rights reserved.
        </span>
        <span>
          Insured, bonded &amp; licensed · La Pine, Oregon ·{' '}
          <a href={warranty.policyUrl} target="_blank" rel="noopener noreferrer">
            Warranty policy
          </a>
        </span>
      </div>
    </footer>
  )
}
