import { Leaf, Droplet, Shield } from "lucide-react";

export function Product() {
  const features = [
    {
      icon: Leaf,
      title: "Portabilidade",
      description: "Sem vazamento, leve e prático para levar a qualquer lugar",
    },
    {
      icon: Droplet,
      title: "Liberação Inteligente",
      description:
        "Ativada pelo calor da pele, liberando a fragrância naturalmente",
    },
    {
      icon: Shield,
      title: "Assinatura Olfativa",
      description:
        "A harmonia entre lavanda e bergamota revela uma fragrância sofisticada",
    },
  ];

  const composition = [
    {
      ingredient: "Cera de abelha",
      description:
        "Forma uma base sólida que cria um filme protetor na pele, ajudando na fixação e liberação gradual da fragrância.",
    },
    {
      ingredient: "Cera de carnaúba",
      description:
        "Aumenta a resistência ao calor e confere mais estabilidade e um acabamento mais refinado ao produto.",
    },
    {
      ingredient: "Óleo de jojoba",
      description:
        "Possui alta afinidade com a pele, promovendo hidratação leve e prolongando a duração do aroma.",
    },
    {
      ingredient: "Óleo de amêndoas doce",
      description:
        "Melhora a espalhabilidade e proporciona maciez e nutrição à pele.",
    },
    {
      ingredient: "Óleo essencial de lavanda",
      description:
        "Contribui para o relaxamento e sensação de calma, além de adicionar uma nota floral suave.",
    },
    {
      ingredient: "Óleo essencial de bergamota (FCF)",
      description:
        "Traz frescor cítrico e auxilia na sensação de bem-estar, sem risco de fototoxicidade.",
    },
    {
      ingredient: "Vitamina E",
      description:
        "Atua como antioxidante, ajudando a preservar a estabilidade e a qualidade da formulação.",
    },
  ];
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-0"
        style={{
          background: "var(--ivory)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <h2
          className="text-center mb-20 italic fade-in-section opacity-0 translate-y-8 transition-all duration-1000"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "var(--forest-dark)",
          }}
        >
          O Produto
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 fade-in-section opacity-0 translate-y-8 transition-all duration-1000"
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                border: "1px solid rgba(45, 74, 53, 0.15)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <feature.icon
                className="mb-6"
                style={{
                  color: "var(--forest-medium)",
                  width: "2.5rem",
                  height: "2.5rem",
                }}
              />
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.5rem",
                  color: "var(--forest-dark)",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: "#1A2E1F",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto fade-in-section opacity-0 translate-y-8 transition-all duration-1000">
          <h3
            className="text-center mb-12 italic"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              color: "var(--forest-dark)",
            }}
          >
            Composição
          </h3>

          <div className="space-y-6">
            {composition.map((item, index) => (
              <div key={index}>
                <p
                  style={{
                    color: "var(--forest-dark)",
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    marginBottom: "0.3rem",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  {item.ingredient}
                </p>
                <p
                  style={{
                    color: "#1A2E1F",
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                    fontStyle: "italic",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
