import Icon from './Icon'

// Renders one genuine, verbatim public review from business.js
export default function ReviewCard({ review }) {
  const initials = review.name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <article className="review-card reveal">
      <div className="stars" role="img" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Icon key={i} name="star" />
        ))}
      </div>
      <blockquote>“{review.text}”</blockquote>
      <footer>
        <span className="review-card__avatar" aria-hidden="true">
          {initials}
        </span>
        <span>
          <span className="review-card__name">{review.name}</span>
          <span className="review-card__source" style={{ display: 'block' }}>
            Review on {review.source}
            {review.date ? ` · ${review.date}` : ''}
          </span>
        </span>
      </footer>
    </article>
  )
}
