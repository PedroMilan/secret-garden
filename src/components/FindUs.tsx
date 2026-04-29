import { SquareSquare } from "lucide-react";

export function FindUs() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-0"
        style={{
          background: "var(--ivory)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.025'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <h2
          className="mb-16 italic fade-in-section opacity-0 translate-y-8 transition-all duration-1000"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "var(--forest-dark)",
          }}
        >
          Onde Nos Encontrar
        </h2>

        <div className="flex justify-center gap-8 mb-16 fade-in-section opacity-0 translate-y-8 transition-all duration-1000">
          <a
            href="#"
            className="flex items-center gap-3 px-8 py-4 transition-all duration-300"
            style={{
              background: "rgba(45, 74, 53, 0.1)",
              border: "1px solid var(--forest-medium)",
              color: "var(--forest-dark)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(45, 74, 53, 0.2)";
              e.currentTarget.style.borderColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(45, 74, 53, 0.1)";
              e.currentTarget.style.borderColor = "var(--forest-medium)";
            }}
          >
            <SquareSquare style={{ width: "1.5rem", height: "1.5rem" }} />
            <span style={{ fontSize: "1.05rem" }}>Instagram</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-8 py-4 transition-all duration-300"
            style={{
              background: "rgba(45, 74, 53, 0.1)",
              border: "1px solid var(--forest-medium)",
              color: "var(--forest-dark)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(45, 74, 53, 0.2)";
              e.currentTarget.style.borderColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(45, 74, 53, 0.1)";
              e.currentTarget.style.borderColor = "var(--forest-medium)";
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ width: "1.5rem", height: "1.5rem" }}
            >
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
            <span style={{ fontSize: "1.05rem" }}>TikTok</span>
          </a>
        </div>

        <p
          className="max-w-3xl mx-auto fade-in-section opacity-0 translate-y-8 transition-all duration-1000"
          style={{
            color: "#1A2E1F",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Acompanhe nossas parcerias com influenciadores e demonstrações em
          farmácias e perfumarias. Estamos levando bem-estar botânico para cada
          vez mais pessoas.
        </p>
      </div>
    </section>
  );
}
