import Particles from './Particles'

// Paleta verde-blanca Synquid: más luminosa y visible
const GREEN_PALETTE = ['#ffffff', '#e0f5ea', '#a8d5a2', '#6bcb94', '#4CAF7D', '#d4f0e0']

export function ParticlesBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        backgroundColor: '#0B1A0E',
      }}
    >
      <Particles
        particleCount={450}
        particleSpread={13}
        speed={0.045}
        particleColors={GREEN_PALETTE}
        moveParticlesOnHover={true}
        particleHoverFactor={0.6}
        alphaParticles={false}
        particleBaseSize={130}
        sizeRandomness={1.2}
        cameraDistance={21}
        disableRotation={false}
      />
    </div>
  )
}