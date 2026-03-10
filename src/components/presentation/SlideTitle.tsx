import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SlideTitleProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  subtitle?: string;
  centered?: boolean;
}

export const SlideTitle = ({ children, className, gradient = false, subtitle, centered = true }: SlideTitleProps) => {
  return (
    <div className={cn("mb-8 md:mb-12 animate-slide-up", centered && "text-center")}>
      <h1
        className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight",
          gradient ? "text-gradient" : "text-foreground",
          className
        )}
      >
        {children}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-muted-foreground font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};
