import Image from "next/image";

export function Actives() {
  const actives = [
    {
      image: "/lavanda.jpg",
      title: "Lavandula angustifolia",
      subtitle: "Lavanda Verdadeira",
      description:
        "Ansiolítico natural com ação comprovada. Seus constituintes — linalol e acetato de linalila — modulam receptores GABAérgicos e serotoninérgicos, promovendo relaxamento profundo sem sedação excessiva.",
    },
    {
      image: "/bergamota.jpg",
      title: "Citrus bergamia FCF",
      subtitle: "Bergamota Livre de Fototoxinas",
      description:
        "Óleo essencial bergapteno-free, seguro para aplicação cutânea em qualquer horário. Atua via olfatório-límbica reduzindo ansiedade e elevando humor, sem risco fotossensibilizante.",
    },
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-0"
        style={{
          background: "var(--ivory)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.025'/%3E%3C/svg%3E")`,
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
          Ativos Botânicos
        </h2>

        <div className="space-y-24">
          {actives.map((active, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)" }}
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    style={{
                      filter: "brightness(0.9)",
                    }}
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3
                  className="mb-3 italic"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                    color: "var(--forest-dark)",
                  }}
                >
                  {active.title}
                </h3>
                <p
                  className="mb-6"
                  style={{
                    color: "var(--gold)",
                    fontSize: "1.1rem",
                  }}
                >
                  {active.subtitle}
                </p>
                <p
                  style={{
                    color: "#1A2E1F",
                    lineHeight: "1.8",
                    fontSize: "1.1rem",
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
