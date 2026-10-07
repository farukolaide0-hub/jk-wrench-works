import { business, images } from '../config/business'

/*
  The official JK Wrench Works logo, used as-is from their website.
  Never apply filters, recoloring, or cropping — size it only via CSS height.
*/
export default function Logo({ className = '', lazy = false }) {
  return (
    <img
      className={`logo ${className}`}
      src={images.logo}
      alt={`${business.name} logo`}
      width={images.logoWidth}
      height={images.logoHeight}
      decoding="async"
      {...(lazy ? { loading: 'lazy' } : { fetchPriority: 'high' })}
    />
  )
}
