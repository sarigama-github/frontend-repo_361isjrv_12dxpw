import { useEffect, useState } from 'react'

export default function ScrollManager() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          const id = visible[0].target.getAttribute('id')
          if (id) {
            // Update hash without scrolling
            history.replaceState(null, '', `#${id}`)
            window.dispatchEvent(new CustomEvent('sectionchange', { detail: { id } }))
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.2, 0.4, 0.6, 0.8] }
    )

    sections.forEach((s) => observer.observe(s))

    const onScroll = () => {
      const scrollTop = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? (scrollTop / max) * 100 : 0
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[60]">
      <div
        className="h-[2px] bg-gradient-to-r from-[var(--brand-primary,#6366f1)] via-[var(--brand-accent,#a855f7)] to-[var(--brand-primary,#6366f1)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
