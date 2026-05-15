'use client'

import { useEffect, useRef, ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'fade'

interface RevealProps {
  children: ReactNode
  delay?: number
  direction?: Direction
  className?: string
}

export function Reveal({ children, delay = 0, direction = 'up', className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let hasRevealed = false
    let exitTimer: ReturnType<typeof setTimeout>

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(exitTimer)

        if (entry.isIntersecting) {
          // Restore natural transition for entrance
          el.style.transition = ''
          el.style.opacity = ''
          el.style.transform = ''
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('reveal-visible')
          hasRevealed = true
        } else if (hasRevealed) {
          // Smooth fade-out without transform jump
          el.style.transitionDelay = '0ms'
          el.style.transition = 'opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1)'
          el.style.opacity = '0'
          el.style.transform = 'none'

          exitTimer = setTimeout(() => {
            el.classList.remove('reveal-visible')
            el.style.transition = ''
            el.style.opacity = ''
            el.style.transform = ''
            hasRevealed = false
          }, 560)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(exitTimer)
    }
  }, [delay])

  return (
    <div ref={ref} className={`reveal-${direction}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}