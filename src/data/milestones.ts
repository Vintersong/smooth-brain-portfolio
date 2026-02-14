export interface MilestoneLink {
  label: string;
  url: string;
}

export interface Milestone {
  date: string;
  title: string;
  description: string;
  category: "research" | "nova" | "industry" | "convergence";
  section: string;
  authors?: string;
  publication?: string;
  contributions?: string[];
  relation?: string;
  links?: MilestoneLink[];
}

export const sections: string[] = [
  "Q4 2023: Foundation Research",
  "Q1–Q2 2024: Context Limitations Identified",
  "Q3–Q4 2024: Modular Memory Systems Formalized",
  "Late 2024: NOVA Genesis",
  "Q1 2025: NOVA Framework Formalized",
  "Q2–Q3 2025: MCP Implementation & Industry Convergence",
  "Q4 2025: Ecosystem Maturity",
  "Q1 2026: Harness Engineering & Validation",
];

export const milestones: Milestone[] = [
  // ── Q4 2023 ──
  {
    date: "October 2023",
    title: "MemGPT — OS-Style External Memory",
    description:
      "Multi-tier memory architecture with LLM as virtual memory manager, paging information in/out of limited context window.",
    category: "research",
    section: "Q4 2023: Foundation Research",
    authors: "Shishir Patel et al.",
    publication: "arXiv preprint",
    contributions: [
      "Multi-tier memory architecture (main context vs external store)",
      "LLM as a virtual memory manager",
      "Operating system metaphor: model as CPU managing memory hierarchy",
    ],
    relation:
      "Establishes the OS metaphor that NOVA later adopts. Validates that stateless models become cognitive engines when embedded in external memory hierarchy.",
    links: [
      { label: "Paper", url: "https://research.memgpt.ai" },
    ],
  },

  // ── Q1–Q2 2024 ──
  {
    date: "March 2024",
    title: "Lost in the Middle Problem",
    description:
      "Even modest ~2k-token contexts cause models to miss facts in the middle. Simply increasing window size is insufficient — retrieval + structure required.",
    category: "research",
    section: "Q1–Q2 2024: Context Limitations Identified",
    authors: "LLMWare team",
    contributions: [
      "Even ~2k-token contexts cause middle-section blind spots",
      "Increasing window size alone is insufficient",
      "Retrieval + structure required for reliable performance",
    ],
    relation:
      "Documents the exact failure mode experienced in late 2024 that motivated NOVA. Validates NOVA's design bias toward structured retrieval over raw context scaling.",
    links: [
      {
        label: "Article",
        url: "https://dev.to/llmware/why-long-context-windows-for-llms-can-be-deceptive-lost-in-the-middle-problem-oj2",
      },
    ],
  },
  {
    date: "May 2024",
    title: "HMT — Hierarchical Memory Transformer",
    description:
      "Hierarchical memory organization via segment-level recurrence. 2–57× fewer parameters, 2.5–116× less inference memory vs long-context baselines.",
    category: "research",
    section: "Q1–Q2 2024: Context Limitations Identified",
    authors: "Zifan He et al.",
    publication: "arXiv / NAACL 2025",
    contributions: [
      "Hierarchical memory organization via segment-level recurrence",
      "Memory embeddings propagated along sequences",
      "2–57× fewer parameters, 2.5–116× less inference memory",
      "Empirical validation that memory structure beats brute force scale",
    ],
    relation:
      "Provides empirical backing for NOVA's 'structure over processing power' principle. NOVA's shards + scores are application-level analogue of HMT's segment hierarchy.",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2405.06067" }],
  },
  {
    date: "June 2024",
    title: "HAT — Hierarchical Aggregate Tree",
    description:
      "Tree-structured memory for long-form dialogue. Conditional tree traversal instead of linear history or flat vectors.",
    category: "research",
    section: "Q1–Q2 2024: Context Limitations Identified",
    authors: "Aadharsh Aadhithya A. et al.",
    publication: "arXiv",
    contributions: [
      "Tree-structured memory for long-form dialogue",
      "Conditional tree traversal instead of linear history",
      "Improved coherence over long conversations",
    ],
    relation:
      "Direct research confirmation that hierarchical, recursively aggregated memory outperforms flat context. NOVA's shards + metadata + relevance scoring implement the same philosophy.",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2406.06124" }],
  },

  // ── Q3–Q4 2024 ──
  {
    date: "September 2024",
    title: "MemoRAG — Global Memory-Enhanced RAG",
    description:
      "Light long-range model builds global memory of long context. Memory as learned intermediate structure instead of raw chunks.",
    category: "research",
    section: "Q3–Q4 2024: Modular Memory Systems Formalized",
    authors: "Hongjin Qian et al.",
    publication: "arXiv",
    contributions: [
      "Global memory guides retrieval for second, more powerful model",
      "Memory as learned intermediate structure instead of raw chunks",
      "Outperforms standard RAG and long-context models",
    ],
    relation:
      "Formal version of NOVA's 'structure over processing power' insight. NOVA's meta-shards conceptually parallel MemoRAG's global memory layer.",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2409.05591" }],
  },
  {
    date: "September 2024",
    title: "EMG-RAG — Editable Memory Graphs",
    description:
      "Structured, graph-based external memory with explicit edit operations and RL-based memory selection. Deployed in real smartphone assistant.",
    category: "research",
    section: "Q3–Q4 2024: Modular Memory Systems Formalized",
    authors: "Zheng Wang et al.",
    publication: "EMNLP 2024",
    contributions: [
      "Editable Memory Graphs: structured, graph-based external memory",
      "Explicit edit operations (insertion, deletion, replacement)",
      "RL-based memory selection optimizing retrieval",
      "~10% gains on downstream tasks",
    ],
    relation:
      "Direct analogue of shard-based memory: atomic, metadata-rich units with explicit lifecycle. EMG-RAG's three-layer hierarchy maps to NOVA's shard types + tags + links.",
    links: [
      {
        label: "Paper",
        url: "https://aclanthology.org/2024.emnlp-main.281/",
      },
      { label: "arXiv", url: "https://arxiv.org/abs/2409.19401" },
    ],
  },
  {
    date: "November 2024",
    title: "Anthropic Publishes MCP Specification",
    description:
      "Open protocol for connecting AI assistants to tools and data sources. LSP-inspired design solving the N×M integration problem.",
    category: "industry",
    section: "Q3–Q4 2024: Modular Memory Systems Formalized",
    publication: "Anthropic",
    contributions: [
      "Open protocol for connecting AI assistants to tools and data sources",
      "Solves N×M integration problem",
      "LSP-inspired design with SDKs and reference servers",
      "Emphasizes stateless models + structured context behind protocol boundary",
    ],
    relation:
      "Provides external protocol standard for exactly what NOVA implements. NOVA's later MCP server implementation becomes a portable, protocol-level cognitive layer.",
    links: [
      {
        label: "Announcement",
        url: "https://www.anthropic.com/news/model-context-protocol",
      },
    ],
  },
  {
    date: "December 2024",
    title: "AutoGen — Multi-Agent Conversations",
    description:
      "Multi-agent framework with asynchronous messaging, pluggable memory, and event-driven runtime with learning capabilities.",
    category: "research",
    section: "Q3–Q4 2024: Modular Memory Systems Formalized",
    authors: "Microsoft Research",
    contributions: [
      "Pluggable memory, tools, multi-agent orchestration",
      "Event-driven runtime with learning capabilities",
      "Agents + memory as runtime-level concepts",
    ],
    relation:
      "NOVA's MCP server implementation fits naturally into AutoGen-style orchestration. Intelligence = orchestration + memory, not monolithic calls.",
    links: [
      {
        label: "Paper",
        url: "https://www.microsoft.com/en-us/research/publication/autogen-enabling-next-gen-llm-applications-via-multi-agent-conversation-framework/",
      },
    ],
  },

  // ── Late 2024: NOVA Genesis ──
  {
    date: "Nov–Dec 2024",
    title: "Context Wall & First Prototypes",
    description:
      "Practical limits hit with IDE-extended context for AI coding assistants. Even with bigger windows, multi-file workflows don't scale. Begin experimenting with segmented conversation threads (proto-shards).",
    category: "nova",
    section: "Late 2024: NOVA Genesis",
    contributions: [
      "Identified that problem is not 'more tokens' but lack of structured external cognitive workspace",
      "Began experimenting with segmented conversation threads (proto-shards)",
      "User-driven organization and revisitation as alternative to context scaling",
    ],
    relation:
      "Independent discovery of same bottleneck identified in academic papers (Lost in the Middle, MemoRAG).",
  },

  // ── Q1 2025 ──
  {
    date: "Jan–Mar 2025",
    title: "Shard System & Framework Development",
    description:
      "Built external memory system using modular units called 'shards' — atomic thought-packets with metadata, tagging, and relevance scoring.",
    category: "nova",
    section: "Q1 2025: NOVA Framework Formalized",
    contributions: [
      "Shards: atomic thought-packets with metadata, tagging, relevance scoring",
      "'Structure over processing power' principle defined",
      "User as executive function: manual relevance determination, linking, recursion",
      "Naming conventions (e.g., shard_philosophy_ethics_01)",
    ],
  },
  {
    date: "March 2025",
    title: "NOVA Whitepaper v1",
    description:
      "Formal whitepaper defining NOVA as a user-centric framework for modular cognitive augmentation through stateless AI systems. Grounded in Extended Mind Thesis, Distributed Cognition, and Working Memory theory.",
    category: "nova",
    section: "Q1 2025: NOVA Framework Formalized",
    contributions: [
      "Shards: discrete, topic-specific conversation threads with metadata",
      "User-driven recursion: manual revisitation, cross-linking, synthesis",
      "Distributed cognition: user + stateless AI as hybrid cognitive system",
      "Step 7 — Translation Layer: automated shard evaluation, scoring, clustering, recursive synthesis",
      "Developmental model (Phase 0–6): Tabula Rasa → Emergent Cognition",
      "Cognitive functions simulated: attention, working memory, executive planning, semantic recall",
    ],
    relation:
      "Not AGI, but 'spinal architecture of an AGI-ready cognition scaffold'. User-mediated thought → emergent, recursive reasoning through automation.",
  },
  {
    date: "January 2025",
    title: "Neurodivergent-Aware AI Framework",
    description:
      "ADHD-focused productivity assistant using on-device ML with human-in-the-loop design. Parallel thinking about AI as co-regulator inside structured environment.",
    category: "research",
    section: "Q1 2025: NOVA Framework Formalized",
    authors: "Raghavendra Deshmukh",
    publication: "arXiv",
    contributions: [
      "ADHD-focused productivity assistant using on-device ML",
      "Human-in-the-loop design with adaptive nudges",
      "Systems thinking + neurodivergent cognitive load management",
    ],
    relation:
      "Validates NOVA's focus on executive function support and cognitive scaffolding for neurodivergent users.",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2507.06864" }],
  },
  {
    date: "February 2025",
    title: "A-Mem — Agentic Memory for LLM Agents",
    description:
      "Zettelkasten-inspired memory: structured notes with attributes, tags, inter-note links. Almost exact parallel to NOVA's shard abstraction.",
    category: "research",
    section: "Q1 2025: NOVA Framework Formalized",
    authors: "Wujiang Xu et al.",
    publication: "arXiv",
    contributions: [
      "Zettelkasten-inspired memory: structured notes with attributes, tags, links",
      "Atomic, tagged, interlinked memory units managed by agent",
      "Dynamic organization: memories evolve as new information arrives",
      "Strong empirical gains (F1 scores, long-term conversation quality)",
    ],
    relation:
      "Independent convergence on same memory model as NOVA. Provides algorithmic detail and empirical validation for NOVA's conceptual framework. Research instantiation of NOVA Step 7.",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2502.12110" },
      { label: "Code", url: "https://github.com/agiresearch/A-mem" },
    ],
  },
  {
    date: "March 2025",
    title: "LADDER — Self-Improving LLMs",
    description:
      "Recursive problem decomposition with self-verification. Large gains on math tasks without parameter scaling.",
    category: "research",
    section: "Q1 2025: NOVA Framework Formalized",
    authors: "Toby Simonds, Akira Yoshiyama",
    publication: "arXiv",
    contributions: [
      "Recursive problem decomposition with self-verification",
      "Self-generated curricula for improvement",
      "Large gains without parameter scaling",
    ],
    relation:
      "Recursive self-improvement loops over structured problem spaces — cognitively similar to NOVA's recursive interaction with shard memory.",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2503.00735" }],
  },

  // ── Q2–Q3 2025 ──
  {
    date: "April 2025",
    title: "NOVA v0.2 — Public Launch & Open Source",
    description:
      "First working implementation released as FastAPI server with REST API for shard interaction, creation, semantic search, and listing. Open-sourced with full documentation suite including whitepaper, executive summary, shard memory architecture, and unified consciousness model.",
    category: "nova",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    contributions: [
      "FastAPI server v0.2.0 with /interact, /create_shard, /search, /list_shards endpoints",
      "Semantic search via OpenAI ada-002 embeddings with cosine similarity + token overlap fallback",
      "Auto-shard selection: intelligently identifies relevant shards for queries",
      "Citation tracking and placeholder shard generation for referenced but missing shards",
      "Open-sourced with documentation suite (whitepaper, executive summary, architecture diagrams, pitch deck)",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/Vintersong/NOVA-Cognition-Framework",
      },
    ],
  },
  {
    date: "April 2025",
    title: "Cognitive Architecture Specification (SKILL.md)",
    description:
      "Formal mapping of cognitive functions to shard operations. Defines working memory as active loaded shards, attention as user-selected shards, long-term memory as shard index + embeddings, executive function as user-led shard management, and metacognition as cross-shard synthesis.",
    category: "nova",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    contributions: [
      "Working Memory → active loaded shards in context",
      "Attention → user-selected shard sets",
      "Long-Term Memory → shard index + metadata + semantic embeddings",
      "Executive Function → user-led creation, merging, archival",
      "Metacognition → cross-shard synthesis and contradiction detection",
      "Memory Decay → usage-based relevance scoring",
    ],
    relation:
      "Bridges cognitive science theory (Extended Mind Thesis, Distributed Cognition) to concrete implementation. Each cognitive function maps to a specific shard operation.",
  },
  {
    date: "April 2025",
    title: "Agent-First Developer Toolchain Manifesto",
    description:
      "Agent-first SDLC: autonomous agents continuously write, test, deploy code. Humans become intent designers and curators.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "Amplify Partners",
    contributions: [
      "Agent-first SDLC: autonomous agents continuously write, test, deploy",
      "New abstractions: intent specification, coordination layers, evaluation harnesses",
      "Humans become 'intent designers' rather than line-by-line coders",
    ],
    relation:
      "Manifesto for NOVA's positioning: agent-centric harness with structured memory and orchestration. Validates 'user steers, agents execute' model.",
    links: [
      {
        label: "Article",
        url: "https://amplifypartners.com/blog-posts/the-agent-first-developer-toolchain-how-ai-will-radically-transform-the-sdlc",
      },
    ],
  },
  {
    date: "Spring–Summer 2025",
    title: "NOVA → MCP Server Migration",
    description:
      "Rebuilt NOVA as MCP-compliant server with 7 tools and 2 resources, removing OpenAI dependency from the server layer. Cleaner separation: server manages shards, connected LLM handles reasoning.",
    category: "nova",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    contributions: [
      "7 MCP tools: interact, create, update, search, list, merge, archive",
      "2 MCP resources: nova://skill (cognitive instructions) and nova://index (shard index)",
      "Removed OpenAI dependency — server manages shards, LLM client handles reasoning",
      "Shard utilities: rename_shards.py, context_extractor.py, dedup_json.py",
      "Meta-shard merging and non-destructive archival for shard lifecycle management",
      "NOVA as portable cognitive memory backplane for any MCP-compatible agent",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/Vintersong/NOVA-Cognition-Framework",
      },
    ],
  },
  {
    date: "May 2025",
    title: "MCP Crosses the Chasm",
    description:
      "OpenAI integrates MCP across products. Windows 11 marketed as 'agentic OS' with native MCP support. Protocol transitions from experiment to default integration layer.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    contributions: [
      "OpenAI integrates MCP across products",
      "Windows 11 marketed as 'agentic OS' with native MCP support",
      "MCP transitions from experiment to default integration layer",
    ],
    relation:
      "Validates NOVA's MCP server architecture as aligned with industry direction. Protocol standardization enables portable cognitive layers.",
    links: [
      {
        label: "Retrospective",
        url: "https://www.ajeetraina.com/one-year-of-model-context-protocol-from-experiment-to-industry-standard/",
      },
    ],
  },
  {
    date: "June 2025",
    title: "Monolithic vs Modular AI Architecture",
    description:
      "Industry analysis of trade-offs between monolithic and modular AI systems. NOVA is explicitly modular cognitive architecture.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "Shaped.ai",
    contributions: [
      "Monoliths: tightly coupled, high raw performance",
      "Modular systems: flexible, fault-isolated, easier scaling",
    ],
    relation:
      "NOVA is explicitly modular cognitive architecture. Shards, orchestration, MCP integration = composable pieces around stateless models.",
    links: [
      {
        label: "Article",
        url: "https://www.shaped.ai/blog/monolithic-vs-modular-ai-architecture",
      },
    ],
  },
  {
    date: "July 2025",
    title: "Agent Driven Development (ADD)",
    description:
      "AI agent does implementation, docs, tests, versioning. Human 'Editor' sets goals, constraints, acceptance criteria.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    authors: "Remo H. Jansen",
    contributions: [
      "AI agent does implementation, docs, tests, versioning",
      "Human 'Editor' sets goals and acceptance criteria",
      "Incremental development with automation and verification loops",
    ],
    relation:
      "Methodology wrapper for exactly how NOVA is meant to be used. NOVA's shard store as persistent knowledge harness for this paradigm.",
    links: [
      {
        label: "Article",
        url: "https://dev.to/remojansen/agent-driven-development-add-the-next-paradigm-shift-in-software-engineering-1jfg",
      },
    ],
  },
  {
    date: "July 2025",
    title: "Anthropic's Claude Code Agents",
    description:
      "Claude Code running as background agents in remote dev environments. Multiple agents working asynchronously, persisting state.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "Coder.com",
    contributions: [
      "Background agents in remote dev environments",
      "Multiple agents working asynchronously, persisting state",
      "Environment design and tool access as key to effectiveness",
    ],
    relation:
      "Industry validation: agent behavior shaped by environment and memory. Confirms 'structure the environment' as primary design lever.",
    links: [
      {
        label: "Article",
        url: "https://coder.com/blog/inside-anthropics-ai-first-development",
      },
    ],
  },

  // ── Q4 2025 ──
  {
    date: "August 2025",
    title: "Persistent Memory in LLM Agents — Survey",
    description:
      "Survey of persistent memory patterns: episodic tables, hierarchical stores, multi-agent shared memory, selective retention.",
    category: "research",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Emergent Mind",
    contributions: [
      "Episodic tables (REMEMBERER)",
      "Hierarchical stores",
      "Multi-agent shared memory",
      "Selective retention, temporal chaining, abstraction",
    ],
    relation:
      "Conceptual umbrella under which NOVA sits. NOVA positioned within established taxonomy of persistent memory architectures.",
    links: [
      {
        label: "Topic",
        url: "https://www.emergentmind.com/topics/persistent-memory-for-llm-agents",
      },
    ],
  },
  {
    date: "September 2025",
    title: "The Evolution of Agentic AI",
    description:
      "Three-phase evolution toward agentic AI. Planning, tool use, reflection, collaboration, and memory as core design patterns.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "LF Networking",
    contributions: [
      "Three-phase evolution toward agentic AI",
      "Memory as first-class system component",
      "Agents moving from novelty to baseline abstraction",
    ],
    relation:
      "Field-level convergence around paradigm NOVA embodies. Agents operating over structured, external cognitive environments.",
    links: [
      {
        label: "Article",
        url: "https://lfnetworking.org/the-evolution-of-agentic-ai/",
      },
    ],
  },
  {
    date: "November 2025",
    title: "Persistent Memory in Gemini Code Assist",
    description:
      "Per-user memory storing prior interactions. Historical context for future coding sessions — persistent, user-scoped memory in production.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Google",
    contributions: [
      "Per-user memory storing prior interactions",
      "Historical context for future coding sessions",
      "Persistent, user-scoped memory in production coding tool",
    ],
    relation:
      "Product-level confirmation that persistent, user-scoped memory is table stakes. Industry catching up to pattern NOVA implemented.",
    links: [
      {
        label: "Release Notes",
        url: "https://developers.google.com/gemini-code-assist/resources/release-notes",
      },
    ],
  },
  {
    date: "November 2025",
    title: "MCP Tasks & Linux Foundation Move",
    description:
      "MCP donated to Agentic AI Foundation under Linux Foundation. Major spec release introducing Tasks for long-running operations.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    contributions: [
      "Major spec release introducing Tasks for long-running operations",
      "MCP becomes Linux Foundation–backed standard",
      "Registry approaches 2,000 servers",
    ],
    relation:
      "As NOVA's MCP server implementation finalizes, MCP itself becomes industry-standard substrate. Long-running task semantics match NOVA's design.",
    links: [
      {
        label: "Retrospective",
        url: "https://www.ajeetraina.com/one-year-of-model-context-protocol-from-experiment-to-industry-standard/",
      },
    ],
  },
  {
    date: "December 2025",
    title: "Google Interactions API",
    description:
      "Stateful, server-side agent runtime with persistent memory, background execution, and integrated tool calls. Positioned as 'remote operating system' for agents.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Google",
    contributions: [
      "/interactions endpoint as stateful, server-side agent runtime",
      "previous_interaction_id for persistent memory",
      "Background execution for long-running tasks",
      "Positioned as 'remote operating system' for agents with MCP support",
    ],
    relation:
      "Almost one-for-one alignment with NOVA's design. Google productizing what NOVA architected independently in early 2025.",
    links: [
      {
        label: "Article",
        url: "https://business.observernewsonline.com/observernewsonline/article/tokenring-2025-12-24-google-unveils-interactions-api-a-new-era-of-stateful-autonomous-ai-agents",
      },
    ],
  },

  // ── Q1 2026 ──
  {
    date: "January 2026",
    title: "Continuum Memory Architectures",
    description:
      "Defines Continuum Memory Architecture (CMA): persistent, selectively retained, temporally chained, abstracted memories. Critiques classic RAG as 'stateless lookup'.",
    category: "research",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "arXiv preprint",
    contributions: [
      "Defines Continuum Memory Architecture (CMA)",
      "Persistent, selectively retained, temporally chained memories",
      "Critiques classic RAG as 'stateless lookup'",
      "CMA as necessary primitive for long-horizon agents",
    ],
    relation:
      "Theoretical restatement of what NOVA already embodies. NOVA's Step 7 translation layer is a CMA implementation sketch.",
  },
  {
    date: "February 2026",
    title: "OpenAI — Unlocking the Codex Harness",
    description:
      "Codex App Server as standardized harness. JSON-RPC protocol with items, turns, threads. Persistent agent sessions with shared state.",
    category: "industry",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "OpenAI",
    contributions: [
      "Codex App Server as standardized harness",
      "JSON-RPC protocol with items, turns, threads",
      "Persistent agent sessions, shared state, multi-client support",
    ],
    relation:
      "Runtime analogue of NOVA MCP server. Validates 'harness layer' as distinct architectural component.",
    links: [
      {
        label: "Article",
        url: "https://openai.com/index/unlocking-the-codex-harness/",
      },
    ],
  },
  {
    date: "February 2026",
    title: "Harness Engineering Manifesto",
    description:
      "Every line of code written by Codex agents — ~10× speedup. The crucial ingredient is not the model but the harness. 'Humans steer. Agents execute.'",
    category: "convergence",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "OpenAI",
    contributions: [
      "Product built with every line of code written by Codex agents",
      "~10× speedup vs manual coding",
      "Crucial ingredient is the harness, not the model",
      "AGENTS.md as codebase map, structured docs/directories",
      "Clear acceptance criteria and feedback loops",
    ],
    relation:
      "Almost perfect articulation of NOVA's purpose. NOVA built structured cognitive harness (shards + metadata + orchestration) around stateless models. OpenAI's harness to Codex = NOVA to user workflows.",
  },
  {
    date: "February 2026",
    title: "Anthropic Partners with CodePath",
    description:
      "CodePath redesigns curriculum with Claude and Claude Code as central. AI-assisted development as default baseline.",
    category: "industry",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "Anthropic",
    contributions: [
      "Curriculum redesigned with Claude and Claude Code as central",
      "AI-assisted development as default baseline",
      "Entry-level roles redefined around AI-augmented workflows",
    ],
    relation:
      "Institutional validation of agent-first development as default skillset. Exactly the future NOVA anticipates and equips for.",
    links: [
      {
        label: "Announcement",
        url: "https://www.anthropic.com/news/anthropic-codepath-partnership",
      },
    ],
  },
];
