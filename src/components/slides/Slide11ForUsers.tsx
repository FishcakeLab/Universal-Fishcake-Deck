import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { MapPin, Store, Wallet, Zap, Bot, ShieldCheck, Coins, Infinity, MousePointerClick, DollarSign } from "lucide-react";

const barrierData = [
  { barrier: '"Crypto is complicated"', solution: "Wallet creation in 3 seconds", icon: Wallet },
  { barrier: '"I don\'t know how"', solution: "join \u2192 claim \u2192 Scan \u2192 Done", icon: Zap },
  { barrier: '"I need help"', solution: "Built-in AI Assistant", icon: Bot },
  { barrier: '"I don\'t trust it"', solution: "Local business verification", icon: ShieldCheck },
  { barrier: '"I don\'t want tokens"', solution: "Stablecoin cashback option", icon: Coins },
  { barrier: '"Token has no value"', solution: "Redemption Pool backs FCC value $", icon: DollarSign },
  { barrier: '"Points always expire"', solution: "FCC is on-chain, composable, permanent", icon: Infinity },
];

export const Slide11ForUsers = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>For Users — Web3 That Doesn't Feel Like Web3, BUT Rewarding</SlideTitle>

      <div className="text-center mb-6 animate-slide-up">
        <div className="inline-flex items-center gap-3 bg-card/40 border border-border/40 rounded-full px-6 py-2">
          <p className="text-lg text-foreground">
            We don't start with "investment." We start with{" "}
            <span className="text-primary font-bold">"free coffee."</span>
          </p>
        </div>
      </div>

      {/* How we break Web3 skepticism */}
      <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-5xl mx-auto">
        <div
          className="rounded-xl p-4 text-center animate-fade-in"
          style={{
            background: 'linear-gradient(135deg, rgba(20,20,25,0.6) 0%, rgba(30,30,35,0.4) 100%)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <p className="text-muted-foreground/50 line-through text-base mb-1">Not "buy this token"</p>
          <div className="flex items-center justify-center gap-2 text-foreground font-medium text-xl">
            <MapPin className="w-5 h-5 text-primary" />
            Local events, face-to-face
          </div>
        </div>
        <div
          className="rounded-xl p-4 text-center animate-fade-in"
          style={{
            animationDelay: "100ms",
            background: 'linear-gradient(135deg, rgba(20,20,25,0.6) 0%, rgba(30,30,35,0.4) 100%)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <p className="text-muted-foreground/50 line-through text-base mb-1">Not "listen to speculations"</p>
          <div className="flex items-center justify-center gap-2 text-foreground font-medium text-xl">
            <Store className="w-5 h-5 text-primary" />
            Trust the shop you already visit
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="flex justify-center mb-6">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-2 gap-4 mb-2 px-4">
            <span className="text-muted-foreground/60 text-sm uppercase tracking-wider font-semibold text-center">
              User barrier
            </span>
            <span className="text-primary/80 text-sm uppercase tracking-wider font-semibold text-center">
              How Fishcake kills it
            </span>
          </div>

          <div className="space-y-2">
            {barrierData.map((row, i) => {
              const IconComponent = row.icon;
              return (
                <div
                  key={i}
                  className="grid grid-cols-2 gap-4 items-center p-3 rounded-xl animate-fade-in group hover:bg-white/5 transition-colors"
                  style={{
                    animationDelay: `${200 + i * 50}ms`,
                    borderBottom: '1px solid rgba(255,255,255,0.03)'
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                    <span className="text-foreground/80 font-medium text-base">
                      {row.barrier}
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-primary font-semibold text-base">
                      {row.solution}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final line */}
      <div className="text-center animate-scale-in" style={{ animationDelay: "600ms" }}>
        <div
          className="inline-flex items-center gap-3 px-8 py-3 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(20,20,30,0.9) 100%)',
            border: '1px solid rgba(255,140,0,0.3)',
            boxShadow: '0 0 30px rgba(255,140,0,0.15)',
          }}
        >
          <div className="flex items-center gap-2">
            <MousePointerClick className="w-5 h-5 text-primary" />
            <span className="text-lg md:text-xl font-display font-medium text-foreground">
              Entry point: <span className="font-bold text-white">one-click claim.</span>
            </span>
          </div>
          <div className="w-px h-6 bg-white/20 mx-2" />
          <span className="text-lg md:text-xl font-display font-medium text-foreground">
            Exit point: <span className="font-bold text-white">Real value.</span>
          </span>
        </div>
      </div>
    </SlideContainer>
  );
};
