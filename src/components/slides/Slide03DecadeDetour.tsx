import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { Clock, TrendingUp, Image, Globe, Coins, HelpCircle, Cpu, DollarSign } from "lucide-react";

const timelineData = [
  { era: "ICO", icon: Coins },
  { era: "DeFi", icon: TrendingUp },
  { era: "NFT arts", icon: Image },
  { era: "Metaverse", icon: Globe },
  { era: "StableCoin", icon: DollarSign },
  { era: "DePIN", icon: Cpu },
  { era: "RWA", icon: Coins },
];

export const Slide03DecadeDetour = () => {
  return (
    <SlideContainer>
      <SlideTitle>The Decade-Long Detour</SlideTitle>

      <p className="text-2xl text-muted-foreground mb-8 text-center animate-slide-up">
        Beyond <span className="text-primary font-semibold">financial tools</span>
      </p>

      {/* Timeline - Category Pills */}
      <div className="mb-10 max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {timelineData.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full animate-fade-in"
                style={{
                  animationDelay: `${i * 80}ms`,
                  background: 'linear-gradient(135deg, rgba(20,20,30,0.6) 0%, rgba(30,30,40,0.4) 100%)',
                  border: '1px solid rgba(255,140,0,0.2)',
                }}
              >
                <IconComponent className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground/80 font-medium text-base">{item.era}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom section */}
      <div className="animate-fade-in text-center" style={{ animationDelay: "600ms" }}>
        <p className="text-muted-foreground text-xl mb-2">
          The blockchain industry hit a bottleneck:
        </p>

        <p className="text-foreground text-2xl font-bold mb-4 text-primary">
          The industry doesn't have a single application designed to solve everyday-life problems.
        </p>

        <p className="text-foreground text-xl font-medium mb-6">
          The real question we kept avoiding:
        </p>

        {/* Premium quote box */}
        <div
          className="relative max-w-4xl mx-auto rounded-2xl p-8 mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.08) 0%, rgba(20,20,30,0.9) 50%, rgba(255,200,0,0.05) 100%)',
            border: '1px solid rgba(255,140,0,0.2)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          }}
        >
          {/* Left accent bar */}
          <div
            className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,140,0,0.8), rgba(255,200,0,0.4))',
              boxShadow: '0 0 15px rgba(255,140,0,0.4)',
            }}
          />

          <div className="flex items-start gap-4 pl-4">
            <HelpCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <p className="text-2xl md:text-3xl font-display font-semibold text-foreground text-left leading-relaxed">
              Can decentralization and programmability solve real-world problems — not just move assets on-chain?
            </p>
          </div>
        </div>

        <p className="text-muted-foreground text-xl mb-4">
          We didn't misunderstand blockchain.
        </p>

        {/* Final statement with glow */}
        <div
          className="inline-block px-8 py-3 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(255,200,0,0.05) 100%)',
            border: '1px solid rgba(255,140,0,0.3)',
            boxShadow: '0 0 30px rgba(255,140,0,0.15)',
          }}
        >
          <p
            className="text-primary font-display font-bold text-2xl md:text-3xl"
            style={{
              letterSpacing: '0.05em',
              textShadow: '0 0 30px rgba(255, 140, 0, 0.4)'
            }}
          >
            We underestimated it.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
