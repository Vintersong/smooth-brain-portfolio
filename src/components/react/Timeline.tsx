import { useEffect, useRef, useState } from "react";
import {
  milestones,
  sections,
  type Milestone,
  type MilestoneLink,
} from "../../data/milestones";

/* ── Category configuration ── */
const categoryConfig: Record<Milestone["category"], { label: string }> = {
  nova: { label: "NOVA" },
  research: { label: "Research" },
  industry: { label: "Industry" },
  convergence: { label: "Convergence" },
};

/* ── Color mapping helper ── */
const getCategoryColor = (category: Milestone["category"]): string => {
  const colors = {
    nova: '#7ee8cc',
    research: '#d4b4f0',
    industry: '#f0909f',
    convergence: '#f0a8c4'
  };
  return colors[category];
};

const getCategoryColorRgba = (category: Milestone["category"], opacity: number): string => {
  const rgbaMap = {
    nova: `rgba(126, 232, 204, ${opacity})`,
    research: `rgba(212, 180, 240, ${opacity})`,
    industry: `rgba(240, 144, 159, ${opacity})`,
    convergence: `rgba(240, 168, 196, ${opacity})`
  };
  return rgbaMap[category];
};

/* ── Dot colour per category ── */
const dotColor: Record<Milestone["category"], string> = {
  nova: "border-[#7ee8cc] shadow-[0_0_16px_rgba(126,232,204,0.6)]",
  research: "border-[#d4b4f0] shadow-[0_0_16px_rgba(212,180,240,0.6)]",
  industry: "border-[#f0909f] shadow-[0_0_16px_rgba(240,144,159,0.6)]",
  convergence: "border-[#f0a8c4] shadow-[0_0_16px_rgba(240,168,196,0.6)]",
};

