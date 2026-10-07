import CTAButton from '../components/CTAButton'
import Seo from '../components/Seo'
import { business } from '../config/business'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" />
      <section className="container not-found">
        <p className="eyebrow">404</p>
        <h1>Wrong turn.</h1>
        <p className="lead">We couldn’t find that page. Let’s get you back on the road.</p>
        <div className="btn-row" style={{ justifyContent: 'center' }}>
          <CTAButton to="/" variant="dark">
            Back to Home
          </CTAButton>
          <CTAButton href={business.phoneHref} variant="outline" icon="phone">
            Call {business.phone}
          </CTAButton>
        </div>
      </section>
    </>
  )
}
