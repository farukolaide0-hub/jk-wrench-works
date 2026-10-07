import { business, credentials, images, story, values, warranty } from '../config/business'
import SectionHeading from '../components/SectionHeading'
import CTAButton from '../components/CTAButton'
import CTABand from '../components/CTABand'
import Icon from '../components/Icon'
import Seo from '../components/Seo'

export default function About() {
  return (
    <>
      <Seo
        title="About Justin & Kaylie"
        description="Meet Justin and Kaylie, the husband-and-wife team behind JK Wrench Works in La Pine, Oregon. Our story, our values, and how we work."
      />

      {/* Hero */}
      <section className="about-hero" aria-labelledby="page-title">
        <div className="container about-hero__grid">
          <div className="about-hero__text reveal">
            <p className="eyebrow">About JK Wrench Works</p>
            <h1 id="page-title">
              Meet the people <span>behind JK Wrench Works</span>
            </h1>
            <p className="lead">{story.intro}</p>
            <div className="btn-row">
              <CTAButton to="/booking" icon="calendar">
                Request Service
              </CTAButton>
              <CTAButton href={business.phoneHref} variant="outline-light" icon="phone">
                Call {business.phone}
              </CTAButton>
            </div>
          </div>
          <div className="frame about-hero__photo reveal" style={{ '--delay': '120ms' }}>
            <img src={images.couple.src} alt={images.couple.alt} fetchPriority="high" width="652" height="1400" />
            <span className="image-tag image-tag--real">Justin &amp; Kaylie at the shop</span>
          </div>
        </div>
      </section>

      {/* The story */}
      <section className="section" aria-labelledby="story-title">
        <div className="container split split--wide-media">
          <div className="reveal">
            <p className="eyebrow">The story</p>
            <h2 id="story-title" className="sr-only">
              Our story
            </h2>
            <blockquote className="pull-quote" style={{ marginTop: 24 }}>
              What started as weekend projects on our own daily drivers grew into performance builds and off-road rigs.
            </blockquote>
          </div>
          <div className="split__content reveal" style={{ '--delay': '120ms' }}>
            <p className="lead">{story.origin}</p>
            <p>{story.together}</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--dark section--tight" aria-labelledby="journey-title">
        <div className="container">
          <h2 id="journey-title" className="sr-only">
            How JK Wrench Works came together
          </h2>
          <ol className="timeline">
            <li className="reveal">
              <strong>Weekend projects</strong>
              <p>Working on our own daily drivers.</p>
            </li>
            <li className="reveal" style={{ '--delay': '90ms' }}>
              <strong>Performance builds</strong>
              <p>From daily drivers to performance builds.</p>
            </li>
            <li className="reveal" style={{ '--delay': '180ms' }}>
              <strong>Off-road rigs</strong>
              <p>Then came the off-road rigs.</p>
            </li>
            <li className="reveal" style={{ '--delay': '270ms' }}>
              <strong>A full-service shop</strong>
              <p>JK Wrench Works, proudly serving La Pine.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Justin & Kaylie */}
      <section className="section" aria-label="Justin and Kaylie">
        <div className="container">
          <article className="role-card">
            <div className="frame role-card__media reveal">
              <img src={images.engineBay.src} alt={images.engineBay.alt} loading="lazy" decoding="async" style={{ objectPosition: '30% 50%' }} />            </div>
            <div className="role-card__text reveal" style={{ '--delay': '120ms' }}>
              <span className="role-card__role">The Mechanic</span>
              <h2>Justin</h2>
              <p>{story.justin}</p>
              <div className="fact-row">
                <div className="fact">
                  <strong>2012</strong>
                  <span>Began his professional career</span>
                </div>
                <div className="fact">
                  <strong>Heavy-line</strong>
                  <span>Extensive experience</span>
                </div>
              </div>
            </div>
          </article>

          <article className="role-card role-card--reverse">
            <div className="frame role-card__media reveal">
              <img src={images.coupleOutdoors.src} alt={images.coupleOutdoors.alt} loading="lazy" decoding="async" style={{ objectPosition: '50% 30%' }} />
              <span className="image-tag image-tag--real">Kaylie &amp; Justin</span>
            </div>
            <div className="role-card__text reveal" style={{ '--delay': '120ms' }}>
              <span className="role-card__role">The Shop Boss</span>
              <h2>Kaylie</h2>
              <p>{story.kaylie}</p>
              <div className="fact-row">
                <div className="fact">
                  <strong>Operations</strong>
                  <span>Logistics &amp; organization</span>
                </div>
                <div className="fact">
                  <strong>Day-to-day</strong>
                  <span>Keeping the shop running</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="section section--cream" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading align="split" id="values-title" eyebrow="Our values" title="What we stand for" intro={story.promise} />
          <div className="values-grid values-grid--light">
            {values.map((v, i) => (
              <div className="value reveal" key={v.title} style={{ '--delay': `${i * 90}ms` }}>
                <span className="value__icon" style={{ background: 'var(--ink-black)', color: 'var(--butter-cream)' }}>
                  <Icon name={v.icon} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community + shop photo */}
      <section className="section" aria-labelledby="community-title">
        <div className="container split">
          <div className="split__content reveal">
            <p className="eyebrow">Our community</p>
            <h2 id="community-title">Your neighbors in La Pine</h2>
            <p className="lead">
              Cars are our passion. We take pride in giving back to our La Pine neighbors.
            </p>
            <p>
              Our goal is simple: to keep your vehicle running safely, reliably, and efficiently — while treating you like
              family.
            </p>
            <ul className="why-list">
              {credentials.slice(0, 2).map((c) => (
                <li className="why-item" key={c.title}>
                  <span className="why-item__icon">
                    <Icon name={c.icon} />
                  </span>
                  <div>
                    <strong>{c.title}</strong>
                    <p>{c.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="frame frame--4x3 reveal" style={{ '--delay': '120ms' }}>
            <img src={images.shopSubaru.src} alt={images.shopSubaru.alt} loading="lazy" decoding="async" />
            <span className="image-tag image-tag--real">Inside our shop</span>
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="section section--surface" id="warranty" aria-labelledby="warranty-title">
        <div className="container warranty">
          <div className="stack-sm reveal">
            <p className="eyebrow">Standing behind our work</p>
            <h2 id="warranty-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase' }}>
              12-month / <span style={{ whiteSpace: 'nowrap' }}>15,000-mile</span> warranty
            </h2>
            <p className="lead">{warranty.summary}</p>
            <div>
              <a className="text-link" href={warranty.policyUrl} target="_blank" rel="noopener noreferrer">
                Read the full warranty policy<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div className="warranty__lists reveal" style={{ '--delay': '120ms' }}>
            <div className="include-card">
              <h3>What’s covered</h3>
              <ul className="check-list">
                {warranty.covered.map((c) => (
                  <li key={c}>
                    <Icon name="check" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="include-card">
              <h3>Not covered</h3>
              <ul className="check-list">
                {warranty.notCovered.map((c) => (
                  <li key={c}>
                    <Icon name="close" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Come meet the shop." text="Request service online or give us a call — we’re happy to talk through what your vehicle needs." />
    </>
  )
}
