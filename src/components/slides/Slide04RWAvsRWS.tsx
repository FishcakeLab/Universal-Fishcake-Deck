import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";

const comparison = [
  { rwa: "Tokenize assets", rws: "Program real-world interactions" },
  { rwa: "Ownership representation", rws: "Behavior execution" },
  { rwa: "Static", rws: "Dynamic" },
  { rwa: "Finance-first", rws: "Service & operation-first" },
  { rwa: "Value storage", rws: "Value creation" },
];

export const Slide04RWAvsRWS = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>RWA (Assets) vs. RWS (Solutions)</SlideTitle>

      {/* Definitions */}
      <div className="grid md:grid-cols-2 gap-8 mb-10 animate-slide-up max-w-5xl mx-auto">
        <div className="text-center p-4">
          <p className="text-lg text-muted-foreground">
            <span className="text-foreground font-semibold">RWA</span> - brings real assets on-chain.
          </p>
        </div>
        <div className="text-center p-4">
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">RWS</span> - brings blockchain capabilities into real-world services.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="grid md:grid-cols-2 gap-8 mb-10 max-w-5xl mx-auto">
        <SlideCard>
          <h3 className="font-display text-2xl font-semibold text-muted-foreground mb-6 text-center">
            RWA
          </h3>
          <ul className="space-y-5">
            {comparison.map((item, i) => (
              <li key={i} className="text-lg text-muted-foreground border-b border-border/30 pb-3 last:border-0">
                {item.rwa}
              </li>
            ))}
          </ul>
        </SlideCard>

        <SlideCard glow>
          <h3 className="font-display text-2xl font-semibold text-primary mb-6 text-center">
            RWS
          </h3>
          <ul className="space-y-5">
            {comparison.map((item, i) => (
              <li key={i} className="text-lg text-foreground font-medium border-b border-border/30 pb-3 last:border-0">
                {item.rws}
              </li>
            ))}
          </ul>
        </SlideCard>
      </div>

      {/* One-liner */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
        <div className="inline-block bg-card/50 border border-border/50 rounded-xl px-10 py-5">
          <p className="text-xl text-muted-foreground">
            <span className="text-primary font-semibold">RWS</span> uses decentralization and programmability to run the real world — not just its assets.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
