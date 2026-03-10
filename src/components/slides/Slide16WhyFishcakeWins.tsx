import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { Eye, Globe, Wrench, Smartphone, RotateCcw, Coins, Users, ArrowDown } from "lucide-react";

const valueChain = [
  { label: "Vision", desc: "Gateway app — make token value real", icon: Eye },
  { label: "RWS", desc: "Built as a real-world solution", icon: Globe },
  { label: "Utility", desc: "Marketing, loyalty", icon: Wrench },
  { label: "Platform", desc: "Real-world Web3 experience & rewards", icon: Smartphone },
  { label: "Ecosystem", desc: "Gravity loop", icon: RotateCcw },
  { label: "Tokenomics", desc: "Burn to redeem — deflation", icon: Coins },
  { label: "Community", desc: "Community-based, not speculation-driven", icon: Users },
];

export const Slide16WhyFishcakeWins = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>Why Fishcake Wins</SlideTitle>

      {/* Value Chain - Centered vertical flow */}
      <div className="flex flex-col items-center max-w-3xl mx-auto">
        {valueChain.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <div key={i} className="flex flex-col items-center w-full">
              {/* Row: icon + label + desc — all centered */}
              <div
                className="flex items-center justify-center gap-4 w-full py-2 px-6 rounded-xl animate-fade-in hover:bg-white/5 transition-colors"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,140,0,0.2) 0%, rgba(255,140,0,0.05) 100%)',
                    border: '1px solid rgba(255,140,0,0.3)',
                  }}
                >
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <span className="text-primary font-display font-bold text-xl min-w-[130px]">{item.label}</span>
                <span className="text-foreground/40">—</span>
                <span className="text-foreground/80 text-base flex-1">{item.desc}</span>
              </div>

              {/* Arrow centered between items */}
              {i < valueChain.length - 1 && (
                <div className="py-1">
                  <ArrowDown className="w-5 h-5 text-primary/40" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SlideContainer>
  );
};
