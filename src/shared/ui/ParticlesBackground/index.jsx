import Particles from 'react-tsparticles'

export default function ParticlesBackground() {
  return (
    <Particles
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: {
            value: '#0a0a0a',
          },
        },

        fpsLimit: 60,

        particles: {
          color: {
            value: '#22d3ee',
          },

          links: {
            color: '#22d3ee',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 50,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },
      }}
    />
  )
}