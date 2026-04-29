export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1654951918006-a5ee9c222480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZsb3dlcnMlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NzQ5NjgwNXww&ixlib=rb-4.1.0&q=80&w=1080')`,
          filter: 'blur(12px) brightness(0.4)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(26, 46, 31, 0.5), rgba(26, 46, 31, 0.9))',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
        <div className="px-4 py-2 md:px-6 md:py-3" style={{ fontFamily: 'var(--font-serif)' }}>
          <span className="text-[var(--ivory)] tracking-wider opacity-90" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>Secret Garden</span>
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1
          className="mb-6 italic tracking-wide"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            color: 'var(--ivory)',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          }}
        >
          Alba Serena
        </h1>

        <p
          className="mb-12 max-w-2xl"
          style={{
            color: '#E8DFF5',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            letterSpacing: '0.05em',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          Ative sua fragrância no seu ritmo
        </p>

        <button
          className="group relative px-10 py-4 overflow-hidden transition-all duration-500"
          style={{
            background: 'rgba(201, 168, 76, 0.15)',
            border: '1px solid var(--gold)',
            color: 'var(--ivory)',
            backdropFilter: 'blur(10px)',
            fontSize: '1.05rem',
            letterSpacing: '0.08em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(201, 168, 76, 0.3)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(201, 168, 76, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(201, 168, 76, 0.15)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Conheça o produto
        </button>
      </div>
    </section>
  );
}
