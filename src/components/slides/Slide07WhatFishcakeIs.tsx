import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { Zap, Settings, Send, ArrowLeftRight } from "lucide-react";

const principles = [
  {
    name: <><span className="text-primary">On-Chain</span> Generation</>,
    impl: <>Tokenized events that evolve marketing into <span className="text-primary font-medium">incentive-based Web3 engagement.</span></>,
    icon: Zap,
  },
  {
    name: <><span className="text-primary">On-Chain</span> Operation</>,
    impl: <>Rewards and incentive rules are locked in smart contracts — <span className="text-primary font-medium">transparent, automated, and tamper-proof.</span></>,
    icon: Settings,
  },
  {
    name: <><span className="text-primary">On-Chain</span> Distribution</>,
    impl: <>A simple QR scan verifies participation. Rewards are <span className="text-primary font-medium">distributed directly from smart contracts to users.</span></>,
    icon: Send,
  },
  {
    name: <><span className="text-primary">Peer-to-Peer</span> Value</>,
    impl: <><span className="text-primary font-medium">Transparent. Direct. Intermediary-free. Reward-driven.</span></>,
    icon: ArrowLeftRight,
  },
];

export const Slide07WhatFishcakeIs = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>What Fishcake Is (Solution)</SlideTitle>

      <div className="text-center mb-8 animate-slide-up">
        <p className="text-2xl md:text-3xl text-foreground font-display font-semibold">
          The execution layer for Real-World Solutions (RWS) in <span className="text-primary">marketing.</span>
        </p>
      </div>

      {/* Section header */}
      <div className="text-center mb-6">
        <h3 className="font-display text-lg font-bold text-primary mb-2 flex items-center justify-center gap-3">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary/60" />
          Four Non-Negotiable Principles
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary/60" />
        </h3>
      </div>

      {/* Principles Grid */}
      <div className="grid md:grid-cols-2 md:grid-rows-2 gap-5 mb-8 max-w-6xl mx-auto">
        {principles.map((p, i) => {
          const IconComponent = p.icon;
          return (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden animate-scale-in h-full"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Card with dark glass effect */}
              <div
                className="relative p-6 rounded-xl h-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(15,15,20,0.95) 0%, rgba(25,25,35,0.85) 100%)',
                  border: '1px solid rgba(255,140,0,0.15)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}
              >
                {/* Number badge */}
                <div
                  className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,140,0,0.2) 0%, rgba(255,140,0,0.05) 100%)',
                    border: '1px solid rgba(255,140,0,0.3)',
                    color: 'rgba(255,140,0,0.8)',
                  }}
                >
                  {i + 1}
                </div>

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(255,140,0,0.05) 100%)',
                      border: '1px solid rgba(255,140,0,0.2)',
                    }}
                  >
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1 pr-6">
                    <h4 className="font-semibold text-foreground text-lg mb-1">
                      {p.name}
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{p.impl}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* One-liner */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
        <p className="text-muted-foreground/60 mb-3 text-sm font-mono">One-liner:</p>

        <div
          className="relative inline-block max-w-4xl rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(20,20,30,0.9) 50%, rgba(255,200,0,0.05) 100%)',
            border: '1px solid rgba(255,140,0,0.25)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 30px rgba(255,140,0,0.1)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,140,0,0.6) 50%, transparent 100%)',
            }}
          />

          <div className="px-12 py-8">
            <p
              className="text-2xl md:text-3xl font-display font-bold"
              style={{
                background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Fishcake powers incentive-driven, on-chain marketing built for real-world engagement.
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
