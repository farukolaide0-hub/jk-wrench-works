import { business, images, serviceAreas, fullAddress } from '../config/business'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import MapSection from '../components/MapSection'
import CTAButton from '../components/CTAButton'
import CTABand from '../components/CTABand'
import Icon from '../components/Icon'
import Seo from '../components/Seo'

export default function ServiceAreas() {
  const [home, ...rest] = serviceAreas
  return (
    <>
      <Seo
        title="Service Areas"
        description="JK Wrench Works serves drivers in La Pine, Gilchrist, Crescent, Bend, Fort Rock, and Christmas Valley, Oregon, from our shop at 17120 Cougar Lane in La Pine."
      />

      <Hero
        variant="compact"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Service Areas' }]}
        eyebrow="Where we work"
        title="Service areas"
        text={`Our shop is located at ${fullAddress}. We serve drivers from La Pine and the surrounding communities.`}
      >
        <CTAButton href={business.directionsUrl} external icon="directions">
          Get Directions
        </CTAButton>
        <CTAButton to="/booking" variant="outline-light" icon="calendar">
          Request Service
        </CTAButton>
      </Hero>

      <section className="section" aria-labelledby="areas-title">
        <div className="container">
          <SectionHeading
            id="areas-title"
            eyebrow="Communities we serve"
            title="Local, by choice"
            intro="We’re a La Pine shop serving our neighbors up and down Highway 97 and out into the high desert. If you’re in one of these communities, we’d be glad to help."
          />
          <div className="areas">
            <ul className="area-list">
              <li className="area area--home reveal">
                <span className="area__pin">
                  <Icon name="pin" />
                </span>
                <span>
                  <strong>{home.name}</strong>
                  <span>{home.note}</span>
                </span>
              </li>
              {rest.map((a, i) => (
                <li className="area reveal" key={a.name} style={{ '--delay': `${(i + 1) * 60}ms` }}>
                  <span className="area__pin">
                    <Icon name="pin" />
                  </span>
                  <span>
                    <strong>{a.name}</strong>
                    <span>{a.note}</span>
                  </span>
                </li>
              ))}
            </ul>
            <MapSection />
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="visit-title">
        <div className="container split">
          <div className="frame frame--4x3 reveal">
            <img src={images.shopJeep.src} alt={images.shopJeep.alt} loading="lazy" decoding="async" />
            <span className="image-tag image-tag--real">Inside our shop</span>
          </div>
          <div className="split__content reveal" style={{ '--delay': '120ms' }}>
            <p className="eyebrow">Planning a visit</p>
            <h2 id="visit-title">Coming from out of town?</h2>
            <p>
              If you’re driving in from Bend, Christmas Valley, or anywhere in between, send a service request first.
              Include your vehicle details and what it’s doing, and we’ll contact you to confirm a time that works.
            </p>
            <ul className="check-list">
              <li>
                <Icon name="check" />
                Request service online — no account needed
              </li>
              <li>
                <Icon name="check" />
                Or call us at {business.phone}
              </li>
              <li>
                <Icon name="check" />
                Directions open right in Google Maps
              </li>
            </ul>
            <div className="btn-row">
              <CTAButton to="/booking" variant="dark" icon="calendar">
                Request Service
              </CTAButton>
              <CTAButton href={business.directionsUrl} external variant="outline" icon="directions">
                Get Directions
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
