'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ParallaxPhoneProps {
  children: ReactNode
  strength?: number   // max px de desplazamiento
  lerp?: number       // suavidad 0..1 (más bajo = más lento)
}

export function ParallaxPhone({ children, strength = 8, lerp = 0.07 }: ParallaxPhoneProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let targetX = 0, targetY = 0
    let currentX = 0, currentY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      // Normaliza posición del ratón a -1..1 respecto al centro de la ventana
      targetX = ((e.clientX / window.innerWidth)  - 0.5) * 2 * strength
      targetY = ((e.clientY / window.innerHeight) - 0.5) * 2 * strength
    }

    const tick = () => {
      currentX += (targetX - currentX) * lerp
      currentY += (targetY - currentY) * lerp
      el.style.transform = `translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px)`
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [strength, lerp])

  return (
    <div ref={ref} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}