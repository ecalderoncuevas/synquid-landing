'use client'

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'

type Phase = 'hidden' | 'center' | 'fanned'

interface FanPhoneLayoutProps {
  left: ReactNode
  center: ReactNode
  right: ReactNode
}

export function FanPhoneLayout({ left, center, right }: FanPhoneLayoutProps) {
  const [phase, setPhase] = useState<Phase>('hidden')
  const containerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('center')
          timerRef.current = setTimeout(() => setPhase('fanned'), 450)
        } else {
          if (timerRef.current) clearTimeout(timerRef.current)
          setPhase('hidden')
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const spring = 'cubic-bezier(0.34, 1.56, 0.64, 1)'

  const centerStyle: CSSProperties = {
    transition: `opacity 0.55s ease, transform 0.55s ease`,
    opacity: phase === 'hidden' ? 0 : 1,
    transform: phase === 'hidden' ? 'translateY(28px)' : 'translateY(0)',
  }

  const leftStyle: CSSProperties = {
    transition: `opacity 0.65s ${spring}, transform 0.75s ${spring}`,
    transitionDelay: phase === 'fanned' ? '0ms' : '0ms',
    transformOrigin: 'bottom center',
    opacity: phase === 'fanned' ? 1 : 0,
    transform: phase === 'fanned' ? 'rotate(-14deg)' : 'rotate(0deg)',
  }

  const rightStyle: CSSProperties = {
    transition: `opacity 0.65s ${spring}, transform 0.75s ${spring}`,
    transitionDelay: phase === 'fanned' ? '120ms' : '0ms',
    transformOrigin: 'bottom center',
    opacity: phase === 'fanned' ? 1 : 0,
    transform: phase === 'fanned' ? 'rotate(14deg)' : 'rotate(0deg)',
  }

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row justify-center items-end gap-8 lg:gap-10">
      <div style={leftStyle}>{left}</div>
      <div className="md:mb-6" style={centerStyle}>{center}</div>
      <div style={rightStyle}>{right}</div>
    </div>
  )
}