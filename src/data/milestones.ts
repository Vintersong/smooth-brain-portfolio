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
    date: "April 3, 2025",
    title: "Semantic Kernel Agent Framework GA",
    description:
      "Microsoft made the Semantic Kernel Agent framework generally available in SK 1.45 (.NET) and 1.27 (Python), providing a production-ready SDK for building AI agents and multi-agent systems with improved memory and orchestration primitives.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "Microsoft",
    links: [
      {
        label: "Blog",
        url: "https://devblogs.microsoft.com/semantic-kernel/semantic-kernel-agents-are-now-generally-available/",
      },
    ],
  },
  {
    date: "April 10, 2025",
    title: "ChatGPT Two-Track Memory Upgrade",
    description:
      "OpenAI updated ChatGPT memory so that, beyond explicit saved memories, it now references all past conversations via chat history to deliver more personalized, cross-session responses, with granular user controls for both channels.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "OpenAI",
    links: [
      {
        label: "Announcement",
        url: "https://openai.com/index/memory-and-new-controls-for-chatgpt/",
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
    date: "May 16, 2025",
    title: "Codex Software Engineering Agent (Research Preview)",
    description:
      "OpenAI launched Codex as a cloud-based software engineering agent in ChatGPT, powered by the codex-1 model, able to read repositories, run tests, and autonomously implement features and bug fixes in sandboxed environments.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "OpenAI",
    links: [
      {
        label: "Article",
        url: "https://www.maginative.com/article/meet-codex-openais-new-software-engineering-ai-agent/",
      },
    ],
  },
  {
    date: "May 18, 2025",
    title: "Azure AI Foundry Agent Service GA",
    description:
      "Microsoft announced the general availability of Azure AI Foundry Agent Service, enabling orchestration of multiple specialized agents with Agent-to-Agent (A2A) and Model Context Protocol support, unifying Semantic Kernel and AutoGen into a single agent-focused SDK.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "Microsoft",
    links: [
      {
        label: "Blog",
        url: "https://devblogs.microsoft.com/agent-framework/semantic-kernel-roadmap-h1-2025-accelerating-agents-processes-and-integration/",
      },
    ],
  },
  {
    date: "May 19, 2025",
    title: "Jules Asynchronous Coding Agent (Public Beta)",
    description:
      "Google introduced Jules as an asynchronous agentic coding assistant that clones repositories into secure cloud VMs, autonomously performs tasks like writing tests, fixing bugs, and adding features, then returns plans, reasoning, and diffs integrated into GitHub workflows.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "Google",
    links: [
      {
        label: "Article",
        url: "https://entelligence.ai/blogs/google-jules-free-async-ai-for-debugging-code",
      },
    ],
  },
  {
    date: "May 27, 2025",
    title: "Mistral Agents API",
    description:
      "Mistral announced its Agents API, a framework for building autonomous agents with built-in connectors for Python execution, web search, image generation, document retrieval, MCP tools, persistent conversational memory, and orchestration of collaborating agents.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "Mistral AI",
    links: [
      {
        label: "Article",
        url: "https://www.testingcatalog.com/mistral-ai-released-agents-api-for-agent-development/",
      },
    ],
  },
  {
    date: "June 2, 2025",
    title: "Codex and Agents SDK Enhancements",
    description:
      "OpenAI expanded its Codex software engineering agent and Agents SDK, adding broader access, TypeScript support, human-in-the-loop approvals, serialized agent state, and improved tracing.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "OpenAI",
    links: [
      {
        label: "Developer Docs",
        url: "https://developers.openai.com/cookbook/examples/agents_sdk/app_assistant_voice_agents/",
      },
    ],
  },
  {
    date: "June 12, 2025",
    title: "Claude Multi-Agent Research System",
    description:
      "Anthropic detailed Claude's Research feature as a multi-agent system using an orchestrator-worker pattern where a lead agent plans research, spawns specialized subagents that search in parallel, and aggregates their findings.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "Anthropic",
    links: [
      {
        label: "Engineering Blog",
        url: "https://www.anthropic.com/engineering/multi-agent-research-system",
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
    date: "June 22, 2025",
    title: "Gemini Agent Mode in Android Studio",
    description:
      "Google announced Agent Mode for Gemini in Android Studio, an experimental agentic capability that uses built-in IDE tools so Gemini can autonomously assist with Android app development tasks.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "Google",
    links: [
      {
        label: "Blog",
        url: "https://android-developers.googleblog.com/2025/06/agentic-ai-takes-gemini-in-android-studio-to-next-level.html",
      },
    ],
  },
  {
    date: "July 9, 2025",
    title: "Devstral Medium and Upgraded Devstral Small",
    description:
      "Mistral introduced Devstral Medium and an upgraded Devstral Small, coding models optimized for agentic workloads and generalized to different prompts and scaffolds.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "Mistral AI",
    links: [
      {
        label: "News",
        url: "https://mistral.ai/news/devstral-2507",
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
  {
    date: "July 30, 2025",
    title: "Deep Agents Concept and deepagents Library",
    description:
      "LangChain published its Deep Agents architecture and released the deepagents Python package, defining agents that combine planning tools, subagents, filesystem-based persistent memory, and detailed prompts to handle long-horizon multi-step tasks.",
    category: "industry",
    section: "Q2–Q3 2025: MCP Implementation & Industry Convergence",
    publication: "LangChain",
    links: [
      {
        label: "Article",
        url: "https://www.marktechpost.com/2025/10/20/meet-langchains-deepagents-library-and-a-practical-example-to-see-how-deepagents-actually-work-in-action/",
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
    date: "August 5, 2025",
    title: "Jules GA and Tiered Availability",
    description:
      "Google moved Jules out of beta into general availability, powered by Gemini 2.5 Pro, adding higher-limit Pro and Ultra tiers for intensive multi-agent coding workflows.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Google",
    links: [
      {
        label: "Article",
        url: "https://www.infoq.com/news/2025/08/google-jules/",
      },
    ],
  },
  {
    date: "August 28, 2025",
    title: "grok-code-fast-1 Agentic Coding Model",
    description:
      "xAI released grok-code-fast-1, a dedicated agentic coding model built with programming-focused pretraining and post-training on real pull requests, optimized for terminal and file-editing tools.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "xAI",
    links: [
      {
        label: "Article",
        url: "https://www.reuters.com/business/musks-xai-forays-into-agentic-coding-with-new-model-2025-08-28/",
      },
    ],
  },
  {
    date: "September 1, 2025",
    title: "LangChain and LangGraph 1.0 Alpha",
    description:
      "LangChain announced 1.0 alpha versions of LangChain and LangGraph, repositioning LangGraph as a low-level durable agent orchestration runtime and LangChain as an agent-centric framework built on top.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "LangChain",
    links: [
      {
        label: "Post",
        url: "https://x.com/LangChainAI/status/1962934869065191457",
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
    date: "September 28, 2025",
    title: "Claude Agent SDK Launch",
    description:
      "Anthropic published the Claude Agent SDK, a general-purpose agent harness that exposes Claude's agent loop, tools, and context management in Python and TypeScript for building autonomous agents.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Anthropic",
    links: [
      {
        label: "Engineering Blog",
        url: "https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk",
      },
    ],
  },
  {
    date: "October 2, 2025",
    title: "Jules Tools CLI Companion",
    description:
      "Google introduced Jules Tools, a command-line companion that makes the Jules asynchronous coding agent programmable and scriptable from the terminal.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Google",
    links: [
      {
        label: "Blog",
        url: "https://developers.googleblog.com/en/meet-jules-tools-a-command-line-companion-for-googles-async-coding-agent/",
      },
    ],
  },
  {
    date: "October 9, 2025",
    title: "Gemini Enterprise Agentic AI Platform",
    description:
      "Google Cloud launched Gemini Enterprise, a unified agentic AI platform combining Gemini models, first- and third-party agents, and orchestration technology to build multi-step data-connected enterprise agents.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Google Cloud",
    links: [
      {
        label: "Article",
        url: "https://www.constellationr.com/insights/news/google-cloud-launches-gemini-enterprise-eyes-agentic-ai-orchestration",
      },
    ],
  },
  {
    date: "October 15, 2025",
    title: "Microsoft Agent Framework Public Preview",
    description:
      "Microsoft announced the public preview of Microsoft Agent Framework, an open-source unified SDK and runtime merging AutoGen's multi-agent orchestration with Semantic Kernel foundations.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Microsoft",
    links: [
      {
        label: "Blog",
        url: "https://cloudsummit.eu/blog/microsoft-agent-framework-production-ready-convergence-autogen-semantic-kernel",
      },
    ],
  },
  {
    date: "October 15, 2025",
    title: "Agent Skills for Claude",
    description:
      "Anthropic introduced Agent Skills, filesystem-based folders of instructions, scripts, and resources that Claude can dynamically load to specialize on tasks across Claude apps, Claude Code, and the API.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Anthropic",
    links: [
      {
        label: "Engineering Blog",
        url: "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills",
      },
    ],
  },
  {
    date: "October 21, 2025",
    title: "LangChain 1.0 and LangGraph 1.0 GA",
    description:
      "LangChain released stable versions of LangChain 1.0 and LangGraph 1.0, the latter providing durable agent runtime with graph-based execution, checkpointing, short-term memory, and human-in-the-loop.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "LangChain",
    links: [
      {
        label: "Changelog",
        url: "https://changelog.langchain.com/announcements/langgraph-1-0-is-now-generally-available",
      },
    ],
  },
  {
    date: "October 28, 2025",
    title: "deepagents 0.2",
    description:
      "LangChain shipped deepagents v0.2, adding pluggable storage backends, large tool-result eviction, conversation-history summarization, and repair of interrupted tool calls.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "LangChain",
    links: [
      {
        label: "Changelog",
        url: "https://changelog.langchain.com/announcements/deepagents-0-2-release-for-more-autonomous-agents",
      },
    ],
  },
  {
    date: "November 4, 2025",
    title: "OpenHands Software Agent SDK",
    description:
      "Released a modular, model-agnostic toolkit refactoring the OpenHands agent stack into a composable SDK with event-sourced state, pluggable tools, multi-LLM routing, and sandboxed execution.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "OpenHands",
    links: [
      {
        label: "Paper",
        url: "https://deeplearn.org/arxiv/648116/the-openhands-software-agent-sdk:-a-composable-and-extensible-foundation-for-production-agents",
      },
    ],
  },
  {
    date: "November 16, 2025",
    title: "Live-SWE-agent — Self-Evolving Coding Agent",
    description:
      "Research paper introducing a software engineering agent that starts from a minimal scaffold and autonomously evolves its own tools and prompts at runtime.",
    category: "research",
    section: "Q4 2025: Ecosystem Maturity",
    authors: "University of Illinois Urbana-Champaign",
    publication: "arXiv preprint",
    links: [
      {
        label: "Topic",
        url: "https://www.emergentmind.com/topics/live-swe-agent",
      },
    ],
  },
  {
    date: "November 19, 2025",
    title: "Google Antigravity Agentic Development Platform",
    description:
      "Google launched Antigravity, an agentic development platform pairing an AI-powered editor with a Manager Surface for spawning and orchestrating multiple coding agents that learn from a shared knowledge base.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Google",
    links: [
      {
        label: "Blog",
        url: "https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/",
      },
    ],
  },
  {
    date: "November 25, 2025",
    title: "Effective Harnesses for Long-Running Agents",
    description:
      "Anthropic described engineering patterns in the Claude Agent SDK for long-running agents, including initializer and coding agents plus compaction strategies for multi-context-window work.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Anthropic",
    links: [
      {
        label: "Engineering Blog",
        url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
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
    date: "December 8, 2025",
    title: "DeepCode Open Agentic Coding Framework",
    description:
      "Research paper presenting a fully autonomous multi-agent coding framework combining blueprint distillation, stateful code memory, retrieval-augmented knowledge injection, and closed-loop error correction.",
    category: "research",
    section: "Q4 2025: Ecosystem Maturity",
    authors: "HKU Data Intelligence Lab",
    publication: "arXiv / HuggingFace",
    links: [
      {
        label: "Paper",
        url: "https://huggingface.co/papers/2512.07921",
      },
    ],
  },
  {
    date: "December 8, 2025",
    title: "Devstral 2 and Mistral Vibe CLI",
    description:
      "Mistral released Devstral 2 and the open-source Mistral Vibe CLI, a terminal-native coding agent for repository-scale agentic coding tasks.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Mistral AI",
    links: [
      {
        label: "Article",
        url: "https://introl.com/blog/mistral-vibe-cli-devstral-2-claude-code-competitor-2025",
      },
    ],
  },
  {
    date: "December 10, 2025",
    title: "Confucius Code Agent and Confucius SDK",
    description:
      "Research introducing CCA and the Confucius SDK, an open agent development platform with hierarchical working memory, persistent note-taking, modular tools, and a meta-agent that designs and refines coding agents.",
    category: "research",
    section: "Q4 2025: Ecosystem Maturity",
    authors: "Meta and Harvard",
    publication: "arXiv",
    links: [
      {
        label: "Paper",
        url: "https://arxiv.org/html/2512.10398v1",
      },
    ],
  },
  {
    date: "December 11, 2025",
    title: "Gemini Interactions API and Deep Research Agent",
    description:
      "Google added the Interactions API in beta as a unified interface for interacting with Gemini models and agents, and launched the Gemini Deep Research Agent for autonomous multi-step research tasks.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Google",
    links: [
      {
        label: "Blog",
        url: "https://blog.google/innovation-and-ai/products/2025-research-breakthroughs/",
      },
    ],
  },
  {
    date: "December 17, 2025",
    title: "Grok Voice Agent API",
    description:
      "xAI launched the Grok Voice Agent API, compatible with the OpenAI Realtime API, for building multilingual voice agents with tool calling and real-time data search.",
    category: "industry",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "xAI",
    links: [
      {
        label: "Article",
        url: "https://jls42.org/en/news/xai-decembre-2025",
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
  {
    date: "December 18, 2025",
    title: "Agent Skills Open Standard",
    description:
      "Anthropic updated Agent Skills to be an open standard, specifying portable filesystem-based skill packages that work across Claude apps, Claude Code, the Agent SDK, and third-party runtimes.",
    category: "convergence",
    section: "Q4 2025: Ecosystem Maturity",
    publication: "Anthropic",
    links: [
      {
        label: "Guide",
        url: "https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf",
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
    date: "February 3, 2026",
    title: "Claude Agent SDK Integration in Xcode",
    description:
      "Anthropic announced that Apple's Xcode now supports the Claude Agent SDK, enabling Claude-powered agents to handle long-running coding tasks within the Xcode IDE.",
    category: "industry",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "Anthropic",
    links: [
      {
        label: "Announcement",
        url: "https://www.anthropic.com/news/apple-xcode-claude-agent-sdk",
      },
    ],
  },
  {
    date: "February 14, 2026",
    title: "Intelligent AI Delegation Framework",
    description:
      "Google DeepMind proposed a framework for intelligent AI delegation on the agentic web, defining pillars like dynamic assessment, adaptive coordination, verifiable completion, trust and reputation, and security.",
    category: "research",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "Google DeepMind",
    links: [
      {
        label: "Article",
        url: "https://www.marktechpost.com/2026/02/15/google-deepmind-proposes-new-framework-for-intelligent-ai-delegation-to-secure-the-emerging-agentic-web-for-future-economies/",
      },
    ],
  },
  {
    date: "February 19, 2026",
    title: "Microsoft Agent Framework Release Candidate",
    description:
      "Microsoft Agent Framework reached Release Candidate status for .NET and Python, finalizing a stable API for single and multi-agent systems with checkpointing, human-in-the-loop, and multi-provider model support.",
    category: "industry",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "Microsoft",
    links: [
      {
        label: "Blog",
        url: "https://devblogs.microsoft.com/foundry/microsoft-agent-framework-reaches-release-candidate/",
      },
    ],
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
  {
    date: "March 18, 2026",
    title: "MuleRun Self-Evolving AI Workforce Platform",
    description:
      "MuleRun launched a self-evolving personal AI platform giving each user a dedicated 24/7 cloud VM with a three-tier evolution engine covering task memory, domain skill acquisition, and community knowledge sharing.",
    category: "industry",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "MuleRun",
    links: [
      {
        label: "Press Release",
        url: "https://www.prnewswire.com/news-releases/mulerun-launches-self-evolving-personal-ai-to-democratize-the-digital-workforce-302717108.html",
      },
    ],
  },
  {
    date: "March 25, 2026",
    title: "Deep Agents Context Engineering",
    description:
      "LangChain published a detailed post on context engineering for deep agents, covering persistent memory, skill loading, and long-horizon task management.",
    category: "industry",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "LangChain",
    links: [
      {
        label: "Article",
        url: "https://www.marktechpost.com/2026/03/15/langchain-releases-deep-agents-a-structured-runtime-for-planning-memory-and-context-isolation-in-multi-step-ai-agents/",
      },
    ],
  },
  {
    date: "March 25, 2026",
    title: "Closing the Knowledge Gap with Agent Skills",
    description:
      "Google published a blog post describing the problem of agents lacking specialized knowledge and how skill files loaded at invocation time address it.",
    category: "convergence",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "Google",
    links: [
      {
        label: "Blog",
        url: "https://developers.googleblog.com/",
      },
    ],
  },
  {
    date: "March 29, 2026",
    title: "Gemini for Business Skills Tab and Skill Architect",
    description:
      "Hidden features surfaced in Gemini for Business builds showing a Skills tab with pre-made skills for code review and PRD writing, plus a Skill Architect meta-skill for creating custom skills with name, description, and instructions fields.",
    category: "industry",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "Google",
    links: [
      {
        label: "Article",
        url: "https://www.testingcatalog.com/gemini-for-business-prepares-notebooklm-integration-and-skills/",
      },
    ],
  },
  {
    date: "March 29, 2026",
    title: "Custom Skills for Grok (In Development)",
    description:
      "xAI is developing a Custom Skills feature for Grok, letting users create and import modular instruction sets, currently visible in code hints but not yet launched.",
    category: "industry",
    section: "Q1 2026: Harness Engineering & Validation",
    publication: "xAI",
    links: [
      {
        label: "Article",
        url: "https://www.testingcatalog.com/xai-prepares-skills-support-for-grok-to-rival-claude-and-chatgpt/",
      },
    ],
  },
];
