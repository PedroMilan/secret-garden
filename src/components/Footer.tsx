export function Footer() {
  return (
    <footer className="relative py-20 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--forest-dark), var(--forest-medium))",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "2rem",
              color: "#1A2E1F",
              letterSpacing: "0.05em",
            }}
          >
            Secret Garden
          </h3>
        </div>

        <p
          className="mb-8 italic"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.3rem",
            color: "#c4c4c4",
          }}
        >
          Transformando rotina em ritual
        </p>

        <div
          className="mb-8 py-6 px-8"
          style={{
            background: "rgba(201, 168, 76, 0.1)",
            border: "1px solid rgba(201, 168, 76, 0.3)",
          }}
        >
          <p
            style={{
              color: "#1A2E1F",
              fontSize: "0.95rem",
              lineHeight: "1.8",
            }}
          >
            Produto cosmetológico de Grau de Risco 2, conforme RDC nº 7/2015.
            <br />
            Produzido segundo Boas Práticas de Fabricação (RDC nº 752/2022).
            <br />
            Rotulagem em conformidade com legislação ANVISA vigente.
          </p>
        </div>

        <p
          style={{
            color: "#c4c4c4",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} Secret Garden. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
