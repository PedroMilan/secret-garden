export function Target() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1760421131154-f884a2e26b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWV0cm9wb2xpcyUyMG5pZ2h0JTIwdXJiYW58ZW58MXx8fHwxNzc3NDk2ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          filter: 'brightness(0.5)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(26, 46, 31, 0.85), rgba(45, 74, 53, 0.75))',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000">
        <h2
          className="mb-8 italic"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            color: 'var(--gold)',
          }}
        >
          Para quem não para.
        </h2>

        <p
          className="mb-4"
          style={{
            color: '#E8DFF5',
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            letterSpacing: '0.05em',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
          }}
        >
          Unissex
        </p>

        <p
          style={{
            color: '#FDFBF7',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            lineHeight: '1.8',
            maxWidth: '42rem',
            margin: '0 auto',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
          }}
        >
          Para estudantes e profissionais que buscam calmaria no caos urbano
        </p>
      </div>
    </section>
  );
}