/* ── Filter chip ── */
const FilterChip = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 text-xs font-mono rounded-full ring-1 transition-all duration-200 cursor-pointer ${
      active ? "opacity-100" : "opacity-60 ring-white/20 hover:opacity-80"
    }`}
    style={!active ? { color: 'rgba(237, 230, 245, 0.6)' } : {}}
  >
    {label}
  </button>
);

/* ── Single timeline card ── */
const TimelineCard = ({
  milestone,
  isEven,
}: {
  milestone: Milestone;
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
      className="rounded-lg border-2 backdrop-blur-sm p-5 transition-all duration-300 cursor-pointer hover:border-opacity-90 shadow-lg"
      style={{
        backgroundColor: getCategoryColorRgba(milestone.category, 0.08),
        borderColor: getCategoryColor(milestone.category),
        boxShadow: `0 0 24px ${getCategoryColorRgba(milestone.category, 0.3)}, inset 0 0 30px ${getCategoryColorRgba(milestone.category, 0.05)}`
      }}
      onClick={() => hasDetails && setExpanded(!expanded)}
    >
      {/* Badge row */}
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span
          className="text-sm font-mono uppercase tracking-widest font-semibold"
          style={{ color: getCategoryColor(milestone.category) }}
        >
          {cfg.label}
        </span>
        {milestone.publication && (
          <span className="text-[10px] font-mono tracking-wide" style={{ color: 'rgba(237, 230, 245, 0.6)' }}>
            {milestone.publication}
          </span>
        )}
        {milestone.authors && (
          <span className="text-[10px] italic hidden sm:inline" style={{ color: 'rgba(237, 230, 245, 0.5)' }}>
            {milestone.authors}
          </span>
        )}
      </div>

      <h3 className="text-base font-semibold leading-snug mb-1" style={{ color: 'var(--lavender, #d4b4f0)' }}>
        {milestone.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(237, 230, 245, 0.8)' }}>
        {milestone.description}
      </p>

      {/* Expanded details */}
      {expanded && hasDetails && (
        <div className="mt-4 space-y-3 border-t border-white/10 pt-3 animate-fade-in">
          {milestone.contributions && milestone.contributions.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: 'rgba(212, 180, 240, 0.7)' }}>
                Key Contributions
              </h4>
              <ul className="space-y-1">
                {milestone.contributions.map((c, i) => (
                  <li
                    key={i}
                    className="text-xs leading-relaxed pl-3 relative"
                    style={{ color: 'rgba(237, 230, 245, 0.75)' }}
                  >
                    <span className="absolute left-0" style={{ color: 'rgba(126, 232, 204, 0.6)' }}>›</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {milestone.relation && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: 'rgba(126, 232, 204, 0.8)' }}>
                Relation to NOVA
              </h4>
              <p className="text-xs leading-relaxed italic" style={{ color: 'rgba(126, 232, 204, 0.7)' }}>
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
                  className="text-[10px] font-mono px-2 py-0.5 rounded ring-1 transition-colors"
                  style={{
                    borderColor: 'rgba(212, 180, 240, 0.3)',
                    color: 'rgba(212, 180, 240, 0.8)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#d4b4f0';
                    e.currentTarget.style.borderColor = 'rgba(212, 180, 240, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(212, 180, 240, 0.8)';
                    e.currentTarget.style.borderColor = 'rgba(212, 180, 240, 0.3)';
                  }}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {hasDetails && (
        <div className="mt-2 text-[10px] font-mono select-none" style={{ color: 'rgba(237, 230, 245, 0.4)' }}>
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
            <span className="text-xs font-mono tracking-widest uppercase hidden md:block" style={{ color: 'rgba(126, 232, 204, 0.7)' }}>
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
          className={`relative z-10 h-4 w-4 rounded-full border-2 ${
            dotColor[milestone.category]
          }`}
          style={{ backgroundColor: 'var(--bg-dark, #0d0a14)' }}
        />
        <div className="w-px flex-1" style={{ background: 'linear-gradient(to bottom, rgba(212, 180, 240, 0.3), rgba(212, 180, 240, 0.1))' }} />
      </div>

      {/* Right column */}
      <div className="order-1 md:order-3 pb-2 md:pb-12">
        {/* Mobile dot + date */}
        <div className="flex items-center gap-3 md:hidden mb-2">
          <div
            className={`h-3 w-3 rounded-full border-2 ${
              dotColor[milestone.category]
            }`}
            style={{ backgroundColor: 'var(--bg-dark, #0d0a14)' }}
          />
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'rgba(126, 232, 204, 0.7)' }}>
            {milestone.date}
          </span>
        </div>

        {isEven ? card : (
          <div className="space-y-1">
            <span className="text-xs font-mono tracking-widest uppercase hidden md:block" style={{ color: 'rgba(126, 232, 204, 0.7)' }}>
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
      className="opacity-0 transition-opacity duration-700 col-span-full flex items-center gap-4 py-8 md:py-12 overflow-hidden max-w-full"
    >
      <div className="hidden sm:block h-px flex-1 min-w-8" style={{ background: 'linear-gradient(to right, transparent, rgba(212, 180, 240, 0.3), transparent)' }} />
      <h2 className="text-xs sm:text-sm md:text-base font-mono tracking-normal sm:tracking-wide md:tracking-widest uppercase text-center whitespace-normal min-w-0 shrink" style={{ color: 'rgba(212, 180, 240, 0.7)' }}>
        {title}
      </h2>
      <div className="hidden sm:block h-px flex-1 min-w-8" style={{ background: 'linear-gradient(to right, transparent, rgba(212, 180, 240, 0.3), transparent)' }} />
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
          <span className="text-[11px] font-mono tracking-wide" style={{ color: 'rgba(237, 230, 245, 0.7)' }}>
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
          />
        ))}
      </div>

      <Legend />

      {/* Continuous glow line (desktop) */}
      <div className="hidden md:block absolute left-1/2 top-48 bottom-16 w-px -translate-x-1/2" style={{ background: 'linear-gradient(to bottom, transparent, rgba(212, 180, 240, 0.25), transparent)' }} />

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
                isEven={globalIdx % 2 === 0}
              />
            );
          })}
        </div>
      ))}

      {/* Convergence summary at bottom */}
      <div className="mt-16 mb-8 text-center space-y-4">
        <div className="h-px w-48 mx-auto" style={{ background: 'linear-gradient(to right, transparent, rgba(126, 232, 204, 0.5), transparent)' }} />

        <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(237, 230, 245, 0.7)' }}>
          External, structured, modular memory with orchestration layers is the
          emerging architectural consensus for AI agent cognition.
        </p>
      </div>
    </section>
  );
};

export default Timeline;
