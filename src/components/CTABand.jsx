import { business } from '../config/business'
import CTAButton from './CTAButton'

export default function CTABand({
  title = 'Ready when you are.',
  text = 'Tell us what your vehicle is doing and we’ll get back to you to talk it through and confirm a time.',
  serviceSlug,
}) {
  const to = serviceSlug ? `/booking?service=${serviceSlug}` : '/booking'
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <div className="reveal">
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions reveal" style={{ '--delay': '120ms' }}>
          <CTAButton to={to} variant="dark" icon="calendar">
            Request Service
          </CTAButton>
          <CTAButton href={business.phoneHref} variant="outline" icon="phone">
            Call {business.phone}
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
