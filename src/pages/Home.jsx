import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDown, Layers3, Code2 } from 'lucide-react'
import { Button, Heading, ServiceCards, ProjectCards, CTA } from '../components/SiteSections.jsx'

export default function Home() {
  return <main id="top">
    <section className="container hero hero-premium">
      <div className="hero-content">
        <span className="hero-eyebrow"><span /> KHANIFY TECHNOLOGIES / CAMEROON</span>
        <h1>Your next big idea.<br /><span className="hero-gradient">Our expertise. Your impact.</span></h1>
        <p>Your software development & digital marketing partner in Cameroon. KHANIFY TECHNOLOGIES brings your business to life with custom software, SaaS, UI/UX, graphic design, and basic SEO.</p>
        <div className="button-row"><Button to="/book-a-call">Let's Talk About Your Idea</Button><Link className="quiet-link" to="/work">Explore our work <ArrowUpRight size={17} /></Link></div>
        <div className="hero-proof"><span><Code2 size={15} /> Built with purpose</span><span><Layers3 size={15} /> Designed for people</span></div>
      </div>
      <div className="hero-baseline"><span>STRATEGY <i /> DESIGN <i /> DEVELOPMENT</span><a href="#expertise">Discover what we do <ArrowDown size={14} /></a></div>
    </section>
    <div className="capability-strip"><div className="container">{['SOFTWARE DEVELOPMENT', 'SAAS PRODUCTS', 'UI/UX DESIGN', 'BASIC SEO', 'GRAPHIC DESIGN', 'PROJECT OVERSIGHT'].map(item => <span key={item}><span className="strip-star">+</span>{item}</span>)}</div></div>
    <section id="expertise" className="container section"><div className="heading-row"><Heading label="WHAT WE DO" title={<>The right expertise.<br />All in one place.</>} /><p>From the first sketch to the final launch,<br className="desktop-break" /> we help you connect the dots.</p></div><ServiceCards /></section>
    <section className="work-section section"><div className="container"><div className="heading-row"><Heading label="A GLIMPSE OF THE POSSIBILITIES" title={<>Good ideas deserve<br />great execution.</>} /><Button to="/work" secondary>Explore Our Work</Button></div><p className="concept-note">Concept explorations showing the kinds of experiences we can build. These are not client projects.</p><ProjectCards /></div></section>
    <section className="container section approach-section"><div><Heading label="THE KHANIFY APPROACH" title={<>Less complexity.<br />More moving forward.</>} text="You bring the ambition. We bring a clear process, thoughtful execution, and a focus on what your business actually needs." /><Button to="/about" secondary>Get to Know Us</Button></div><div className="process-list">{[['Discover', 'We listen first. Your goals, your users, and the problem worth solving.'], ['Design & build', 'We turn the plan into a considered experience, with you involved along the way.'], ['Launch & evolve', 'We prepare for delivery and agree on the next steps for your product.']].map(([title, desc], i) => <div className="process-item" key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={19} /></div>)}</div></section>
    <CTA />
  </main>
}
