interface BackgroundOrbsProps {
  variant?: 'dark' | 'light'
}

export function BackgroundOrbs({ variant = 'dark' }: BackgroundOrbsProps) {
  const isDark = variant === 'dark'

  const orbs = isDark
    ? [
        {
          width: 620, height: 620,
          top: '-18%', left: '-10%',
          background: 'radial-gradient(circle, rgba(76,175,125,0.2) 0%, transparent 65%)',
          filter: 'blur(72px)',
          animation: 'orbDrift1 22s ease-in-out infinite',
        },
        {
          width: 500, height: 500,
          bottom: '-12%', right: '-8%',
          background: 'radial-gradient(circle, rgba(76,175,125,0.14) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'orbDrift2 28s ease-in-out infinite',
        },
        {
          width: 360, height: 360,
          top: '38%', right: '14%',
          background: 'radial-gradient(circle, rgba(168,213,162,0.09) 0%, transparent 65%)',
          filter: 'blur(60px)',
          animation: 'orbDrift3 19s ease-in-out infinite',
        },
      ]
    : [
        {
          width: 720, height: 720,
          top: '-22%', left: '-14%',
          background: 'radial-gradient(circle, rgba(76,175,125,0.08) 0%, transparent 65%)',
          filter: 'blur(90px)',
          animation: 'orbDrift1 24s ease-in-out infinite',
        },
        {
          width: 580, height: 580,
          bottom: '-18%', right: '-12%',
          background: 'radial-gradient(circle, rgba(27,58,45,0.06) 0%, transparent 65%)',
          filter: 'blur(90px)',
          animation: 'orbDrift2 30s ease-in-out infinite',
        },
        {
          width: 420, height: 420,
          top: '32%', left: '22%',
          background: 'radial-gradient(circle, rgba(76,175,125,0.07) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'orbDrift3 20s ease-in-out infinite',
        },
      ]

  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          style={{ position: 'absolute', borderRadius: '50%', ...orb }}
        />
      ))}
    </div>
  )
}