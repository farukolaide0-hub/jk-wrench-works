import { Link } from 'react-router-dom'

/*
  Page heroes.
  variant="home"    -> full-height cinematic hero (homepage)
  variant="image"   -> photo hero for inner pages (service pages)
  variant="compact" -> ink-black hero without a photo
*/
export default function Hero({ variant = 'compact', eyebrow, title, text, image, crumbs, badge, children }) {
  if (variant === 'home') {
    return (
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img src={image.src} alt={image.alt} fetchPriority="high" width="1800" height="1522" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 id="hero-title">{title}</h1>
            {text && <p className="hero__text">{text}</p>}
            {children && <div className="btn-row hero__actions">{children}</div>}
          </div>
          {badge && <aside className="hero__badge">{badge}</aside>}
        </div>
      </section>
    )
  }

  const isImage = variant === 'image' && image
  return (
    <section className={`page-hero page-hero--${isImage ? 'image' : 'compact'}`} aria-labelledby="page-title">
      {isImage && (
        <div className="page-hero__media">
          <img src={image.src} alt={image.alt} fetchPriority="high" />
        </div>
      )}
      <div className="container">
        <div className="page-hero__inner">
          {crumbs && (
            <nav aria-label="Breadcrumb" className="breadcrumbs">
              {crumbs.map((c, i) => (
                <span key={c.label} style={{ display: 'contents' }}>
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 id="page-title">{title}</h1>
          {text && <p className="lead">{text}</p>}
          {children && <div className="btn-row">{children}</div>}
        </div>
      </div>
    </section>
  )
}
