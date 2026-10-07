import { business, reviews, values } from '../config/business'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ReviewsBlock from '../components/ReviewsBlock'
import CTAButton from '../components/CTAButton'
import CTABand from '../components/CTABand'
import Icon from '../components/Icon'
import Seo from '../components/Seo'

export default function Reviews() {
  return (
    <>
      <Seo
        title="Customer Reviews"
        description="Read customer reviews of JK Wrench Works LLC, an auto repair shop in La Pine, Oregon, on Google and Yelp."
      />

      <Hero
        variant="compact"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]}
        eyebrow="Reviews"
        title="What customers say"
        text="Honest work earns honest feedback. Here’s where to read what our customers have to say — in their own words."
      />

      <section className="section" aria-labelledby="reviews-list-title">
        <div className="container">
          <h2 id="reviews-list-title" className="sr-only">
            Customer reviews
          </h2>
          <ReviewsBlock />
          {reviews.length > 0 && (
            <p className="center mt-5" style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
              Reviews shown word-for-word from public profiles.{' '}
              <a className="text-link" href={business.reviewLinks.google} target="_blank" rel="noopener noreferrer">
                See all on Google
              </a>
            </p>
          )}
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="expect-title">
        <div className="container split">
          <div className="split__content reveal">
            <p className="eyebrow">What to expect</p>
            <h2 id="expect-title">The way we work with every customer</h2>
            <p>
              Whether it’s an oil change or an engine swap, every visit follows the same values. They’re the reason we
              started the shop.
            </p>
            <div className="btn-row">
              <CTAButton to="/about" variant="outline-light" iconAfter="arrowRight">
                Our Story
              </CTAButton>
            </div>
          </div>
          <ul className="why-list reveal" style={{ '--delay': '120ms' }}>
            {values.map((v) => (
              <li className="why-item" key={v.title}>
                <span className="why-item__icon">
                  <Icon name={v.icon} />
                </span>
                <div>
                  <strong>{v.title}</strong>
                  <p style={{ color: 'var(--on-dark-muted)' }}>{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="leave-title">
        <div className="container">
          <SectionHeading
            align="center"
            id="leave-title"
            eyebrow="Been in the shop?"
            title="Share your experience"
            intro="Reviews help neighbors find a shop they can trust — and they mean a lot to a small, family-run business like ours."
          >
            <div className="btn-row" style={{ justifyContent: 'center' }}>
              <CTAButton href={business.reviewLinks.google} external icon="star">
                Review on Google
              </CTAButton>
              <CTAButton href={business.reviewLinks.yelp} external variant="outline">
                Review on Yelp
              </CTAButton>
            </div>
          </SectionHeading>
        </div>
      </section>

      <CTABand />
    </>
  )
}
