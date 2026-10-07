import { Link } from 'react-router-dom'
import { business, services } from '../config/business'
import Hero from '../components/Hero'
import CTAButton from '../components/CTAButton'
import CTABand from '../components/CTABand'
import Seo from '../components/Seo'

export default function Services() {
  return (
    <>
      <Seo
        title="Auto Repair Services"
        description="Auto repair services at JK Wrench Works in La Pine, OR: diagnostics, brakes, oil changes, engine, transmission & clutch, suspension, heating & cooling, electrical, fuel system, and leak repair."
      />

      <Hero
        variant="compact"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        eyebrow="What we do"
        title="Automotive services"
        text="From routine maintenance to major repairs, JK Wrench Works provides a broad range of automotive services for local drivers. Choose a service to see everything it includes."
      >
        <CTAButton to="/booking" icon="calendar">
          Request Service
        </CTAButton>
        <CTAButton href={business.phoneHref} variant="outline-light" icon="phone">
          Call {business.phone}
        </CTAButton>
      </Hero>

      <nav className="jump-nav" aria-label="Jump to a service">
        <div className="container">
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="section" aria-label="All services">
        <div className="container service-rows">
          {services.map((s, i) => (
            <article className="service-row reveal" id={s.slug} key={s.slug}>
              <div className="service-row__media">
                <img
                  src={s.image.sm || s.image.src}
                  alt={s.image.alt}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
              <div className="service-row__body">
                <span className="service-row__num">{String(i + 1).padStart(2, '0')}</span>
                <h2>
                  <Link to={`/services/${s.slug}`}>{s.name}</Link>
                </h2>
                <p>{s.intro}</p>
                <ul className="chips" aria-label={`${s.name} includes`}>
                  {s.groups.slice(0, 5).map((g) => (
                    <li className="chip" key={g.title}>
                      {g.title}
                    </li>
                  ))}
                  {s.groups.length > 5 && <li className="chip">+{s.groups.length - 5} more</li>}
                </ul>
                <div className="btn-row">
                  <CTAButton to={`/services/${s.slug}`} variant="dark" size="sm" iconAfter="arrowRight">
                    View Service
                  </CTAButton>
                  <CTAButton to={`/booking?service=${s.slug}`} variant="outline" size="sm">
                    Request
                  </CTAButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="container">
          <div className="services-footnote reveal">
            <p>
              <strong>If the service you need is not listed,</strong> give us a call at {business.phone}. We’ll talk to
              you soon!
            </p>
            <CTAButton href={business.phoneHref} variant="dark" size="sm" icon="phone">
              Call Now
            </CTAButton>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
