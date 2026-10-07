/*
  ============================================================
  JK WRENCH WORKS LLC — EDITABLE BUSINESS CONTENT
  ============================================================
  Everything the website says about the business lives here.
  Components read from this file, so edits here update the
  whole site.

  Sources used (verified October 2026):
  - https://www.jkwrenchworks.com            (home, values, contact)
  - https://www.jkwrenchworks.com/about-us   (story, Justin & Kaylie)
  - https://www.jkwrenchworks.com/services   (all service details)
  - https://www.jkwrenchworks.com/why-choose-us
  - https://www.jkwrenchworks.com/warranty-policy
  - Public business listing (service areas)

  Image rules:
  - `real: true`  -> an actual JK Wrench Works photo (from their site)
  - `real: false` -> stock photo (Pexels), used only to illustrate a
                     service. Never placed in the Gallery / Our Work.
  ============================================================
*/

const img = (file) => `/images/${file}`

/* ---------- Core details ---------- */

export const business = {
  name: 'JK Wrench Works',
  legalName: 'JK Wrench Works LLC',
  tagline: 'Your insured, bonded, and licensed auto repair experts.',
  phone: '541-876-7027',
  phoneHref: 'tel:5418767027',
  email: 'jkwrenchworks@gmail.com',
  emailHref: 'mailto:jkwrenchworks@gmail.com',
  website: 'https://www.jkwrenchworks.com',
  address: {
    street: '17120 Cougar Lane',
    city: 'La Pine',
    state: 'OR',
    zip: '97739',
  },

  // Map links use the business name + verified street address.
  // No coordinates are hard-coded.
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=JK+Wrench+Works+LLC%2C+17120+Cougar+Ln%2C+La+Pine%2C+OR+97739',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=JK+Wrench+Works+LLC%2C+17120+Cougar+Ln%2C+La+Pine%2C+OR+97739',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=JK%20Wrench%20Works%20LLC%2C%2017120%20Cougar%20Ln%2C%20La%20Pine%2C%20OR%2097739&z=12&output=embed',

  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583319514566', icon: 'facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com/jkwrenchworks/', icon: 'instagram' },
  ],

  reviewLinks: {
    google: 'https://www.google.com/search?q=JK+Wrench+Works+LLC+Reviews',
    yelp: 'https://www.yelp.com/biz/jk-wrench-works-la-pine',
  },

  /*
    Booking form delivery.
    Leave empty to open the visitor's email app with the request
    pre-filled (works with no backend). To receive submissions
    directly, paste a form endpoint here (e.g. a Formspree URL).
  */
  formEndpoint: '',

  description:
    'JK Wrench Works is a husband-and-wife auto repair shop in La Pine, Oregon. Justin handles the wrenching; Kaylie keeps the shop running. Honest communication, quality workmanship, and fair, transparent service for our neighbors.',

  shortDescription:
    'A husband-and-wife auto repair shop in La Pine, Oregon — honest work, quality repairs, and straightforward service.',
}

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`

/*
  Opening hours.
  Hours could not be confirmed from an official source, so none are
  listed. Add them like:
    [{ days: 'Monday – Friday', time: '8:00 AM – 5:00 PM' }, ...]
  and they will appear in the footer and on the Contact page.
*/
export const hours = []
export const hoursFallback = 'Please call or email for current shop hours and availability.'

/* ---------- Trust & credentials (all stated on the official site) ---------- */

export const credentials = [
  { icon: 'shield', title: 'Insured, Bonded & Licensed', text: 'A fully insured, bonded, and licensed shop.' },
  { icon: 'clipboard', title: 'CARFAX Service Records', text: 'We proudly report service records to CARFAX.' },
  { icon: 'badge', title: '12-Month / 15,000-Mile Warranty', text: 'On parts and labor we supply and install.', link: '/about#warranty' },
  { icon: 'handshake', title: 'Honest & Transparent', text: 'Clear guidance so you can decide with confidence.' },
]

export const warranty = {
  headline: '12-month / 15,000-mile warranty',
  summary:
    'We provide a 12-month / 15,000-mile warranty on labor and parts supplied and installed by JK Wrench Works, unless otherwise stated. Coverage begins on the date of repair and applies to the specific repair performed.',
  covered: [
    'Defects in workmanship',
    'Failure of parts supplied and installed by JK Wrench Works due to manufacturing defects',
  ],
  notCovered: [
    'Parts supplied by the customer',
    'Normal wear items (brake pads, clutches, belts, hoses, bulbs, fluids)',
    'Pre-existing conditions or unrelated component failures',
    'Damage from misuse, neglect, accidents, overheating, or lack of maintenance',
  ],
  policyUrl: 'https://www.jkwrenchworks.com/warranty-policy',
}

/* ---------- Values (verbatim from the official site) ---------- */

export const values = [
  {
    icon: 'handshake',
    title: 'Honesty & Integrity',
    text: 'We communicate openly to provide clear guidance so you can make confident decisions.',
  },
  {
    icon: 'wrench',
    title: 'Quality Workmanship',
    text: 'Repairs done right the first time — with care and precision.',
  },
  {
    icon: 'scale',
    title: 'Fair & Transparent',
    text: 'Friendly, approachable, and personalized service.',
  },
  {
    icon: 'heart',
    title: 'Passion & Community',
    text: 'Cars are our passion. We take pride in giving back to our La Pine neighbors.',
  },
]

/* ---------- Story (from the official About page) ---------- */

export const story = {
  intro:
    "We're a husband-and-wife team who turned a shared love of cars into a full-service auto repair shop proudly serving La Pine, OR.",
  origin:
    'What started as weekend projects on our own daily drivers grew into performance builds and off-road rigs — and ultimately into a business rooted in honesty, quality workmanship, and a genuine commitment to our community.',
  justin:
    "Justin has been turning wrenches for as long as he can remember and began his professional automotive career in 2012. With extensive heavy-line experience and a constant drive to learn, he continues to expand his skills and expertise. For Justin, this work isn't just a job — it's a true passion.",
  kaylie:
    'Behind every great mechanic is a steady hand keeping things running smoothly. Kaylie handles the logistics, organization, and day-to-day operations, making sure the shop runs efficiently while still leaving room for life outside the garage.',
  together:
    'Together, we combine passion, skill, and community-focused values to deliver honest, reliable, and friendly automotive service to every neighbor who walks through our doors.',
  promise:
    'At JK Wrench Works, we treat every customer like a neighbor and every vehicle like our own.',
}

/* ---------- Images ---------- */

export const images = {
  // Official JK Wrench Works header logo, unmodified (from jkwrenchworks.com)
  logo: img('real/jk-wrench-works-logo.png'),
  logoWidth: 500,
  logoHeight: 205,
  heroShop: { src: img('real/shop-subaru-lift.jpg'), real: true, alt: 'A red Subaru Outback raised on the two-post lift inside the JK Wrench Works shop in La Pine' },
  shopJeep: { src: img('real/shop-jeep-lift.jpg'), sm: img('real/shop-jeep-lift-sm.jpg'), real: true, alt: 'A white Jeep on the lift with the hood open inside the JK Wrench Works shop' },
  shopSubaru: { src: img('real/shop-subaru-lift.jpg'), sm: img('real/shop-subaru-lift-sm.jpg'), real: true, alt: 'A red Subaru Outback on the lift at JK Wrench Works' },
  shopSubaruTall: { src: img('real/shop-subaru-lift-tall.jpg'), real: true, alt: 'Working beneath a Subaru Outback raised on the lift inside the JK Wrench Works shop' },
  engineBay: { src: img('real/engine-bay-bw.jpg'), sm: img('real/engine-bay-bw-sm.jpg'), real: true, alt: 'Black-and-white photo of hands-on work on a truck engine accessory drive at JK Wrench Works' },
  diesel: { src: img('real/diesel-valvetrain.jpg'), sm: img('real/diesel-valvetrain-sm.jpg'), real: true, alt: 'Diesel engine with the valve cover removed, exposing the valve springs during an engine repair' },
  suspension: { src: img('real/suspension-job.jpg'), sm: img('real/suspension-job-sm.jpg'), real: true, alt: 'Front suspension with a new shock and coil spring installed on a lifted 4x4, with tools on the shop floor' },
  couple: { src: img('real/justin-kaylie-shop.jpg'), real: true, alt: 'Justin and Kaylie standing in front of the JK Wrench Works shop door with two dogs' },
  coupleOutdoors: { src: img('real/justin-kaylie-outdoors.jpg'), real: true, alt: 'Kaylie and Justin outdoors in front of tall evergreen trees' },
  toolWall: { src: img('stock/tool-wall.jpg'), sm: img('stock/tool-wall-sm.jpg'), real: false, alt: 'Wrenches hanging on a workshop tool board' },
}

/* ---------- Gallery (real JK Wrench Works photos only) ---------- */

export const galleryCategories = ['All', 'The Shop', 'The Work', 'The Team']

export const gallery = [
  { ...images.shopSubaru, category: 'The Shop', caption: 'Subaru Outback up on the lift', w: 1800, h: 1522 },
  { ...images.couple, category: 'The Team', caption: 'Justin & Kaylie at the shop', w: 652, h: 1400 },
  { ...images.engineBay, category: 'The Work', caption: 'Under the hood', w: 2000, h: 1500 },
  { ...images.suspension, category: 'The Work', caption: 'Front suspension — shock and coil spring', w: 1050, h: 1400 },
  { ...images.shopSubaruTall, category: 'The Shop', caption: 'Inside the La Pine shop', w: 975, h: 1300 },
  { ...images.diesel, category: 'The Work', caption: 'Diesel valvetrain work', w: 1050, h: 1400 },
  { ...images.shopJeep, category: 'The Shop', caption: 'Jeep in for service', w: 1800, h: 1296 },
  { ...images.coupleOutdoors, category: 'The Team', caption: 'Kaylie & Justin', w: 787, h: 1400 },
]

/* ---------- Service areas (from public business listing) ---------- */

export const serviceAreas = [
  { name: 'La Pine', note: 'Home base — our shop is on Cougar Lane.' },
  { name: 'Gilchrist', note: 'A short drive south on Highway 97.' },
  { name: 'Crescent', note: 'Just down the road from Gilchrist.' },
  { name: 'Bend', note: 'North on Highway 97.' },
  { name: 'Fort Rock', note: 'Out toward the high desert.' },
  { name: 'Christmas Valley', note: 'In the high desert of northern Lake County.' },
]

/*
  ---------- Reviews ----------
  Only add GENUINE public reviews, copied word-for-word, with the
  reviewer name exactly as shown publicly. Verbatim review text could
  not be reliably retrieved at build time, so this list is empty and
  the site links visitors to the live Google and Yelp pages instead.

  Format:
  {
    name: 'Reviewer Name',
    rating: 5,
    text: 'Exact review text…',
    source: 'Google',          // or 'Yelp'
    date: 'March 2026',        // optional
  }
*/
export const reviews = []

/* ---------- Services (all details from jkwrenchworks.com/services) ---------- */

export const services = [
  {
    slug: 'check-engine-diagnostics',
    name: 'Check Engine Light & Diagnostics',
    short: 'Code scans, sensor testing, and engine and emission diagnostics to find the real cause.',
    metaTitle: 'Check Engine Light & Auto Diagnostics',
    intro:
      'A check engine light can point to dozens of possible issues. We retrieve the codes, then test and trace them to the actual cause — so you know what is wrong before any repair is approved.',
    image: { src: img('stock/check-engine-dash.jpg'), sm: img('stock/check-engine-dash-sm.jpg'), real: false, alt: 'Instrument cluster with a warning light illuminated' },
    detailImage: { src: img('stock/obd-scanner.jpg'), real: false, alt: 'An OBD-II diagnostic scan tool plugged in beneath a vehicle dashboard' },
    groups: [
      {
        title: 'Check engine light services',
        items: [
          'Check engine light scan and code retrieval',
          'Engine and emission system diagnostics',
          'Sensor testing (O2, MAP, TPS, etc.)',
          'Misfire and cylinder performance diagnostics',
          'Vacuum leak detection',
          'EVAP system leak / code diagnostics',
          'Ignition spark system diagnostics',
          'ECU relearns',
        ],
      },
    ],
    symptoms: ['Check engine light on or flashing', 'Rough idle or misfire', 'Hesitation or loss of power', 'EVAP or emissions codes', 'Poor fuel economy'],
    related: ['electrical', 'fuel-system', 'engine-repair'],
  },
  {
    slug: 'brake-repair',
    name: 'Brake Repair & Replacement',
    short: 'Pads, rotors, calipers, drums, fluid, parking brake, and ABS diagnostics.',
    metaTitle: 'Brake Repair',
    intro:
      'From a squeal or a pull to an ABS light, we inspect the whole brake system and walk you through what we find. Front, rear, or all four wheels — disc or drum.',
    image: { src: img('stock/brake-rotor.jpg'), sm: img('stock/brake-rotor-sm.jpg'), real: false, alt: 'Gloved hands working on a brake rotor in a workshop' },
    detailImage: { src: img('stock/drum-brake.jpg'), real: false, alt: 'Disassembled rear drum brake components on a workshop floor' },
    groups: [
      { title: 'Diagnostics & inspection', items: ['ABS / brake warning light diagnostics', 'Brake system inspections', 'Brake noise, vibration, or pull'] },
      { title: 'Pads & rotors', items: ['Brake pad and rotor replacement (front, rear, or all wheels)', 'Brake rotor resurfacing (when applicable and outsourced)'] },
      { title: 'Calipers', items: ['Caliper replacement', 'Caliper slide and hardware replacement', 'Seized or sticking caliper replacement'] },
      { title: 'Fluid & hydraulics', items: ['Brake fluid flush / system bleeding', 'Brake hose and line replacement', 'Brake master cylinder replacement'] },
      { title: 'Parking brake', items: ['Inspection and adjustment', 'Cable replacement'] },
      { title: 'Drum brakes', items: ['Rear drum brake service', 'Brake shoe and drum replacement', 'Cleaning, adjusting, and hardware replacement'] },
      { title: 'ABS', items: ['ABS diagnostics', 'Sensor replacement', 'Module replacement'] },
      { title: 'Performance & preventative', items: ['Heavy-duty / towing brake upgrades', 'Performance brake installation', 'Cleaning, lubrication, and break-in'] },
    ],
    symptoms: ['Squealing or grinding', 'Vibration when braking', 'Vehicle pulls to one side', 'Soft or spongy pedal', 'ABS or brake warning light'],
    related: ['suspension-steering', 'leak-detection', 'oil-change-maintenance'],
  },
  {
    slug: 'oil-change-maintenance',
    name: 'Oil Changes & Routine Maintenance',
    short: 'Oil and filter service, fluid flushes, filters, spark plugs, and tune-ups.',
    metaTitle: 'Oil Changes & Routine Maintenance',
    intro:
      'Regular maintenance is the simplest way to keep a vehicle dependable. We handle the routine work and keep an eye out for small issues before they turn into big ones.',
    image: { src: img('stock/oil-pour.jpg'), sm: img('stock/oil-pour-sm.jpg'), real: false, alt: 'Fresh motor oil being poured into an engine' },
    detailImage: { src: img('stock/oil-cap.jpg'), real: false, alt: 'Gloved hand removing an engine oil filler cap' },
    groups: [
      { title: 'Engine maintenance', items: ['Engine oil and filter service', 'Engine air filter replacement', 'Spark plug and spark plug wire replacement', 'PCV valve replacement', 'General tune-up', 'Leak inspection'] },
      { title: 'Fluid services', items: ['Coolant flush', 'Transmission fluid flush', 'Transmission fluid, filter, and gasket replacement', 'Brake fluid flush / system bleeding', 'Transfer case fluid service'] },
    ],
    symptoms: ['Oil change or service reminder', 'Rough running or hard starts', 'Fluid spots under the vehicle', 'Overdue tune-up'],
    related: ['engine-repair', 'brake-repair', 'leak-detection'],
  },
  {
    slug: 'engine-repair',
    name: 'Engine Repair & Replacement',
    short: 'Diagnostics, gaskets and seals, timing, internal repairs, and full engine replacement.',
    metaTitle: 'Engine Repair',
    intro:
      'From a leaking valve cover to a full engine swap, we test first — compression, leak-down, noise, and oil-consumption diagnostics — then recommend the repair that makes sense for your vehicle.',
    image: { src: img('real/engine-bay-bw.jpg'), sm: img('real/engine-bay-bw-sm.jpg'), real: true, alt: 'Black-and-white photo of hands-on engine work under the hood of a truck at JK Wrench Works' },
    detailImage: { src: img('real/diesel-valvetrain.jpg'), real: true, alt: 'Diesel engine with the valve cover removed during a repair at JK Wrench Works' },
    groups: [
      { title: 'Diagnostics & evaluation', items: ['General engine diagnostics', 'Check engine light diagnostics', 'Compression and leak-down testing', 'Engine noise or oil consumption diagnostics'] },
      { title: 'Gaskets & seals', items: ['Valve cover and oil pan gaskets', 'Timing cover reseal', 'Intake manifold gasket', 'Front and rear main seals', 'Full engine reseals'] },
      { title: 'Timing & valve train', items: ['Timing belt replacement', 'Timing chain replacement', 'Camshaft replacement', 'Lifters, rockers, and pushrods'] },
      { title: 'Internal engine repairs', items: ['Cylinder head removal and replacement', 'Head gasket replacement', 'Piston, ring, or connecting rod service', 'Crankshaft or bearing replacement'] },
      { title: 'Fuel & air', items: ['Fuel injector replacement', 'Throttle body service', 'Intake system repair', 'Vacuum leak diagnostics and repair'] },
      { title: 'Cooling & lubrication', items: ['Oil pump replacement', 'Water pump replacement', 'Radiator replacement', 'Engine oil leak diagnostics and repair'] },
      { title: 'Engine replacement & major repair', items: ['Full engine removal and replacement (new or used)', 'Long / short block replacement and build', 'Engine swaps'] },
    ],
    symptoms: ['Knocking, ticking, or new engine noise', 'Burning or losing oil', 'Overheating or white smoke', 'Loss of compression or power'],
    related: ['check-engine-diagnostics', 'heating-cooling', 'leak-detection'],
  },
  {
    slug: 'transmission-clutch',
    name: 'Transmission & Clutch Repair',
    short: 'Automatic and manual transmissions, clutches, transfer cases, and drivetrain.',
    metaTitle: 'Transmission & Clutch Repair',
    intro:
      'Slipping, harsh shifts, or a clutch that engages too high — we diagnose automatics, manuals, clutches, and 4WD/AWD transfer cases, and handle everything from fluid service to full replacement.',
    image: { src: img('stock/shifter-auto.jpg'), sm: img('stock/shifter-auto-sm.jpg'), real: false, alt: 'Close-up of an automatic transmission gear selector' },
    detailImage: { src: img('stock/shifter-manual.jpg'), real: false, alt: 'Manual transmission gear shifter in a vehicle interior' },
    groups: [
      { title: 'Diagnostics & evaluation', items: ['General transmission diagnostics', 'Warning light diagnostics', 'Noise, shift, or drivability diagnostics', 'Clutch engagement or slippage check'] },
      { title: 'Fluid & maintenance', items: ['Transmission fluid flush', 'Transmission fluid, filter, and gasket replacement'] },
      { title: 'Automatic transmission', items: ['Torque converter replacement', 'Leak detection and transmission reseal', 'Valve body service or replacement', 'Removal and replacement (new or used)', 'Transmission swaps'] },
      { title: 'Manual transmission', items: ['Removal and replacement (new or used)', 'Transmission swaps'] },
      { title: 'Clutch service', items: ['Clutch replacement', 'Pressure plate and release bearing', 'Flywheel resurfacing (when applicable and outsourced) or replacement', 'Master / slave cylinder and hydraulic repair'] },
      { title: 'Transfer case', items: ['Leak inspection and reseals', 'Fluid service', '4WD / AWD engagement diagnostics', 'Actuator replacement', 'Full removal and replacement'] },
      { title: 'Drivetrain', items: ['Transmission mount replacement', 'Shifter cable or linkage repair / replacement'] },
    ],
    symptoms: ['Slipping or delayed engagement', 'Harsh or erratic shifting', 'Clutch slipping or grabbing', '4WD/AWD not engaging', 'Transmission fluid leaks'],
    related: ['leak-detection', 'oil-change-maintenance', 'engine-repair'],
  },
  {
    slug: 'suspension-steering',
    name: 'Suspension & Steering Repair',
    short: 'Shocks, struts, springs, control arms, ball joints, tie rods, and power steering.',
    metaTitle: 'Suspension & Steering Repair',
    intro:
      'Clunks, wander, or uneven tire wear usually trace back to worn suspension or steering parts. We find what is loose or worn and replace it — on daily drivers and lifted rigs alike.',
    image: { src: img('stock/suspension-detail.jpg'), sm: img('stock/suspension-detail-sm.jpg'), real: false, alt: 'Close-up of vehicle suspension components in a workshop' },
    detailImage: { src: img('real/suspension-job.jpg'), real: true, alt: 'Front suspension work on a 4x4 at JK Wrench Works' },
    groups: [
      { title: 'Inspection', items: ['General suspension inspection', 'Noise, vibration, or pull diagnostics', 'Loose or worn component diagnostics'] },
      { title: 'Front & rear suspension', items: ['Shock and strut replacement', 'Coil spring replacement', 'Control arm and ball joint replacement', 'Wheel hub assembly replacement', 'Sway bar end link or bushing replacement'] },
      { title: 'Steering system', items: ['Inner and outer tie rod replacement', 'Rack and pinion replacement', 'Power steering pump service or replacement', 'Power steering hose replacement', 'Steering column replacement'] },
      { title: 'Bushings & mounts', items: ['Suspension bushing replacement', 'Engine or suspension mount replacement'] },
    ],
    symptoms: ['Clunking over bumps', 'Wandering or loose steering', 'Pulling to one side', 'Excessive bouncing', 'Uneven tire wear'],
    related: ['brake-repair', 'leak-detection', 'transmission-clutch'],
  },
  {
    slug: 'heating-cooling',
    name: 'Heating & Cooling System Repair',
    short: 'Overheating diagnostics, radiators, water pumps, thermostats, heater cores, and HVAC.',
    metaTitle: 'Heating & Cooling System Repair',
    intro:
      'Central Oregon winters are hard on cooling systems and heaters. We pressure-test, find the leak or failed part, and get the heat and engine temperature back where they belong.',
    image: { src: img('stock/cooling-bay.jpg'), sm: img('stock/cooling-bay-sm.jpg'), real: false, alt: 'Open engine bay showing the coolant reservoir and cooling components' },
    detailImage: { src: img('stock/climate-control.jpg'), real: false, alt: 'Vehicle climate control display' },
    groups: [
      { title: 'Diagnostics & inspection', items: ['Cooling system diagnostics', 'Leak inspection and pressure test', 'Heater / HVAC system diagnostics', 'Temperature or overheating diagnostics'] },
      { title: 'Radiator & cooling components', items: ['Radiator replacement', 'Radiator hose replacement', 'Thermostat replacement', 'Water pump replacement', 'Overflow tank replacement'] },
      { title: 'Maintenance', items: ['Coolant flush', 'System leak test', 'Fan or fan clutch replacement'] },
      { title: 'Heating & HVAC', items: ['Heater core replacement', 'HVAC blower motor replacement', 'AC / heater control repair', 'Blend door actuator repair'] },
    ],
    symptoms: ['Temperature gauge running high', 'No heat or weak heat', 'Sweet smell or coolant puddles', 'Blower not working'],
    related: ['engine-repair', 'leak-detection', 'electrical'],
  },
  {
    slug: 'electrical',
    name: 'Electrical Diagnostics',
    short: 'No-starts, batteries, charging systems, starters, wiring, sensors, and fuses.',
    metaTitle: 'Electrical Diagnostics & Charging Systems',
    intro:
      'Electrical problems take patience. We test the battery, starting, and charging systems, track down parasitic drains, and repair wiring and connections instead of guessing with parts.',
    image: { src: img('stock/battery-cables.jpg'), sm: img('stock/battery-cables-sm.jpg'), real: false, alt: 'Jumper cables connected to a vehicle battery' },
    detailImage: { src: img('stock/battery-charger.jpg'), real: false, alt: 'Battery charger connected under an open hood' },
    groups: [
      { title: 'Diagnostics', items: ['Electrical system / battery light check', 'Starting system diagnostics (hard start, no start)', 'Charging system check (alternator, voltage)', 'Battery drain diagnostics', 'Check engine light / electrical codes'] },
      { title: 'Battery & connections', items: ['Battery testing and replacement', 'Terminal and cable cleaning or replacement', 'Ground wire repair'] },
      { title: 'Starting system', items: ['Starter motor testing and replacement', 'Ignition switch replacement', 'Neutral safety switch', 'Clutch switch repair'] },
      { title: 'Charging system', items: ['Alternator testing and replacement', 'Alternator pulley and drive belt', 'Voltage regulator replacement'] },
      { title: 'Wiring & sensors', items: ['Main harness and connection repair', 'Sensor replacement', 'Fuse and relay testing and replacement'] },
    ],
    symptoms: ['Slow crank or no start', 'Battery keeps going dead', 'Battery or charging light on', 'Flickering lights or blown fuses'],
    related: ['check-engine-diagnostics', 'fuel-system', 'heating-cooling'],
  },
  {
    slug: 'fuel-system',
    name: 'Fuel System Repair',
    short: 'Fuel pumps, filters, injectors, lines, tanks, and EVAP system repair.',
    metaTitle: 'Fuel System Repair',
    intro:
      'Hard starts, stalling, or a fuel smell can come from anywhere between the tank and the injectors. We test pressure and flow, check for leaks, and repair the part that is actually failing.',
    image: { src: img('stock/fuel-rail.jpg'), sm: img('stock/fuel-rail-sm.jpg'), real: false, alt: 'Engine bay showing the fuel rail and intake components' },
    detailImage: { src: img('stock/intake-work.jpg'), real: false, alt: 'Mechanic working on engine intake and fuel components' },
    groups: [
      { title: 'Diagnostics', items: ['Fuel system diagnostics', 'Fuel pressure test / leak detection', 'Fuel injector diagnostics', 'Fuel pump flow testing'] },
      { title: 'Fuel delivery components', items: ['Fuel pump replacement', 'Fuel filter replacement', 'Fuel sending unit replacement', 'Fuel line and hose replacement', 'Fuel rail replacement'] },
      { title: 'Fuel injectors & throttle', items: ['Fuel injector cleaning / service', 'Fuel injector replacement', 'Throttle body cleaning, service, or replacement', 'Fuel pressure regulator replacement'] },
      { title: 'Fuel tank', items: ['Fuel tank replacement', 'Fuel tank vent / vapor (EVAP) service', 'Fuel tank sending unit'] },
      { title: 'EVAP', items: ['System leak detection / smoke test', 'Canister and purge valve replacement', 'Check engine light / EVAP code diagnostics'] },
    ],
    symptoms: ['Hard starting or stalling', 'Fuel smell', 'Sputtering under load', 'Inaccurate fuel gauge', 'EVAP codes'],
    related: ['check-engine-diagnostics', 'engine-repair', 'leak-detection'],
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection & Repair',
    short: 'Find and fix oil, coolant, transmission, brake, fuel, and EVAP leaks.',
    metaTitle: 'Leak Detection & Repair',
    intro:
      'A spot on the driveway is a clue, not a diagnosis. We trace the leak to its source and replace the seal, gasket, hose, or line that is causing it.',
    image: { src: img('stock/under-car-inspection.jpg'), sm: img('stock/under-car-inspection-sm.jpg'), real: false, alt: 'Mechanic inspecting the underside of a vehicle with a work light' },
    detailImage: { src: img('stock/underbody-light.jpg'), real: false, alt: 'Inspecting a vehicle underbody with a handheld light' },
    groups: [
      { title: 'Detection & inspection', items: ['Fluid leaks', 'Engine oil leaks', 'Transmission leaks', 'Brake system leaks', 'Fuel system leaks', 'Cooling system leaks', 'EVAP system leaks'] },
      { title: 'Seal, gasket & component repairs', items: ['Valve cover gaskets', 'Oil pan and timing cover', 'Rear main seal', 'Transmission pan gasket', 'Hose and line replacement', 'O-ring and seal replacement'] },
    ],
    symptoms: ['Puddles or spots under the vehicle', 'Burning oil smell', 'Low fluid levels', 'Visible residue on the engine or transmission'],
    related: ['engine-repair', 'heating-cooling', 'transmission-clutch'],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)

/* ---------- Navigation ---------- */

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Our Work' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/contact', label: 'Contact' },
]
