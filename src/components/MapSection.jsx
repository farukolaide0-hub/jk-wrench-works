import { business, fullAddress } from '../config/business'
import CTAButton from './CTAButton'
import Icon from './Icon'

// Google Maps embed + one-tap directions, using the verified address.
export default function MapSection({ title = `Map showing ${business.legalName} at ${fullAddress}` }) {
  return (
    <div className="map-card reveal">
      <iframe
        src={business.mapEmbedUrl}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="map-card__bar">
        <div className="map-card__addr">
          <Icon name="pin" />
          <span>
            <strong>{business.legalName}</strong>
            {business.address.street}, {business.address.city}, {business.address.state} {business.address.zip}
          </span>
        </div>
        <CTAButton href={business.directionsUrl} external icon="directions">
          Get Directions
        </CTAButton>
      </div>
    </div>
  )
}
