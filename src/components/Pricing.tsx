export function Pricing() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--forest-dark), var(--forest-medium))",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center">
        <h2
          className="text-center mb-20 italic translate-y-8 transition-all duration-1000"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "var(--gold)",
          }}
        >
          Investimento
        </h2>

        <div
          className="p-14 text-center  translate-y-8 transition-all duration-1000 mb-16"
          style={{
            background: "rgba(201, 168, 76, 0.1)",
            border: "1px solid var(--gold)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
          }}
        >
          <p
            className="mb-4"
            style={{
              color: "#c4c4c4",
              fontSize: "1rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            Preço de venda
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              color: "#D4AF37",
              lineHeight: 1,
            }}
          >
            R$ 27,50
          </p>
        </div>

        <p
          className="text-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000"
          style={{
            color: "var(--gold)",
            fontSize: "1.25rem",
            letterSpacing: "0.05em",
          }}
        >
          Alta rentabilidade com insumos de qualidade
        </p>
      </div>
    </section>
  );
}
