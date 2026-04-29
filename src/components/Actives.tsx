export function Actives() {
  const actives = [
    {
      image: 'https://images.unsplash.com/photo-1774176546101-0ff6a783eee5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsYXZlbmRlciUyMGZsb3dlcnMlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NzQ5NjgwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Lavandula angustifolia',
      subtitle: 'Lavanda Verdadeira',
      description:
        'Ansiolítico natural com ação comprovada. Seus constituintes — linalol e acetato de linalila — modulam receptores GABAérgicos e serotoninérgicos, promovendo relaxamento profundo sem sedação excessiva.',
    },
    {
      image: 'https://images.unsplash.com/photo-1758181839713-ce6068d79147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJnYW1vdCUyMGNpdHJ1cyUyMGJvdGFuaWNhbHxlbnwxfHx8fDE3Nzc0OTY4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Citrus bergamia FCF',
      subtitle: 'Bergamota Livre de Fototoxinas',
      description:
        'Óleo essencial bergapteno-free, seguro para aplicação cutânea em qualquer horário. Atua via olfatório-límbica reduzindo ansiedade e elevando humor, sem risco fotossensibilizante.',
    },
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--ivory)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.025'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <h2
          className="text-center mb-20 italic fade-in-section opacity-0 translate-y-8 transition-all duration-1000"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: 'var(--forest-dark)',
          }}
        >
          Ativos Botânicos
        </h2>

        <div className="space-y-24">
          {actives.map((active, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${active.image}')`,
                    filter: 'blur(1px) brightness(0.9)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3
                  className="mb-3 italic"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                    color: 'var(--forest-dark)',
                  }}
                >
                  {active.title}
                </h3>
                <p
                  className="mb-6"
                  style={{
                    color: 'var(--gold)',
                    fontSize: '1.1rem',
                  }}
                >
                  {active.subtitle}
                </p>
                <p
                  style={{
                    color: '#1A2E1F',
                    lineHeight: '1.8',
                    fontSize: '1.1rem',
                  }}
                >
                  {active.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
