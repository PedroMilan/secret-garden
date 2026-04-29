export function OurStory() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.025'/%3E%3C/svg%3E")`,
          background: 'var(--ivory)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000">
          <div
            className="p-12 md:p-16 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, var(--forest-dark), var(--forest-medium))',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
              }}
            />

            <h2
              className="mb-8 italic"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--gold)',
              }}
            >
              Nossa História
            </h2>

            <p
              className="leading-relaxed relative z-10"
              style={{
                color: '#FDFBF7',
                fontSize: '1.1rem',
                lineHeight: '1.9',
              }}
            >
              A Secret Garden nasceu do desejo de transformar a rotina agitada em calmaria. O Alba Serena vai onde você
              vai, libera sua essência no calor da pele e transforma o movimento do cotidiano em bem-estar.
            </p>
          </div>

          <div className="relative">
            <div
              className="aspect-[3/4] bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1654951918037-f63e6a037083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsYXZlbmRlciUyMGZsb3dlcnMlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NzQ5NjgwNXww&ixlib=rb-4.1.0&q=80&w=1080')`,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
