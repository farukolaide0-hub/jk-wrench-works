/*
  Consistent section headings.
  align: 'left' | 'center' | 'split' (title left, intro + action right)
*/
export default function SectionHeading({ eyebrow, title, intro, align = 'left', as: Tag = 'h2', id, children }) {
  const cls = ['section-heading', align !== 'left' && `section-heading--${align}`, 'reveal'].filter(Boolean).join(' ')

  if (align === 'split') {
    return (
      <div className={cls}>
        <div className="stack-sm">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <Tag id={id}>{title}</Tag>
        </div>
        <div className="section-heading__intro">
          {intro && <p className="lead">{intro}</p>}
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={cls}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id}>{title}</Tag>
      {intro && <p className="lead">{intro}</p>}
      {children}
    </div>
  )
}
