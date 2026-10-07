export default function GalleryCard({ item, onOpen }) {
  return (
    <button type="button" className="gallery-card reveal" onClick={onOpen} aria-label={`View larger: ${item.caption}`}>
      <img src={item.sm || item.src} alt={item.alt} width={item.w} height={item.h} loading="lazy" decoding="async" />
      <span className="gallery-card__caption">
        <span>{item.caption}</span>
        <span className="gallery-card__cat">{item.category}</span>
      </span>
    </button>
  )
}
