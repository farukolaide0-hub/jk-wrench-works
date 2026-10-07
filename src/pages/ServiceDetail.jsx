import { useParams } from 'react-router-dom'
import { getService } from '../config/business'
import ServicePage from '../components/ServicePage'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <NotFound />
  return <ServicePage key={service.slug} service={service} />
}
