import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Layers3, Workflow, CalendarDays, Globe2, Command } from 'lucide-react'
import { services, projects } from '../siteData.js'

export function Button({ to = '/book-a-call', children = 'Book a Strategic Call', secondary = false }) {
  return <Link className={'button ' + (secondary ? 'button-secondary' : '')} to={to}>{children}<ArrowUpRight size={17} /></Link>
}

export function Heading({ label, title, text }) {
  return <div className="section-heading"><span className="eyebrow"><i />{label}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

export function Logo() {
  return <Link to="/" className="logo" aria-label="Khanify Technologies home"><span className="logo-mark">k<span>.</span></span><span>KHANIFY<small>TECHNOLOGIES</small></span></Link>
}

export function ServiceCards({ full = false }) {
  return <div className="services-grid">{services.map(({ icon: Icon, ...service }) => <article className="service-card" key={service.name}><div className="card-top"><span className="service-icon"><Icon size={23} strokeWidth={1.5} /></span><span className="card-number">{service.number}</span></div><span className="service-tag">{service.tag}</span><h3>{service.name}</h3><p>{service.text}</p>{full ? <ul className="feature-list">{service.items.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul> : <Link className="text-link" to="/services">Explore service <ArrowUpRight size={16} /></Link>}</article>)}</div>
}

export function ProductArt({ variant = 'purple', compact = false }) {
  return <div className={'product-art ' + variant + (compact ? ' compact' : '')} aria-hidden="true">
    <div className="mock-window"><div className="mock-sidebar"><span className="mock-logo"><Command size={15} />{variant === 'sand' ? 'forma' : variant === 'mint' ? 'moneta' : 'flowdesk'}</span><span className="mock-nav active"><Layers3 size={11} /> Overview</span><span className="mock-nav"><Workflow size={11} /> Projects</span><span className="mock-nav"><CalendarDays size={11} /> Schedule</span><span className="mock-nav"><Globe2 size={11} /> Workspace</span><div className="mock-profile"><i />My workspace</div></div>
    <div className="mock-main"><div className="mock-top"><span>Workspace / Overview</span><span className="mock-avatar">K</span></div><div className="mock-welcome"><div><small>LET?S MAKE THINGS HAPPEN</small><strong>Your next big thing.</strong></div><span className="mock-new">+ New project</span></div><div className="mock-stats">{[['Projects', '12'], ['In progress', '08'], ['Completed', '24']].map(([label, num]) => <div key={label}><span>{label}</span><strong>{num}<small>?</small></strong><i /></div>)}</div><div className="mock-chart"><div><b>Project activity</b><span>This week ?</span></div><div className="bars">{[35, 52, 40, 74, 57, 88, 70, 96, 78, 100, 86, 115].map((height, i) => <i key={i} style={{ height: height + 'px' }} />)}</div><div className="chart-days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div></div><div className="mock-task"><span><i />Website redesign</span><small>In progress</small><span>???</span></div></div></div>
  </div>
}

export function ProjectCards({ filter = 'All' }) {
  return <div className="projects-grid">{projects.filter(p => filter === 'All' || p.category === filter).map(project => <article key={project.name} className="project-card"><ProductArt variant={project.color} compact /><div className="project-info"><div><span className="tiny-label">{project.type} ? Illustrative concept</span><h3>{project.name}</h3></div><span className="project-arrow"><ArrowUpRight size={20} /></span></div><p>{project.desc}</p></article>)}</div>
}

export function CTA() {
  return <section className="container cta-section"><div className="cta-orbit" aria-hidden="true" /><span className="eyebrow"><i />YOUR NEXT CHAPTER</span><h2>Have an idea?<br />Let?s make it <em>happen.</em></h2><p>Tell us what you have in mind. We?ll figure out the next step together.</p><Button /><span className="cta-note">A conversation. A little clarity. A place to start.</span></section>
}

export function PageIntro({ label, title, text }) {
  return <section className="container page-intro"><span className="eyebrow"><i />{label}</span><h1>{title}</h1><p>{text}</p></section>
}