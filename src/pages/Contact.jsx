import { business, hours, hoursFallback, images } from '../config/business'
import Hero from '../components/Hero'
import ContactCard from '../components/ContactCard'
import MapSection from '../components/MapSection'
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'
import Seo from '../components/Seo'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact JK Wrench Works LLC in La Pine, Oregon. Call 541-876-7027, email jkwrenchworks@gmail.com, or visit 17120 Cougar Lane."
      />

      <Hero
        variant="compact"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        eyebrow="Get in touch"
        title="Contact the shop"
        text="Questions about your vehicle, a repair, or scheduling? Call, email, or stop by — we’ll be glad to help."
      >
        <CTAButton href={business.phoneHref} icon="phone">
          Call Now
        </CTAButton>
        <CTAButton to="/booking" variant="outline-light" icon="calendar">
          Request Service
        </CTAButton>
      </Hero>

      <section className="section" aria-label="Contact options">
        <div className="container">
          <div className="contact-grid">
            <ContactCard icon="phone" label="Phone" value={business.phone} action="Call now" href={business.phoneHref} />
            <ContactCard icon="mail" label="Email" value={<>{business.email.split('@')[0]}@<wbr />{business.email.split('@')[1]}</>} action="Email us" href={business.emailHref} delay={80} />
            <ContactCard
              icon="pin"
              label="Address"
              value={
                <>
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.state} {business.address.zip}
                </>
              }
              action="Get directions"
              href={business.directionsUrl}
              external
              delay={160}
            />
            <ContactCard icon="calendar" label="Service" value="Request an appointment online" action="Request service" to="/booking" delay={240} />
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="visit-title">
        <div className="container areas">
          <div className="info-panel reveal">
            <h2 id="visit-title">Visit the shop</h2>
            <ul className="info-list">
              <li>
                <Icon name="pin" />
                <span>
                  <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
                    {business.address.street}, {business.address.city}, {business.address.state} {business.address.zip}
                  </a>
                  <small>Directions open in Google Maps</small>
                </span>
              </li>
              <li>
                <Icon name="phone" />
                <span>
                  <a href={business.phoneHref}>{business.phone}</a>
                </span>
              </li>
              <li>
                <Icon name="mail" />
                <span>
                  <a href={business.emailHref} style={{ overflowWrap: 'anywhere' }}>
                    {business.email}
                  </a>
                </span>
              </li>
            </ul>

            <div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: 12 }}>Business hours</h3>
              {hours.length ? (
                <div className="hours">
                  {hours.map((h) => (
                    <div key={h.days}>
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="hours-note">{hoursFallback}</p>
              )}
            </div>

            <div className="btn-row">
              <CTAButton href={business.directionsUrl} external icon="directions">
                Get Directions
              </CTAButton>
              <CTAButton href={business.emailHref} variant="outline-light" icon="mail">
                Email Us
              </CTAButton>
            </div>

            <div className="social" aria-label="Social media">
              {business.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}>
                  <Icon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
          <MapSection />
        </div>
      </section>

      <section className="section" aria-labelledby="people-title">
        <div className="container split">
          <div className="frame frame--4x3 reveal">
            <img
              src={images.couple.src}
              alt={images.couple.alt}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: '50% 62%' }}
            />
            <span className="image-tag image-tag--real">Justin &amp; Kaylie</span>
          </div>
          <div className="split__content reveal" style={{ '--delay': '120ms' }}>
            <p className="eyebrow">Who you’ll talk to</p>
            <h2 id="people-title">Justin &amp; Kaylie</h2>
            <p className="lead">
              Justin is the mechanic. Kaylie runs the shop’s logistics and day-to-day operations. Together they’re JK Wrench
              Works.
            </p>
            <div className="btn-row">
              <CTAButton to="/about" variant="dark" iconAfter="arrowRight">
                Our Story
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
