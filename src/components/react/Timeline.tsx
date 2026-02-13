import { useEffect, useRef, useState } from "react";
import {
  milestones,
  sections,
  type Milestone,
  type MilestoneLink,
} from "../../data/milestones";

/* ── Category styling ── */
const categoryConfig: Record<
  Milestone["category"],
  { label: string; border: string; glow: string; badge: string }
> = {
  nova: {
    label: "NOVA",
    border: "border-emerald-500/50 hover:border-emerald-400/70",
    glow: "shadow-emerald-500/10",
    badge: "bg-emerald-500/20 text-emerald-300 ring-emerald-500/30",
  },
  research: {
    label: "Research",
    border: "border-sky-500/40 hover:border-sky-400/60",
    glow: "shadow-sky-500/10",
    badge: "bg-sky-500/20 text-sky-300 ring-sky-500/30",
  },
  industry: {
    label: "Industry",
    border: "border-violet-500/40 hover:border-violet-400/60",
    glow: "shadow-violet-500/10",
    badge: "bg-violet-500/20 text-violet-300 ring-violet-500/30",
  },
  convergence: {
    label: "Convergence",
    border: "border-amber-500/50 hover:border-amber-400/70",
    glow: "shadow-amber-500/15",
    badge: "bg-amber-500/20 text-amber-300 ring-amber-500/30",
  },
};

/* ── Dot colour per category ── */
const dotColor: Record<Milestone["category"], string> = {
  nova: "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]",
  research: "border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.4)]",
  industry: "border-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.4)]",
  convergence: "border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]",
};

