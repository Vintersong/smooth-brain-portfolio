import { useEffect, useRef } from "react";
import { milestones, type Milestone } from "../../data/milestones";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  index: number;
  isEven: boolean;
}

const TimelineItem = ({
  date,
  title,
  description,
  index,
  isEven,
}: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start"
    >
      {/* Left column */}
      <div className={`order-2 md:order-1 space-y-2 pb-8 md:pb-16 ${isEven ? "md:text-right" : ""}`}>
        {isEven ? (
          <>
            <span className="text-xs font-mono tracking-widest uppercase text-accent-foreground/60">{date}</span>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm md:ml-auto">{description}</p>
          </>
        ) : (
          <div className="rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm p-5 shadow-lg shadow-accent-foreground/5 hover:border-accent-foreground/30 transition-colors duration-300">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          </div>
        )}
      </div>

      {/* Center — dot & line */}
      <div className="hidden md:flex flex-col items-center order-2">
        <div className="relative z-10 h-4 w-4 rounded-full border-2 border-accent-foreground bg-background shadow-[0_0_12px_hsl(var(--accent-foreground)/0.5)]" />
        <div className="w-px flex-1 bg-gradient-to-b from-accent-foreground/40 to-accent-foreground/10" />
      </div>

      {/* Right column */}
      <div className="order-1 md:order-3 pb-2 md:pb-16">
        {/* Mobile dot */}
        <div className="flex items-center gap-3 md:hidden mb-2">
          <div className="h-3 w-3 rounded-full border-2 border-accent-foreground bg-background shadow-[0_0_10px_hsl(var(--accent-foreground)/0.4)]" />
          <span className="text-xs font-mono tracking-widest uppercase text-accent-foreground/60">{date}</span>
        </div>
        {isEven ? (
          <div className="rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm p-5 shadow-lg shadow-accent-foreground/5 hover:border-accent-foreground/30 transition-colors duration-300">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          </div>
        ) : (
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest uppercase text-accent-foreground/60 hidden md:block">{date}</span>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Timeline = () => (
  <section className="relative mx-auto max-w-4xl px-6 py-16">
    {/* Continuous glow line behind dots (desktop) */}
    <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-px -translate-x-1/2 bg-gradient-to-b from-accent-foreground/0 via-accent-foreground/20 to-accent-foreground/0" />

    {milestones.map((m: Milestone, i: number) => (
      <TimelineItem key={i} index={i} isEven={i % 2 === 0} {...m} />
    ))}
  </section>
);

export default Timeline;
