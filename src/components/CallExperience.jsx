import { useEffect, useRef } from 'react'
import { ArrowUpRight, CalendarDays, UserRound, Mail, Layers3, Clock3, PenLine, ChevronDown, X } from 'lucide-react'
import { services } from '../siteData'
const whatsapp = 'https://wa.me/237651508182'
export default function CallExperience({ children }) {
  const dialog = useRef(null)
  const opener = useRef(null)
  useEffect(() => {
    const element = dialog.current
    const restore = () => {
      document.body.style.overflow = ''
      opener.current?.focus()
    }
    element.addEventListener('close', restore)
    return () => { element.removeEventListener('close', restore); document.body.style.overflow = '' }
  }, [])
  function intercept(event) {
    const link = event.target.closest('a')
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    if (new URL(link.href, window.location.href).pathname !== '/book-a-call') return
    event.preventDefault()
    event.stopPropagation()
    opener.current = link
    dialog.current.showModal()
    document.body.style.overflow = 'hidden'
  }
  function submit(event) {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    const message = 'Hello KHANIFY TECHNOLOGIES! I would like to request a strategic call.\n\nName: ' + values.get('name') + '\nEmail: ' + values.get('email') + '\nService: ' + values.get('service') + '\nPreferred time (Cameroon, UTC+1): ' + values.get('time') + '\n\nProject: ' + values.get('message')
    window.open(whatsapp + '?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer')
  }
  return <div onClickCapture={intercept}>
    {children}
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Khanify Technologies on WhatsApp"><svg viewBox="0 0 32 32" className="whatsapp-logo" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 .8A15.1 15.1 0 0 0 2.9 23.4L.8 31.2l8-2.1A15.1 15.1 0 1 0 16 .8Zm0 27.5a12.4 12.4 0 0 1-6.3-1.7l-.5-.3-4.7 1.2 1.3-4.5-.3-.5A12.5 12.5 0 1 1 16 28.3Z"/><path fill="currentColor" d="M12 8.6c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.2 1.4 3.6 1.6 3.9c.2.3 2.7 4.2 6.6 5.7 3.2 1.2 3.9 1 4.6.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5l-2.7-1.3c-.4-.1-.6-.2-.9.2l-1.2 1.4c-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.7c.1-.2.1-.5 0-.7L12 8.6Z"/></svg></a>
    <dialog className="call-dialog" ref={dialog} aria-labelledby="call-title" onClick={event => { if (event.target === dialog.current) dialog.current.close() }}>
      <div className="call-panel">
        <button type="button" className="call-close" aria-label="Close call request" onClick={() => dialog.current.close()}><X size={21} /></button>
        <span className="call-symbol"><CalendarDays size={27} /></span>
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2 id="call-title">Big idea?<br /><em>Let's talk it through.</em></h2>
        <p>Tell us a little about your project. We'll agree on a time for your strategic call over WhatsApp.</p>
        <form onSubmit={submit}>
          <div className="form-row"><label>Your name<span className="call-field"><UserRound aria-hidden="true" /><input name="name" autoComplete="name" required maxLength={100} placeholder="Your full name" /></span></label><label>Email address<span className="call-field"><Mail aria-hidden="true" /><input name="email" type="email" autoComplete="email" required maxLength={200} placeholder="you@company.com" /></span></label></div>
          <div className="form-row"><label>What can we help with?<span className="call-field"><Layers3 aria-hidden="true" /><select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(service => <option key={service.name}>{service.name}</option>)}<option>Not sure yet</option></select><ChevronDown className="field-chevron" aria-hidden="true" /></span></label><label>Preferred call time<span className="call-field"><Clock3 aria-hidden="true" /><input name="time" required maxLength={150} placeholder="e.g. Friday, 2pm (Cameroon)" /></span></label></div>
          <label>Your idea<span className="call-field call-field-textarea"><PenLine aria-hidden="true" /><textarea name="message" rows={3} required maxLength={2500} placeholder="What would you love to build or improve?" /></span></label>
          <button className="button call-submit" type="submit">Continue on WhatsApp <ArrowUpRight size={18} /></button>
          <small className="call-disclaimer">Opens a WhatsApp draft for you to review and send. Your call is confirmed only after we agree on a time.</small>
        </form>
      </div>
    </dialog>
  </div>
}
