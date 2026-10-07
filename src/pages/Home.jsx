import { Link } from 'react-router-dom'
import { business, credentials, images, services, values, serviceAreas, story } from '../config/business'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import CTAButton from '../components/CTAButton'
import CTABand from '../components/CTABand'
import ReviewsBlock from '../components/ReviewsBlock'
import MapSection from '../components/MapSection'
import Icon from '../components/Icon'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <>
      <Seo description="JK Wrench Works LLC is a husband-and-wife auto repair shop in La Pine, Oregon. Diagnostics, brakes, engine, transmission, suspension, cooling, electrical, fuel system, and maintenance. Call 541-876-7027." />

      <Hero
        variant="home"
        image={images.heroShop}
        eyebrow="La Pine, Oregon • Auto Repair"
        title={
          <>
            Reliable auto repair. <span>Done with care.</span>
          </>
        }
        text="A husband-and-wife shop on Cougar Lane. Honest diagnostics, quality workmanship, and fair, transparent service — from routine maintenance to major repairs."
        badge={
          <>
            <strong>
              <span className="hero__badge-dot" aria-hidden="true" />
              Inside our shop
            </strong>
            <span>That’s our lift and our garage — a real photo from JK Wrench Works in La Pine.</span>
          </>
        }
      >
        <CTAButton to="/booking" icon="calendar">
          Request Service
        </CTAButton>
        <CTAButton href={business.phoneHref} variant="outline-light" icon="phone">
          Call {business.phone}
        </CTAButton>
        <CTAButton href={business.directionsUrl} variant="ghost-light" icon="directions" external>
          Get Directions
        </CTAButton>
      </Hero>

      {/* Trust strip */}
      <section className="trust" aria-label="Why customers trust JK Wrench Works">
        <div className="container">
          <ul className="trust__list">
            {credentials.map((c) => {
              const inner = (
                <>
                  <span className="trust__icon">
                    <Icon name={c.icon} />
                  </span>
                  <span className="trust__text">
                    <strong>{c.title}</strong>
                    <span>{c.text}</span>
                  </span>
                </>
              )
              return (
                <li key={c.title} className="trust__item">
                  {c.link ? (
                    <Link to={c.link} style={{ display: 'contents' }}>
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            align="split"
            id="services-title"
            eyebrow="What we do"
            title="Automotive services"
            intro="From routine maintenance to major repairs, JK Wrench Works provides a broad range of automotive services for local drivers."
          >
            <div>
              <CTAButton to="/services" variant="outline" size="sm" iconAfter="arrowRight">
                View All Services
              </CTAButton>
            </div>
          </SectionHeading>

          <div className="service-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} featured={i < 2} delay={(i % 4) * 70} />
            ))}
          </div>

          <div className="services-footnote reveal">
            <p>
              <strong>Don’t see your repair listed?</strong> There’s more we can help with — give us a call and ask.
            </p>
            <CTAButton href={business.phoneHref} variant="dark" size="sm" icon="phone">
              {business.phone}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section section--surface" aria-labelledby="about-title">
        <div className="container split">
          <div className="photo-stack reveal">
            <span className="photo-stack__label">Justin &amp; Kaylie</span>
            <div className="frame photo-stack__main">
              <img src={images.couple.src} alt={images.couple.alt} loading="lazy" decoding="async" width="652" height="1400" />
            </div>
            <div className="frame photo-stack__accent">
              <img src={images.engineBay.sm} alt={images.engineBay.alt} loading="lazy" decoding="async" width="900" height="675" />
            </div>
          </div>

          <div className="split__content reveal" style={{ '--delay': '120ms' }}>
            <p className="eyebrow">Who we are</p>
            <h2 id="about-title">Built on passion. Rooted in community.</h2>
            <p className="lead">{story.intro}</p>
            <p>{story.origin}</p>
            <div className="people">
              <div className="person">
                <strong>Justin</strong>
                <span>The Mechanic · professional since 2012</span>
              </div>
              <div className="person">
                <strong>Kaylie</strong>
                <span>Shop Boss · operations &amp; logistics</span>
              </div>
            </div>
            <div className="btn-row">
              <CTAButton to="/about" variant="dark" iconAfter="arrowRight">
                Meet Justin &amp; Kaylie
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--dark" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading
            align="split"
            id="values-title"
            eyebrow="Why choose us"
            title="How we do business"
            intro={story.promise}
          />
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value reveal" key={v.title} style={{ '--delay': `${i * 90}ms` }}>
                <span className="value__icon">
                  <Icon name={v.icon} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real work mosaic */}
      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <SectionHeading
            align="split"
            id="work-title"
            eyebrow="From our shop"
            title="Real work. Real vehicles."
            intro="Every photo here was taken at JK Wrench Works — daily drivers, diesels, and 4x4s on our lift and under our hands."
          >
            <div>
              <CTAButton to="/gallery" variant="outline" size="sm" iconAfter="arrowRight">
                See Our Work
              </CTAButton>
            </div>
          </SectionHeading>

          <div className="mosaic">
            <Link to="/gallery" className="mosaic__a reveal" aria-label="Our Work gallery: Jeep on the shop lift">
              <div className="frame">
                <img src={images.shopJeep.src} alt={images.shopJeep.alt} loading="lazy" decoding="async" />
              </div>
            </Link>
            <Link to="/gallery" className="mosaic__b reveal" style={{ '--delay': '80ms' }} aria-label="Our Work gallery: suspension job">
              <div className="frame">
                <img src={images.suspension.sm} alt={images.suspension.alt} loading="lazy" decoding="async" />
              </div>
            </Link>
            <Link to="/gallery" className="mosaic__c reveal" style={{ '--delay': '160ms' }} aria-label="Our Work gallery: diesel engine work">
              <div className="frame">
                <img src={images.diesel.sm} alt={images.diesel.alt} loading="lazy" decoding="async" />
              </div>
            </Link>
            <Link to="/gallery" className="mosaic__d reveal" style={{ '--delay': '240ms' }} aria-label="Our Work gallery: engine bay">
              <div className="frame">
                <img src={images.engineBay.sm} alt={images.engineBay.alt} loading="lazy" decoding="async" style={{ objectPosition: '50% 60%' }} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section section--surface" aria-labelledby="reviews-title">
        <div className="container">
          <SectionHeading eyebrow="Reviews" id="reviews-title" title="What customers say" />
          <ReviewsBlock limit={3} />
        </div>
      </section>

      {/* Service areas + map */}
      <section className="section" aria-labelledby="areas-title">
        <div className="container areas">
          <div className="split__content reveal">
            <p className="eyebrow">Where we work</p>
            <h2 id="areas-title">Proudly serving La Pine &amp; nearby communities</h2>
            <p>
              Our shop is at {business.address.street} in La Pine. We serve drivers from these communities:
            </p>
            <ul className="area-chips" aria-label="Service areas">
              {serviceAreas.map((a) => (
                <li key={a.name} className="area-chip">
                  <Icon name="pin" />
                  {a.name}
                </li>
              ))}
            </ul>
            <div className="btn-row">
              <CTAButton to="/service-areas" variant="outline" iconAfter="arrowRight">
                Service Areas
              </CTAButton>
            </div>
          </div>
          <MapSection />
        </div>
      </section>

      <CTABand />
    </>
  )
}