/* ── Filter chip ── */
const FilterChip = ({
  label,
  active,
  onClick,
  className,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  className: string;
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 text-xs font-mono rounded-full ring-1 transition-all duration-200 cursor-pointer ${
      active ? className + " opacity-100" : "opacity-40 ring-white/10 text-white/40 hover:opacity-60"
    }`}
  >
    {label}
  </button>
);

/* ── Single timeline card ── */
const TimelineCard = ({
  milestone,
  index,
  isEven,
}: {
  milestone: Milestone;
  index: number;
  isEven: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const cfg = categoryConfig[milestone.category];

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hasDetails =
    (milestone.contributions && milestone.contributions.length > 0) ||
    milestone.relation ||
    (milestone.links && milestone.links.length > 0);

  const card = (
    <div
      className={`rounded-lg border ${cfg.border} bg-white/[0.03] backdrop-blur-sm p-5 shadow-lg ${cfg.glow} transition-all duration-300 cursor-pointer`}
      onClick={() => hasDetails && setExpanded(!expanded)}
    >
      {/* Badge row */}
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span
          className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full ring-1 ${cfg.badge}`}
        >
          {cfg.label}
        </span>
        {milestone.publication && (
          <span className="text-[10px] font-mono text-white/30 tracking-wide">
            {milestone.publication}
          </span>
        )}
        {milestone.authors && (
          <span className="text-[10px] italic text-white/25 hidden sm:inline">
            {milestone.authors}
          </span>
        )}
      </div>

      <h3 className="text-base font-semibold text-white/90 leading-snug mb-1">
        {milestone.title}
      </h3>
      <p className="text-sm leading-relaxed text-white/50">
        {milestone.description}
      </p>

      {/* Expanded details */}
      {expanded && hasDetails && (
        <div className="mt-4 space-y-3 border-t border-white/10 pt-3 animate-fade-in">
          {milestone.contributions && milestone.contributions.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-1.5">
                Key Contributions
              </h4>
              <ul className="space-y-1">
                {milestone.contributions.map((c, i) => (
                  <li
                    key={i}
                    className="text-xs text-white/45 leading-relaxed pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-accent-foreground/50"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {milestone.relation && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400/50 mb-1.5">
                Relation to NOVA
              </h4>
              <p className="text-xs text-emerald-300/40 leading-relaxed italic">
                {milestone.relation}
              </p>
            </div>
          )}

          {milestone.links && milestone.links.length > 0 && (
            <div className="flex gap-2 flex-wrap pt-1">
              {milestone.links.map((link: MilestoneLink, i: number) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10px] font-mono px-2 py-0.5 rounded ring-1 ring-white/10 text-white/40 hover:text-white/70 hover:ring-white/25 transition-colors"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {hasDetails && (
        <div className="mt-2 text-[10px] font-mono text-white/20 select-none">
          {expanded ? "▲ collapse" : "▼ expand details"}
        </div>
      )}
    </div>
  );

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start"
    >
      {/* Left column */}
      <div
        className={`order-2 md:order-1 pb-4 md:pb-12 ${
          isEven ? "md:text-right" : ""
        }`}
      >
        {isEven ? (
          <div className="space-y-1">
            <span className="text-xs font-mono tracking-widest uppercase text-accent-foreground/50">
              {milestone.date}
            </span>
          </div>
        ) : (
          card
        )}
      </div>

      {/* Center — dot & line */}
      <div className="hidden md:flex flex-col items-center order-2">
        <div
          className={`relative z-10 h-4 w-4 rounded-full border-2 bg-[hsl(var(--background))] ${
            dotColor[milestone.category]
          }`}
        />
        <div className="w-px flex-1 bg-gradient-to-b from-white/15 to-white/5" />
      </div>

      {/* Right column */}
      <div className="order-1 md:order-3 pb-2 md:pb-12">
        {/* Mobile dot + date */}
        <div className="flex items-center gap-3 md:hidden mb-2">
          <div
            className={`h-3 w-3 rounded-full border-2 bg-[hsl(var(--background))] ${
              dotColor[milestone.category]
            }`}
          />
          <span className="text-xs font-mono tracking-widest uppercase text-accent-foreground/50">
            {milestone.date}
          </span>
        </div>

        {isEven ? card : (
          <div className="space-y-1">
            <span className="text-xs font-mono tracking-widest uppercase text-accent-foreground/50 hidden md:block">
              {milestone.date}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Section header ── */
const SectionHeader = ({ title }: { title: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100");
          el.classList.remove("opacity-0");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 transition-opacity duration-700 col-span-full flex items-center gap-4 py-8 md:py-12"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <h2 className="text-xs sm:text-sm md:text-base font-mono tracking-widest uppercase text-white/30 text-center shrink-0">
        {title}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
};

/* ── Legend ── */
const Legend = () => (
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    {(Object.entries(categoryConfig) as [Milestone["category"], typeof categoryConfig.nova][]).map(
      ([key, cfg]) => (
        <div key={key} className="flex items-center gap-1.5">
          <div
            className={`h-2.5 w-2.5 rounded-full border ${dotColor[key]} border-opacity-100`}
          />
          <span className="text-[11px] font-mono text-white/35 tracking-wide">
            {cfg.label}
          </span>
        </div>
      )
    )}
  </div>
);

/* ── Main Timeline component ── */
const Timeline = () => {
  const [activeFilters, setActiveFilters] = useState<Set<Milestone["category"]>>(
    new Set(["nova", "research", "industry", "convergence"])
  );

  const toggleFilter = (cat: Milestone["category"]) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        // Don't allow deselecting all
        if (next.size > 1) next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  const filtered = milestones.filter((m) => activeFilters.has(m.category));

  // Group by section
  const grouped: { section: string; items: Milestone[] }[] = [];
  for (const section of sections) {
    const items = filtered.filter((m) => m.section === section);
    if (items.length > 0) grouped.push({ section, items });
  }

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-8">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {(
          Object.entries(categoryConfig) as [
            Milestone["category"],
            (typeof categoryConfig)["nova"],
          ][]
        ).map(([key, cfg]) => (
          <FilterChip
            key={key}
            label={cfg.label}
            active={activeFilters.has(key)}
            onClick={() => toggleFilter(key)}
            className={cfg.badge}
          />
        ))}
      </div>

      <Legend />

      {/* Continuous glow line (desktop) */}
      <div className="hidden md:block absolute left-1/2 top-48 bottom-16 w-px -translate-x-1/2 bg-gradient-to-b from-white/0 via-white/10 to-white/0" />

      {grouped.map((group) => (
        <div key={group.section}>
          <SectionHeader title={group.section} />
          {group.items.map((m, i) => {
            // Use global index for alternation
            const globalIdx = milestones.indexOf(m);
            return (
              <TimelineCard
                key={`${m.date}-${m.title}`}
                milestone={m}
                index={globalIdx}
                isEven={globalIdx % 2 === 0}
              />
            );
          })}
        </div>
      ))}

      {/* Convergence summary at bottom */}
      <div className="mt-16 mb-8 text-center space-y-4">
        <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400/40">
          Independent Convergence Validated
        </p>
        <p className="text-sm text-white/30 max-w-xl mx-auto leading-relaxed">
          External, structured, modular memory with orchestration layers is the
          emerging architectural consensus for AI agent cognition.
        </p>
      </div>
    </section>
  );
};

export default Timeline;
