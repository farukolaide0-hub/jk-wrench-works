import { useSearchParams } from 'react-router-dom'
import { business, hours, hoursFallback } from '../config/business'
import Hero from '../components/Hero'
import BookingForm from '../components/BookingForm'
import Icon from '../components/Icon'
import Seo from '../components/Seo'

export default function Booking() {
  const [params] = useSearchParams()
  const service = params.get('service') || ''

  return (
    <>
      <Seo
        title="Request Service"
        description="Request auto repair service at JK Wrench Works in La Pine, Oregon. Tell us about your vehicle and we'll contact you to confirm availability."
      />

      <Hero
        variant="compact"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Request Service' }]}
        eyebrow="Booking"
        title="Request service"
        text="Tell us about your vehicle and what it’s doing. We’ll get back to you to talk it through and confirm a time."
      />

      <section className="section">
        <div className="container booking-layout">
          <BookingForm key={service} defaultService={service} />

          <aside className="booking-aside" aria-label="How it works and contact details">
            <div className="info-panel">
              <h2>How it works</h2>
              <ol className="steps">
                <li>
                  <div>
                    <strong>Send your request</strong>
                    <p style={{ color: 'var(--on-dark-muted)' }}>Vehicle details and what you’re noticing.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>We follow up</strong>
                    <p style={{ color: 'var(--on-dark-muted)' }}>We’ll contact you to discuss it and confirm availability.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Bring it in</strong>
                    <p style={{ color: 'var(--on-dark-muted)' }}>We explain what we find before work begins.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="info-panel">
              <h2>Rather talk?</h2>
              <ul className="info-list">
                <li>
                  <Icon name="phone" />
                  <span>
                    <a href={business.phoneHref}>{business.phone}</a>
                    <small>Call the shop</small>
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
                <li>
                  <Icon name="pin" />
                  <span>
                    <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
                      {business.address.street}
                      <br />
                      {business.address.city}, {business.address.state} {business.address.zip}
                    </a>
                  </span>
                </li>
                <li>
                  <Icon name="clock" />
                  <span style={{ color: 'var(--on-dark-muted)' }}>
                    {hours.length ? hours.map((h) => `${h.days}: ${h.time}`).join(' · ') : hoursFallback}
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
