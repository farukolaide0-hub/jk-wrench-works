import { business } from '../config/business'

/*
  Per-page <title> and meta description.
  React 19 hoists these tags into <head> automatically.
*/
export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${business.legalName}` : `${business.legalName} | Auto Repair in La Pine, Oregon`
  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </>
  )
}
