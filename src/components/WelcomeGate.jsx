import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const key = 'khanify-welcome-seen'
export default function WelcomeGate({ children }) {
  const [visible, setVisible] = useState(() => {
    try { return sessionStorage.getItem(key) !== 'yes' } catch { return true }
  })
  const [leaving, setLeaving] = useState(false)
  const button = useRef(null)
  function dismiss() { setLeaving(true) }
  useEffect(() => {
    if (!visible) return
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    button.current?.focus()
    const timer = window.setTimeout(() => setLeaving(true), 2800)
    function onKey(event) {
      if (event.key === 'Escape') setLeaving(true)
      if (event.key === 'Tab') { event.preventDefault(); button.current?.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
      if (previous instanceof HTMLElement && previous !== document.body) previous.focus()
      else document.querySelector('.site-header .logo')?.focus()
    }
  }, [visible])
  useEffect(() => {
    if (!leaving) return
    const timer = window.setTimeout(() => {
      try { sessionStorage.setItem(key, 'yes') } catch { /* Continue when storage is unavailable. */ }
      setVisible(false)
    }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 500)
    return () => window.clearTimeout(timer)
  }, [leaving])
  return <>
    {visible && <div className={'welcome-screen' + (leaving ? ' is-leaving' : '')} role="dialog" aria-modal="true" aria-labelledby="welcome-title" aria-describedby="welcome-description">
      <div className="welcome-halo" aria-hidden="true" />
      <div className="welcome-content">
        <span className="welcome-monogram" aria-hidden="true">k<span>.</span></span>
        <span className="welcome-brand">KHANIFY <small>TECHNOLOGIES</small></span>
        <span className="welcome-kicker"><Sparkles size={14} /> A NEW POSSIBILITY STARTS HERE</span>
        <h1 id="welcome-title">Welcome to<br /><em>what comes next.</em></h1>
        <p id="welcome-description">Where technology meets possibility.</p>
        <button ref={button} onClick={dismiss} className="welcome-enter">Step inside <ArrowUpRight size={17} /></button>
        <span className="welcome-progress" aria-hidden="true"><i /></span>
      </div>
      <span className="welcome-bottom">THOUGHTFULLY DESIGNED. PURPOSEFULLY BUILT.</span>
    </div>}
    <div inert={visible ? true : undefined}>{children}</div>
  </>
}
