import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    "Aplicação",
    "Calor dérmico ativa a matriz cerosa",
    "Moléculas aromáticas liberadas",
    "Inalação ativa o sistema límbico",
    "Redução de cortisol + ativação de GABA e serotonina",
    "Relaxamento",
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
          Como Funciona
        </h2>

        <div className="flex flex-col items-center gap-6 mb-20 fade-in-section opacity-0 translate-y-8 transition-all duration-1000">
          {steps.map((step, index) => (
            <div key={index} className="w-full max-w-md">
              <div
                className="px-6 py-4 text-center w-full"
                style={{
                  background: "rgba(201, 168, 76, 0.15)",
                  border: "1px solid var(--gold)",
                  color: "#1A2E1F",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    fontWeight: "400",
                  }}
                >
                  {step}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowRight
                    className="rotate-90 md:rotate-0"
                    style={{ color: "var(--gold)" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <blockquote
          className="max-w-3xl mx-auto text-center italic fade-in-section opacity-0 translate-y-8 transition-all duration-1000"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
            color: "var(--gold)",
            lineHeight: "1.7",
          }}
        >
          "A fragrância percorre um caminho direto ao sistema límbico — sede das
          emoções e da memória."
        </blockquote>
      </div>
    </section>
  );
}
