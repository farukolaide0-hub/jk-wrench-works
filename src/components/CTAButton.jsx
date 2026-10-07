import { Link } from 'react-router-dom'
import Icon from './Icon'

/*
  One button component for every call to action.
  - `to`   -> internal route (React Router Link)
  - `href` -> external / tel: / mailto: link
  variant: 'primary' | 'dark' | 'outline' | 'outline-light' | 'ghost-light'
*/
export default function CTAButton({
  to,
  href,
  variant = 'primary',
  size,
  block,
  icon,
  iconAfter,
  external,
  children,
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    variant !== 'primary' && `btn--${variant}`,
    size && `btn--${size}`,
    block && 'btn--block',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
      {iconAfter && <Icon name={iconAfter} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} className={classes} {...externalProps} {...rest}>
      {content}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
