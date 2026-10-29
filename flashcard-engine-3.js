function initFlashcards() {
  const container = document.getElementById('db-flashcards-root');
  if (!container) {
    setTimeout(initFlashcards, 100);
    return;
  }

  if (container.dataset.initialized) return;
  container.dataset.initialized = "true";

  const flashcardDatabase = [
  // ==========================================
  // SUBJECT 1: AI & LLM FUNDAMENTALS (1 - 14)
  // ==========================================
  {
    id: 1,
    subject: "ai-llm",
    tag: "AI Basics",
    question: "What is Artificial Intelligence (AI) at its core?",
    answer: "AI is an umbrella term for software systems that simulate human cognitive functions like reasoning, learning, and decision-making."
  },
  {
    id: 2,
    subject: "ai-llm",
    tag: "AI vs ML",
    question: "How does Machine Learning (ML) differ from traditional software?",
    answer: "Traditional code follows explicit 'if/else' rules written by humans, whereas ML learns patterns directly from data to make predictions."
  },
  {
    id: 3,
    subject: "ai-llm",
    tag: "LLM Definition",
    question: "What is a Large Language Model (LLM)?",
    answer: "An LLM is a massive neural network trained on vast amounts of text to understand, generate, and process human language using statistical probability."
  },
  {
    id: 4,
    subject: "ai-llm",
    tag: "Monk Metaphor",
    question: "In the Code Monk framework, how does an LLM generate text?",
    answer: "Like a monk reading a Sacred Scroll of pattern memory, the LLM predicts the most statistically probable next token based on context."
  },
  {
    id: 5,
    subject: "ai-llm",
    tag: "LLM Capabilities",
    question: "Are LLMs conscious digital brains?",
    answer: "No. LLMs do not 'think' or feel—they are high-speed pattern-matching engines calculating probability matrices."
  },
  {
    id: 6,
    subject: "ai-llm",
    tag: "Static Knowledge",
    question: "Why can't a raw LLM tell you today's weather or real-time news?",
    answer: "An LLM's knowledge is frozen at its training cutoff date; it lacks native real-time access to the live internet."
  },
  {
    id: 7,
    subject: "ai-llm",
    tag: "DevOps Value",
    question: "How do LLMs help DevOps engineers in daily workflows?",
    answer: "They parse unstructured logs, explain stack traces, summarize complex incident reports, and suggest code fixes."
  },
  {
    id: 8,
    subject: "ai-llm",
    tag: "Hallucination",
    question: "What is an AI Hallucination?",
    answer: "When an LLM confidently outputs plausible-sounding facts or code that are logically incorrect or entirely fabricated."
  },
  {
    id: 9,
    subject: "ai-llm",
    tag: "Determinism",
    question: "Why is standard software deterministic while LLM output is probabilistic?",
    answer: "Standard code always produces the exact same output for an input, while LLMs select outputs based on probability distributions."
  },
  {
    id: 10,
    subject: "ai-llm",
    tag: "KISS Principle",
    question: "What is the KISS Principle rule for evaluating LLM outputs?",
    answer: "Treat LLMs as hyper-fast text and pattern assistants, never as infallible sources of absolute truth."
  },
  {
    id: 11,
    subject: "ai-llm",
    tag: "Foundation Models",
    question: "What is a Foundation Model?",
    answer: "A large deep learning model trained on broad data at scale that can be adapted to a wide variety of downstream tasks."
  },
  {
    id: 12,
    subject: "ai-llm",
    tag: "Generative AI",
    question: "How is Generative AI defined relative to classic AI?",
    answer: "Generative AI specifically creates new content (text, code, images, audio) rather than just classifying or scoring existing data."
  },
  {
    id: 13,
    subject: "ai-llm",
    tag: "Log Analysis",
    question: "Why are LLMs effective at reading messy Kubernetes or CI/CD logs?",
    answer: "Their transformer pattern-matching excels at spotting semantic anomalies across long streams of unstructured text."
  },
  {
    id: 14,
    subject: "ai-llm",
    tag: "Prompting",
    question: "What is Prompt Engineering?",
    answer: "The practice of structuring text inputs effectively so an LLM produces accurate, useful, and contextually grounded answers."
  },

  // ==========================================
  // SUBJECT 2: LLM MECHANICS (15 - 28)
  // ==========================================
  {
    id: 15,
    subject: "llm-mechanics",
    tag: "Tokens",
    question: "What is a Token in Large Language Models?",
    answer: "A token is a sub-word chunk of text (~4 characters or 0.75 words) that serves as the basic unit of LLM processing."
  },
  {
    id: 16,
    subject: "llm-mechanics",
    tag: "Tokenization",
    question: "What does a Tokenizer do?",
    answer: "It converts raw text sentences into numerical token IDs that neural network matrices can process."
  },
  {
    id: 17,
    subject: "llm-mechanics",
    tag: "Weights & Parameters",
    question: "What are LLM Weights and Parameters?",
    answer: "They are the numerical strengths or 'knobs' inside neural connections learned during training that store probability rules."
  },
  {
    id: 18,
    subject: "llm-mechanics",
    tag: "70B Parameters",
    question: "What does '70 Billion Parameters' signify in an LLM?",
    answer: "It means the model's neural network contains 70 billion adjustable weight variables that shape its probability calculations."
  },
  {
    id: 19,
    subject: "llm-mechanics",
    tag: "Context Window",
    question: "What is an LLM Context Window?",
    answer: "The maximum number of tokens (prompt + output) the model can hold in its working memory at a single time."
  },
  {
    id: 20,
    subject: "llm-mechanics",
    tag: "Context Amnesia",
    question: "What happens when a prompt exceeds the model's Context Window?",
    answer: "Earlier text drops out of the active context buffer, causing the model to forget earlier parts of the conversation."
  },
  {
    id: 21,
    subject: "llm-mechanics",
    tag: "API Costs",
    question: "How are LLM API fees calculated by cloud providers?",
    answer: "Based on the total number of input tokens sent in the prompt plus output tokens generated by the model."
  },
  {
    id: 22,
    subject: "llm-mechanics",
    tag: "Transformer Architecture",
    question: "What key innovation allows Transformers to process text so fast?",
    answer: "Self-attention mechanisms that process all tokens simultaneously in parallel, rather than sequentially word-by-word."
  },
  {
    id: 23,
    subject: "llm-mechanics",
    tag: "Self-Attention",
    question: "What does the Self-Attention mechanism do?",
    answer: "It calculates mathematical relevance scores between every token in a prompt to capture context and relationships."
  },
  {
    id: 24,
    subject: "llm-mechanics",
    tag: "Temperature",
    question: "What does the 'Temperature' parameter control in LLMs?",
    answer: "Lower temperature (0.0) produces deterministic, conservative outputs; higher temperature (>0.7) increases randomness."
  },
  {
    id: 25,
    subject: "llm-mechanics",
    tag: "System Prompt",
    question: "What is a System Prompt?",
    answer: "A foundational set of top-level instructions that define the model's persona, rules, capabilities, and safety guardrails."
  },
  {
    id: 26,
    subject: "llm-mechanics",
    tag: "KV Cache",
    question: "What is Key-Value (KV) Caching in LLM inference?",
    answer: "Storing previously computed token attention states in memory to avoid recalculating the entire prompt on every new token."
  },
  {
    id: 27,
    subject: "llm-mechanics",
    tag: "Token Economics",
    question: "Why do long log dumps dramatically increase LLM API bills?",
    answer: "Verbose logs consume tens of thousands of input tokens per request, inflating token consumption costs exponentially."
  },
  {
    id: 28,
    subject: "llm-mechanics",
    tag: "Context Limits",
    question: "How do modern agents manage long sessions within limited context windows?",
    answer: "Through memory compaction, tool-result clearing, and summarization loops."
  },

  // ==========================================
  // SUBJECT 3: MODEL CONTEXT PROTOCOL (29 - 41)
  // ==========================================
  {
    id: 29,
    subject: "mcp",
    tag: "MCP Definition",
    question: "What is the Model Context Protocol (MCP)?",
    answer: "MCP is an open standard that connects AI applications to external tools, databases, and APIs like a universal 'USB-C port for AI'."
  },
  {
    id: 30,
    subject: "mcp",
    tag: "N x M Problem",
    question: "What is the N x M Integration Problem that MCP solves?",
    answer: "Connecting N AI clients to M data sources required N x M custom connectors. MCP simplifies this to N + M standard connections."
  },
  {
    id: 31,
    subject: "mcp",
    tag: "MCP Host",
    question: "What is an MCP Host?",
    answer: "The primary AI application environment where the user interacts, such as Claude Desktop, Cursor IDE, or VS Code."
  },
  {
    id: 32,
    subject: "mcp",
    tag: "MCP Client",
    question: "What role does the MCP Client play?",
    answer: "It lives inside the MCP Host and translates the LLM's requests into standardized JSON-RPC protocol messages."
  },
  {
    id: 33,
    subject: "mcp",
    tag: "MCP Server",
    question: "What is an MCP Server?",
    answer: "A lightweight service wrapper that exposes specific external data sources, executable tools, or prompt templates to AI clients."
  },
  {
    id: 34,
    subject: "mcp",
    tag: "Transport Methods",
    question: "What are the two standard Transport Methods in MCP?",
    answer: "Standard Input/Output (stdio) for local tools, and Server-Sent Events (SSE) / HTTP for remote cloud services."
  },
  {
    id: 35,
    subject: "mcp",
    tag: "Communication",
    question: "Which messaging protocol does MCP use under the hood?",
    answer: "JSON-RPC 2.0 messages for stateful, bidirectional communication between host and server."
  },
  {
    id: 36,
    subject: "mcp",
    tag: "Primitives",
    question: "What are the three core capability primitives exposed by an MCP Server?",
    answer: "1. Resources (read-only data/files), 2. Tools (executable actions), and 3. Prompts (pre-built prompt templates)."
  },
  {
    id: 37,
    subject: "mcp",
    tag: "MCP vs RAG",
    question: "How does MCP differ from Retrieval-Augmented Generation (RAG)?",
    answer: "RAG passively retrieves static indexed documents for text generation; MCP actively executes two-way tool actions and live queries."
  },
  {
    id: 38,
    subject: "mcp",
    tag: "MCP vs APIs",
    question: "How does MCP differ from traditional REST APIs?",
    answer: "APIs require hardcoded endpoints; MCP exposes a machine-readable capability surface that AI discovers dynamically at runtime."
  },
  {
    id: 39,
    subject: "mcp",
    tag: "Security",
    question: "What is the primary security requirement for MCP tool execution?",
    answer: "Explicit user consent, scoped permissions, TLS encryption, and human-in-the-loop confirmation for sensitive write actions."
  },
  {
    id: 40,
    subject: "mcp",
    tag: "DevOps Value",
    question: "How does MCP transform a DevOps engineer's workflow?",
    answer: "An LLM can directly query live Postgres DBs, inspect CloudWatch logs, and push alerts to Slack through unified MCP servers."
  },
  {
    id: 41,
    subject: "mcp",
    tag: "Vendor Lock-In",
    question: "Why does MCP prevent vendor lock-in for enterprise AI?",
    answer: "Tool developers write an MCP server once, making it instantly compatible with any AI client or model supporting the standard."
  },

  // ==========================================
  // SUBJECT 4: AGENTIC AI & REACT LOOPS (42 - 54)
  // ==========================================
  {
    id: 42,
    subject: "agentic-ai",
    tag: "Agent Definition",
    question: "What is the core practitioner test for whether a system is an AI Agent?",
    answer: "If there is no loop, it's not an agent. Real agents execute autonomous Observe -> Plan -> Act -> Reflect decision loops."
  },
  {
    id: 43,
    subject: "agentic-ai",
    tag: "Chatbot vs Agent",
    question: "How does an AI Agent differ from a traditional Chatbot?",
    answer: "Chatbots give single-turn passive text advice; Agents actively break down goals, call tools, inspect results, and complete tasks."
  },
  {
    id: 44,
    subject: "agentic-ai",
    tag: "ReAct Pattern",
    question: "What is the ReAct (Reasoning + Acting) pattern?",
    answer: "An agentic loop alternating between Thought (reasoning), Action (calling a tool), and Observation (evaluating tool output)."
  },
  {
    id: 45,
    subject: "agentic-ai",
    tag: "Reflection Pattern",
    question: "How does the Reflection design pattern work?",
    answer: "An agent generates an output, critiques its own draft against rules or test outputs, and iteratively rewrites it before finalizing."
  },
  {
    id: 46,
    subject: "agentic-ai",
    tag: "Plan & Execute",
    question: "What is the Plan-and-Execute agent architecture?",
    answer: "A pattern where a Planner LLM generates a multi-step task graph upfront, and Executor workers run the steps without re-planning every turn."
  },
  {
    id: 47,
    subject: "agentic-ai",
    tag: "Orchestrator-Worker",
    question: "What is the Orchestrator-Worker multi-agent pattern?",
    answer: "A central Lead Agent receives a goal, delegates sub-tasks dynamically to specialized sub-agents, and synthesizes their results."
  },
  {
    id: 48,
    subject: "agentic-ai",
    tag: "4 Core Modules",
    question: "What are the 4 fundamental building blocks of an AI Agent?",
    answer: "1. Planning module, 2. Memory systems (short/long-term), 3. Tool-calling interface, and 4. Reflection/Reasoning loops."
  },
  {
    id: 49,
    subject: "agentic-ai",
    tag: "Agent Safety",
    question: "How do you prevent an AI Agent from getting stuck in an infinite loop?",
    answer: "Enforce explicit maximum iteration bounds, execution timeout thresholds, and human-in-the-loop escalation gates."
  },
  {
    id: 50,
    subject: "agentic-ai",
    tag: "CRITIC Pattern",
    question: "How does the CRITIC reflection variant prevent hallucinated feedback?",
    answer: "It grounds its critiques using deterministic external tools (linters, unit tests, compilers) rather than model self-judgment."
  },
  {
    id: 51,
    subject: "agentic-ai",
    tag: "Hierarchical Agents",
    question: "When is a Hierarchical Multi-Agent architecture necessary?",
    answer: "When domain complexity is too large for one orchestrator, requiring a tree of strategic, supervisory, and worker agent layers."
  },
  {
    id: 52,
    subject: "agentic-ai",
    tag: "Agent Memory",
    question: "What is the difference between Short-Term and Long-Term Agent Memory?",
    answer: "Short-term memory holds the current session's tool outputs; long-term memory persists facts across sessions via vector databases."
  },
  {
    id: 53,
    subject: "agentic-ai",
    tag: "Semantic Cache",
    question: "How does Semantic Caching optimize agentic AI operational costs?",
    answer: "It caches previous tool/agent responses based on query intent meaning, preventing redundant LLM re-computations."
  },
  {
    id: 54,
    subject: "agentic-ai",
    tag: "Human in the Loop",
    question: "Why is Human-in-the-Loop (HITL) considered a first-class agent pattern?",
    answer: "Because high-risk actions (deploying code, financial trades, deleting DBs) require human authorization before execution."
  },
{
    "id": 55,
    "subject": "docker-fundamentals",
    "tag": "Philosophy & Mindset",
    "question": "What does the Indian Monk mindset represent in Docker container architecture?",
    "answer": "It represents treating containers as clean, ephemeral, stateless micro-environments that hold no attachment to host resources and leave zero residual footprint when destroyed."
  },
{
    "id": 56,
    "subject": "docker-fundamentals",
    "tag": "Philosophy & Mindset",
    "question": "How does the KISS Principle apply to Docker design?",
    "answer": "It emphasizes keeping Dockerfiles, Compose files, and CLI workflows minimal and readable, focusing on the core 20% of commands that deliver 80% of production value without over-engineering."
  },
  {
    "id": 57,
    "subject": "docker-fundamentals",
    "tag": "Philosophy & Mindset",
    "question": "How does Nudge Theory shape container developer habits?",
    "answer": "It uses smart default configurations—such as non-root users, .dockerignore templates, and explicit memory limits—to guide developers toward secure, self-correcting habits naturally."
  },
  {
    "id": 58,
    "subject": "docker-fundamentals",
    "tag": "Container Foundations",
    "question": "What is the primary architectural difference between a Virtual Machine and a Container?",
    "answer": "A Virtual Machine packages a full guest OS, hypervisor, and virtual hardware, whereas a container shares the host Linux kernel and isolates only the application process and its dependencies."
  },
  {
    "id": 59,
    "subject": "docker-fundamentals",
    "tag": "Container Foundations",
    "question": "What occurs when you run a container with the --rm flag?",
    "answer": "The container and its temporary writable layer are automatically deleted immediately upon exit, preventing disk space bloat on the host machine."
  },
  {
    "id": 60,
    "subject": "docker-fundamentals",
    "tag": "Real-World Scenarios",
    "question": "How should ephemeral containers be used for testing payment gateways in fintech?",
    "answer": "By launching isolated mock server containers with '--rm' to run test API requests and self-destruct immediately, ensuring no sensitive tokens or mock data persist on local disks."
  },
  {
    "id": 61,
    "subject": "docker-fundamentals",
    "tag": "Real-World Scenarios",
    "question": "How do resource limit flags (--memory and --cpus) protect e-commerce platforms during high-traffic sales?",
    "answer": "They set hard boundary limits on container RAM and CPU consumption, preventing a bug or memory leak in a single microservice from crashing the entire host server."
  },
  {
    "id": 62,
    "subject": "docker-fundamentals",
    "tag": "Real-World Scenarios",
    "question": "Why is a tmpfs mount used when processing sensitive Healthcare/PHI data in containers?",
    "answer": "Mounting a tmpfs volume stores sensitive files purely inside volatile host RAM, ensuring patient data completely vanishes at the hardware level when the container stops."
  },
  {
    "id": 63,
    "subject": "docker-fundamentals",
    "tag": "Multi-Stage Builds",
    "question": "Why are multi-stage Dockerfiles essential for compiled languages like Java?",
    "answer": "They separate the heavy compilation stage (JDK, Maven/Gradle, source code) from the runtime stage (JRE), dramatically reducing final image sizes from ~850MB to ~150MB."
  },
  {
    "id": 64,
    "subject": "docker-fundamentals",
    "tag": "Multi-Stage Builds",
    "question": "Why should 'COPY pom.xml .' be placed before 'COPY src ./src' in a Dockerfile?",
    "answer": "It maximizes Docker layer caching by downloading Maven dependencies first, preventing unnecessary re-downloads on every build unless pom.xml changes."
  },
  {
    "id": 65,
    "subject": "docker-fundamentals",
    "tag": "Multi-Stage Builds",
    "question": "What is the syntax for copying compiled artifacts from a previous build stage?",
    "answer": "COPY --from=<stage_name> /path/in/builder /path/in/runner (for example: COPY --from=builder /app/target/app.jar app.jar)."
  },
  {
    "id": 66,
    "subject": "docker-fundamentals",
    "tag": "Storage & Persistence",
    "question": "What is the difference between an Image, a Container, and a Volume?",
    "answer": "An Image is a read-only blueprint; a Container is a running instance with a thin writable layer; a Volume is an independent directory on the host managed by Docker for persistent data."
  },
  {
    "id": 67,
    "subject": "docker-fundamentals",
    "tag": "Storage & Persistence",
    "question": "How do named Docker Volumes preserve data across container recreations?",
    "answer": "Volumes exist outside the container filesystem lifecycle, allowing new containers to mount the exact same volume directory and access existing files seamlessly."
  },
  {
    "id": 68,
    "subject": "docker-fundamentals",
    "tag": "Container Networking",
    "question": "Why does connecting containers via 'localhost' fail in multi-container setups?",
    "answer": "Each container runs inside its own isolated network namespace, so 'localhost' inside a container refers strictly to itself, not to host or neighboring containers."
  },
  {
    "id": 69,
    "subject": "docker-fundamentals",
    "tag": "Container Networking",
    "question": "How do custom Docker bridge networks enable inter-container communication?",
    "answer": "Bridge networks provide automatic internal DNS resolution, allowing containers connected to the same network to discover and talk to each other using their container names."
  },
  {
    "id": 70,
    "subject": "docker-fundamentals",
    "tag": "Docker Compose",
    "question": "What is the primary advantage of Docker Compose over standalone docker run commands?",
    "answer": "Docker Compose allows developers to define and launch the entire multi-container architecture (services, networks, volumes, environment vars) declaratively using a single YAML file."
  },
  {
    "id": 71,
    "subject": "docker-fundamentals",
    "tag": "Docker Compose",
    "question": "How do healthchecks and 'depends_on' conditions collaborate in docker-compose.yml?",
    "answer": "Using 'depends_on: <service>: condition: service_healthy' ensures an application container waits to launch until its database container passes its healthcheck (e.g., pg_isready)."
  },
  {
    "id": 72,
    "subject": "docker-fundamentals",
    "tag": "Docker Compose",
    "question": "What is the recommended practice for managing environment configuration in Docker Compose?",
    "answer": "Reference environment variables inside docker-compose.yml from an uncommitted local .env file, while committing a template .env.example file to version control for documentation."
  },
  {
    "id": 73,
    "subject": "docker-fundamentals",
    "tag": "Docker Compose",
    "question": "What does the 'restart: unless-stopped' policy achieve in production Compose stacks?",
    "answer": "It creates a self-healing service that automatically restarts the container if it crashes or if the host daemon reboots, unless manually stopped by an administrator."
  },
  {
    "id": 74,
    "subject": "docker-fundamentals",
    "tag": "Branching & Tagging",
    "question": "What is the fundamental rule of container image tagging in production registries?",
    "answer": "Container images must be immutable; existing release tags should never be overwritten. Any code update requires incrementing the version tag or appending a new Git commit SHA."
  },
  {
    "id": 75,
    "subject": "docker-fundamentals",
    "tag": "Branching & Tagging",
    "question": "How does Trunk-Based Development work with Docker container lifecycles?",
    "answer": "Every Pull Request triggers an automated build tagged with the PR ID (e.g., :pr-142) for ephemeral preview testing, which is destroyed automatically when the PR merges into main."
  },
  {
    "id": 76,
    "subject": "docker-fundamentals",
    "tag": "Branching & Tagging",
    "question": "What characterizes Feature Branching for staging environments in Docker workflows?",
    "answer": "Pushing to a feature branch builds an image tagged with the feature name (e.g., :feature-payment-v2) deployed to a shared staging environment for manual QA and review."
  },
  {
    "id": 77,
    "subject": "docker-fundamentals",
    "tag": "Branching & Tagging",
    "question": "How does GitFlow structure image tagging for compliance-audited releases?",
    "answer": "Development builds use integration tags (:dev-latest), release candidates use versioned candidate tags (:v2.0.0-rc1), and final merges use immutable Semantic Versioning (:v2.0.0)."
  },
  {
    "id": 78,
    "subject": "docker-fundamentals",
    "tag": "Branching & Tagging",
    "question": "Why should the mutable ':latest' tag be avoided in production deployments?",
    "answer": "Using ':latest' creates ambiguity regarding which exact code commit is running, breaks auditability, and prevents instantaneous rollbacks to prior known-good images."
  },
  {
    "id": 79,
    "subject": "docker-fundamentals",
    "tag": "Diagnostics & Troubleshooting",
    "question": "What are the four steps of the Zen Diagnostic Routine in order?",
    "answer": "1. docker logs (listen to stdout/stderr), 2. docker inspect (examine exit code/config), 3. docker exec -it (step inside environment), 4. docker stats (observe real-time RAM/CPU)."
  },
  {
    "id": 80,
    "subject": "docker-fundamentals",
    "tag": "Diagnostics & Troubleshooting",
    "question": "What does Exit Code 137 indicate, and what is its root cause in Java containers?",
    "answer": "Exit Code 137 is an OOMKilled signal. Legacy JVMs read total host physical RAM rather than container memory limits, causing garbage collection delays until the kernel kills the process."
  },
  {
    "id": 81,
    "subject": "docker-fundamentals",
    "tag": "Diagnostics & Troubleshooting",
    "question": "How do you fix Java JVM memory starvation (Exit Code 137) inside Docker containers?",
    "answer": "Set '-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0' in JAVA_OPTS, ensuring the JVM heap caps at 75% of allocated container RAM, leaving room for native JVM memory."
  },
  {
    "id": 82,
    "subject": "docker-fundamentals",
    "tag": "Diagnostics & Troubleshooting",
    "question": "What causes a 'bind: address already in use' error during container startup?",
    "answer": "Another process or container on the host machine is already listening on the requested host port. The solution is to remap the host port (e.g., -p 8081:8080)."
  },
  {
    "id": 83,
    "subject": "docker-fundamentals",
    "tag": "Diagnostics & Troubleshooting",
    "question": "Why does a container exit immediately with Exit Code 0 if its entrypoint command ends with '&'?",
    "answer": "Docker containers only stay alive as long as their primary PID 1 foreground process runs. Running a script in the background causes PID 1 to exit, prompting Docker to stop the container."
  },
  {
    "id": 84,
    "subject": "docker-fundamentals",
    "tag": "CI/CD & Security",
    "question": "What is the purpose of a .dockerignore file?",
    "answer": "It excludes unwanted files (.git history, local secrets, temporary IDE files, build targets) from the Docker build context, accelerating build times and preventing credential leaks."
  },
  {
    "id": 85,
    "subject": "docker-fundamentals",
    "tag": "CI/CD & Security",
    "question": "Why is running containers as a non-root system user (USER appuser) a critical security practice?",
    "answer": "It drops superuser privileges inside the container, mitigating the risk of privilege escalation or host system compromise in the event of an application exploit."
  },
  {
    "id": 86,
    "subject": "docker-fundamentals",
    "tag": "CI/CD & Security",
    "question": "How does automated GitHub Actions CI/CD streamline container delivery?",
    "answer": "It automatically checks out code, authenticates with container registries (e.g., GHCR), builds multi-stage images, and publishes immutable tagged images upon every Git push."
  },
  {
    "id": 87,
    "subject": "docker-fundamentals",
    "tag": "CI/CD & Security",
    "question": "How does vulnerability scanning (e.g., Trivy) protect CI/CD deployment pipelines?",
    "answer": "It automatically audits image layers for known CVEs during the build phase and fails the pipeline (exit-code 1) before vulnerable images reach production registries."
  },
  {
    "id": 88,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "What are Google Distroless base images and why are they highly secure?",
    "answer": "Distroless images contain only the application and its runtime dependencies (e.g., JRE), omitting Linux shells (sh/bash), package managers, and CLI tools to eliminate attack vectors."
  },
  {
    "id": 89,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "How does running containers with '--read-only' enhance security?",
    "answer": "It locks the root filesystem as read-only at runtime, preventing attackers from downloading malicious binaries or modifying configuration files if an application vulnerability occurs."
  },
  {
    "id": 90,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "How should BuildKit secret mounts (RUN --mount=type=secret) be used in Dockerfiles?",
    "answer": "They temporarily mount build credentials into volatile RAM during a specific RUN command, ensuring secrets never persist inside image layers or metadata history."
  },
  {
    "id": 91,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "What is achieved by passing '--cap-drop=ALL' to docker run?",
    "answer": "It strips all inherited Linux kernel capabilities from the container, enforcing a zero-trust runtime model where only strictly required system permissions are re-added."
  },
  {
    "id": 92,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "What security boundary does '--security-opt=no-new-privileges:true' enforce?",
    "answer": "It prevents child processes running inside the container from gaining elevated privileges through setuid or setgid binaries or system calls."
  },
  {
    "id": 93,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "What is Rootless Docker Mode and what protection does it provide?",
    "answer": "Rootless mode executes the Docker daemon and containers inside a unprivileged user namespace, ensuring host root privileges remain untouched even during a total container breakout."
  },
  {
    "id": 94,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "How does OCI image labeling (org.opencontainers.image.revision) enhance supply chain traceability?",
    "answer": "It embeds immutable key-value metadata into the container manifest, recording the exact Git commit SHA, build date, and build pipeline URL directly inside the image."
  },
  {
    "id": 95,
    "subject": "docker-fundamentals",
    "tag": "Maintenance & Cleanup",
    "question": "What does the command 'docker system prune --volumes' accomplish?",
    "answer": "It reclaims host disk space by purging all stopped containers, unused networks, dangling build images, and unreferenced build caches in a single operation."
  },
 {
    "id": 96,
    "subject": "jenkins",
    "tag": "Monk Mindset",
    "question": "How does the Indian Monk concept of 'Ekagrata' (single-pointed focus) apply to Jenkins Controller architecture?",
    "answer": "The Controller (Mind) must focus purely on coordinating workloads and webhooks—it should never execute heavy build compilations or unit tests directly on itself."
  },
  {
    "id": 97,
    "subject": "jenkins",
    "tag": "KISS Principle",
    "question": "What is the fundamental KISS feedback loop for a clean Jenkins job?",
    "answer": "Trigger Event (Commit/PR) -> Isolated Clean Execution -> Immediate Status Feedback. Any additional unneeded step adds operational noise."
  },
  {
    "id": 98,
    "subject": "jenkins",
    "tag": "Nudge Theory",
    "question": "How does Nudge Theory improve developer code quality before code reaches the main branch?",
    "answer": "By embedding automated fast-linting and visual status indicators directly into Pull Requests, gently guiding developers to fix issues locally."
  },
  {
    "id": 99,
    "subject": "jenkins",
    "tag": "Infrastructure",
    "question": "Why must `/var/jenkins_home` be strictly decoupled from the underlying operating system binaries?",
    "answer": "To enforce 'Sthirata' (firmness of foundation)—allowing the stateless Jenkins runtime or container to be upgraded instantly without risking data loss."
  },
  {
    "id": 100,
    "subject": "jenkins",
    "tag": "Production Setup",
    "question": "Why should a production Linux Jenkins installation always be fronted by an Nginx reverse proxy?",
    "answer": "To enforce TLS 1.3 encryption, manage SSL certificates, and prevent raw, unencrypted exposure of port 8080 to public or internal networks."
  },
  {
    "id": 101,
    "subject": "jenkins",
    "tag": "Docker Setup",
    "question": "How does Docker Compose embody the Monk principle of 'Sthirata' in regional Jenkins deployments?",
    "answer": "It provides a single declarative file for volume persistence, health checks, and port bindings, eliminating manual OS configuration drift."
  },
  {
    "id": 102,
    "subject": "jenkins",
    "tag": "Authentication",
    "question": "Why avoid local user databases inside a production Jenkins controller?",
    "answer": "Local accounts lack central Multi-Factor Authentication (MFA) and orphan tracking; production security demands identity federation via SAML 2.0 or OIDC."
  },
  {
    "id": 103,
    "subject": "jenkins",
    "tag": "Authorization & RBAC",
    "question": "How does Folder-Level Role-Based Access Control (RBAC) enforce the Principle of Least Privilege?",
    "answer": "By mapping permissions using folder regular expressions (e.g., 'orion-.*'), ensuring developers only see and build what belongs to their project scope."
  },
  {
    "id": 104,
    "subject": "jenkins",
    "tag": "Secret Security",
    "question": "How does `withCredentials` in Declarative Pipelines act as a security nudge?",
    "answer": "It dynamically binds secrets to runtime environment variables while automatically masking sensitive strings ('****') in build console outputs."
  },
  {
    "id": 105,
    "subject": "jenkins",
    "tag": "Pipeline-as-Code",
    "question": "Why favor Declarative `Jenkinsfile` syntax over legacy GUI Freestyle jobs?",
    "answer": "Declarative syntax lives in SCM, undergoes peer code reviews, supports multibranch discovery, and enforces structured error handling."
  },
  {
    "id": 106,
    "subject": "jenkins",
    "tag": "Shared Libraries",
    "question": "How do Jenkins Shared Libraries apply the KISS principle across microservice fleets?",
    "answer": "They encapsulate repetitive build, security scanning, and notification steps into central Groovy variables (`vars/`), keeping app `Jenkinsfile`s under 5 lines."
  },
  {
    "id": 107,
    "subject": "jenkins",
    "tag": "Monk Discipline",
    "question": "Why is invoking `cleanWs()` in the pipeline `post` block considered essential workspace hygiene?",
    "answer": "It enforces 'Shuddhi' (purity)—guaranteeing that worker agents purge temporary files, cached credentials, and build residue before returning to the pool."
  },
  {
    "id": 108,
    "subject": "jenkins",
    "tag": "Ephemeral Agents",
    "question": "How does the Monk concept of 'Anitya' (impermanence) eliminate 'snowflake' build servers?",
    "answer": "By treating worker agents as disposable, single-use containers that spin up on demand, execute isolated tasks, and immediately self-destruct."
  },
  {
    "id": 109,
    "subject": "jenkins",
    "tag": "Kubernetes Scaling",
    "question": "What is the advantage of executing integration tests inside Kubernetes Pod templates with sidecars?",
    "answer": "Application code and ephemeral database containers (e.g., PostgreSQL) run within the same pod boundary on `localhost`, isolated from other builds."
  },
  {
    "id": 110,
    "subject": "jenkins",
    "tag": "Performance Tuning",
    "question": "How can dynamic ephemeral agents achieve fast build speeds without storing project state?",
    "answer": "By mounting persistent host cache directories (e.g., `~/.m2`, `~/.ccache`) into the ephemeral container without leaving project source state behind."
  },
  {
    "id": 111,
    "subject": "jenkins",
    "tag": "Zero-GUI Admin",
    "question": "What is the fundamental rule of Jenkins Configuration as Code (JCasC)?",
    "answer": "If a system setting is not explicitly declared in `jenkins.yaml`, it does not exist. The Jenkins GUI becomes a read-only dashboard."
  },
  {
    "id": 112,
    "subject": "jenkins",
    "tag": "Plugin Governance",
    "question": "How does pinning plugin versions in `plugins.txt` enforce system reproducibility?",
    "answer": "It guarantees identical, battle-tested plugin dependency trees across all regional controllers using `jenkins-plugin-cli` during container assembly."
  },
  {
    "id": 113,
    "subject": "jenkins",
    "tag": "Maintenance Rituals",
    "question": "How do `/quietDown` and `/safeRestart` enable peaceful controller maintenance?",
    "answer": "`/quietDown` blocks new incoming jobs to drain active queues peacefully, allowing running pipelines to finish before `/safeRestart` reboots the server."
  },
  {
    "id": 114,
    "subject": "jenkins",
    "tag": "Observability",
    "question": "Which three high-signal metrics reflect a calm, healthy Jenkins sanctuary?",
    "answer": "Build Queue Wait Time, Controller JVM Memory/CPU Utilization, and Active Executor Saturation (monitored via Prometheus and Grafana)."
  },
  {
    "id": 115,
    "subject": "jenkins",
    "tag": "JVM Optimization",
    "question": "Why set initial heap (`-Xms`) equal to max heap (`-Xmx`) when configuring Jenkins with G1GC?",
    "answer": "It eliminates dynamic memory resizing overhead and significantly reduces stop-the-world Garbage Collection pauses during peak commit surges."
  },
  {
    "id": 116,
    "subject": "jenkins",
    "tag": "Disaster Recovery",
    "question": "What is the Monk discipline of automated backup rituals?",
    "answer": "Periodically synchronizing essential state files (`config.xml`, `secrets/`, `jobs/`) to encrypted cloud vaults while excluding temporary workspace noise."
  },
{
    "id": 117,
    "subject": "gitlab-ci",
    "tag": "Monk Philosophy",
    "question": "What is the core objective of the 'Context of Monks' in GitLab CI workspace setup?",
    "answer": "To create an unburdened, distraction-free environment that eliminates technical noise and allows developers to focus with single-minded clarity."
  },
  {
    "id": 118,
    "subject": "gitlab-ci",
    "tag": "KISS Principle",
    "question": "How does the KISS Principle simplify group hierarchies and access permissions?",
    "answer": "By eliminating complex nested structures—if a developer cannot identify where their repository belongs or what permissions they have in 10 seconds, it is over-engineered."
  },
  {
    "id": 119,
    "subject": "gitlab-ci",
    "tag": "Nudge Theory",
    "question": "How does Nudge Theory enforce security governance without blocking developer velocity?",
    "answer": "By making safe behavior the effortless default path, such as safe permission matrices, automatic variable masking, and 1-line security scanning templates."
  },
  {
    "id": 120,
    "subject": "gitlab-ci",
    "tag": "RBAC & User Management",
    "question": "Which GitLab role should be assigned to QA engineers or external auditors under Least Privilege?",
    "answer": "The Reporter role, providing read-only access to repository source code and execution logs without permission to alter code or branches."
  },
  {
    "id": 121,
    "subject": "gitlab-ci",
    "tag": "Token Governance",
    "question": "Why are Project Access Tokens preferred over Personal Access Tokens for CI/CD automation?",
    "answer": "Project access tokens are tightly scoped to a single repository, inherit project permissions, and terminate automatically if the repository is archived."
  },
  {
    "id": 122,
    "subject": "gitlab-ci",
    "tag": "Runner Architecture",
    "question": "Why is the Shell executor discouraged for standard microservice pipelines?",
    "answer": "It lacks container isolation, allowing concurrent jobs to pollute host memory, modify system files, and create state dependency baggage."
  },
  {
    "id": 123,
    "subject": "gitlab-ci",
    "tag": "Monk Philosophy",
    "question": "How do Docker and Kubernetes executors align with the Monk context of stateless purity?",
    "answer": "Like a monk who accumulates no unnecessary possessions, stateless executors start every job in a pristine container and leave zero residual state upon completion."
  },
  {
    "id": 124,
    "subject": "gitlab-ci",
    "tag": "Runner Security",
    "question": "What authentication token prefix replaces legacy registration tokens to prevent compute hijacking?",
    "answer": "The glrt- prefix, providing secure, traceable authentication when registering gitlab-runner instances."
  },
  {
    "id": 125,
    "subject": "gitlab-ci",
    "tag": "KISS Principle",
    "question": "How should build tools and compilers be managed across runners under the KISS Principle?",
    "answer": "Package all build dependencies inside versioned container images rather than manually installing software packages on bare-metal host servers."
  },
  {
    "id": 126,
    "subject": "gitlab-ci",
    "tag": "Minimalist YAML",
    "question": "What is the purpose of the top-level default: block in .gitlab-ci.yml?",
    "answer": "To declare repository-wide attributes like container images, retries, and timeouts once, keeping individual job definitions clean and uncluttered."
  },
  {
    "id": 127,
    "subject": "gitlab-ci",
    "tag": "State Management",
    "question": "What is the key architectural difference between GitLab CI Artifacts and Cache?",
    "answer": "Artifacts pass compiled build outputs between stages in a single pipeline run, whereas Cache preserves external dependencies across different pipeline runs."
  },
  {
    "id": 128,
    "subject": "gitlab-ci",
    "tag": "Nudge Theory",
    "question": "How does lockfile-based caching nudge developers toward faster build execution times?",
    "answer": "By automatically reusing dependency caches (such as .m2 or node_modules) based on pom.xml or package-lock.json hashes without manual scripting."
  },
  {
    "id": 129,
    "subject": "gitlab-ci",
    "tag": "CI Administration",
    "question": "How does the 'Keep Latest Artifact' policy support storage housekeeping?",
    "answer": "It automatically prunes intermediate, outdated build outputs while preserving only the artifact from the most recent successful pipeline."
  },
  {
    "id": 130,
    "subject": "gitlab-ci",
    "tag": "Quota Governance",
    "question": "How can administrators prevent a single repository from monopolizing shared compute resources?",
    "answer": "By setting monthly compute minute caps and pipeline concurrency ceilings at the sub-group level."
  },
  {
    "id": 131,
    "subject": "gitlab-ci",
    "tag": "Pipeline Security",
    "question": "What is the difference between a Masked Variable and a Protected Variable?",
    "answer": "Masked variables obfuscate secret values with [MASKED] in logs, whereas Protected variables are restricted exclusively to jobs running on protected branches or tags."
  },
  {
    "id": 132,
    "subject": "gitlab-ci",
    "tag": "KISS Principle",
    "question": "What is the simplest way to embed SAST and Secret Detection into a GitLab CI pipeline?",
    "answer": "Include GitLab's official native security templates using a single include: statement inside your .gitlab-ci.yml file."
  },
  {
    "id": 133,
    "subject": "gitlab-ci",
    "tag": "Deployment Gates",
    "question": "How do Protected Environments with manual triggers secure production releases?",
    "answer": "They restrict deployment execution rights to authorized roles and require explicit approval triggers before code reaches live environments."
  },
{
    "id": 134,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Identity",
    "question": "How does the Indian Monk principle of 'Aparigraha' apply to Azure DevOps identity?",
    "answer": "By eliminating administrative clutter, unlinked local accounts, and loose permissions to maintain one sacred source of truth via Azure Entra ID."
  },
  {
    "id": 135,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Security Defaults",
    "question": "How does Nudge Theory eliminate human error in Azure DevOps organization security?",
    "answer": "By setting secure defaults like disabling public projects, restricting project creation, and disallowing PAT creation for non-admin users."
  },
  {
    "id": 136,
    "subject": "azure-devops",
    "tag": "KISS Principle & RBAC",
    "question": "Why does the KISS principle prohibit direct user-level permission assignments?",
    "answer": "Direct assignments create complex, un-auditable permission trees; using Entra ID group rules ensures flat, role-based access that syncs automatically."
  },
  {
    "id": 137,
    "subject": "azure-devops",
    "tag": "Just-In-Time Elevation",
    "question": "How does Just-In-Time (JIT) access prevent standing admin privilege risks?",
    "answer": "Engineers receive temporary, time-bounded elevation via Entra ID PIM with mandatory MFA and ticket references, leaving zero static admin accounts."
  },
  {
    "id": 138,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Sacred Codebase",
    "question": "What is the 'Eka Vriksha' concept in version control management?",
    "answer": "Treating the 'main' branch as a sacred, unpolluted trunk where direct commits are forbidden and all code arrives through verified, intentional pull requests."
  },
  {
    "id": 139,
    "subject": "azure-devops",
    "tag": "KISS & Trunk-Based Dev",
    "question": "Why does Trunk-Based Development align with the KISS principle over GitFlow?",
    "answer": "It eliminates cognitive overload from tangled release and develop branches by using short-lived feature branches that squash-merge back into 'main'."
  },
  {
    "id": 140,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Code Review",
    "question": "How do Azure Repos branch policies act as a subtle nudge for code quality?",
    "answer": "They keep the 'Complete PR' button disabled until automated build checks pass, work items are linked, and two independent reviewers approve."
  },
  {
    "id": 141,
    "subject": "azure-devops",
    "tag": "Advanced Security & Secret Scanning",
    "question": "How does Advanced Security Push Protection protect repository hygiene?",
    "answer": "It scans commits at the local git push command line and rejects pushes instantly if unencrypted secrets or API keys are detected."
  },
  {
    "id": 142,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Declarative Pipelines",
    "question": "Why are YAML pipelines viewed as 'Sutras' in the Monk's DevOps philosophy?",
    "answer": "They replace messy visual UI panels with succinct, version-controlled, declarative statements that execute deterministically without manual drift."
  },
  {
    "id": 143,
    "subject": "azure-devops",
    "tag": "KISS & Modular Templates",
    "question": "How do modular YAML templates uphold the KISS principle across microservices?",
    "answer": "They centralize build and security steps into reusable template files, keeping microservice pipeline files under 15 lines of code."
  },
  {
    "id": 144,
    "subject": "azure-devops",
    "tag": "Secretless OIDC & Workload Identity",
    "question": "Why is Workload Identity Federation (OIDC) superior to static service principal keys?",
    "answer": "It exchanges short-lived, federated tokens dynamically per pipeline run, eliminating static passwords, rotation overhead, and credential leaks."
  },
  {
    "id": 145,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Multi-Stage CI/CD",
    "question": "How does multi-stage pipeline isolation enforce secure delivery?",
    "answer": "It separates artifact compilation from deployment stages, nudging teams to deploy only immutable, pre-tested build drop packages."
  },
  {
    "id": 146,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Secret Sanctuary",
    "question": "What is 'Gupteya' in the context of cloud configuration management?",
    "answer": "The principle of treating secrets as invisible entities stored in a central Key Vault sanctuary, fetched dynamically in memory, and never logged."
  },
  {
    "id": 147,
    "subject": "azure-devops",
    "tag": "KISS & Variable Groups",
    "question": "How do linked Key Vault Variable Groups simplify secret management?",
    "answer": "They abstract secret fetching from application code, allowing pipelines to reference variables naturally without custom secret-retrieval scripts."
  },
  {
    "id": 148,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Secret Masking",
    "question": "How does Azure DevOps protect pipeline logs from accidental credential exposure?",
    "answer": "It automatically scans stdout/stderr console streams in real time and replaces any detected secret variable values with '***'."
  },
  {
    "id": 149,
    "subject": "azure-devops",
    "tag": "Static Code Analysis & Sanctuary Scans",
    "question": "How does a sanctuary secret scan step prevent secret leaks before deployment?",
    "answer": "It runs regex checks against source files during compilation and fails the build stage immediately if plain-text password signatures exist."
  },
  {
    "id": 150,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Production Sanctuary",
    "question": "Why is the Production Environment viewed as a 'Garbhagriha' (Sacred Threshold)?",
    "answer": "Because crossing into live production requires passing silent, automated health guardians rather than rushing blindly with untested code."
  },
  {
    "id": 151,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Azure Monitor Gates",
    "question": "Why are automated Azure Monitor gates preferred over manual human approvals?",
    "answer": "Automated gates query Application Insights telemetry objectively, aborting deployments immediately if error rates spike and avoiding human rubber-stamping."
  },
  {
    "id": 152,
    "subject": "azure-devops",
    "tag": "KISS & Environment Branch Control",
    "question": "How do environment branch controls enforce release predictability?",
    "answer": "They restrict production environment deployments strictly to the 'main' branch, making accidental releases from feature branches impossible."
  },
  {
    "id": 153,
    "subject": "azure-devops",
    "tag": "Canary Rollout & Automated Rollback",
    "question": "How does a Canary deployment strategy protect live users during releases?",
    "answer": "It routes a small fraction of traffic to the new build, runs synthetic health probes, and automatically rolls back if latency or error thresholds fail."
  },
  {
    "id": 154,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Sakshi Bhava",
    "question": "How does 'Sakshi Bhava' (Pure Witness) manifest in DevOps observability?",
    "answer": "Through continuous, unattached witnessing of system telemetry and streaming all audit logs to a central Log Analytics Workspace in real time."
  },
  {
    "id": 155,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Drift Detection",
    "question": "How do nightly scheduled Terraform dry-runs enforce zero-drift operations?",
    "answer": "They silently compare running cloud infrastructure against Git source code every night and alert engineers instantly if unauthorized manual UI tweaks occurred."
  },
  {
    "id": 156,
    "subject": "azure-devops",
    "tag": "KISS & Centralized Auditing",
    "question": "Why is streaming Azure DevOps audit logs to Azure Log Analytics essential?",
    "answer": "It consolidates security, repository, and permission events into a single searchable KQL store, eliminating siloed dashboards and compliance gaps."
  },
  {
    "id": 157,
    "subject": "azure-devops",
    "tag": "Continuous Hygiene & Self-Cleaning",
    "question": "What daily hygiene rituals keep an Azure DevOps workspace free of entropy?",
    "answer": "Automatically deleting completed PR branches, revoking idle PAT tokens, and running automated cleanup scripts for orphaned preview environments."
  },
  {
    "id": 158,
    "subject": "sast-sonarqube",
    "tag": "Monk Philosophy",
    "question": "How does the Indian Monk principle of 'Svadhyaya' reframe Static Application Security Testing (SAST)?",
    "answer": "It transforms code inspection from a stressful external audit into a calm, daily ritual of self-study and non-judgmental reflection before code reaches production."
  },
  {
    "id": 159,
    "subject": "sast-sonarqube",
    "tag": "KISS Principle",
    "question": "What is the core distinction between SAST, DAST, and SCA?",
    "answer": "SAST proofreads raw source code before execution; DAST attacks a running application from the outside; SCA audits third-party open-source dependencies."
  },
  {
    "id": 160,
    "subject": "sast-sonarqube",
    "tag": "Nudge Theory",
    "question": "How does 'Clean as You Code' (CAYC) leverage Nudge Theory to eliminate technical debt anxiety?",
    "answer": "It focuses Quality Gates strictly on new or modified code in the current PR, allowing legacy debt to decay naturally without forcing painful cleanup sprints."
  },
  {
    "id": 161,
    "subject": "sast-sonarqube",
    "tag": "Monk Philosophy",
    "question": "How do the concepts of 'Karma Yoga' and 'Vartaman' apply to developer productivity?",
    "answer": "They free engineers from past codebase burdens by focusing 100% of their discipline on making today's immediate changes clean, secure, and well-tested."
  },
  {
    "id": 162,
    "subject": "sast-sonarqube",
    "tag": "Production Infrastructure",
    "question": "Why must the default embedded H2 database be replaced with PostgreSQL in production SonarQube setups?",
    "answer": "H2 cannot handle concurrent scanner connections, lacks data migration paths, and easily corrupts during ungraceful container shutdowns."
  },
  {
    "id": 163,
    "subject": "sast-sonarqube",
    "tag": "Linux Kernel Tuning",
    "question": "Which Linux kernel parameter must be set to at least 524288 for SonarQube's internal Elasticsearch engine?",
    "answer": "vm.max_map_count—without this memory mapping threshold, Elasticsearch will crash on startup during indexing."
  },
  {
    "id": 164,
    "subject": "sast-sonarqube",
    "tag": "Reverse Proxy & Security",
    "question": "Why should SonarQube be wrapped in an Nginx reverse proxy with TLS/SSL?",
    "answer": "To encrypt administrative tokens and source code snippets in transit, enforce HTTPS, and handle large scan upload buffers (client_max_body_size 100M)."
  },
  {
    "id": 165,
    "subject": "sast-sonarqube",
    "tag": "Monk Philosophy",
    "question": "How does 'Viveka' (Discernment) eliminate false-positive alert fatigue in SonarQube?",
    "answer": "By discarding superficial formatting noise and tailoring Quality Profiles to focus strictly on critical OWASP vulnerabilities and runtime bugs."
  },
  {
    "id": 166,
    "subject": "sast-sonarqube",
    "tag": "Quality Gates",
    "question": "What are the four essential Quality Gate conditions for New Code in a production setup?",
    "answer": "0 New Vulnerabilities, 0 New Unreviewed Security Hotspots, 80%+ Code Coverage on New Code, and Maintainability Rating A."
  },
  {
    "id": 167,
    "subject": "sast-sonarqube",
    "tag": "KISS Principle",
    "question": "How do you prevent auto-generated Maven build stubs from triggering false positives in SonarQube?",
    "answer": "By defining 'sonar.exclusions=**/target/generated-sources/**' in sonar-project.properties or Maven build options."
  },
  {
    "id": 168,
    "subject": "sast-sonarqube",
    "tag": "Monk Philosophy",
    "question": "How does the spiritual concept of 'Sahaja' relate to automated DevSecOps pipelines?",
    "answer": "It turns security analysis into an effortless, natural workflow where SAST triggers automatically on every push like an involuntary breath."
  },
  {
    "id": 169,
    "subject": "sast-sonarqube",
    "tag": "Nudge Theory",
    "question": "Why is Pull Request (PR) Decoration superior to traditional PDF security reports?",
    "answer": "It delivers immediate, contextual nudges directly on the changed lines of code inside GitHub/GitLab PR diffs where developers can fix them instantly."
  },
  {
    "id": 170,
    "subject": "sast-sonarqube",
    "tag": "CI/CD Optimization",
    "question": "Why is 'fetch-depth: 0' required in GitHub Actions checkout steps for SonarQube analysis?",
    "answer": "It fetches the complete git commit history so SonarQube can accurately calculate code diffs and evaluate Clean as You Code metrics."
  },
  {
    "id": 171,
    "subject": "sast-sonarqube",
    "tag": "KISS Principle",
    "question": "How does caching Maven repositories (~/.m2) and Sonar cache in CI/CD improve pipeline performance?",
    "answer": "It speeds up pipeline execution times from minutes to seconds by avoiding redundant dependency downloads on every push."
  },
  {
    "id": 172,
    "subject": "sast-sonarqube",
    "tag": "FinTech Case Study",
    "question": "What vulnerability occurs when user-controlled API input is concatenated directly into SQL query strings?",
    "answer": "SQL Injection (OWASP A03), allowing attackers to read, alter, or delete sensitive financial records."
  },
  {
    "id": 173,
    "subject": "sast-sonarqube",
    "tag": "Healthcare Case Study",
    "question": "Why does SonarQube flag direct logging of patient data objects as a Security Hotspot in HIPAA applications?",
    "answer": "Because logging unmasked PII/PHI in plain text creates severe privacy compliance violations and data leak risks."
  },
   {
    "id": 174,
    "subject": "springboot",
    "tag": "Mindful Maven Setup",
    "question": "Why does inheriting from 'spring-boot-starter-parent' embody the KISS principle in Maven configuration?",
    "answer": "It automatically manages compatible dependency versions, Java compiler settings, and plugin defaults, eliminating structural clutter from your pom.xml."
  },
  {
    "id": 175,
    "subject": "springboot",
    "tag": "Build Caching",
    "question": "How does running Maven in offline mode ('mvn clean package -o') align with the Monk mindset?",
    "answer": "It enables developers to work in deep, uninterrupted focus using locally cached dependencies in ~/.m2 without external network latency or distractions."
  },
  {
    "id": 176,
    "subject": "springboot",
    "tag": "KISS REST Controller",
    "question": "What makes @RestController the ultimate minimalist choice for HTTP endpoints?",
    "answer": "It combines @Controller and @ResponseBody into a single annotation, automatically serializing method return values directly into HTTP response bodies."
  },
  {
    "id": 177,
    "subject": "springboot",
    "tag": "Java Records & JSON",
    "question": "Why are Java Records recommended for API DTO payloads in modern Spring Boot apps?",
    "answer": "Java Records provide transparent, immutable data containers with zero boilerplate—eliminating manual getters, setters, or constructors."
  },
  {
    "id": 178,
    "subject": "springboot",
    "tag": "Isolated Unit Testing",
    "question": "How does @WebMvcTest act as an automated safety net while upholding the KISS principle?",
    "answer": "It boots only the web layer in isolation, allowing you to test REST controllers in milliseconds without loading backend database pools or full contexts."
  },
  {
    "id": 179,
    "subject": "springboot",
    "tag": "MockMvc & Assertions",
    "question": "How does seeing rapid green test feedback in the terminal apply Nudge Theory?",
    "answer": "It delivers immediate positive reinforcement, transforming software testing from a tedious chore into a rewarding habit of maintaining code quality."
  },
  {
    "id": 180,
    "subject": "springboot",
    "tag": "Defensive Parameters",
    "question": "Why is setting 'defaultValue' in @RequestParam a gentle nudge for resilient API design?",
    "answer": "It prevents HTTP 400 Bad Request errors when clients omit optional query parameters, providing graceful fallback values out of the box."
  },
  {
    "id": 181,
    "subject": "springboot",
    "tag": "Global Error Handling",
    "question": "How does @RestControllerAdvice promote calm resilience during unexpected API failures?",
    "answer": "It intercepts unhandled exceptions globally and converts them into predictable JSON error payloads instead of exposing confusing raw stack traces."
  },
  {
    "id": 182,
    "subject": "springboot",
    "tag": "Port Conflict Resolution",
    "question": "What is the most peaceful way to resolve a 'Port 8080 in use' error without forcibly killing processes?",
    "answer": "Reconfigure server.port=8081 in application.properties or pass --server.port=8081 as a command-line runtime argument."
  },
  {
    "id": 183,
    "subject": "springboot",
    "tag": "Zen Dockerfiles",
    "question": "Why choose 'eclipse-temurin:17-jre-alpine' over full JDK operating system images for container runtime?",
    "answer": "It drastically reduces container image size, speeds up deployments, and eliminates unnecessary OS utilities, minimizing security attack vectors."
  },
  {
    "id": 184,
    "subject": "springboot",
    "tag": "Multi-Stage Builds",
    "question": "How does a multi-stage Docker build reflect the Monk concept of 'carrying only what is necessary'?",
    "answer": "It compiles code in a temporary build stage with Maven, then copies ONLY the final executable JAR into a lean JRE runtime container, discarding build tools."
  },
  {
    "id": 185,
    "subject": "springboot",
    "tag": "Spring Boot Actuator",
    "question": "What is the difference between Actuator's /health/liveness and /health/readiness probes?",
    "answer": "Liveness indicates if the application runtime is alive (restart if failed), while Readiness indicates if the app is ready to accept network traffic (pause routing if failed)."
  },
  {
    "id": 186,
    "subject": "springboot",
    "tag": "Docker Health Checks",
    "question": "How does the HEALTHCHECK directive in a Dockerfile nudge cloud infrastructure toward self-healing?",
    "answer": "It allows Docker to periodically probe health endpoints and automatically mark or restart containers that become unresponsive."
  },
  {
    "id": 187,
    "subject": "springboot",
    "tag": "Declarative Deployments",
    "question": "How does declarative Kubernetes orchestration mirror the Monk mindset?",
    "answer": "Instead of executing manual terminal commands on every failure, you declare desired state in YAML and allow Kubernetes to silently reconcile and maintain that state."
  },
  {
    "id": 188,
    "subject": "springboot",
    "tag": "Self-Healing Pods",
    "question": "What happens in a Kubernetes cluster when a Spring Boot pod fails its liveness probe?",
    "answer": "Kubernetes automatically terminates the unhealthy pod and provisions a new replacement pod to restore the declared replica count."
  },
  {
    "id": 189,
    "subject": "springboot",
    "tag": "Ingress Gateway Routing",
    "question": "Why is a Kubernetes Ingress preferred over creating individual LoadBalancer services for every microservice?",
    "answer": "Ingress provides a single, unified entry gateway for external traffic, routing requests by host or path to backend services while reducing cloud costs."
  },
  {
    "id": 190,
    "subject": "springboot",
    "tag": "TLS Termination",
    "question": "What operational benefit does centralizing TLS/SSL termination at the Ingress controller provide?",
    "answer": "It decrypts HTTPS traffic at the cluster gateway, relieving backend Spring Boot microservices from managing SSL certificates and cryptographic overhead."
  }


  ];

  let filteredDeck = [];
  let currentIndex = 0;

  // Inject Modern Themed CSS
  const style = document.createElement('style');
  style.textContent = `
    .db-flashcard-wrapper {
      --db-bg: #f8fafc;
      --db-card-front: #ffffff;
      --db-card-back: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
      --db-text: #0f172a;
      --db-text-muted: #64748b;
      --db-border: #e2e8f0;
      --db-accent: #2563eb;
      --db-accent-hover: #1d4ed8;
      --db-btn-bg: #f1f5f9;
      --db-btn-text: #334155;
      --db-shadow: 0 12px 30px -8px rgba(15, 23, 42, 0.08), 0 4px 12px -4px rgba(15, 23, 42, 0.03);
      --db-tag-bg: #eff6ff;
      --db-tag-color: #2563eb;
      
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif;
      max-width: 720px;
      margin: 0 auto;
      padding: 24px 16px;
      background: var(--db-bg);
      border-radius: 20px;
      transition: background-color 0.3s ease, color 0.3s ease;
      color: var(--db-text);
      box-sizing: border-box;
    }
    .db-flashcard-wrapper.dark-mode {
      --db-bg: #0f172a;
      --db-card-front: #1e293b;
      --db-card-back: linear-gradient(135deg, #0284c7 0%, #1e1b4b 100%);
      --db-text: #f8fafc;
      --db-text-muted: #94a3b8;
      --db-border: #334155;
      --db-accent: #38bdf8;
      --db-accent-hover: #0284c7;
      --db-btn-bg: #334155;
      --db-btn-text: #f1f5f9;
      --db-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.5);
      --db-tag-bg: #1e3a8a;
      --db-tag-color: #93c5fd;
    }
    .db-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      gap: 12px;
    }
    .db-title-area {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .db-theme-toggle {
      background: var(--db-btn-bg);
      color: var(--db-btn-text);
      border: 1px solid var(--db-border);
      padding: 8px 14px;
      border-radius: 24px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }
    .db-theme-toggle:hover {
      transform: translateY(-1px);
    }
    .db-controls {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 20px;
    }
    .db-select, .db-input {
      padding: 12px 16px;
      font-size: 15px;
      border: 1px solid var(--db-border);
      border-radius: 12px;
      outline: none;
      background: var(--db-card-front);
      color: var(--db-text);
      box-sizing: border-box;
      transition: border-color 0.2s ease;
    }
    .db-select:focus, .db-input:focus {
      border-color: var(--db-accent);
    }
    .db-select { flex: 1 1 200px; font-weight: 600; cursor: pointer; }
    .db-input { flex: 1 1 200px; }
    .db-progress-bar-container {
      width: 100%;
      height: 6px;
      background: var(--db-border);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .db-progress-bar-fill {
      height: 100%;
      background: var(--db-accent);
      width: 0%;
      transition: width 0.3s ease;
    }
    .db-card-scene {
      width: 100%;
      height: 340px;
      perspective: 1200px;
      cursor: pointer;
    }
    .db-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
      transform-style: preserve-3d;
      box-shadow: var(--db-shadow);
      border-radius: 20px;
    }
    .db-card-scene.is-flipped .db-card-inner {
      transform: rotateY(180deg);
    }
    .db-card-front, .db-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 20px;
      padding: 32px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      border: 1px solid var(--db-border);
    }
    .db-card-front {
      background: var(--db-card-front);
      color: var(--db-text);
    }
    .db-card-back {
      background: var(--db-card-back);
      color: #ffffff;
      transform: rotateY(180deg);
    }
    .db-card-tag {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 6px 14px;
      border-radius: 20px;
      background: var(--db-tag-bg);
      color: var(--db-tag-color);
    }
    .db-card-back .db-card-tag {
      background: rgba(255, 255, 255, 0.2);
      color: #e0f2fe;
    }
    .db-card-body {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      margin: 16px 0;
    }
    .db-question {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.45;
      margin: 0;
    }
    .db-answer {
      font-size: 17px;
      line-height: 1.55;
      margin: 0;
      color: #f1f5f9;
    }
    .db-card-hint {
      font-size: 13px;
      color: var(--db-text-muted);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .db-card-back .db-card-hint {
      color: #bae6fd;
    }
    .db-deck-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      gap: 10px;
    }
    .db-btn {
      background: var(--db-accent);
      color: #ffffff;
      border: none;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .db-btn:hover {
      background: var(--db-accent-hover);
      transform: translateY(-1px);
    }
    .db-btn-secondary {
      background: var(--db-btn-bg);
      color: var(--db-btn-text);
      border: 1px solid var(--db-border);
    }
    .db-btn-secondary:hover {
      background: var(--db-border);
    }
    .db-progress {
      font-size: 14px;
      font-weight: 600;
      color: var(--db-text-muted);
    }
  `;
  document.head.appendChild(style);

  // Inject UI Shell
  container.innerHTML = `
    <div id="dbWrapper" class="db-flashcard-wrapper">
      <div class="db-top-bar">
        <div class="db-title-area">
          <span style="font-size: 20px;">⚡</span>
          <span style="font-weight: 700; font-size: 16px;">DevOps Beacon Deck</span>
        </div>
        <button id="dbThemeToggle" class="db-theme-toggle">
          <span id="dbThemeIcon">🌙</span> <span id="dbThemeLabel">Dark Mode</span>
        </button>
      </div>
      <div class="db-controls">
        <select id="dbSubjectSelect" class="db-select">
            <option value="ai-llm">🧠 1. AI & LLM Fundamentals</option>
            <option value="llm-mechanics">⚡ 2. LLM Mechanics & Tokens</option>
            <option value="mcp">🔌 3. Model Context Protocol</option>
            <option value="agentic-ai">🤖 4. Agentic AI & ReAct Loops</option>
            <option value="docker-fundamentals">🐳 5. Docker Fundamentals</option>
            <option value="jenkins">⚙️ 6. Jenkins</option>
            <option value="gitlab-ci">🦊 7. GitLab CI</option>
            <option value="azure-devops">☁️ 8. Azure DevOps</option>
            <option value="sast-sonarqube">🧘‍♂️ 9. Mindful SAST & SonarQube</option>
            <option value="springboot">🍃 10. Spring Boot API, Docker & Kubernetes Fundamentals</option>
        </select>
        <input type="text" id="dbSearchInput" class="db-input" placeholder="Search keywords...">
      </div>
      <div class="db-progress-bar-container">
        <div id="dbProgressBar" class="db-progress-bar-fill"></div>
      </div>
      <div id="dbCardScene" class="db-card-scene">
        <div class="db-card-inner">
          <div class="db-card-front">
            <span id="dbCardTagFront" class="db-card-tag">Tag</span>
            <div class="db-card-body"><p id="dbQuestionText" class="db-question"></p></div>
            <span class="db-card-hint">💡 Click card or press [Space] to reveal answer</span>
          </div>
          <div class="db-card-back">
            <span id="dbCardTagBack" class="db-card-tag">Answer</span>
            <div class="db-card-body"><p id="dbAnswerText" class="db-answer"></p></div>
            <span class="db-card-hint">🔄 Click card to flip back</span>
          </div>
        </div>
      </div>
      <div class="db-deck-nav">
        <button id="dbPrevBtn" class="db-btn db-btn-secondary">← Previous</button>
        <button id="dbShuffleBtn" class="db-btn db-btn-secondary">🔀 Shuffle</button>
        <span id="dbProgressText" class="db-progress">Card 1 of 24</span>
        <button id="dbNextBtn" class="db-btn">Next →</button>
      </div>
    </div>
  `;

  // Theme Management
  const wrapper = document.getElementById('dbWrapper');
  const themeToggle = document.getElementById('dbThemeToggle');
  const themeIcon = document.getElementById('dbThemeIcon');
  const themeLabel = document.getElementById('dbThemeLabel');

  const savedTheme = localStorage.getItem('db-flashcard-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  if (savedTheme === 'dark') {
    wrapper.classList.add('dark-mode');
    themeIcon.innerText = '☀️';
    themeLabel.innerText = 'Light Mode';
  }

  themeToggle.addEventListener('click', () => {
    wrapper.classList.toggle('dark-mode');
    const isDark = wrapper.classList.contains('dark-mode');
    themeIcon.innerText = isDark ? '☀️' : '🌙';
    themeLabel.innerText = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('db-flashcard-theme', isDark ? 'dark' : 'light');
  });

  // Filter & Render
  function filterDeck() {
    const selectedSubject = document.getElementById('dbSubjectSelect').value;
    const searchQuery = document.getElementById('dbSearchInput').value.toLowerCase().trim();
    filteredDeck = flashcardDatabase.filter(card => {
      return card.subject === selectedSubject && 
            (card.question.toLowerCase().includes(searchQuery) || 
             card.answer.toLowerCase().includes(searchQuery) ||
             card.tag.toLowerCase().includes(searchQuery));
    });
    currentIndex = 0;
    renderCard();
  }

  function renderCard() {
    const scene = document.getElementById('dbCardScene');
    scene.classList.remove('is-flipped');
    
    if (filteredDeck.length === 0) {
      document.getElementById('dbCardTagFront').innerText = "Notice";
      document.getElementById('dbQuestionText').innerText = "No flashcards found matching your query.";
      document.getElementById('dbAnswerText').innerText = "Clear your search filter.";
      document.getElementById('dbProgressText').innerText = "0 of 0";
      document.getElementById('dbProgressBar').style.width = "0%";
      return;
    }

    const card = filteredDeck[currentIndex];
    document.getElementById('dbCardTagFront').innerText = card.tag;
    document.getElementById('dbCardTagBack').innerText = card.tag;
    document.getElementById('dbQuestionText').innerText = card.question;
    document.getElementById('dbAnswerText').innerText = card.answer;
    document.getElementById('dbProgressText').innerText = `Card ${currentIndex + 1} of ${filteredDeck.length}`;
    
    const progressPercent = ((currentIndex + 1) / filteredDeck.length) * 100;
    document.getElementById('dbProgressBar').style.width = `${progressPercent}%`;
  }

  // Navigation & Keyboard Listeners
  document.getElementById('dbCardScene').addEventListener('click', () => {
    document.getElementById('dbCardScene').classList.toggle('is-flipped');
  });
  document.getElementById('dbSubjectSelect').addEventListener('change', filterDeck);
  document.getElementById('dbSearchInput').addEventListener('input', filterDeck);
  
  document.getElementById('dbNextBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (filteredDeck.length) { currentIndex = (currentIndex + 1) % filteredDeck.length; renderCard(); }
  });
  
  document.getElementById('dbPrevBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (filteredDeck.length) { currentIndex = (currentIndex - 1 + filteredDeck.length) % filteredDeck.length; renderCard(); }
  });

  document.getElementById('dbShuffleBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    for (let i = filteredDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredDeck[i], filteredDeck[j]] = [filteredDeck[j], filteredDeck[i]];
    }
    currentIndex = 0;
    renderCard();
  });

  document.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT') return;
    if (e.key === 'ArrowRight') {
      if (filteredDeck.length) { currentIndex = (currentIndex + 1) % filteredDeck.length; renderCard(); }
    } else if (e.key === 'ArrowLeft') {
      if (filteredDeck.length) { currentIndex = (currentIndex - 1 + filteredDeck.length) % filteredDeck.length; renderCard(); }
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      document.getElementById('dbCardScene').classList.toggle('is-flipped');
    }
  });

  filterDeck();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFlashcards);
} else {
  initFlashcards();
}
