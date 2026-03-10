import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { Rocket, TrendingUp, Users } from "lucide-react";

export const Slide17TheClose = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>The Future Starts Here</SlideTitle>

      <div className="text-center mb-10 animate-slide-up">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
          <span className="text-gradient">Fishcake — Where Everyday Life Meets Web3.</span>
        </h2>
      </div>

      {/* Recap pillars */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div
          className="rounded-xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(15,15,20,0.95) 0%, rgba(25,25,35,0.85) 100%)',
            border: '1px solid rgba(255,140,0,0.15)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
          }}
        >
          <Rocket className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-foreground font-semibold text-lg mb-1">Real Product</p>
          <p className="text-muted-foreground text-sm">Live apps, live users, live ecosystem</p>
        </div>
        <div
          className="rounded-xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(15,15,20,0.95) 0%, rgba(25,25,35,0.85) 100%)',
            border: '1px solid rgba(255,140,0,0.15)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
          }}
        >
          <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-foreground font-semibold text-lg mb-1">Real Economics</p>
          <p className="text-muted-foreground text-sm">Revenue-backed token, deflationary model</p>
        </div>
        <div
          className="rounded-xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(15,15,20,0.95) 0%, rgba(25,25,35,0.85) 100%)',
            border: '1px solid rgba(255,140,0,0.15)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
          }}
        >
          <Users className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-foreground font-semibold text-lg mb-1">Real Adoption</p>
          <p className="text-muted-foreground text-sm">3350+ events, growing community</p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
        <div
          className="inline-block px-10 py-5 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(20,20,30,0.9) 50%, rgba(255,200,0,0.1) 100%)',
            border: '1px solid rgba(255,140,0,0.3)',
            boxShadow: '0 0 40px rgba(255,140,0,0.15)',
          }}
        >
          <p className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Join us in building the <span className="text-primary">RWS standard.</span>
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
