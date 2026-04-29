export function Pricing() {
  const priceCards = [
    {
      label: "Custo de materiais",
      value: "R$ 5,69",
      description: "Insumos de alta qualidade",
    },
    {
      label: "Custo total",
      value: "R$ 6,83",
      description: "Produção e embalagem",
    },
    {
      label: "Preço de venda",
      value: "R$ 27,50",
      description: "Valor sugerido ao público",
    },
  ];

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

      <div className="relative max-w-6xl mx-auto">
        <h2
          className="text-center mb-20 italic fade-in-section opacity-0 translate-y-8 transition-all duration-1000"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "var(--gold)",
          }}
        >
          Investimento
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {priceCards.map((card, index) => (
            <div
              key={index}
              className="p-10 text-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000"
              style={{
                background: "rgba(201, 168, 76, 0.1)",
                border: "1px solid var(--gold)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <p
                className="mb-4"
                style={{
                  color: "#1A2E1F",
                  fontSize: "1rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
              >
                {card.label}
              </p>
              <p
                className="mb-4"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#D4AF37",
                }}
              >
                {card.value}
              </p>
              <p
                style={{
                  color: "#c4c4c4",
                  fontSize: "1rem",
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000"
          style={{
            color: "#FDFBF7",
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
