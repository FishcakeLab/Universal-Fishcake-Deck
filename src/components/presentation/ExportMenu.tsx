import { useState, useCallback } from "react";
import { Download, FileText, Check, Loader2 } from "lucide-react";

type DownloadState = "idle" | "downloading" | "done";

export const ExportMenu = () => {
  const [state, setState] = useState<DownloadState>("idle");

  const handleDownload = useCallback(async () => {
    if (state !== "idle") return;
    setState("downloading");

    try {
      const res = await fetch("/Fishcake_Universal_Deck.pdf");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Fishcake_Universal_Deck.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // fallback: direct link
      window.open("/Fishcake_Universal_Deck.pdf", "_blank");
    }

    setState("done");
    setTimeout(() => setState("idle"), 3000);
  }, [state]);

  return (
    <>
      {/* Full-screen overlay animation */}
      {state !== "idle" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
          {/* Backdrop */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)",
              opacity: state === "downloading" ? 1 : 0,
            }}
          />

          {/* Card */}
          <div
            className="relative z-10 rounded-2xl px-10 py-8 flex flex-col items-center gap-4 animate-scale-in"
            style={{
              background: "linear-gradient(135deg, rgba(20,20,30,0.95) 0%, rgba(30,25,20,0.95) 100%)",
              border: "1px solid rgba(255,140,0,0.2)",
              boxShadow: "0 20px 80px rgba(255,140,0,0.15), 0 0 120px rgba(255,140,0,0.05)",
              minWidth: 280,
            }}
          >
            {/* Animated ring */}
            <div className="relative w-16 h-16">
              {state === "downloading" ? (
                <>
                  {/* Spinning ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: "3px solid rgba(255,140,0,0.1)",
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-full animate-spin"
                    style={{
                      border: "3px solid transparent",
                      borderTopColor: "hsl(24 100% 50%)",
                      borderRightColor: "hsl(45 100% 51%)",
                      animationDuration: "1s",
                    }}
                  />
                  {/* Inner glow */}
                  <div
                    className="absolute inset-2 rounded-full flex items-center justify-center"
                    style={{
                      background: "radial-gradient(circle, rgba(255,140,0,0.15) 0%, transparent 70%)",
                    }}
                  >
                    <Loader2
                      className="w-6 h-6 animate-spin"
                      style={{ color: "hsl(24 100% 50%)", animationDuration: "1.5s" }}
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Success ring */}
                  <div
                    className="absolute inset-0 rounded-full animate-scale-in"
                    style={{
                      background: "linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0.05) 100%)",
                      border: "2px solid rgba(34,197,94,0.4)",
                      boxShadow: "0 0 30px rgba(34,197,94,0.2)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center animate-scale-in">
                    <Check className="w-7 h-7 text-green-400" strokeWidth={3} />
                  </div>
                </>
              )}
            </div>

            {/* Text */}
            <div className="text-center">
              <p
                className="font-display font-semibold text-lg mb-1 transition-all duration-300"
                style={{
                  color: state === "downloading" ? "hsl(0 0% 98%)" : "hsl(142 71% 65%)",
                }}
              >
                {state === "downloading" ? "Preparing PDF" : "Download Complete"}
              </p>
              <p className="text-muted-foreground text-sm">
                {state === "downloading"
                  ? "High-quality slide deck"
                  : "Fishcake_Universal_Deck.pdf"}
              </p>
            </div>

            {/* Progress shimmer bar */}
            {state === "downloading" && (
              <div className="w-full h-1 rounded-full overflow-hidden mt-1" style={{ background: "rgba(255,140,0,0.1)" }}>
                <div
                  className="h-full rounded-full animate-shimmer"
                  style={{
                    background: "linear-gradient(90deg, transparent, hsl(24 100% 50%), hsl(45 100% 51%), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Export Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={handleDownload}
          disabled={state !== "idle"}
          className="group flex items-center gap-2.5 rounded-full px-5 py-2.5 transition-all duration-300 hover:scale-105 active:scale-95 disabled:pointer-events-none"
          style={{
            background: "rgba(20, 20, 30, 0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 140, 0, 0.15)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
          title="Download PDF"
        >
          <FileText className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
            Export PDF
          </span>
          <Download className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      </div>
    </>
  );
};
