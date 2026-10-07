import { useCallback, useEffect, useRef, useState } from 'react'
import { gallery, galleryCategories } from '../config/business'
import Hero from '../components/Hero'
import GalleryCard from '../components/GalleryCard'
import CTABand from '../components/CTABand'
import Icon from '../components/Icon'
import Seo from '../components/Seo'

function Lightbox({ items, index, onClose, onNav }) {
  const closeRef = useRef(null)
  const item = items[index]

  useEffect(() => {
    const prevFocus = document.activeElement
    closeRef.current?.focus()
    document.body.classList.add('menu-open')
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
      if (e.key === 'Tab') {
        // keep focus inside the dialog
        const focusables = document.querySelectorAll('.lightbox button')
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('menu-open')
      prevFocus?.focus?.()
    }
  }, [onClose, onNav])

  // Swipe support on touch screens
  const touchX = useRef(null)
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) onNav(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${item.caption}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="lightbox__bar">
        <span aria-live="polite">
          {index + 1} / {items.length}
        </span>
        <button ref={closeRef} type="button" className="icon-btn" onClick={onClose} aria-label="Close photo viewer">
          <Icon name="close" />
        </button>
      </div>
      <div
        className="lightbox__stage"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img src={item.src} alt={item.alt} />
        {items.length > 1 && (
          <>
            <button type="button" className="icon-btn lightbox__prev" onClick={() => onNav(-1)} aria-label="Previous photo">
              <Icon name="chevronLeft" />
            </button>
            <button type="button" className="icon-btn lightbox__next" onClick={() => onNav(1)} aria-label="Next photo">
              <Icon name="chevronRight" />
            </button>
          </>
        )}
      </div>
      <p className="lightbox__caption">{item.caption}</p>
    </div>
  )
}

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null)

  // Only show categories that actually have photos
  const cats = galleryCategories.filter((c) => c === 'All' || gallery.some((g) => g.category === c))
  const items = filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)

  const close = useCallback(() => setOpen(null), [])
  const nav = useCallback((d) => setOpen((i) => (i + d + items.length) % items.length), [items.length])

  return (
    <>
      <Seo
        title="Our Work"
        description="Photos from inside JK Wrench Works in La Pine, Oregon — the shop, the team, and real repair work on customer vehicles."
      />

      <Hero
        variant="compact"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Our Work' }]}
        eyebrow="Gallery"
        title="Our work"
        text="Every photo on this page was taken at JK Wrench Works. The shop, the people, and the vehicles that roll through our doors."
      />

      <section className="section" aria-label="Photo gallery">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter photos">
            {cats.map((c) => {
              const count = c === 'All' ? gallery.length : gallery.filter((g) => g.category === c).length
              return (
                <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}>
                  {c}
                  <span className="filter-bar__count">{count}</span>
                </button>
              )
            })}
          </div>

          <div className="masonry" key={filter}>
            {items.map((item, i) => (
              <GalleryCard key={item.src} item={item} onOpen={() => setOpen(i)} />
            ))}
          </div>
        </div>
      </section>

      {open !== null && <Lightbox items={items} index={open} onClose={close} onNav={nav} />}

      <CTABand title="Your vehicle could be next." text="Request service online or give us a call. We’ll treat it like our own." />
    </>
  )
}
