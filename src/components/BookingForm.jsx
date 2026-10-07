import { useId, useMemo, useRef, useState } from 'react'
import { business, services } from '../config/business'
import CTAButton from './CTAButton'
import Icon from './Icon'

const OTHER = 'Something else / not sure'

const initial = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  year: '',
  make: '',
  model: '',
  engine: '',
  vin: '',
  service: '',
  date: '',
  time: '',
  message: '',
}

const required = ['firstName', 'lastName', 'phone', 'email', 'year', 'make', 'model', 'service', 'message']

function validate(values) {
  const errors = {}
  required.forEach((k) => {
    if (!values[k].trim()) errors[k] = 'This field is required.'
  })
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (values.phone && values.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Please enter a 10-digit phone number.'
  }
  const y = Number(values.year)
  const maxYear = new Date().getFullYear() + 1
  if (values.year && (!/^\d{4}$/.test(values.year) || y < 1900 || y > maxYear)) {
    errors.year = `Enter a year between 1900 and ${maxYear}.`
  }
  if (values.vin && !/^[A-HJ-NPR-Z0-9]{17}$/i.test(values.vin.trim())) {
    errors.vin = 'A VIN is 17 letters and numbers (no I, O, or Q).'
  }
  return errors
}

// Today's date in the visitor's own timezone, as YYYY-MM-DD
function localToday() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function buildEmail(v) {
  const lines = [
    `Name: ${v.firstName} ${v.lastName}`,
    `Phone: ${v.phone}`,
    `Email: ${v.email}`,
    '',
    `Vehicle: ${v.year} ${v.make} ${v.model}`,
    `Engine: ${v.engine || '—'}`,
    `VIN: ${v.vin || '—'}`,
    '',
    `Service needed: ${v.service}`,
    `Preferred date: ${v.date || 'Flexible'}`,
    `Preferred time: ${v.time || 'Flexible'}`,
    '',
    'Problem description:',
    v.message,
  ]
  const subject = `Service request: ${v.year} ${v.make} ${v.model} — ${v.firstName} ${v.lastName}`
  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
}

function Field({ id, label, error, optional, hint, full, children }) {
  return (
    <div className={`field${full ? ' field--full' : ''}`}>
      <label htmlFor={id}>
        {label}
        {optional ? <span className="opt">(optional)</span> : <span className="req" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && (
        <span className="field__hint" id={`${id}-hint`}>
          {hint}
        </span>
      )}
      {error && (
        <span className="field__error" id={`${id}-error`}>
          <Icon name="alert" width="14" height="14" /> {error}
        </span>
      )}
    </div>
  )
}

