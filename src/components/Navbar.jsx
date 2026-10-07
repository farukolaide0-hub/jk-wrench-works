import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business, navLinks, fullAddress } from '../config/business'
import CTAButton from './CTAButton'
import Icon from './Icon'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  // Shrink + shadow after scrolling a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu on navigation
  const [menuPath, setMenuPath] = useState(pathname)
  if (menuPath !== pathname) {
    setMenuPath(pathname)
    setOpen(false)
  }

  // Lock page scroll, close on Escape, and close if resized to desktop
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    if (!open) return undefined

    const firstLink = menuRef.current?.querySelector('a')
    firstLink?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const mq = window.matchMedia('(min-width: 1080px)')
    const onMq = (e) => e.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    <>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container nav__inner">
          <Link to="/" className="nav__logo" aria-label={`${business.name} — home`}>
            <Logo />
          </Link>

          <nav aria-label="Main">
            <ul className="nav__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === '/'}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav__actions">
            <a className="nav__phone" href={business.phoneHref}>
              <Icon name="phone" />
              {business.phone}
            </a>
            <CTAButton to="/booking" size="sm">
              Request Service
            </CTAButton>
            <button
              ref={toggleRef}
              type="button"
              className="nav__toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Mobile">
          <ul className="mobile-menu__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'}>
                  {link.label}
                  <Icon name="arrowRight" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__cta">
          <CTAButton to="/booking" icon="calendar" block>
            Request Service
          </CTAButton>
          <CTAButton href={business.phoneHref} variant="outline-light" icon="phone" block>
            Call {business.phone}
          </CTAButton>
        </div>
        <div className="mobile-menu__brand">
          <Logo lazy />
        </div>
        <div className="mobile-menu__meta">
          <span>{fullAddress}</span>
          <a href={business.emailHref}>{business.email}</a>
        </div>
      </div>
    </>
  )
}
