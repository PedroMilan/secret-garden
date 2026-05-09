import { Package, Shield, Stamp, FileText } from "lucide-react";

export function Packaging() {
  const details = [
    { icon: Package, text: "Polipropileno fosco" },
    { icon: Shield, text: "Proteção contra fotodegradação" },
    { icon: Stamp, text: "Formato retrátil higiênico" },
    { icon: FileText, text: "Rotulagem INCI" },
    { icon: FileText, text: "RDC nº 752/2022" },
    { icon: Shield, text: "Grau de Risco 2 (RDC nº 7/2015)" },
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
          Embalagem
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000">
            <div
              className="w-full aspect-[3/4] bg-cover bg-center"
              style={{
                backgroundImage: `url('/product.jpeg')`,
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000">
            <div className="space-y-6">
              {details.map((detail, index) => (
                <div key={index} className="flex items-start gap-4">
                  <detail.icon
                    className="flex-shrink-0 mt-1"
                    style={{
                      color: "var(--gold)",
                      width: "1.5rem",
                      height: "1.5rem",
                    }}
                  />
                  <p
                    style={{
                      color: "#1A2E1F",
                      fontSize: "1.1rem",
                      lineHeight: "1.7",
                      fontWeight: "400",
                    }}
                  >
                    {detail.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
