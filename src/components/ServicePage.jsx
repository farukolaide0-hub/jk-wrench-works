import { business, getService, warranty } from '../config/business'
import Hero from './Hero'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import CTAButton from './CTAButton'
import CTABand from './CTABand'
import Icon from './Icon'
import Seo from './Seo'

// Editorial template shared by every individual service page.
export default function ServicePage({ service }) {
  const related = service.related.map(getService).filter(Boolean)
  const totalItems = service.groups.reduce((n, g) => n + g.items.length, 0)
  const detail = service.detailImage

  return (
    <>
      <Seo title={service.metaTitle} description={`${service.name} at JK Wrench Works in La Pine, Oregon. ${service.short}`} />

      <Hero
        variant="image"
        image={service.image}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.name }]}
        eyebrow="Automotive Services"
        title={service.name}
        text={service.short}
      >
        <CTAButton to={`/booking?service=${service.slug}`} icon="calendar">
          Request Service
        </CTAButton>
        <CTAButton href={business.phoneHref} variant="outline-light" icon="phone">
          Call {business.phone}
        </CTAButton>
      </Hero>

      {/* Intro + symptoms */}
      <section className="section">
        <div className="container service-intro">
          <div className="service-intro__text reveal">
            <p className="eyebrow">Overview</p>
            <h2>How we approach it</h2>
            <p className="lead">{service.intro}</p>
            <p>
              Before any work begins, we explain what we found and what we recommend — so you can make a confident
              decision. If you have a question about your vehicle, give us a call.
            </p>
            <div className="btn-row">
              <a className="text-link" href="#included">
                See everything included ({totalItems} services)
              </a>
            </div>
          </div>

          <aside className="symptoms reveal" style={{ '--delay': '120ms' }} aria-labelledby="symptoms-title">
            <h3 id="symptoms-title">Signs it may be time</h3>
            <ul>
              {service.symptoms.map((s) => (
                <li key={s}>
                  <Icon name="alert" />
                  {s}
                </li>
              ))}
            </ul>
            <p>Noticing one of these? Describe it in a service request and we’ll follow up.</p>
          </aside>
        </div>
      </section>

      {/* What's included */}
      <section className="section section--surface" id="included" aria-labelledby="included-title">
        <div className="container">
          <SectionHeading
            id="included-title"
            eyebrow="What's included"
            title="What we handle"
            intro="The work below is listed on our official services page. If you don’t see what you need, call — we’ll tell you straight whether it’s something we can help with."
          />
          <div className="includes-grid">
            {service.groups.map((g, i) => (
              <div className="include-card reveal" key={g.title} style={{ '--delay': `${(i % 3) * 80}ms` }}>
                <h3>{g.title}</h3>
                <ul className="check-list">
                  {g.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + why us */}
      <section className="section" aria-labelledby="why-title">
        <div className="container split split--reverse">
          <figure className="feature-figure reveal" style={{ margin: 0 }}>
            <div className="frame">
              <img src={detail.src} alt={detail.alt} loading="lazy" decoding="async" width="900" height="1125" />
            </div>
          </figure>

          <div className="split__content reveal" style={{ '--delay': '120ms' }}>
            <p className="eyebrow">Why JK Wrench Works</p>
            <h2 id="why-title">Straight answers. Careful work.</h2>
            <p>
              We’re a husband-and-wife shop in La Pine. Justin has worked professionally on vehicles since 2012, with
              extensive heavy-line experience. Kaylie keeps the shop organized and the communication clear.
            </p>
            <ul className="why-list">
              <li className="why-item">
                <span className="why-item__icon">
                  <Icon name="handshake" />
                </span>
                <div>
                  <strong>Clear guidance</strong>
                  <p>We communicate openly so you can make confident decisions.</p>
                </div>
              </li>
              <li className="why-item">
                <span className="why-item__icon">
                  <Icon name="badge" />
                </span>
                <div>
                  <strong>{warranty.headline}</strong>
                  <p>On labor and parts supplied and installed by us, unless otherwise stated.</p>
                </div>
              </li>
              <li className="why-item">
                <span className="why-item__icon">
                  <Icon name="shield" />
                </span>
                <div>
                  <strong>Insured, bonded &amp; licensed</strong>
                  <p>And we proudly report service records to CARFAX.</p>
                </div>
              </li>
            </ul>
            <div className="btn-row">
              <CTAButton to={`/booking?service=${service.slug}`} variant="dark" icon="calendar">
                Request This Service
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section section--surface" aria-labelledby="related-title">
        <div className="container">
          <SectionHeading align="split" id="related-title" eyebrow="Related services" title="Often paired with">
            <div>
              <CTAButton to="/services" variant="outline" iconAfter="arrowRight" size="sm">
                All Services
              </CTAButton>
            </div>
          </SectionHeading>
          <div className="service-grid service-grid--3">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        serviceSlug={service.slug}
        title="Let’s take a look."
        text={`Request ${service.name.toLowerCase()} online, or call the shop to talk through what your vehicle is doing.`}
      />
    </>
  )
}
