import React, { useState } from 'react'
import {
  ArrowRight, Star, Heart, Menu, X, Phone, MapPin, Clock, Sparkles,
  Palette, Music2, BookOpen, Shapes, Puzzle, Baby, ShieldCheck,
  Sun, Flower2, MessageCircle, CheckCircle2, GraduationCap,
  Mail, TreePine, Users, Award, Smile, Camera, Compass,
  HelpCircle, ChevronDown, Utensils, Feather, Sparkle,
  Image as ImageIcon, ZoomIn, HeartHandshake, Eye,
  Navigation, ExternalLink
} from 'lucide-react'

const phone = '099624 56830'
const whatsapp = '919962456830'

function Brand() {
  return (
    <a href="#home" className="brand" aria-label="Great Banyan Preschool home">
      <img
        src="/logo.png"
        alt="Great Banyan Preschool — Culture | Care | Concept"
        className="brand-logo-img"
      />
    </a>
  )
}

/* ── Curved Section Divider SVGs ── */
function CurveDivider({ fill = '#fdfaf6', flip = false }) {
  return (
    <div className={`curve-divider ${flip ? 'flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,32 C240,75 480,10 720,45 C960,80 1200,20 1440,50 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

function CloudDivider({ fill = '#7a1428' }) {
  return (
    <div className="curve-divider cloud-curve" aria-hidden="true">
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,45 C150,15 250,60 400,30 C550,5 650,55 800,25 C950,0 1080,50 1220,20 C1340,-5 1400,35 1440,30 L1440,70 L0,70 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

const programmes = [
  {
    icon: Baby,
    title: 'Play Group',
    age: 'Ages 1.5 – 2.5 yrs',
    text: 'A warm, affectionate first step into sensory play, social bonding, and playful curiosity.',
    color: 'peach',
    tag: 'PLAY • EXPLORE',
    sticker: 'Gentle Care'
  },
  {
    icon: Shapes,
    title: 'Nursery',
    age: 'Ages 2.5 – 3.5 yrs',
    text: 'Building early phonics, number awareness, fine motor strength, and joyful conversations.',
    color: 'mint',
    tag: 'GROW • DISCOVER',
    sticker: 'Little Words'
  },
  {
    icon: BookOpen,
    title: 'Pre KG',
    age: 'Ages 3.5 – 4.5 yrs',
    text: 'Interactive storytelling, early writing rhythm, logical thinking, and joyful teamwork.',
    color: 'lavender',
    tag: 'LEARN • SHINE',
    sticker: 'Creative Mind'
  },
  {
    icon: GraduationCap,
    title: 'LKG',
    age: 'Ages 4.5 – 5.5 yrs',
    text: 'Confidence, school readiness, independent thinking, and enthusiastic problem-solving.',
    color: 'yellow',
    tag: 'TRY • CREATE',
    sticker: 'School Ready'
  },
]

const creativeMoments = [
  {
    category: 'art',
    badge: 'Messy Hands, Happy Hearts',
    title: 'Splatter Art & Finger Painting',
    desc: 'Swirling brushes, vibrant pigments, and tactile sponge art where little hands explore color mixing freely.',
    icon: Palette,
    color: 'peach',
    skill: 'Fine Motor & Color Recognition',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'sensory',
    badge: 'Tactile Wonderland',
    title: 'Clay Sculpting & Kinetic Sand',
    desc: 'Squishing natural dough, rolling clay animals, and molding castles that unlock spatial creativity.',
    icon: Shapes,
    color: 'mint',
    skill: 'Sensory Integration & Focus',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'drama',
    badge: 'Imagination Stage',
    title: 'Puppet Theater & Story Pods',
    desc: 'Enacting cheerful jungle tales, wearing animal ears, and building speech confidence under cozy story nooks.',
    icon: Feather,
    color: 'lavender',
    skill: 'Expressive Speech & Empathy',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'stem',
    badge: 'Little Engineers',
    title: 'Magnetic Tiles & Block Mazes',
    desc: 'Stacking gravity towers, locking colorful wheels, and wondering how bridges balance with friendly mentors.',
    icon: Puzzle,
    color: 'yellow',
    skill: 'Spatial Logic & Problem Solving',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'music',
    badge: 'Joyful Beats',
    title: 'Rhythm Band & Dance Fiesta',
    desc: 'Tambourines, soft xylophones, clapping rhymes, and creative body swaying to cheerful folk tunes.',
    icon: Music2,
    color: 'peach',
    skill: 'Coordination & Rhythm Sense',
    image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'nature',
    badge: 'Green Explorers',
    title: 'Little Gardeners & Lawn Play',
    desc: 'Digging soft soil, watering morning buds, watching butterflies, and learning reverence for mother earth.',
    icon: Flower2,
    color: 'mint',
    skill: 'Nature Curiosity & Mindful Care',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
  }
]

const galleryMoments = [
  {
    id: 1,
    category: 'art',
    title: 'Rainbow Splash & Finger Art',
    caption: 'Messy hands, big smiles! Mixing blues and yellows into bright green magic.',
    tag: 'Art Lab',
    sticker: 'Pure Joy!',
    likes: 42,
    img: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'play',
    title: 'Tower of Ambition',
    caption: 'Building tall wooden towers with patience, concentration, and cheerful teamwork.',
    tag: 'Montessori Play',
    sticker: 'Little Builders',
    likes: 38,
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'story',
    title: 'Wonderland Storytime',
    caption: 'Curious eyes wide open as teacher brings the talking lion to life with puppets.',
    tag: 'Story Pods',
    sticker: 'Book Lovers',
    likes: 51,
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'outdoor',
    title: 'Sunny Lawn Adventures',
    caption: 'Chasing rainbow bubbles and running free under the morning sun on soft grass.',
    tag: 'Outdoor Fun',
    sticker: 'Free & Wild',
    likes: 47,
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    category: 'art',
    title: 'Craft & Cut-Out Workshop',
    caption: 'Little fingers shaping stars, flowers, and cheerful paper kites.',
    tag: 'Fine Motor',
    sticker: 'Creative Star',
    likes: 35,
    img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'celebrations',
    title: 'Best Friends Forever',
    caption: 'Giggles that echo through our hallways — friendships rooted for a lifetime.',
    tag: 'Celebration',
    sticker: 'Happy Hearts',
    likes: 64,
    img: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80'
  }
]

const dailyRoutine = [
  { time: '09:00 AM', title: 'Sunshine Welcome & Morning Circle', desc: 'Warm teacher hugs, cheerful greeting song, gentle body stretches, and sharing our morning smile.', icon: Sun },
  { time: '10:00 AM', title: 'Curiosity Stations & Guided Play', desc: 'Montessori trays, building blocks, alphabet puzzles, and sensory sorting activities in small groups.', icon: Shapes },
  { time: '11:15 AM', title: 'Healthy Snack & Table Manners', desc: 'Wholesome organic fruit nibbles, clean-hand washing habit, sharing with friends, and polite chatter.', icon: Utensils },
  { time: '12:00 PM', title: 'Outdoor Lawn & Banyan Tree Games', desc: 'Slide rides, sandcastle play, balancing beams, and chasing rainbow bubbles under gentle canopy shade.', icon: TreePine },
  { time: '01:00 PM', title: 'Story Castle & Sweet Nap Haven', desc: 'Soft classical lullabies, fairy tale narration, and cozy cushioned beds for peaceful afternoon rest.', icon: BookOpen },
  { time: '03:30 PM', title: 'Expressive Art & Musical Pick-Up', desc: 'Creative coloring, dancing to nursery rhymes, evening milk, and happy reunions with parents.', icon: Music2 },
]

const celebrationHighlights = [
  {
    title: 'Rainbow & Color Carnivals',
    desc: 'Kids and mentors dress up in theme hues — yellow sunshine days, red strawberry days, with themed color foods!',
    tag: 'Sensory Fiesta',
    color: 'peach',
    sticker: 'All Colors!'
  },
  {
    title: 'Grandparents Blessing Day',
    desc: 'Honoring our beloved elders with handmade greeting cards, songs, and heartwarming grandparent storytelling sessions.',
    tag: 'Values & Culture',
    color: 'mint',
    sticker: 'Respect & Love'
  },
  {
    title: 'Little Farmers & Animal Parade',
    desc: 'Exploring friendly farm animals, vegetable market setups, and counting fruits with cheerful toy carts.',
    tag: 'Experiential',
    color: 'yellow',
    sticker: 'Nature Explorers'
  },
  {
    title: 'Annual Sprout Fest & Costume Gala',
    desc: 'Stage confidence without pressure! Every toddler shines in whimsical costumes with applause from proud families.',
    tag: 'Stage Confidence',
    color: 'lavender',
    sticker: 'Shining Star'
  }
]

const funPillars = [
  { icon: ShieldCheck, title: 'Safe & Hygienic Haven', desc: 'Rounded edge furniture, non-toxic organic materials, CCTV monitored spaces, and hospital-grade sanitization daily.', sticker: '100% Safe' },
  { icon: Users,       title: '1:8 Loving Teacher Ratio', desc: 'No child left unheard. Every tiny emotion, milestone, and sweet question receives immediate warm attention.', sticker: 'Tender Care' },
  { icon: Compass,     title: 'Activity-Led Learning', desc: 'No rote memorization. We inspire deep curiosity through touch, feel, listen, build, and joyful wonder.', sticker: 'Hands-on' },
  { icon: Camera,      title: 'Daily WhatsApp Milestones', desc: 'Parents receive heartwarming photo glimpses and daily routine updates so you never miss a milestone.', sticker: 'Live Updates' },
]

const faqs = [
  {
    q: 'What is the right age to enroll for Play Group and Nursery?',
    a: 'Play Group welcomes little ones starting from 1.5 years to 2.5 years. Nursery welcomes children between 2.5 and 3.5 years. We ensure each group has age-appropriate toys, furniture, and loving attention.'
  },
  {
    q: 'How do teachers support children with first-time separation anxiety?',
    a: 'We embrace a gentle gradual settling policy! During the first week, parents can stay in our comfortable lounge, and school hours are kept shorter. Warm cuddles, bubble games, and cheerful distraction toys help toddlers fall in love with school within days.'
  },
  {
    q: 'What are the daycare hours and how is it integrated with preschool?',
    a: 'Our daycare operates from 9:00 AM to 8:00 PM on all weekdays. Children enrolled in morning preschool can transition smoothly into daycare for nutritious meals, supervised nap sessions, and evening creative games.'
  },
  {
    q: 'How safe is the campus environment?',
    a: 'Safety is paramount! We feature child-safe finger pinch guards on all doors, soft cushioned flooring in indoor zones, 24/7 CCTV surveillance, verified female support staff, and strictly monitored visitor protocols.'
  },
  {
    q: 'Do you offer healthy snacks or do parents send food?',
    a: 'Parents are encouraged to send wholesome home-cooked snacks. We guide children in polite eating rituals, hand hygiene, and drinking water regularly throughout the day.'
  }
]

const campuses = [
  {
    id: 'campus-1',
    badge: 'Campus 1 · V V Colony',
    schoolName: 'Great Banyan Preschool',
    type: 'Kindergarten School',
    rating: '4.9',
    ratingScore: 4.9,
    reviewsCount: 35,
    street: '11, 4th St',
    fullAddress: '11, 4th St, V V Colony, New Colony, Adambakkam, Chennai, Tamil Nadu 600088',
    phone: '099624 56830',
    phoneTel: 'tel:+919962456830',
    status: 'Open · Closes 8 pm',
    quote: 'Teachers and caretakers taking utmost good care of the children.',
    mapUrl: 'https://maps.app.goo.gl/QZZfJmCJb4fdEhsW8',
    directionsUrl: 'https://www.google.com/maps/dir//Great+Banyan+Preschool,+11,+4th+St,+V+V+Colony,+New+Colony,+Adambakkam,+Chennai,+Tamil+Nadu+600088/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525df78e02b4f7:0x733ed38de556607e?sa=X&ved=1t:57443&ictx=111',
    embedUrl: 'https://maps.google.com/maps?q=Great+Banyan+Preschool,+11,+4th+St,+V+V+Colony,+New+Colony,+Adambakkam,+Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'campus-2',
    badge: 'Campus 2 · Saraswathi Street',
    schoolName: 'Great Banyan Preschool',
    type: 'School center',
    rating: '5.0',
    ratingScore: 5.0,
    reviewsCount: 27,
    street: 'Saraswathi street, Second, Big St',
    fullAddress: 'Saraswathi street, Second, Big St, Bharath Nagar, Adambakkam, Chennai, Tamil Nadu 600088',
    phone: '099624 56830',
    phoneTel: 'tel:+919962456830',
    status: 'Open · Closes 8 pm',
    quote: 'All the teachers and care givers are kind, caring and mindful.',
    mapUrl: 'https://maps.app.goo.gl/TXAaP2PYPCMK2zJm6',
    directionsUrl: 'https://www.google.com/maps/dir//Great+Banyan+Preschool,+Saraswathi+street,+Second,+Big+St,+Bharath+Nagar,+Adambakkam,+Chennai,+Tamil+Nadu+600088/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525d0094fb4d6f:0xfbb9bc04ccc2b44e?sa=X&ved=1t:57443&ictx=111',
    embedUrl: 'https://maps.google.com/maps?q=Great+Banyan+Preschool,+Saraswathi+street,+Second,+Big+St,+Bharath+Nagar,+Adambakkam,+Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed'
  }
]

function SectionTitle({ eyebrow, title, text, center = true }) {
  return (
    <div className={`section-title ${center ? 'text-center' : ''}`}>
      <span className="eyebrow"><Sparkles size={14} /> {eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function AboutVisual() {
  return (
    <div className="about-visual">
      {/* Decorative kid stickers */}
      <div className="sticker-tag sticker-top-left">
        <Sun size={14} /> 100% Giggles!
      </div>
      <div className="sticker-tag sticker-bottom-right">
        <Heart size={14} /> Tender Care
      </div>

      <div className="curved-photo-blob">
        <img
          src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80"
          alt="Children playing with colorful blocks at Great Banyan Preschool"
          className="blob-img"
        />
        <div className="blob-floating-badge">
          <TreePine size={20} />
          <div>
            <b>Rooted in Love</b>
            <small>Culture · Care · Concept</small>
          </div>
        </div>
      </div>

      <div className="floating-note note-one"><Palette size={16} /> Hands-on Art</div>
      <div className="floating-note note-two"><Baby size={16} /> Safe &amp; Loved Always</div>
    </div>
  )
}

function DaycareArt() {
  return (
    <div className="daycare-art-wrapper">
      <div className="sticker-tag daycare-sticker-corner">
        <ShieldCheck size={14} /> 9 AM – 8 PM
      </div>
      <div className="daycare-curved-img-box">
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=650&q=80"
          alt="Happy toddlers enjoying daycare storytime"
          className="daycare-img"
        />
        <div className="daycare-floating-bubble">
          <Heart size={20} fill="#e84393" color="#e84393" />
          <div>
            <b>A warm second home</b>
            <small>Wholesome naps &amp; creative evenings</small>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [galleryFilter, setGalleryFilter] = useState('all')
  const [activeRoutine, setActiveRoutine] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)
  const [lightboxImg, setLightboxImg] = useState(null)
  const [likedPhotos, setLikedPhotos] = useState({})
  const [form, setForm] = useState({ parent: '', child: '', phone: '', programme: 'Play Group', campus: 'Campus 1 (11, 4th St, V V Colony)', message: '' })

  const nav = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Programmes', '#programmes'],
    ['Creativity', '#creativity'],
    ['Gallery', '#gallery'],
    ['Daily Rhythm', '#routine'],
    ['Daycare', '#daycare'],
    ['Campuses & Maps', '#campuses'],
    ['FAQ', '#faq'],
    ['Contact', '#contact']
  ]

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const sendEnquiry = (e) => {
    e.preventDefault()
    const msg = `Hello Great Banyan Preschool!%0AParent: ${encodeURIComponent(form.parent)}%0AChild: ${encodeURIComponent(form.child)}%0APhone: ${encodeURIComponent(form.phone)}%0APreferred Campus: ${encodeURIComponent(form.campus)}%0AInterested in: ${encodeURIComponent(form.programme)}%0AMessage: ${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/${whatsapp}?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const toggleLike = (id) => {
    setLikedPhotos(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const filteredMoments = activeFilter === 'all'
    ? creativeMoments
    : creativeMoments.filter(m => m.category === activeFilter)

  const filteredGallery = galleryFilter === 'all'
    ? galleryMoments
    : galleryMoments.filter(g => g.category === galleryFilter)

  return (
    <div className="site-shell">

      {/* ── Top strip (Responsive & Compact on Mobile) ── */}
      <div className="top-strip">
        <div className="top-strip-inner container">
          {/* Desktop View: Full descriptive text */}
          <div className="top-strip-desktop">
            <div className="top-strip-item">
              <GraduationCap size={14} className="strip-icon" />
              <span>Admissions Open 2024–25 · Smart Class · Day Care · Activity Based Learning</span>
            </div>
            <div className="top-strip-item top-strip-daycare">
              <Clock size={14} className="strip-icon" />
              <span>Daycare open daily · 9:00 AM – 8:00 PM · Adambakkam, Chennai</span>
            </div>
          </div>

          {/* Mobile View: Reduced, single-line aligned content to prevent overflow */}
          <div className="top-strip-mobile">
            <span className="ts-badge">
              <GraduationCap size={13} className="strip-icon" />
              <b>Admissions Open</b> 2024–25
            </span>
            <span className="ts-dot">•</span>
            <span className="ts-badge">
              <Clock size={12} className="strip-icon" />
              Daycare 9 AM–8 PM
            </span>
          </div>
        </div>
      </div>

      {/* ── Header / Nav ── */}
      <header className="header">
        <div className="container nav-wrap">
          <Brand />
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {nav.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact">Enroll Now <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>

        {/* ── HERO: responsive image banner with clickable phone & enroll hotspots ── */}
        <section className="hero" id="home">
          <div className="hero-interactive-wrap">
            <picture className="hero-picture">
              <source srcSet="/banyan-hero-mobile.png" media="(max-width: 767px)" />
              <img
                src="/banyan-hero-desktop.png"
                alt="Great Banyan Preschool — Play, Learn, Grow Together"
                className="hero-banner-img"
                fetchPriority="high"
              />
            </picture>

            {/* Clickable phone hotspot on top-left badge */}
            <a
              href="tel:+919962456830"
              className="hero-hotspot hero-phone-hotspot"
              aria-label="Call Great Banyan Preschool at 99624 56830"
              title="Call 99624 56830"
            >
              <span className="sr-only">Call 99624 56830</span>
            </a>

            {/* Clickable Enroll Now hotspot */}
            <a
              href="#contact"
              className="hero-hotspot hero-enroll-hotspot"
              aria-label="Enroll Now at Great Banyan Preschool"
              title="Enroll Now"
            >
              <span className="sr-only">Enroll Now</span>
            </a>
          </div>
        </section>

        {/* ── Soft Wave Curve Divider ── */}
        <CurveDivider fill="#fdfaf6" />

        {/* ── Trust row with stickers ── */}
        <section className="trust-row">
          <div className="container trust-grid">
            <div className="trust-item">
              <span className="trust-icon peach-bg"><Heart /></span>
              <div><b>Care with Pure Love</b><small>Affectionate maternal care</small></div>
              <span className="mini-badge">Warm Hugs</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon mint-bg"><ShieldCheck /></span>
              <div><b>Growing in Confidence</b><small>Individual attention &amp; encouragement</small></div>
              <span className="mini-badge">Little Stars</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon yellow-bg"><Sparkles /></span>
              <div><b>Learning through Play</b><small>Curiosity-driven daily discovery</small></div>
              <span className="mini-badge">Joyful Play</span>
            </div>
          </div>
        </section>

        {/* ── About Section with Curved Photo & Stickers ── */}
        <section className="section about-section" id="about" style={{ scrollMarginTop: '130px' }}>
          <div className="container about-grid">
            <AboutVisual />
            <div className="about-copy">
              <div className="eyebrow-sticker-wrap">
                <span className="eyebrow"><Sparkles size={14} /> A LITTLE ABOUT US</span>
                <span className="sticker-ribbon">Since 2018</span>
              </div>
              <h2>A joyful haven to<br /><em>begin their journey.</em></h2>
              <p className="about-lead">
                At Great Banyan Preschool, childhood is celebrated in its purest form. Under our caring guidance, toddlers build early friendships, ignite boundless creativity, and grow with values deeply rooted in Indian culture.
              </p>
              <div className="check-list">
                <p><CheckCircle2 /> Nurturing play-based environment with gentle mentors</p>
                <p><CheckCircle2 /> Culture, Care, and Concept woven into daily play</p>
                <p><CheckCircle2 /> Natural green lawn and vibrant, hygienic indoor spaces</p>
              </div>
              <div className="about-cta-row">
                <a href="#contact" className="btn btn-dark">Schedule a Campus Visit <ArrowRight size={17} /></a>
                <span className="sticker-tape-note">Drop by anytime!</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Curve Divider before Programmes ── */}
        <CurveDivider fill="#fdfaf6" />

        {/* ── Programmes ── */}
        <section className="section programme-section" id="programmes" style={{ scrollMarginTop: '130px' }}>
          <div className="container">
            <SectionTitle
              eyebrow="OUR FOUNDATION PROGRAMMES"
              title={<>Thoughtfully curated stages<br /><em>for every little age.</em></>}
              text="From baby steps to confident pre-schoolers, our curriculum respects each child's natural pace of learning."
            />
            <div className="programme-grid">
              {programmes.map((p, i) => {
                const Icon = p.icon
                return (
                  <article className={`programme-card ${p.color}`} key={p.title}>
                    <div className="card-sticker">{p.sticker}</div>
                    <div className="card-top">
                      <span className="programme-icon"><Icon size={27} /></span>
                      <span className="card-number">0{i + 1}</span>
                    </div>
                    <span className="card-tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <span className="age-label">{p.age}</span>
                    <p>{p.text}</p>
                    <a href="#contact" aria-label={`Enquire about ${p.title}`} className="round-arrow">
                      <ArrowRight size={18} />
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Curved Wave Divider before Creativity ── */}
        <CurveDivider fill="#ffffff" flip={true} />

        {/* ── CREATIVITY ZONE & WONDER LAB WITH IMAGES ── */}
        <section className="section creativity-section" id="creativity" style={{ scrollMarginTop: '130px' }}>
          <div className="container">
            <SectionTitle
              eyebrow="LITTLE CREATORS &amp; WONDER LAB"
              title={<>Where imagination has no rules<br /><em>and every mess is a masterpiece.</em></>}
              text="Children express, experiment, build, and giggle! Here is a glimpse into how our little ones explore creativity everyday."
            />

            {/* Filter Pills with playful icons */}
            <div className="filter-pill-bar">
              {[
                { id: 'all', label: 'All Creative Sparks', icon: Sparkle },
                { id: 'art', label: 'Color & Painting', icon: Palette },
                { id: 'sensory', label: 'Clay & Sensory', icon: Shapes },
                { id: 'drama', label: 'Story & Puppet', icon: Feather },
                { id: 'stem', label: 'Junior Builders', icon: Puzzle },
                { id: 'music', label: 'Beats & Dance', icon: Music2 },
                { id: 'nature', label: 'Nature Care', icon: Flower2 }
              ].map(f => {
                const PillIcon = f.icon
                return (
                  <button
                    key={f.id}
                    className={`filter-pill ${activeFilter === f.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(f.id)}
                  >
                    <PillIcon size={14} />
                    {f.label}
                  </button>
                )
              })}
            </div>

            {/* Creative Moments Cards with actual photo cards */}
            <div className="creative-grid">
              {filteredMoments.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div className={`creative-card ${item.color}`} key={idx}>
                    {/* Top image thumbnail with cute border curve */}
                    <div className="creative-img-wrapper">
                      <img src={item.image} alt={item.title} className="creative-card-img" />
                      <span className="creative-badge-sticker">{item.badge}</span>
                    </div>
                    <div className="creative-card-body">
                      <div className="creative-card-head">
                        <h4>{item.title}</h4>
                        <span className="creative-icon"><Icon size={20} /></span>
                      </div>
                      <p>{item.desc}</p>
                      <div className="creative-footer">
                        <Sparkles size={13} className="sparkle-icon" />
                        <span>{item.skill}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Fun Creativity Quote Banner with sticker styling */}
            <div className="creativity-callout">
              <div className="callout-sticker">100% Fun!</div>
              <div className="callout-icon-cluster">
                <span><Palette size={24} /></span>
                <span><Music2 size={24} /></span>
                <span><Smile size={24} /></span>
              </div>
              <div className="callout-text">
                <h3>"Every child is an artist — our joy is keeping the wonder alive!"</h3>
                <p>We provide unlimited child-safe paints, natural wooden blocks, and storytelling props so children find their unique voice.</p>
              </div>
              <a href="#contact" className="btn btn-primary callout-btn">Explore With Us <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        {/* ── NEW SECTION: PHOTO GALLERY & MEMORIES ZONE ── */}
        <section className="section gallery-section" id="gallery" style={{ scrollMarginTop: '130px' }}>
          <div className="container">
            <SectionTitle
              eyebrow="CAMPUS MOMENTS &amp; MEMORIES"
              title={<>Little smiles, giant memories.<br /><em>A glimpse into our happy days!</em></>}
              text="Take a look at real moments captured across our classrooms, sensory gardens, art tables, and celebrations."
            />

            {/* Gallery Category Tabs */}
            <div className="gallery-filter-tabs">
              {[
                { id: 'all', label: 'All Memories' },
                { id: 'art', label: 'Painting & Craft' },
                { id: 'play', label: 'Blocks & Montessori' },
                { id: 'story', label: 'Story Nooks' },
                { id: 'outdoor', label: 'Lawn & Splash' },
                { id: 'celebrations', label: 'Celebrations' }
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`gallery-tab-btn ${galleryFilter === tab.id ? 'active' : ''}`}
                  onClick={() => setGalleryFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Polaroid / Curved Frame Gallery Grid */}
            <div className="gallery-grid">
              {filteredGallery.map((photo, i) => {
                const isLiked = likedPhotos[photo.id]
                return (
                  <div
                    key={photo.id}
                    className={`gallery-card rot-${(i % 3) + 1}`}
                    onClick={() => setLightboxImg(photo)}
                  >
                    {/* Tape sticker effect */}
                    <div className="polaroid-tape"></div>

                    <div className="gallery-img-box">
                      <img src={photo.img} alt={photo.title} className="gallery-photo" />
                      <span className="gallery-sticker-tag">{photo.sticker}</span>
                      <div className="gallery-hover-overlay">
                        <ZoomIn size={24} />
                        <span>Enlarge Photo</span>
                      </div>
                    </div>

                    <div className="gallery-card-info">
                      <div className="gallery-card-top-row">
                        <span className="gallery-meta-tag">{photo.tag}</span>
                        <button
                          className={`heart-btn ${isLiked ? 'liked' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleLike(photo.id)
                          }}
                          aria-label="Like photo"
                        >
                          <Heart size={15} fill={isLiked ? '#e84393' : 'none'} />
                          <span>{photo.likes + (isLiked ? 1 : 0)}</span>
                        </button>
                      </div>
                      <h5>{photo.title}</h5>
                      <p>{photo.caption}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="gallery-bottom-strip">
              <Camera size={18} />
              <span>We share daily high-resolution photo highlights with parents via our private portal and WhatsApp!</span>
            </div>
          </div>
        </section>

        {/* ── Curve Divider before Routine ── */}
        <CurveDivider fill="#fdfaf6" />

        {/* ── DAILY RHYTHM (LIFE AT GREAT BANYAN) ── */}
        <section className="section routine-section" id="routine" style={{ scrollMarginTop: '130px' }}>
          <div className="container">
            <SectionTitle
              eyebrow="DAILY RHYTHM & ROUTINE"
              title={<>A joyful daily rhythm,<br /><em>full of wonder and sweet discoveries.</em></>}
              text="Our balanced daily rhythm gently blends energetic outdoor playtime, deep hands-on curiosity, wholesome nutrition, and soothing afternoon naps."
            />

            <div className="routine-layout">
              {/* Routine Interactive Selector */}
              <div className="routine-timeline">
                {dailyRoutine.map((item, idx) => {
                  const Icon = item.icon
                  const isSelected = activeRoutine === idx
                  return (
                    <div
                      key={idx}
                      className={`routine-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => setActiveRoutine(idx)}
                    >
                      <div className="routine-time-badge">
                        <Clock size={13} />
                        <span>{item.time}</span>
                      </div>
                      <div className="routine-node">
                        <span className="node-dot"></span>
                      </div>
                      <div className="routine-item-content">
                        <div className="routine-item-header">
                          <Icon size={18} className="routine-icon" />
                          <h5>{item.title}</h5>
                        </div>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Routine Spotlight Card */}
              <div className="routine-spotlight" style={{ position: 'relative' }}>
                <div
                  className="spotlight-top-bar"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '16px'
                  }}
                >
                  <span
                    className="spotlight-rhythm-badge"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#ffd860',
                      color: '#553000',
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.4px',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      boxShadow: '0 3px 10px rgba(0,0,0,0.15)'
                    }}
                  >
                    <Sparkles size={13} /> Daily Rhythm
                  </span>
                  <span
                    className="spotlight-badge"
                    style={{
                      marginBottom: 0
                    }}
                  >
                    Currently Highlighted
                  </span>
                </div>
                <div className="spotlight-clock">
                  <Clock size={36} />
                  <span>{dailyRoutine[activeRoutine].time}</span>
                </div>
                <h3>{dailyRoutine[activeRoutine].title}</h3>
                <p>{dailyRoutine[activeRoutine].desc}</p>
                <div className="spotlight-highlights">
                  <div className="spotlight-pill"><CheckCircle2 size={14} /> Gentle Guidance</div>
                  <div className="spotlight-pill"><CheckCircle2 size={14} /> Peer Bonding</div>
                  <div className="spotlight-pill"><CheckCircle2 size={14} /> Sensory Spark</div>
                </div>
                <div className="spotlight-quote">
                  <Heart size={16} fill="currentColor" />
                  <span>"Children thrive when their day flows with warmth and predictability."</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cloud Curve Divider before Daycare ── */}
        <CloudDivider fill="#7a1428" />

        {/* ── Daycare with Photo Art ── */}
        <section className="daycare-section" id="daycare" style={{ scrollMarginTop: '130px' }}>
          <div className="container daycare-grid">
            <div className="daycare-copy">
              <span className="eyebrow light"><Sun size={15} /> EXTENDED DAY CARE</span>
              <h2>Big hugs.<br /><em>Peace of mind for parents.</em></h2>
              <p>Need a loving, dependable environment beyond typical preschool hours? Our extended daycare welcomes toddlers and working parents from morning until 8:00 PM with wholesome care, hygiene, and fun.</p>
              <div className="daycare-time">
                <span className="time-icon"><Clock /></span>
                <div>
                  <small>DAYCARE HOURS</small>
                  <b>9:00 AM – 8:00 PM (Mon – Sat)</b>
                  <small>Full-day, half-day &amp; flexible hourly drop-in options available</small>
                </div>
              </div>
              <a href="#contact" className="btn btn-white">Enquire for Daycare Slots <ArrowRight size={17} /></a>
            </div>
            <DaycareArt />
          </div>
        </section>

        {/* ── Curve Divider after Daycare ── */}
        <CurveDivider fill="#ffffff" flip={true} />

        {/* ── CELEBRATIONS & THEME DAYS ── */}
        <section className="section celebrations-section" id="celebrations" style={{ scrollMarginTop: '130px' }}>
          <div className="container">
            <SectionTitle
              eyebrow="MAGICAL MOMENTS &amp; FESTIVALS"
              title={<>Celebrations that plant<br /><em>lifelong happy memories.</em></>}
              text="From vibrant color carnivals to heartwarming grandparents days, every month brings a new reason to celebrate childhood!"
            />

            <div className="celebration-grid">
              {celebrationHighlights.map((c, i) => (
                <div className={`celebration-card ${c.color}`} key={i}>
                  <div className="cel-sticker-top">{c.sticker}</div>
                  <div className="cel-badge">{c.tag}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="cel-footer">
                    <span>Joyful Family Participation</span>
                    <Heart size={15} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Curve Divider before Pillars ── */}
        <CurveDivider fill="#fdfaf6" />

        {/* ── WHY PARENTS & KIDS LOVE US (FUN PILLARS) ── */}
        <section className="section pillars-section">
          <div className="container">
            <SectionTitle
              eyebrow="THE GREAT BANYAN PROMISE"
              title={<>Built with parental care,<br /><em>designed for little wonders.</em></>}
              text="Why families in Adambakkam and Chennai trust Great Banyan Preschool as their child's second home."
            />

            <div className="pillars-grid">
              {funPillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <div className="pillar-card" key={i}>
                    <div className="pillar-sticker">{p.sticker}</div>
                    <div className="pillar-icon-box">
                      <Icon size={26} />
                    </div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section className="reviews-section">
          <div className="container reviews-grid">
            <div>
              <span className="eyebrow"><Star size={14} fill="currentColor" /> KIND WORDS FROM PARENTS</span>
              <h2>Little moments.<br /><em>Big parental smiles.</em></h2>
              <p>We are humbled to walk alongside hundreds of little blooming stars in Chennai.</p>
              <div className="rating-big">
                <strong>4.9</strong>
                <div>
                  <span className="stars">★★★★★</span>
                  <small>Based on 35+ verified Google reviews</small>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="quote-mark">"</div>
              <div className="stars">★★★★★</div>
              <blockquote>"Great Banyan Preschool is truly a preschool with a difference! My daughter adjusted within 3 days. Her vocabulary, table manners, and joy for learning are incredible."</blockquote>
              <div className="review-author">
                <span className="review-avatar"><Smile size={20} /></span>
                <div><b>Happy Parent of Preschooler</b><small>Verified Google review · Adambakkam</small></div>
              </div>
              <div className="review-doodle"><Star size={28} fill="currentColor" /></div>
            </div>
          </div>
        </section>

        {/* ── FREQUENTLY ASKED QUESTIONS ── */}
        <section className="section faq-section" id="faq" style={{ scrollMarginTop: '130px' }}>
          <div className="container faq-container">
            <SectionTitle
              eyebrow="COMMON QUESTIONS"
              title={<>Everything you need to know<br /><em>before your child's first day.</em></>}
              text="Have queries regarding safety, separation anxiety, or admission processes? We are here to help!"
            />

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div
                    key={index}
                    className={`faq-item ${isOpen ? 'active' : ''}`}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <div className="faq-question">
                      <span className="faq-icon"><HelpCircle size={18} /></span>
                      <h4>{faq.q}</h4>
                      <ChevronDown
                        size={18}
                        className={`faq-chevron ${isOpen ? 'rotate' : ''}`}
                      />
                    </div>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── TWO CHENNAI CAMPUSES & INTERACTIVE GOOGLE MAPS ── */}
        <section className="section campuses-section" id="campuses" style={{ scrollMarginTop: '130px', background: '#fdfaf6' }}>
          <div className="container">
            <SectionTitle
              eyebrow="TWO LOCATIONS IN ADAMBAKKAM"
              title={<>Find our preschool campuses<br /><em>near your home in Chennai.</em></>}
              text="Both branches offer CCTV monitored spaces, affectionate caretakers, child-safe Montessori play zones, and extended daycare open daily until 8:00 PM."
            />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              marginTop: '42px'
            }}>
              {campuses.map((c) => (
                <div
                  key={c.id}
                  style={{
                    background: '#fff',
                    borderRadius: '24px',
                    border: '1px solid rgba(122,20,40,0.12)',
                    boxShadow: '0 10px 30px rgba(122,20,40,0.06)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.25s, box-shadow 0.25s'
                  }}
                >
                  {/* Card Header */}
                  <div style={{ padding: '22px 24px 16px', borderBottom: '1px solid #f3e8e2' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#fdf0f4',
                        color: 'var(--clr-maroon)',
                        fontSize: '11px',
                        fontWeight: 800,
                        letterSpacing: '0.4px',
                        textTransform: 'uppercase',
                        padding: '5px 12px',
                        borderRadius: '16px'
                      }}>
                        <MapPin size={13} color="var(--clr-pink)" /> {c.badge}
                      </span>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#e8f8ee',
                        color: '#1a7337',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        padding: '4px 11px',
                        borderRadius: '14px'
                      }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#25d366', display: 'inline-block' }}></span>
                        {c.status}
                      </span>
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--ff-heading)',
                      fontSize: '22px',
                      color: 'var(--clr-maroon)',
                      fontWeight: 800,
                      margin: '4px 0 8px',
                      lineHeight: 1.2
                    }}>
                      {c.schoolName}
                    </h3>

                    {/* Google Ratings row */}
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '13px' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        background: '#fff9e6',
                        color: '#9e6a00',
                        fontWeight: 800,
                        padding: '3px 10px',
                        borderRadius: '12px',
                        border: '1px solid #f6e09e'
                      }}>
                        <Star size={14} fill="#f59e0b" color="#f59e0b" />
                        <span>{c.rating}</span>
                        <span style={{ color: '#666', fontWeight: 600 }}>({c.reviewsCount})</span>
                      </div>
                      <span style={{ color: '#888' }}>•</span>
                      <span style={{ color: '#555', fontWeight: 600 }}>{c.type}</span>
                    </div>
                  </div>

                  {/* Interactive Google Map iframe */}
                  <div style={{ position: 'relative', width: '100%', height: '220px', background: '#f5f5f5' }}>
                    <iframe
                      src={c.embedUrl}
                      title={`${c.schoolName} - ${c.badge}`}
                      width="100%"
                      height="100%"
                      style={{ border: 0, display: 'block' }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Card Details & Quote */}
                  <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    {/* Address */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                      <MapPin size={18} color="var(--clr-maroon)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <b style={{ color: 'var(--clr-maroon)', fontSize: '14px', display: 'block' }}>{c.street}</b>
                        <p style={{ margin: '3px 0 0', fontSize: '12px', color: '#666', lineHeight: 1.5 }}>
                          {c.fullAddress}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                      <Phone size={15} color="var(--clr-green)" style={{ flexShrink: 0 }} />
                      <a
                        href={c.phoneTel}
                        style={{ color: 'var(--clr-maroon)', fontSize: '12.5px', fontWeight: 700, textDecoration: 'none' }}
                      >
                        {c.phone}
                      </a>
                    </div>

                    {/* Parent Review Quote */}
                    <div style={{
                      background: 'linear-gradient(135deg, #fff5f8 0%, #fff9f6 100%)',
                      borderLeft: '4px solid var(--clr-pink)',
                      padding: '12px 14px',
                      borderRadius: '0 14px 14px 0',
                      marginBottom: '18px',
                      marginTop: 'auto'
                    }}>
                      <p style={{ margin: 0, fontSize: '12px', fontStyle: 'italic', color: '#444', lineHeight: 1.6 }}>
                        "{c.quote}"
                      </p>
                      <small style={{ display: 'block', marginTop: '4px', fontSize: '10px', color: '#888', fontWeight: 600 }}>
                        — Verified Google Parent Review
                      </small>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '10px' }}>
                      <a
                        href={c.directionsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          padding: '10px 14px',
                          borderRadius: '24px',
                          textDecoration: 'none',
                          textAlign: 'center'
                        }}
                      >
                        <Navigation size={14} /> Directions
                      </a>
                      <a
                        href={c.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          fontWeight: 700,
                          padding: '10px 14px',
                          borderRadius: '24px',
                          border: '1.5px solid var(--clr-maroon)',
                          color: 'var(--clr-maroon)',
                          background: '#fff',
                          textDecoration: 'none',
                          textAlign: 'center'
                        }}
                      >
                        <ExternalLink size={14} /> Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="section contact-section" id="contact" style={{ scrollMarginTop: '130px' }}>
          <div className="container contact-grid">
            <div className="contact-copy">
              <SectionTitle
                center={false}
                eyebrow="ADMISSIONS &amp; VISITS"
                title={<>Come visit our<br /><em>happy little wonderland.</em></>}
                text="Take a relaxed campus tour, meet our warm teachers, and let your child explore our play area!"
              />
              <div className="contact-detail">
                <span><MapPin /></span>
                <div>
                  <b>Campus 1 (V V Colony)</b>
                  <p>11, 4th St, V V Colony, New Colony,<br />Adambakkam, Chennai 600088</p>
                  <a
                    href="https://www.google.com/maps/dir//Great+Banyan+Preschool,+11,+4th+St,+V+V+Colony,+New+Colony,+Adambakkam,+Chennai,+Tamil+Nadu+600088/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525df78e02b4f7:0x733ed38de556607e?sa=X&ved=1t:57443&ictx=111"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '11.5px', color: 'var(--clr-pink)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}
                  >
                    Get Directions <ArrowRight size={13} />
                  </a>
                </div>
              </div>
              <div className="contact-detail">
                <span><MapPin /></span>
                <div>
                  <b>Campus 2 (Saraswathi St)</b>
                  <p>Saraswathi street, Second, Big St, Bharath Nagar,<br />Adambakkam, Chennai 600088</p>
                  <a
                    href="https://www.google.com/maps/dir//Great+Banyan+Preschool,+Saraswathi+street,+Second,+Big+St,+Bharath+Nagar,+Adambakkam,+Chennai,+Tamil+Nadu+600088/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525d0094fb4d6f:0xfbb9bc04ccc2b44e?sa=X&ved=1t:57443&ictx=111"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '11.5px', color: 'var(--clr-pink)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}
                  >
                    Get Directions <ArrowRight size={13} />
                  </a>
                </div>
              </div>
              <div className="contact-detail">
                <span><Phone /></span>
                <div><b>Give Us a Call</b><p><a href="tel:+919962456830">099624 56830</a></p></div>
              </div>
              <div className="contact-detail">
                <span><Clock /></span>
                <div><b>Preschool &amp; Daycare Hours</b><p>Preschool: 9:00 AM – 12:30 PM<br />Daycare: 9:00 AM – 8:00 PM</p></div>
              </div>
            </div>
            <form className="enquiry-card" onSubmit={sendEnquiry}>
              <div className="form-heading">
                <span className="form-heading-icon"><Mail size={22} /></span>
                <div><h3>Quick Admission Enquiry</h3><p>We usually respond within 15 minutes</p></div>
              </div>
              {submitted && (
                <div className="success-note">
                  <CheckCircle2 size={17} /> Your enquiry is ready in WhatsApp. Please send it there!
                </div>
              )}
              <label>Parent / Guardian Name<input required name="parent" value={form.parent} onChange={update} placeholder="e.g. Priya Sharma" /></label>
              <div className="form-two">
                <label>Child's Name<input name="child" value={form.child} onChange={update} placeholder="e.g. Aarav" /></label>
                <label>Phone Number<input required name="phone" type="tel" value={form.phone} onChange={update} placeholder="e.g. 9876543210" /></label>
              </div>
              <label>Preferred Campus
                <select name="campus" value={form.campus} onChange={update}>
                  <option value="Campus 1 (11, 4th St, V V Colony)">Campus 1 — 11, 4th St, V V Colony</option>
                  <option value="Campus 2 (Saraswathi St, Big St)">Campus 2 — Saraswathi St, Big St</option>
                  <option value="Either Campus / Need Recommendation">Either / Need recommendation</option>
                </select>
              </label>
              <label>Interested In
                <select name="programme" value={form.programme} onChange={update}>
                  <option>Play Group (1.5 - 2.5 yrs)</option>
                  <option>Nursery (2.5 - 3.5 yrs)</option>
                  <option>Pre KG (3.5 - 4.5 yrs)</option>
                  <option>LKG (4.5 - 5.5 yrs)</option>
                  <option>Full-day Daycare (9 AM - 8 PM)</option>
                  <option>After-school Daycare</option>
                  <option>Weekend Activity Club</option>
                </select>
              </label>
              <label>Your Message / Preferred Visit Time<textarea name="message" value={form.message} onChange={update} placeholder="Tell us when you would like to visit or ask questions..." rows="3" /></label>
              <button className="btn btn-primary submit-btn" type="submit">
                Submit Enquiry on WhatsApp <MessageCircle size={17} />
              </button>
              <small className="form-foot">By submitting, WhatsApp will open with your pre-filled message.</small>
            </form>
          </div>
        </section>

      </main>

      {/* ── Photo Lightbox Modal ── */}
      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImg(null)} aria-label="Close photo">
              <X size={20} />
            </button>
            <img src={lightboxImg.img} alt={lightboxImg.title} className="lightbox-photo" />
            <div className="lightbox-caption">
              <span className="lightbox-tag">{lightboxImg.tag}</span>
              <h3>{lightboxImg.title}</h3>
              <p>{lightboxImg.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-main">
          <div>
            <Brand />
            <p className="footer-blurb">A happy sanctuary for little hearts, curious minds, and blossoming creativity under the loving shade of the Great Banyan.</p>
          </div>
          <div className="footer-links">
            <b>Explore</b>
            <a href="#about">About Us</a>
            <a href="#programmes">Programmes</a>
            <a href="#creativity">Creativity Zone</a>
            <a href="#gallery">Moments Gallery</a>
            <a href="#routine">Daily Rhythm</a>
            <a href="#daycare">Daycare</a>
            <a href="#campuses">Campuses &amp; Maps</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-links">
            <b>Our Campuses</b>
            <a href="tel:+919962456830">099624 56830 (Open till 8 PM)</a>
            <a href="https://maps.app.goo.gl/QZZfJmCJb4fdEhsW8" target="_blank" rel="noreferrer">
              Campus 1: 11, 4th St, V V Colony ↗
            </a>
            <a href="https://maps.app.goo.gl/TXAaP2PYPCMK2zJm6" target="_blank" rel="noreferrer">
              Campus 2: Saraswathi St, Big St ↗
            </a>
            <a href="#campuses">View Interactive Google Maps ↓</a>
          </div>
          <div className="footer-sun">
            <Sun size={42} strokeWidth={1.3} />
            <small>See you soon,<br />little sunshine!</small>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Great Banyan Preschool. All rights reserved.</span>
          <span>Crafted with <Heart size={13} fill="currentColor" /> for happy little learners.</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsapp}?text=Hello%20Great%20Banyan%20Preschool!%20I%20would%20like%20to%20know%20more%20about%20admissions.`}
        target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={23} />
      </a>
    </div>
  )
}

export default App
