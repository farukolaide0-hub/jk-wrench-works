import { business, reviews } from '../config/business'
import ReviewCard from './ReviewCard'
import Icon from './Icon'

/*
  Shows genuine reviews from business.js when present.
  When none are configured, it links to the live public review pages
  instead of inventing testimonials.
*/
export default function ReviewsBlock({ limit }) {
  const list = limit ? reviews.slice(0, limit) : reviews

  if (list.length) {
    return (
      <div className="review-grid">
        {list.map((r) => (
          <ReviewCard key={`${r.name}-${r.text.slice(0, 12)}`} review={r} />
        ))}
      </div>
    )
  }

  return (
    <div className="review-panel reveal">
      <div>
        <h3>Hear it from our neighbors</h3>
        <p>
          We’d rather you read what customers say in their own words, on the platforms where they wrote it. Our reviews
          live on Google and Yelp — and if we’ve worked on your vehicle, we’d be grateful if you added yours.
        </p>
      </div>
      <div className="review-panel__links">
        <a className="review-source" href={business.reviewLinks.google} target="_blank" rel="noopener noreferrer">
          <span>
            <strong>Google Reviews</strong>
            <span>Read reviews for {business.legalName}</span>
          </span>
          <Icon name="arrowUpRight" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a className="review-source" href={business.reviewLinks.yelp} target="_blank" rel="noopener noreferrer">
          <span>
            <strong>Yelp</strong>
            <span>See {business.name} on Yelp</span>
          </span>
          <Icon name="arrowUpRight" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  )
}
