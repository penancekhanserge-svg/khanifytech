import CallExperience from './components/CallExperience.jsx'
import WelcomeGate from './components/WelcomeGate.jsx'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Check, Menu, X, Code2, CalendarDays, Globe2, ChevronDown, Sparkles, Copy, CheckCheck } from 'lucide-react'
import Home from './pages/Home.jsx'
import { Button, Heading, Logo, ServiceCards, ProjectCards, CTA, PageIntro } from './components/SiteSections.jsx'
import { services } from './siteData.js'

const bookingUrl = import.meta.env.VITE_BOOKING_URL || ''
const email = import.meta.env.VITE_CONTACT_EMAIL || ''



function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const titles = { '/': 'Digital ideas. Real impact.', '/about': 'About', '/services': 'Services', '/work': 'Our Work', '/contact': 'Contact', '/book-a-call': 'Book a Strategic Call' }
    document.title = (titles[location.pathname] || 'Page not found') + ' | KHANIFY TECHNOLOGIES'
  }, [location.pathname])
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus() }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])
  return <>
    <header className="site-header"><div className="container nav-row"><Logo />
      <nav className="desktop-nav" aria-label="Main navigation">{[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/work', 'Our Work'], ['/contact', 'Contact']].map(([path, label]) => <NavLink end={path === '/'} key={path} to={path}>{label}</NavLink>)}</nav>
      <div className="nav-cta"><Link to="/book-a-call" className="booking-link">Book a Strategic Call<span><ArrowUpRight size={18} /></span></Link></div>
      <button ref={menuButton} className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav">{open ? <X /> : <Menu />}</button>
    </div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" onClick={() => setOpen(false)}>{[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/work', 'Our Work'], ['/contact', 'Contact'], ['/book-a-call', 'Book a Strategic Call']].map(([path, label]) => <NavLink end={path === "/"} key={path} to={path}>{label}<ArrowUpRight size={16} /></NavLink>)}</nav>}</header>
    <div key={location.pathname} className="page-transition">{children}</div>
    <footer><div className="container"><div className="footer-top"><div><Logo /><p>Thoughtful design. Reliable development.<br />A partner for what comes next.</p></div><div><span className="footer-label">EXPLORE</span><Link to="/about">About us</Link><Link to="/services">Our services</Link><Link to="/work">Our work</Link></div><div><span className="footer-label">LET US TALK</span><Link to="/contact">Start a project <ArrowUpRight size={13} /></Link><Link to="/book-a-call">Book a strategic call <ArrowUpRight size={13} /></Link><span className="footer-note">Working together, wherever you are.</span></div></div><div className="footer-bottom"><span>&copy; {new Date().getFullYear()} KHANIFY TECHNOLOGIES</span><span>Built with intention. Made for people.</span><a href="#top">Back to top</a></div></div></footer>
  </>
}





function About() {
  return <main id="top"><PageIntro label="MEET KHANIFY" title={<>Small details.<br /><em>Bigger possibilities.</em></>} text="KHANIFY TECHNOLOGIES brings software, design, and project thinking together to help businesses take their next step." />
    <section className="container about-story"><div className="manifesto-art"><span className="tiny-label">OUR GUIDING IDEA</span><span>Good tech.<br />Clear purpose.<br /><em>Human impact.</em></span><Code2 size={45} strokeWidth={1} /><span className="tiny-label">KHANIFY TECHNOLOGIES / EST. IN POSSIBILITY</span></div><div><span className="eyebrow"><i />WHY WE ARE HERE</span><h2>Technology should<br />make things simpler.</h2><p>Getting an idea off the ground can feel complicated. The decisions, the design, the development, the delivery. We believe those pieces work better when they work together.</p><p>That is the thinking behind KHANIFY: a practical partner for building useful digital products, creating intuitive experiences, and bringing structure to technology projects.</p><p>Our focus is straightforward: understand the problem, agree on the scope, and build with care.</p></div></section>
    <section className="container section"><Heading label="WHAT MATTERS TO US" title="The way we work matters." /><div className="values-grid">{[['01', 'Clarity from the start', 'Clear scope, practical milestones, and conversations that keep everyone on the same page.'], ['02', 'Purpose before polish', 'Beautiful interfaces are only the beginning. Every decision should serve the people using your product.'], ['03', 'Care in the details', 'Thoughtful design and maintainable development, with attention to the little things that shape the experience.']].map(([num, title, text]) => <article key={num}><span className="card-number">{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><CTA /></main>
}
function Services() {
  return <main id="top"><PageIntro label="OUR SERVICES" title={<>From the first idea<br />to the <em>next chapter.</em></>} text="A focused set of services to design, build, and deliver your digital project. Choose the support you need, or bring us in from the beginning." /><section className="container services-page"><ServiceCards full /></section>
    <section className="container section scope-section"><Heading label="A STRONG FOUNDATION" title="Basic SEO. Clearly defined." text="We help your website start with the essentials: descriptive metadata, logical headings, useful image text, and a sitemap. Search performance takes time and depends on many factors." /><div className="scope-box"><h3>What this service covers</h3>{services[2].items.map(item => <p key={item}><Check size={18} />{item}</p>)}<span>Ongoing content strategy, paid advertising, and advanced SEO campaigns are outside our current scope.</span></div></section>
    <section className="container section faq-section"><Heading label="A LITTLE MORE CLARITY" title="Good questions." /><div>{[['Can you help with an early-stage idea?', 'Yes. We can start by clarifying the problem, the intended users, and the smallest useful version of your product.'], ['How much does a project cost?', 'Pricing depends on scope, complexity, and the level of support you need. After an initial conversation, we can define deliverables and prepare a proposal.'], ['Can I book design without development?', 'Yes. UI/UX design can be a standalone engagement, or part of a complete design and development project.'], ['Do you manage existing technology projects?', 'We can discuss planning, coordination, and quality supervision for an existing project. The first step is understanding your team, current progress, and delivery goals.']].map(([q, a]) => <details key={q}><summary>{q}<ChevronDown size={18} /></summary><p>{a}</p></details>)}</div></section><CTA /></main>
}
function Work() {
  const [filter, setFilter] = useState('All')
  return <main id="top"><PageIntro label="OUR WORK" title={<>A little imagination.<br /><em>A lot of possibility.</em></>} text="Explore illustrative product directions across websites, software, and interface design. This collection shows possibilities rather than completed client engagements." /><section className="container work-page"><div className="filter-row" aria-label="Filter concepts">{['All', 'Software', 'Design'].map(item => <button key={item} className={filter === item ? 'selected' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item === 'All' ? 'All concepts' : item}</button>)}</div><ProjectCards filter={filter} /><div className="work-disclaimer"><Sparkles size={19} /><p>These are illustrative interface concepts, not live products or client case studies. Real project stories will be added as they are ready to share.</p></div></section><CTA /></main>
}
function InquiryForm({ booking = false }) {
  const [draft, setDraft] = useState('')
  const [copied, setCopied] = useState(false)
  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\nService: ' + data.get('service') + '\n\n' + data.get('message')
    setDraft(body)
    setCopied(false)
    if (email) window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(booking ? 'Strategic call inquiry' : 'New project inquiry') + '&body=' + encodeURIComponent(body)
  }
  async function copyDraft() {
    try { await navigator.clipboard.writeText(draft); setCopied(true) } catch { setCopied(false) }
  }
  return <form className="inquiry-form" onSubmit={handleSubmit}><h2>{booking ? 'Tell us what?s on your mind.' : 'Let?s hear your idea.'}</h2><p>A few details will help shape a useful first conversation.</p><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={200} /></label></div><label>What do you need?<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(s => <option key={s.name}>{s.name}</option>)}<option>A little guidance / multiple services</option></select></label><label>Tell us about your project<textarea name="message" rows={5} placeholder="What are you building, and what would you like help with?" required maxLength={5000} /></label><p className="form-note">{email ? 'This opens your email app with a prepared message. You review and send it there.' : 'Contact delivery is not connected yet. You can prepare and copy your inquiry below; nothing will be sent.'}</p><button className="button" type="submit">{email ? 'Prepare Email' : 'Prepare My Inquiry'}<ArrowUpRight size={17} /></button>{draft && <div className="draft-box" role="status"><h3>{email ? 'Your inquiry is ready.' : 'Draft ready ? not sent.'}</h3><p>{email ? 'Send it from your email app, or copy it below.' : 'Keep a copy of your inquiry until contact details are available.'}</p><textarea aria-label="Your prepared inquiry" readOnly value={draft} rows={6} /><button className="quiet-link" type="button" onClick={copyDraft}>{copied ? <CheckCheck size={16} /> : <Copy size={16} />}{copied ? 'Copied' : 'Copy inquiry'}</button></div>}</form>
}
function Contact({ booking = false }) {
  return <main id="top"><PageIntro label={booking ? 'LET?S FIND YOUR NEXT STEP' : 'GET IN TOUCH'} title={booking ? <>Big plans start<br />with a <em>good conversation.</em></> : <>Your next big thing<br /><em>starts here.</em></>} text={booking ? 'A focused conversation about your idea, your goals, and what it will take to move forward.' : 'Have a project in mind, a question, or an idea you want to explore? We would love to hear about it.'} /><section className="container contact-grid"><aside><span className="service-icon">{booking ? <CalendarDays /> : <Globe2 />}</span><h2>{booking ? 'Book a Strategic Call' : 'Let?s build something worthwhile.'}</h2><p>{booking ? 'Bring your questions. We will talk through the opportunity and work out whether we are the right fit.' : 'Whether you need a website, a SaaS product, or a fresh perspective on your project, start with a conversation.'}</p>{booking ? <><ul className="call-list"><li><Check size={16} />Explore your idea and priorities</li><li><Check size={16} />Talk through scope and challenges</li><li><Check size={16} />Identify practical next steps</li></ul>{bookingUrl ? <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Choose a Time<ArrowUpRight size={17} /></a> : <div className="connection-note"><CalendarDays size={18} /><span>Online scheduling is coming soon. No call is booked through this form.</span></div>}</> : <><Link className="text-link" to="/book-a-call">Prefer a conversation? Book a call <ArrowRight size={16} /></Link>{email && <a className="contact-email" href={'mailto:' + email}>{email}</a>}</>}<div className="contact-divider" /><span className="tiny-label">GOOD PROJECTS START WITH CLARITY.</span></aside><InquiryForm booking={booking} /></section></main>
}
export default function App() {
  return <WelcomeGate><CallExperience><Layout><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/work" element={<Work />} /><Route path="/contact" element={<Contact />} /><Route path="/book-a-call" element={<Contact booking />} /><Route path="*" element={<main id="top" className="container page-intro"><span className="eyebrow">404 / A WRONG TURN</span><h1>Let?s get you<br /><em>back on track.</em></h1><Button to="/">Back to Home</Button></main>} /></Routes></Layout></CallExperience></WelcomeGate>
}