export default function BookingForm({ defaultService = '' }) {
  const uid = useId()
  const formRef = useRef(null)
  const serviceNames = useMemo(() => [...services.map((s) => s.name), OTHER], [])
  const preset = services.find((s) => s.slug === defaultService)?.name || ''

  const [values, setValues] = useState({ ...initial, service: preset })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | emailed | error

  const [today] = useState(localToday)
  const id = (name) => `${uid}-${name}`

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const inputProps = (name, extra = {}) => ({
    id: id(name),
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${id(name)}-error` : extra.hint ? `${id(name)}-hint` : undefined,
    required: required.includes(name) || undefined,
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const firstKey = Object.keys(found).find((k) => found[k])
    if (firstKey) {
      formRef.current?.querySelector(`[name="${firstKey}"]`)?.focus()
      return
    }

    if (business.formEndpoint) {
      try {
        setStatus('sending')
        const res = await fetch(business.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error('Request failed')
        setStatus('sent')
      } catch {
        setStatus('error')
      }
      return
    }

    // No form backend configured: hand off to the visitor's email app.
    window.location.href = buildEmail(values)
    setStatus('emailed')
  }

  if (status === 'sent' || status === 'emailed') {
    return (
      <div className="form-card" role="status" aria-live="polite">
        <div className="form-success">
          <span className="form-success__icon">
            <Icon name="check" />
          </span>
          <h2>{status === 'sent' ? 'Request received' : 'Almost done'}</h2>
          {status === 'sent' ? (
            <p>
              Thanks, {values.firstName}. Your request is on its way to the shop. We’ll contact you to talk it through and
              confirm availability.
            </p>
          ) : (
            <p>
              Your email app should have opened with your request filled in — just press <strong>Send</strong>. If it
              didn’t open, call us at <a className="text-link" href={business.phoneHref}>{business.phone}</a> or email{' '}
              <a className="text-link" href={buildEmail(values)}>{business.email}</a>.
            </p>
          )}
          <p>Submitting a request does not guarantee an appointment time. We’ll confirm availability with you directly.</p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <CTAButton to="/" variant="outline">
              Back to Home
            </CTAButton>
            <CTAButton href={business.phoneHref} icon="phone">
              Call {business.phone}
            </CTAButton>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form ref={formRef} className="form-card" onSubmit={onSubmit} noValidate aria-describedby={`${uid}-legend`}>
      <p id={`${uid}-legend`} className="field__hint" style={{ marginBottom: 24 }}>
        Fields marked <span className="req" aria-hidden="true" style={{ color: 'var(--accent-hover)' }}>*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <fieldset className="form-section">
        <legend className="form-section__title">
          <span>1</span> Your details
        </legend>
        <div className="form-grid">
          <Field id={id('firstName')} label="First name" error={errors.firstName}>
            <input type="text" autoComplete="given-name" {...inputProps('firstName')} />
          </Field>
          <Field id={id('lastName')} label="Last name" error={errors.lastName}>
            <input type="text" autoComplete="family-name" {...inputProps('lastName')} />
          </Field>
          <Field id={id('phone')} label="Phone" error={errors.phone}>
            <input type="tel" inputMode="tel" autoComplete="tel" {...inputProps('phone')} />
          </Field>
          <Field id={id('email')} label="Email" error={errors.email}>
            <input type="email" inputMode="email" autoComplete="email" {...inputProps('email')} />
          </Field>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend className="form-section__title">
          <span>2</span> Your vehicle
        </legend>
        <div className="form-grid form-grid--3">
          <Field id={id('year')} label="Vehicle year" error={errors.year}>
            <input type="text" inputMode="numeric" maxLength={4} placeholder="e.g. 2014" {...inputProps('year')} />
          </Field>
          <Field id={id('make')} label="Vehicle make" error={errors.make}>
            <input type="text" placeholder="e.g. Subaru" {...inputProps('make')} />
          </Field>
          <Field id={id('model')} label="Vehicle model" error={errors.model}>
            <input type="text" placeholder="e.g. Outback" {...inputProps('model')} />
          </Field>
        </div>
        <div className="form-grid" style={{ marginTop: 18 }}>
          <Field id={id('engine')} label="Vehicle engine" optional hint="e.g. 2.5L 4-cyl, 6.7L diesel" error={errors.engine}>
            <input type="text" {...inputProps('engine', { hint: true })} />
          </Field>
          <Field id={id('vin')} label="VIN" optional hint="17 characters — helps us look up the right parts" error={errors.vin}>
            <input
              type="text"
              maxLength={17}
              autoCapitalize="characters"
              style={{ textTransform: 'uppercase' }}
              {...inputProps('vin', { hint: true })}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend className="form-section__title">
          <span>3</span> The service
        </legend>
        <div className="form-grid">
          <Field id={id('service')} label="Service needed" error={errors.service} full>
            <select {...inputProps('service')}>
              <option value="">Choose a service…</option>
              {serviceNames.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </Field>
          <Field id={id('date')} label="Preferred date" optional error={errors.date}>
            <input type="date" min={today} {...inputProps('date')} />
          </Field>
          <Field id={id('time')} label="Preferred time" optional error={errors.time}>
            <select {...inputProps('time')}>
              <option value="">No preference</option>
              <option>Morning</option>
              <option>Midday</option>
              <option>Afternoon</option>
            </select>
          </Field>
          <Field id={id('message')} label="Describe the problem" error={errors.message} full>
            <textarea
              rows={5}
              placeholder="What is the vehicle doing? When did it start? Any warning lights, noises, or smells?"
              {...inputProps('message')}
            />
          </Field>
        </div>
      </fieldset>

      <div className="form-note">
        <Icon name="info" />
        <p>
          Submitting this form does not guarantee an appointment time. Our team will contact you to confirm availability.
        </p>
      </div>

      {status === 'error' && (
        <div className="form-note" role="alert" style={{ marginTop: 12 }}>
          <Icon name="alert" />
          <p>
            Something went wrong sending your request. Please call{' '}
            <a className="text-link" href={business.phoneHref}>{business.phone}</a> or email{' '}
            <a className="text-link" href={business.emailHref}>{business.email}</a>.
          </p>
        </div>
      )}

      <div className="form-actions">
        <button type="submit" className="btn" disabled={status === 'sending'}>
          <span>{status === 'sending' ? 'Sending…' : 'Submit Service Request'}</span>
          <Icon name="arrowRight" />
        </button>
        <small>Prefer to talk? Call {business.phone}.</small>
      </div>
    </form>
  )
}
