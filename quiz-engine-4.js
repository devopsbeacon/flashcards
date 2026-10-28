/**
 * DevOps Beacon Quiz Engine v2.1 (with Passing Celebration)
 * GitHub: devopsbeacon/quiz
 * CDN: [suspicious link removed]
 */

(function () {
  const quizDataset = [
    {
      subject: "foundations",
      subjectLabel: "Docker Foundations & Mindset",
      question: "1. What is the primary characteristic of the Indian Monk mindset in container design?",
      options: [
        "Building heavy guest OS images with all debugging tools included",
        "Creating clean, ephemeral, stateless micro-environments that leave zero trace when destroyed",
        "Enforcing permanent root permissions across all production containers",
        "Deploying monolithic architectures inside single containers"
      ],
      answer: 1
    },
    {
      subject: "foundations",
      subjectLabel: "Docker Foundations & Mindset",
      question: "2. What occurs when a container is executed with the '--rm' runtime flag?",
      options: [
        "It runs continuously in detached background mode",
        "It automatically deletes itself and its writable layer upon exit",
        "It mounts a persistent host volume automatically",
        "It bypasses container network isolation"
      ],
      answer: 1
    },
    {
      subject: "foundations",
      subjectLabel: "Docker Foundations & Mindset",
      question: "3. Which command provides real-time streaming metrics for active container CPU and RAM usage?",
      options: ["docker inspect", "docker logs", "docker stats", "docker ps -a"],
      answer: 2
    },
    {
      subject: "multistage",
      subjectLabel: "Multi-Stage Builds & Compose",
      question: "4. Why are multi-stage Dockerfiles recommended for Java application deployments?",
      options: [
        "They increase compilation speed by disabling unit tests",
        "They separate heavy JDK build environments from lightweight JRE runtime images",
        "They enforce root permissions for application execution",
        "They bypass Docker's layer caching mechanism"
      ],
      answer: 1
    },
    {
      subject: "multistage",
      subjectLabel: "Multi-Stage Builds & Compose",
      question: "5. What root cause does Exit Code 137 (OOMKilled) indicate in container diagnostics?",
      options: [
        "Network port binding conflict on the host server",
        "Missing foreground entrypoint script",
        "The container process exceeded its allocated RAM limits and was terminated by the kernel",
        "Successful application process shutdown"
      ],
      answer: 2
    },
    {
      subject: "multistage",
      subjectLabel: "Multi-Stage Builds & Compose",
      question: "6. In Docker Compose, how do you ensure a web API waits until PostgreSQL is ready for connections?",
      options: [
        "By setting 'restart: always'",
        "Using 'depends_on' paired with 'condition: service_healthy'",
        "By mapping host ports explicitly",
        "By defining variables inside a .env file"
      ],
      answer: 1
    },
    {
      subject: "multistage",
      subjectLabel: "Multi-Stage Builds & Compose",
      question: "7. Why should 'COPY pom.xml .' precede 'COPY src ./src' in a Java Dockerfile?",
      options: [
        "To enable root execution permissions",
        "To maximize layer caching for downloaded dependencies when source code changes",
        "To enforce memory boundary limits",
        "To bypass the .dockerignore file"
      ],
      answer: 1
    },
    {
      subject: "security",
      subjectLabel: "Advanced Security & Hardening",
      question: "8. Why are Google Distroless base images significantly more secure than standard OS images?",
      options: [
        "They include pre-installed debugging tools and shells",
        "They contain no shell binaries (sh/bash) or package managers, eliminating remote shell access",
        "They execute processes as root by default",
        "They bypass host kernel firewall rules"
      ],
      answer: 1
    },
    {
      subject: "security",
      subjectLabel: "Advanced Security & Hardening",
      question: "9. What security boundary is enforced by running a container with the '--read-only' flag?",
      options: [
        "It renders container log files read-only",
        "It locks the root filesystem to prevent unauthorized binary writes or malware drops",
        "It disables volume mounting completely",
        "It restricts container network bandwidth"
      ],
      answer: 1
    },
    {
      subject: "security",
      subjectLabel: "Advanced Security & Hardening",
      question: "10. How should build secrets be passed in a Dockerfile using BuildKit to prevent layer leaks?",
      options: [
        "Using standard ARG variables",
        "Using standard ENV variables",
        "Using 'RUN --mount=type=secret'",
        "Hardcoding credentials directly inside pom.xml"
      ],
      answer: 2
    },
    {
    subject: "change_governance",
    subjectLabel: "🧘 AI-Assisted Change Governance & AIOps",
    question: "11. Why has traditional, approval-centric change governance become obsolete in modern cloud-native environments?",
    options: [
      "Because cloud environments deploy code infrequently, making review meetings unnecessary",
      "Because modern software contains zero bugs and requires no security oversight",
      "Because manual reviews struggle to process high-frequency changes, creating bottlenecks and review fatigue",
      "Because Change Advisory Boards are required by law to be replaced by autonomous neural networks"
    ],
    answer: 2
  },
  {
    subject: "change_governance",
    question: "12. What fundamental shift defines the transition from traditional CABs to AI-assisted change governance?",
    options: [
      "Moving from manual form-checking to evidence-centric flow powered by automated Decision Packs",
      "Shifting total operational liability from human engineers to third-party software vendors",
      "Replacing all Git repositories with centralized paper-based sign-off binders",
      "Eliminating pre-production testing in favor of live customer testing"
    ],
    answer: 0
  },
  {
    subject: "change_governance",
    question: "13. In Info-Gap Decision Theory (IGDT), what does the 'Robustness' metric quantify?",
    options: [
      "The total monetary cost of running a Kubernetes cluster for one year",
      "How safely a proposed change tolerates operational uncertainty and unexpected failure modes",
      "The exact number of lines of code added in a pull request",
      "The speed at which an AI agent generates text responses"
    ],
    answer: 1
  },
  {
    subject: "change_governance",
    question: "14. How is 'Opportuneness' defined when evaluating a change request under Info-Gap Decision Theory?",
    options: [
      "The financial penalty incurred if a software license expires",
      "The percentage of CPU memory consumed during a database migration",
      "The total number of attendees present in a Change Advisory Board meeting",
      "The upside value or risk reduction unlocked by acting swiftly without unnecessary delay"
    ],
    answer: 3
  },
  {
    subject: "change_governance",
    question: "15. How does Info-Gap Decision Theory differ from traditional 'Low/Medium/High' static risk buckets?",
    options: [
      "It eliminates human decision-making entirely from the release pipeline",
      "It requires all releases to be classified as High Risk regardless of test coverage",
      "It evaluates changes across dual dimensions of uncertainty tolerance and time-sensitive opportunity",
      "It relies on subjective guesses made by external consultants"
    ],
    answer: 2
  },
  {
    subject: "change_governance",
    question: "16. What critical security feature ensures Gemini Enterprise agents respect user permission boundaries?",
    options: [
      "Workforce Identity Federation, ensuring agents only access data the human user is authorized to see",
      "Hardcoding root administrative passwords directly inside AI prompt templates",
      "Disabling all firewall rules during evidence collection",
      "Storing all operational logs in public web repositories"
    ],
    answer: 0
  },
  {
    subject: "change_governance",
    question: "17. What role do enterprise connectors play in the Gemini Enterprise Enabled Architecture?",
    options: [
      "They automatically delete outdated source code repositories every weekend",
      "They allow external hackers to inspect internal production databases",
      "They securely pull context across Git repos, CI/CD logs, Jira tickets, and SLO dashboards into Decision Packs",
      "They replace human developers by writing entire application codebases automatically"
    ],
    answer: 2
  },
  {
    subject: "change_governance",
    question: "18. What are the four core layers of the Human + AI Change Governance Model?",
    options: [
      "Planning, Coding, Testing, and Marketing",
      "Alerting, Ignoring, Restarting, and Escalating",
      "Drafting, Printing, Filing, and Archiving",
      "AI Evidence Synthesis, Human Judgment, Deterministic Execution, and Closed-Loop Learning"
    ],
    answer: 3
  },
  {
    subject: "change_governance",
    question: "19. In the Human + AI Governance Model, what executes an approved change in production?",
    options: [
      "Generative AI agents writing directly to production servers",
      "Deterministic automation tools such as CI/CD pipelines, GitOps sync, and policy-as-code gates",
      "Manual terminal commands typed by junior helpdesk staff",
      "Unverified third-party browser extensions"
    ],
    answer: 1
  },
  {
    subject: "change_governance",
    question: "20. What does the Zen metaphor of 'carrying water buckets vs. building aqueducts' represent for IT leaders?",
    options: [
      "Moving from manual, repetitive ticket reviews (buckets) to building automated evidence pipelines (aqueducts)",
      "Switching from cloud computing back to physical on-premise data centers",
      "Replacing software engineers with civil infrastructure workers",
      "Ignoring operational efficiency to focus solely on hardware cooling systems"
    ],
    answer: 0
  },
  {
    subject: "change_governance",
    question: "21. How does the role of a 'Human-AI Orchestrator' differ from a traditional 'Change Approver'?",
    options: [
      "Orchestrators rubber-stamp all AI outputs without reading the attached evidence",
      "Orchestrators spend 100% of their day writing raw YAML files by hand",
      "Orchestrators design decision systems, set risk guardrails, and evaluate trade-offs rather than manually hunting logs",
      "Orchestrators delegate legal accountability for outages to AI software vendors"
    ],
    answer: 2
  },
  {
    subject: "change_governance",
    question: "22. Which new skill is required for an AI-augmented change expert to query operational data effectively?",
    options: [
      "Manual assembly of paper audit binders",
      "Strategic Prompt Design and context framing",
      "High-speed alphanumeric data entry",
      "Cobol programming language translation"
    ],
    answer: 1
  },
  {
    subject: "change_governance",
    question: "23. Why is 'Critical Data Evaluation' an essential skill when working with AI decision support systems?",
    options: [
      "To enable human reviewers to memorize all system log entries by heart",
      "To convert numeric metrics into handwritten charts",
      "To bypass all corporate security and compliance rules",
      "To ensure human reviewers can spot missing telemetry, weak assumptions, or potential model hallucinations"
    ],
    answer: 3
  },
  {
    subject: "change_governance",
    question: "24. How does 'Counterfactual Reasoning' help a Change Advisory Board approve an urgent release safely?",
    options: [
      "It predicts what guardrails (e.g., canary rollouts or SLO gates) will elevate a change's safety score",
      "It proves that software changes never cause production outages",
      "It automatically generates legal disclaimers for end-user license agreements",
      "It forces reviewers to reject all emergency patches by default"
    ],
    answer: 0
  },
  {
    subject: "change_governance",
    question: "25. What is contained within an AI-generated 'Decision Pack' prepared for a CAB review?",
    options: [
      "Raw, unformatted system logs spanning 500 pages without summaries",
      "Impact mapping, historical failure signals, Info-Gap scores, XAI notes, and recommended guardrails",
      "Marketing brochures and employee attendance records",
      "Encrypted source code that cannot be inspected by human reviewers"
    ],
    answer: 1
  },
  {
    subject: "change_governance",
    question: "26. In the CAB case study, how should a low-urgency, non-critical monitoring agent upgrade be handled?",
    options: [
      "Treat it as an emergency patch and deploy it immediately at midnight",
      "Subject it to a 4-hour executive review board meeting with all C-level officers",
      "Bundle it into scheduled maintenance or classify it as a pre-approved standard change",
      "Reject it permanently to prevent any modification to monitoring tools"
    ],
    answer: 2
  },
  {
    subject: "change_governance",
    question: "27. In the Change Approval Matrix, what action is recommended for Quadrant I (High Robustness + High Opportuneness)?",
    options: [
      "Defer approval until pre-production testing is repeated five times",
      "Reject the change due to excess business value",
      "Route the change to an offline external audit committee",
      "Fast-Track approval through accelerated, controlled automation pipelines"
    ],
    answer: 3
  },
  {
    subject: "change_governance",
    question: "28. How should a change in Quadrant II (Low Robustness + High Opportuneness, e.g., an emergency patch) be governed?",
    options: [
      "Apply targeted guardrails (e.g., single-cluster canary + automated SLO gates) to elevate safety before approval",
      "Reject the patch immediately and accept zero-day security exploitation",
      "Bypass all reviews and deploy globally without telemetry monitoring",
      "Archive the change ticket and re-evaluate in the next quarter"
    ],
    answer: 0
  },
  {
    subject: "change_governance",
    question: "29. What is the recommended strategy for Quadrant III changes (High Robustness + Low Opportuneness)?",
    options: [
      "Fast-track as an emergency release during peak business hours",
      "Schedule during routine maintenance windows, bundle with other updates, or convert to a standard change",
      "Escalate directly to the Board of Directors for risk approval",
      "Delete the pull request to reduce backlog size"
    ],
    answer: 1
  },
  {
    subject: "change_governance",
    question: "30. What action does the Change Approval Matrix specify for Quadrant IV (Low Robustness + Low Opportuneness)?",
    options: [
      "Approve immediately without testing",
      "Fast-track through canary pipelines",
      "Defer approval, require pre-production validation, and gather missing telemetry evidence",
      "Grant permanent administrative bypass privileges to the author"
    ],
    answer: 2
  },
  {
    subject: "change_governance",
    question: "31. What takes place during the 'Closed-Loop Learning' stage of the Gemini Enterprise architecture?",
    options: [
      "All operational logs are erased to save cloud storage space",
      "Developers are forbidden from modifying deployed microservices",
      "AI agents monitor post-deployment SLOs and convert successful release patterns into pre-approved standard rules",
      "AI agents autonomously rewrite corporate governance policies without human oversight"
    ],
    answer: 2
  },
  {
    subject: "change_governance",
    question: "32. During an emergency CVE 9.8 vulnerability disclosure, why is 'Opportuneness' considered exceptionally high?",
    options: [
      "Because emergency patches are free of technical debt",
      "Because zero-day vulnerabilities increase system processing speed",
      "Because security fixes do not require testing or validation",
      "Because delaying the patch leaves critical internet-facing assets exposed to active exploitation"
    ],
    answer: 3
  },
  {
    subject: "change_governance",
    question: "33. How does counterfactual guidance assist security leaders during an emergency patching event?",
    options: [
      "It proves that security patches are unnecessary",
      "It identifies exact operational constraints (e.g., restricting rollout to Cluster A) that raise Robustness to acceptable levels",
      "It automatically disables external network traffic across the entire enterprise",
      "It generates random risk scores to satisfy compliance audits"
    ],
    answer: 1
  },
  {
    subject: "change_governance",
    question: "34. Why is human-in-the-loop (HITL) authorization legally and operationally non-negotiable in AI governance?",
    options: [
      "Because AI models cannot hold legal accountability, accept business risk, or understand enterprise context",
      "Because software developers enjoy attending lengthy approval meetings",
      "Because AI systems are incapable of reading digital log files",
      "Because cloud providers prohibit the use of automation in production"
    ],
    answer: 0
  },
  {
    subject: "change_governance",
    question: "35. What is 'automation bias' in the context of Change Advisory Board reviews?",
    options: [
      "The refusal of software engineers to use automated deployment pipelines",
      "A bug in CI/CD pipelines that causes build servers to crash",
      "The tendency for human reviewers to uncritically rubber-stamp AI recommendations without validating evidence",
      "The preference for manual paper forms over digital tickets"
    ],
    answer: 2
  },
  {
    subject: "change_governance",
    question: "36. How do SHAP/LIME feature attributions improve Explainable AI (XAI) transparency for reviewers?",
    options: [
      "They translate code comments into ancient languages",
      "They break down exact risk drivers (e.g., -30% Untested Rollback, +20% Canary Coverage) behind a score",
      "They hide risk scores behind encrypted security passwords",
      "They automatically approve all pull requests submitted by senior developers"
    ],
    answer: 1
  },
  {
    subject: "change_governance",
    question: "37. What is the purpose of a 'Visible Assumption Log' in an AI-generated Decision Pack?",
    options: [
      "To expose unverified or weak data assumptions so human reviewers can challenge them during CAB reviews",
      "To record developer attendance during sprint planning sessions",
      "To store user passwords in plain text for easy auditing",
      "To track hardware cooling temperatures in data centers"
    ],
    answer: 0
  },
  {
    subject: "change_governance",
    question: "38. Which international standard defines guidelines for an AI Management System (AIMS) in enterprise operations?",
    options: [
      "ISO 9001",
      "IEEE 802.3",
      "PCI-DSS 3.2",
      "ISO/IEC 42001"
    ],
    answer: 3
  },
  {
    subject: "change_governance",
    question: "39. Under ISO/IEC 42001 guidelines, how are production-impacting decision-support agents classified?",
    options: [
      "As Unregulated Consumer Toys with zero compliance oversight",
      "As High-Risk AI Systems requiring formal risk management, transparency, and human oversight",
      "As Autonomous Systems with complete authority over production environments",
      "As Deprecated Legacy Software scheduled for deletion"
    ],
    answer: 1
  },
  {
    subject: "change_governance",
    question: "40. How does Gemini Enterprise prevent 'governance bypass' by rogue or compromised agents?",
    options: [
      "By disabling all security logging across production clusters",
      "By allowing agents to modify their own administrative permissions dynamically",
      "By enforcing agent action registries that restrict AI agents to evidence collection while blocking autonomous execution",
      "By requiring human engineers to share root passwords with AI models"
    ],
    answer: 2
  },
  {
    subject: "change_governance",
    question: "41. Why are vanity activity metrics (e.g., number of tickets processed) flawed indicators of governance success?",
    options: [
      "Because cloud platforms do not generate ticket data",
      "Because measuring ticket throughput causes CI/CD pipelines to fail",
      "Because vanity metrics are prohibited by international accounting laws",
      "Because processing more tickets manually does not mean system stability or release safety has improved"
    ],
    answer: 3
  },
  {
    subject: "change_governance",
    question: "42. Which metric directly measures the security value delivered by fast-tracking emergency patches?",
    options: [
      "Security Exposure Days Avoided",
      "Total lines of documentation written",
      "Number of review board meetings held",
      "Average age of data center server racks"
    ],
    answer: 0
  },
  {
    subject: "change_governance",
    question: "43. How is toil reduction measured in an AI-assisted change governance framework?",
    options: [
      "By counting the number of emails sent during a system outage",
      "By calculating manual preparation and context-gathering hours saved for SREs and developers",
      "By tracking the decrease in physical office attendance",
      "By measuring keyboard typing speed across engineering teams"
    ],
    answer: 1
  },
  {
    subject: "change_governance",
    question: "44. What is Step 1 in the Executive Roadmap for implementing AI-assisted change governance?",
    options: [
      "Replace all Change Advisory Boards across the entire enterprise in a single weekend",
      "Purchase ten different AI tools without setting governance policies",
      "Start small with a focused pilot in a high-value domain (e.g., Kubernetes upgrades)",
      "Ban all production deployments for six months to conduct audits"
    ],
    answer: 2
  },
  {
    subject: "change_governance",
    question: "45. What is the ultimate goal of Step 6 (Transformation) in the Sixfold Leadership Roadmap?",
    options: [
      "Replacing all human software developers with offshore contractors",
      "Building a self-improving decision system that learns from post-change telemetry to streamline future releases",
      "Eliminating all compliance and auditing requirements permanently",
      "Migrating all enterprise applications back to mainframe computers"
    ],
    answer: 1
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🧘 Monk Mindset & Core Architecture",
    "question": "46. How does the Indian Monk concept of 'Ekagrata' (single-pointed focus) guide the architectural role of the Jenkins Controller?",
    "options": [
      "The Controller runs builds inside internal JVM threads while bypassing worker nodes.",
      "The Controller focuses strictly on orchestration and webhooks, offloading all heavy build workloads to isolated agents.",
      "The Controller must execute all compilation and testing locally to maintain complete control.",
      "The Controller stores all application source code directly in its local cache."
    ],
    "answer": 1
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🧘 Monk Mindset & Core Architecture",
    "question": "47. In accordance with the KISS Principle, what constitutes the fundamental, uncluttered CI feedback loop?",
    "options": [
      "Scheduled Cron Trigger -> Local Shell Execution -> Permanent File Save -> Admin Email",
      "Webhook Event -> Scripted Groovy Parse -> Local Artifact Store -> Slack Digest",
      "Trigger Event (Commit/PR) -> Isolated Clean Execution -> Immediate Status Feedback",
      "GUI Job Trigger -> Manual Approval Gate -> Multi-stage Deployment -> Notification Poll"
    ],
    "answer": 2
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🧘 Monk Mindset & Core Architecture",
    "question": "48. How does Nudge Theory improve developer code quality before code reaches the main branch?",
    "options": [
      "By sending daily automated warning emails to developers who have failing unit tests.",
      "By blocking developers from opening Pull Requests until a manager manually approves their code.",
      "By automatically rejecting any commit that contains more than 100 lines of code.",
      "By embedding automated fast-linting and visual status indicators directly into Pull Requests, gently guiding developers to fix issues locally."
    ],
    "answer": 3
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🏗️ Multi-Environment Setup & Installation",
    "question": "49. To enforce the principle of 'Sthirata' (firmness of foundation), how must `/var/jenkins_home` be managed on Linux deployments?",
    "options": [
      "It must be strictly decoupled onto a dedicated, high-IOPS persistent storage volume.",
      "It should be stored inside the root operating system filesystem alongside system binaries.",
      "It should be ephemeral and wiped on every operating system reboot.",
      "It should be stored entirely in system RAM for maximum IOPS performance."
    ],
    "answer": 0
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🏗️ Multi-Environment Setup & Installation",
    "question": "50. Why should a production Linux Jenkins installation always be fronted by a reverse proxy like Nginx?",
    "options": [
      "To allow Jenkins agents to communicate without needing network ports.",
      "To enforce TLS 1.3 encryption, manage SSL certificates, and prevent raw, unencrypted exposure of port 8080.",
      "To speed up Java Virtual Machine garbage collection cycles.",
      "To replace the Jenkins web interface with a custom HTML dashboard."
    ],
    "answer": 1
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🏗️ Multi-Environment Setup & Installation",
    "question": "51. In a cloud-native Kubernetes deployment using Helm, which component guarantees zero state loss when the Jenkins controller pod is rescheduled?",
    "options": [
      "ClusterIP service routing",
      "ConfigMap environment variables",
      "Ephemeral emptyDir volume mounts",
      "Persistent Volume Claim (PVC) backed by high-speed block storage"
    ],
    "answer": 3
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🔐 Hardening Security & Access Control",
    "question": "52. Why is local user database management strongly discouraged inside a production Jenkins controller?",
    "options": [
      "Local user accounts consume excessive JVM heap memory and cause garbage collection delays.",
      "Local accounts lack central Multi-Factor Authentication (MFA) and centralized audit trails; production demands identity federation via SAML 2.0 or OIDC.",
      "Local accounts prevent Jenkins from running Declarative Pipelines.",
      "Local accounts automatically grant full administrative access to all authenticated users."
    ],
    "answer": 1
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🔐 Hardening Security & Access Control",
    "question": "53. How does Folder-Level Role-Based Access Control (RBAC) enforce the Principle of Least Privilege across multi-project teams?",
    "options": [
      "By mapping permissions using folder regular expressions (e.g., 'orion-.*'), restricting developers to their team's project scope.",
      "By assigning global administrative rights to every developer in the organization.",
      "By requiring multi-factor authentication before every single build execution.",
      "By disabling read permissions for all non-administrative users across the entire controller."
    ],
    "answer": 0
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🔐 Hardening Security & Access Control",
    "question": "54. How does the `withCredentials` pipeline wrapper act as a security nudge during build execution?",
    "options": [
      "It forces developers to type their passwords directly into the build console input.",
      "It dynamically binds secrets to runtime environment variables while automatically masking sensitive strings ('****') in console logs.",
      "It writes secrets to a temporary plain-text file in the workspace directory.",
      "It automatically rotates AWS IAM keys every 5 minutes during execution."
    ],
    "answer": 1
  },
  {
    "subject": "jenkins",
    "subjectLabel": "📜 Declarative Pipelines & Shared Libraries",
    "question": "55. Why do production engineering standards mandate Declarative `Jenkinsfile` definitions over GUI-based Freestyle jobs?",
    "options": [
      "Declarative jobs run 10x faster than Freestyle jobs because they skip Java compilation.",
      "Freestyle jobs cannot be executed on remote build agents.",
      "Declarative pipelines live in SCM, undergo peer code reviews, support multibranch discovery, and enforce structured error handling.",
      "Declarative syntax allows developers to write raw shell scripts without needing version control."
    ],
    "answer": 2
  },
  {
    "subject": "jenkins",
    "subjectLabel": "📜 Declarative Pipelines & Shared Libraries",
    "question": "56. How do Jenkins Shared Libraries (`vars/`) apply the KISS principle across enterprise microservice fleets?",
    "options": [
      "They encapsulate repetitive build, test, and notification logic into central Groovy steps, keeping application `Jenkinsfile` definitions under 5 lines.",
      "They replace all `Jenkinsfile` definitions with a single XML configuration file.",
      "They allow developers to run builds without needing a Jenkins controller.",
      "They automatically convert Groovy code into compiled C++ binaries."
    ],
    "answer": 0
  },
  {
    "subject": "jenkins",
    "subjectLabel": "📜 Declarative Pipelines & Shared Libraries",
    "question": "57. In the Monk tradition of 'Shuddhi' (purity), why is calling `cleanWs()` inside the pipeline `post` block essential?",
    "options": [
      "It deletes the pipeline definition from version control to prevent unauthorized access.",
      "It resets the Jenkins controller configuration back to default settings.",
      "It clears all historical build logs from the Prometheus metrics endpoint.",
      "It guarantees that worker agents purge temporary build files, cached credentials, and workspace residue before returning to the executor pool."
    ],
    "answer": 3
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚡ Ephemeral Agents & Execution Scaling",
    "question": "58. How does the Monk concept of 'Anitya' (impermanence) eliminate fragile 'snowflake' build servers?",
    "options": [
      "By running all build workloads inside static long-lived virtual machines that are never rebooted.",
      "By replacing all Linux servers with permanent Windows virtual machines.",
      "By treating worker agents as disposable, single-use containers that spin up on demand, execute isolated tasks, and self-destruct.",
      "By disabling build agent auto-scaling during business hours."
    ],
    "answer": 2
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚡ Ephemeral Agents & Execution Scaling",
    "question": "59. What is a key architectural benefit of running integration tests inside a Kubernetes Pod template with sidecar containers?",
    "options": [
      "Application code and ephemeral database sidecars (e.g., PostgreSQL) run within the same pod boundary on `localhost`, isolated from other builds.",
      "Sidecar containers automatically bypass network security firewalls.",
      "Pod templates eliminate the need for container images.",
      "Integration test sidecars can run without consuming CPU or memory resources."
    ],
    "answer": 0
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚡ Ephemeral Agents & Execution Scaling",
    "question": "60. How can dynamic ephemeral agents achieve rapid compilation speeds without preserving state across builds?",
    "options": [
      "By disabling unit tests during peak production hours.",
      "By mounting persistent host cache directories (e.g., `~/.m2`, `~/.ccache`) into the ephemeral container spec.",
      "By running builds directly inside the Jenkins controller JVM memory.",
      "By storing all project source code inside Docker image layers."
    ],
    "answer": 1
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚙️ Administration & Configuration as Code (JCasC)",
    "question": "61. What is the fundamental rule of Jenkins Configuration as Code (JCasC)?",
    "options": [
      "All plugin installations must be configured manually using the Jenkins GUI.",
      "System configurations must be split across at least 10 separate XML files.",
      "If a system setting is not explicitly declared in `jenkins.yaml`, it does not exist—the GUI becomes a read-only dashboard.",
      "JCasC can only be used on single-node bare-metal installations."
    ],
    "answer": 2
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚙️ Administration & Configuration as Code (JCasC)",
    "question": "62. How does pinning plugin versions in a `plugins.txt` file enforce system reproducibility?",
    "options": [
      "It allows Jenkins to download unreleased experimental plugins automatically.",
      "It guarantees identical, battle-tested plugin dependency trees across all regional controllers using `jenkins-plugin-cli` during image assembly.",
      "It prevents developers from modifying application source code in SCM.",
      "It disables plugin security warnings in the admin console."
    ],
    "answer": 1
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚙️ Administration & Configuration as Code (JCasC)",
    "question": "63. How do `/quietDown` and `/safeRestart` endpoints facilitate peaceful controller maintenance?",
    "options": [
      "`/quietDown` blocks new incoming jobs to drain active queues gracefully, allowing running pipelines to finish before `/safeRestart` reboots the server.",
      "`/quietDown` immediately kills all running processes and wipes the `/var/jenkins_home` directory.",
      "`/quietDown` turns off log output to save disk space during active builds.",
      "`/quietDown` pauses all webhooks permanently until manually cleared in the GUI."
    ],
    "answer": 0
  },
  {
    "subject": "jenkins",
    "subjectLabel": "📊 Production Operations & Resilience",
    "question": "64. Which three high-signal metrics best reflect a calm, healthy, and responsive Jenkins controller?",
    "options": [
      "Total Lines of Code Written, Git Commits per Day, and Slack Message Count",
      "Number of Installed Plugins, Total User Accounts, and Workspace Disk Usage",
      "Build Queue Wait Time, Controller JVM Memory/CPU Utilization, and Active Executor Saturation",
      "HTTP 200 Response Count, Docker Image Size, and Webhook Retry Frequency"
    ],
    "answer": 2
  },
  {
    "subject": "jenkins",
    "subjectLabel": "📊 Production Operations & Resilience",
    "question": "65. Why set initial heap (`-Xms`) equal to max heap (`-Xmx`) when configuring Jenkins with the G1GC garbage collector?",
    "options": [
      "It allows Java to allocate unlimited RAM during build spikes.",
      "It eliminates dynamic heap resizing overhead and significantly reduces stop-the-world Garbage Collection pauses.",
      "It disables garbage collection entirely during business hours.",
      "It forces Jenkins to run strictly inside swap memory."
    ],
    "answer": 1
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "66. Under the 'Context of Monks' and Principle of Least Privilege, which GitLab role should be assigned to external auditors who need to review repository code and build execution logs without altering code?",
    options: [
      "Guest",
      "Developer",
      "Reporter",
      "Maintainer"
    ],
    answer: 2
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "67. To follow the KISS Principle in group hierarchy design, how should top-level sub-groups be structured across an enterprise?",
    options: [
      "By core business capability/domain rather than temporary project codes",
      "By individual developer personal names to maximize freedom",
      "By deeply nesting 15 levels of sub-groups for every micro-feature",
      "By creating a flat list of 5,000 unorganized repositories under one user"
    ],
    answer: 0
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "68. Applying Nudge Theory to token governance, why are Project Access Tokens preferred over Personal Access Tokens for pipeline automation bots?",
    options: [
      "They give global root admin privileges across the entire GitLab instance",
      "They never expire and cannot be revoked by administrators",
      "They bypass all branch protection rules and security scanning gates",
      "They are scoped strictly to a single project and terminate automatically if the repository is archived"
    ],
    answer: 3
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "69. Why does the Shell executor violate the Monk context of 'stateless purity' in production microservice pipelines?",
    options: [
      "It runs builds inside ephemeral Kubernetes pods that auto-delete",
      "It executes commands directly on the host OS, leaving residual files and state that contaminate future builds",
      "It enforces Docker container isolation for every job",
      "It automatically encrypts all local host directories upon exit"
    ],
    answer: 1
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "70. What prefix is used by modern, secure GitLab runner authentication tokens to replace legacy registration tokens?",
    options: [
      "glpat-",
      "glcft-",
      "glrt-",
      "glsast-"
    ],
    answer: 2
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "71. Under the KISS Principle, how should build toolchains (like JDKs, Node.js, or GCC) be managed across runner hosts?",
    options: [
      "Manually install every compiler version directly on the bare-metal runner host",
      "Package the required build environment inside versioned Docker container images",
      "Write 500-line shell scripts inside every job to compile GCC from source",
      "Store compiler binaries in unencrypted personal access token repositories"
    ],
    answer: 1
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "72. Which `.gitlab-ci.yml` keyword allows a downstream job to start immediately as soon as its prerequisite finishes, bypassing traditional stage boundaries?",
    options: [
      "extends:",
      "include:",
      "inherit:",
      "needs:"
    ],
    answer: 3
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "73. What is the primary architectural difference between GitLab CI Artifacts and Cache?",
    options: [
      "Artifacts pass intermediate build outputs between stages in a single pipeline run, while Cache reuses external dependencies across runs",
      "Artifacts preserve third-party packages across pipeline runs, while Cache passes outputs between stages",
      "Artifacts are stored permanently in git history, while Cache exists only in RAM",
      "Artifacts can only be created on Shell executors, while Cache requires Kubernetes"
    ],
    answer: 0
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "74. How does Nudge Theory streamline dependency caching in Maven or Node.js pipelines?",
    options: [
      "By prompting developers to upload zip files manually after every commit",
      "By keying the cache on lockfile hashes (pom.xml or package-lock.json) so dependency reuse happens automatically",
      "By deleting the cache every 5 minutes regardless of build activity",
      "By forcing every job to re-download all dependencies from public mirrors"
    ],
    answer: 1
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "75. What group-level housekeeping policy prevents object storage bloat from accumulating old build outputs?",
    options: [
      "Force Retain All Artifacts forever",
      "Disable Object Storage entirely",
      "Keep Latest Artifact policy",
      "Delete repository git history on every push"
    ],
    answer: 2
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "76. How can platform administrators prevent a single resource-intensive repository from starving other projects of runner compute?",
    options: [
      "By granting unlimited root access to all users",
      "By disabling runner tags across the entire instance",
      "By converting all Docker executors to bare-metal Shell runners",
      "By establishing monthly compute minute quotas and job concurrency ceilings at the sub-group level"
    ],
    answer: 3
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "77. In the context of automated housekeeping, how should ephemeral or offline runner nodes be handled when they stop reporting heartbeats?",
    options: [
      "Automatically unregister offline runners using API cleanup scripts after a designated stale threshold",
      "Leave them registered indefinitely to accumulate job queues",
      "Reboot the master GitLab database server every hour",
      "Increase job timeout limits to 48 hours for all pending jobs"
    ],
    answer: 0
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "78. What happens when a CI/CD variable is configured with the 'Masked' attribute in GitLab?",
    options: [
      "The variable is deleted immediately after the pipeline starts",
      "Its value is automatically obfuscated as [MASKED] in console job logs if accidentally printed",
      "It can only be viewed by Guest users in the repository UI",
      "It is appended to every commit message automatically"
    ],
    answer: 1
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "79. What restriction does the 'Protected Variable' flag impose on pipeline execution?",
    options: [
      "The variable is only accessible to jobs running on Protected Branches or Protected Tags",
      "The variable can only be used inside docker-in-docker containers",
      "The variable is visible to all public pull requests from external forks",
      "The variable expires automatically after 60 seconds"
    ],
    answer: 0
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "80. Applying the KISS Principle to security scanning, how should SAST and Secret Detection be enabled in `.gitlab-ci.yml`?",
    options: [
      "By writing custom regex parsing scripts in Python for every repository",
      "By manually executing external commercial scanners on local developer laptops",
      "By including official GitLab Security Templates via a single 'include:' statement",
      "By disabling all automated checks and relying on annual manual audits"
    ],
    answer: 2
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "81. How does OIDC (OpenID Connect) integration with HashiCorp Vault enhance pipeline secret security?",
    options: [
      "It hardcodes long-lived root passwords directly into .gitlab-ci.yml",
      "It bypasses all network firewalls and SSL certificate checks",
      "It fetches dynamic, short-lived credentials for pipeline jobs without storing static passwords in GitLab",
      "It automatically emails private keys to all group members upon job completion"
    ],
    answer: 2
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "82. What is the role of a `.gitlab/CODEOWNERS` file in production deployment governance?",
    options: [
      "It automatically assigns user billing rates to individual lines of code",
      "It enforces mandatory code owner reviews and approvals before changes to sensitive files or paths can be merged",
      "It converts all YAML files into executable bash scripts",
      "It grants Guest users write access to the main branch"
    ],
    answer: 1
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "83. What is the purpose of the `default:` block in `.gitlab-ci.yml`?",
    options: [
      "To define fallback settings like base container images, retries, and timeouts across all jobs",
      "To override all variable values with blank strings",
      "To force all jobs to run sequentially without parallel execution",
      "To lock the git repository against further commits"
    ],
    answer: 0
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "84. Which executor type dynamically provisions ephemeral Kubernetes Pods on demand for high-volume enterprise pipelines?",
    options: [
      "Shell Executor",
      "VirtualBox Executor",
      "SSH Executor",
      "Kubernetes Executor"
    ],
    answer: 3
  },
  {
    subject: "gitlab-ci",
    subjectLabel: "🦊 GitLab CI Production Grade",
    question: "85. How does a Protected Environment with `when: manual` nudge teams toward safe production deployments?",
    options: [
      "By triggering automatic deployments on every broken commit",
      "By requiring explicit manual approval and authorized user roles before executing live environment deployments",
      "By deleting staging databases automatically prior to release",
      "By skipping all unit tests during production deployment"
    ],
    answer: 1
  }
  ];

  let activeQuestions = [];
  let currentIndex = 0;
  let userSelection = null;
  let attemptedCount = 0;
  let trueCount = 0;
  let falseCount = 0;

  function initQuizEngine() {
    const root = document.getElementById("db-quiz-root");
    if (!root) return;

    const style = document.createElement("style");
    style.textContent = `
      #db-quiz-root {
        --db-bg: #f8fafc; --db-card: #ffffff; --db-text: #0f172a; --db-muted: #64748b;
        --db-border: #e2e8f0; --db-primary: #2563eb; --db-primary-hover: #1d4ed8;
        --db-primary-light: #eff6ff; --db-stat-bg: #f1f5f9; --db-success: #16a34a;
        --db-success-bg: #dcfce7; --db-danger: #dc2626; --db-danger-bg: #fee2e2;
        --db-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        width: 100%; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      #db-quiz-root[data-theme="dark"] {
        --db-bg: #0f172a; --db-card: #1e293b; --db-text: #f8fafc; --db-muted: #94a3b8;
        --db-border: #334155; --db-primary: #3b82f6; --db-primary-hover: #60a5fa;
        --db-primary-light: #1e293b; --db-stat-bg: #0f172a; --db-success: #22c55e;
        --db-success-bg: #064e3b; --db-danger: #ef4444; --db-danger-bg: #7f1d1d;
        --db-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }
      .db-card { max-width: 800px; margin: 0 auto; background: var(--db-card); border-radius: 16px; box-shadow: var(--db-shadow); padding: 24px; border: 1px solid var(--db-border); transition: all 0.3s ease; }
      .db-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--db-border); padding-bottom: 14px; margin-bottom: 18px; }
      .db-brand { display: flex; align-items: center; gap: 10px; }
      .db-header h2 { font-size: 1.35rem; color: var(--db-text); margin: 0; font-weight: 700; }
      .db-header p { font-size: 0.85rem; color: var(--db-muted); margin: 2px 0 0 0; }
      .db-theme-toggle { background: var(--db-stat-bg); border: 1px solid var(--db-border); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.1rem; }
      .db-subject-section { margin-bottom: 18px; }
      .db-subject-section label { font-weight: 600; display: block; margin-bottom: 6px; color: var(--db-text); font-size: 0.9rem; }
      .db-select { width: 100%; padding: 10px 12px; border-radius: 8px; border: 1px solid var(--db-border); font-size: 0.95rem; background: var(--db-card); color: var(--db-text); outline: none; cursor: pointer; }
      .db-dashboard { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 16px; }
      .db-stat-box { background: var(--db-stat-bg); padding: 8px; border-radius: 8px; border: 1px solid var(--db-border); text-align: center; }
      .db-stat-label { display: block; font-size: 0.7rem; color: var(--db-muted); font-weight: 600; text-transform: uppercase; }
      .db-stat-val { display: block; font-size: 1.2rem; font-weight: 800; color: var(--db-text); margin-top: 2px; }
      .db-stat-true .db-stat-val { color: var(--db-success); }
      .db-stat-false .db-stat-val { color: var(--db-danger); }
      .db-progress-track { width: 100%; height: 6px; background: var(--db-border); border-radius: 10px; overflow: hidden; margin-bottom: 20px; }
      .db-progress-bar { height: 100%; width: 0%; background: var(--db-primary); transition: width 0.3s ease; }
      .db-question-tag { display: inline-block; padding: 4px 8px; border-radius: 6px; background: var(--db-primary-light); color: var(--db-primary); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; }
      .db-question-title { font-size: 1.1rem; font-weight: 600; color: var(--db-text); margin-bottom: 14px; line-height: 1.4; }
      .db-options-list { display: flex; flex-direction: column; gap: 8px; }
      .db-option-btn { width: 100%; padding: 12px 14px; border: 1.5px solid var(--db-border); border-radius: 8px; background: var(--db-card); color: var(--db-text); text-align: left; font-size: 0.95rem; cursor: pointer; transition: all 0.2s ease; line-height: 1.35; box-sizing: border-box; }
      .db-option-btn:hover:not(:disabled) { border-color: var(--db-primary); }
      .db-option-btn.correct { background: var(--db-success-bg) !important; border-color: var(--db-success) !important; color: var(--db-text) !important; font-weight: 600; }
      .db-option-btn.incorrect { background: var(--db-danger-bg) !important; border-color: var(--db-danger) !important; color: var(--db-text) !important; }
      .db-controls { display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid var(--db-border); margin-top: 18px; }
      #dbProgressText { font-size: 0.85rem; color: var(--db-muted); font-weight: 600; }
      .db-btn { padding: 10px 20px; border: none; border-radius: 8px; background: var(--db-primary); color: #ffffff; font-size: 0.95rem; font-weight: 700; cursor: pointer; }
      .db-btn:hover:not(:disabled) { background: var(--db-primary-hover); }
      .db-btn:disabled { opacity: 0.5; cursor: not-allowed; }
      .db-results-screen { text-align: center; display: none; padding: 20px 0; }
      .db-results-score { font-size: 2.8rem; font-weight: 900; color: var(--db-primary); margin-bottom: 8px; }
      @media (max-width: 600px) {
        .db-card { padding: 16px; }
        .db-dashboard { grid-template-columns: repeat(2, 1fr); }
        .db-controls { flex-direction: column; gap: 10px; align-items: stretch; text-align: center; }
        .db-btn { width: 100%; }
      }
    `;
    document.head.appendChild(style);

    root.setAttribute("data-theme", "light");

    root.innerHTML = `
      <div class="db-card">
        <header class="db-header">
          <div class="db-brand">
            <span style="font-size:1.5rem">🚀</span>
            <div>
              <h2>DevOps Beacon Exam Portal</h2>
              <p>Interactive Knowledge Engine</p>
            </div>
          </div>
          <button class="db-theme-toggle" id="dbThemeBtn" title="Toggle Light/Dark Mode">🌙</button>
        </header>

        <div class="db-subject-section">
          <label for="dbSubjectSelect">📚 Select Subject:</label>
          <select id="dbSubjectSelect" class="db-select">
            <option value="all">⚡ All Topics (45 Questions)</option>
            <option value="foundations">🐳 Docker Foundations & Mindset (3 Qs)</option>
            <option value="multistage">🛠️ Multi-Stage Builds & Compose (4 Qs)</option>
            <option value="security">🔒 Advanced Security & Hardening (3 Qs)</option>
            <option value="change_governance">🧘 AI-Assisted Change Governance (35 Qs)</option>
            <option value="jenkins">🎩 Jenkins CI/CD Fundamentals & Production-Grade Setup</option>
            <option value="gitlab-ci">🦊 GitLab CI</option>
          </select>
        </div>

        <div class="db-dashboard">
          <div class="db-stat-box"><span class="db-stat-label">Total Qs</span><span class="db-stat-val" id="dbStatTotal">0</span></div>
          <div class="db-stat-box"><span class="db-stat-label">Attempted</span><span class="db-stat-val" id="dbStatAttempted">0</span></div>
          <div class="db-stat-box db-stat-true"><span class="db-stat-label">True</span><span class="db-stat-val" id="dbStatTrue">0</span></div>
          <div class="db-stat-box db-stat-false"><span class="db-stat-label">False</span><span class="db-stat-val" id="dbStatFalse">0</span></div>
        </div>

        <div class="db-progress-track"><div class="db-progress-bar" id="dbProgressBar"></div></div>

        <div id="dbQuizScreen">
          <div class="db-question-tag" id="dbQuestionTag">Docker Foundations</div>
          <div class="db-question-title" id="dbQuestionText">Loading Question...</div>
          <div class="db-options-list" id="dbOptionsContainer"></div>
          <div class="db-controls">
            <span id="dbProgressText">Question 1 of 10</span>
            <button class="db-btn" id="dbNextBtn" disabled>Next Question ➔</button>
          </div>
        </div>

        <div id="dbResultsScreen" class="db-results-screen">
          <div id="dbTrophyIcon" style="font-size:3rem;margin-bottom:8px">🏆</div>
          <h3 id="dbResultsHeading">Assessment Completed!</h3>
          <div class="db-results-score" id="dbFinalScore">0%</div>
          <p id="dbSummaryText" style="color:var(--db-muted);font-size:1rem;margin-top:6px"></p>
          <button class="db-btn" id="dbRestartBtn" style="margin-top:16px">🔄 Retake Assessment</button>
        </div>
      </div>
    `;

    document.getElementById("dbThemeBtn").onclick = () => {
      const current = root.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      document.getElementById("dbThemeBtn").innerText = next === "light" ? "🌙" : "☀️";
    };

    document.getElementById("dbSubjectSelect").onchange = loadSubject;
    document.getElementById("dbNextBtn").onclick = nextQuestion;
    document.getElementById("dbRestartBtn").onclick = restartExam;

    loadSubject();
  }

  function loadSubject() {
    const sel = document.getElementById("dbSubjectSelect").value;
    activeQuestions = sel === "all" ? [...quizDataset] : quizDataset.filter(q => q.subject === sel);
    restartExam();
  }

  function restartExam() {
    currentIndex = 0; attemptedCount = 0; trueCount = 0; falseCount = 0; userSelection = null;
    document.getElementById("dbQuizScreen").style.display = "block";
    document.getElementById("dbResultsScreen").style.display = "none";
    updateStats();
    renderQuestion();
  }

  function updateStats() {
    document.getElementById("dbStatTotal").innerText = activeQuestions.length;
    document.getElementById("dbStatAttempted").innerText = attemptedCount;
    document.getElementById("dbStatTrue").innerText = trueCount;
    document.getElementById("dbStatFalse").innerText = falseCount;
    document.getElementById("dbProgressBar").style.width = `${(currentIndex / activeQuestions.length) * 100}%`;
  }

  function renderQuestion() {
    const q = activeQuestions[currentIndex];
    document.getElementById("dbQuestionTag").innerText = q.subjectLabel;
    document.getElementById("dbQuestionText").innerText = q.question;
    document.getElementById("dbProgressText").innerText = `Question ${currentIndex + 1} of ${activeQuestions.length}`;
    
    const container = document.getElementById("dbOptionsContainer");
    container.innerHTML = "";
    userSelection = null;
    document.getElementById("dbNextBtn").disabled = true;

    q.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "db-option-btn";
      btn.innerText = optText;
      btn.onclick = () => selectOption(idx, btn);
      container.appendChild(btn);
    });
    updateStats();
  }

  function selectOption(idx, btn) {
    if (userSelection !== null) return;
    userSelection = idx;
    attemptedCount++;

    const q = activeQuestions[currentIndex];
    const allBtns = document.querySelectorAll("#db-quiz-root .db-option-btn");

    if (idx === q.answer) {
      btn.classList.add("correct");
      trueCount++;
    } else {
      btn.classList.add("incorrect");
      allBtns[q.answer].classList.add("correct");
      falseCount++;
    }

    allBtns.forEach(b => b.disabled = true);
    updateStats();
    document.getElementById("dbNextBtn").disabled = false;
  }

  function nextQuestion() {
    currentIndex++;
    if (currentIndex < activeQuestions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }

  // Celebration Fireworks Trigger (Triggers at >= 60%)
  function triggerCelebration() {
    if (typeof confetti === 'function') {
      launchFireworks();
    } else {
      const script = document.createElement("script");
      script.src = "[suspicious link removed]";
      script.onload = launchFireworks;
      document.head.appendChild(script);
    }
  }

  function launchFireworks() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }

  function showResults() {
    document.getElementById("dbProgressBar").style.width = "100%";
    document.getElementById("dbQuizScreen").style.display = "none";
    document.getElementById("dbResultsScreen").style.display = "block";
    
    const score = Math.round((trueCount / activeQuestions.length) * 100);
    document.getElementById("dbFinalScore").innerText = `${score}%`;

    if (score >= 60) {
      document.getElementById("dbTrophyIcon").innerText = "🎉";
      document.getElementById("dbResultsHeading").innerText = "Congratulations! You Passed!";
      document.getElementById("dbSummaryText").innerText = `Outstanding job! You scored ${trueCount} out of ${activeQuestions.length} (${score}%). Keep up the great work!`;
      triggerCelebration();
    } else {
      document.getElementById("dbTrophyIcon").innerText = "📚";
      document.getElementById("dbResultsHeading").innerText = "Keep Practicing!";
      document.getElementById("dbSummaryText").innerText = `You scored ${trueCount} out of ${activeQuestions.length} (${score}%). Review the modules and try again to achieve 60%+!`;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuizEngine);
  } else {
    initQuizEngine();
  }
})();
