function initFlashcards() {
  const container = document.getElementById('db-flashcards-root');
  if (!container) {
    setTimeout(initFlashcards, 100);
    return;
  }

  if (container.dataset.initialized) return;
  container.dataset.initialized = "true";

  const flashcardDatabase = [
    { id: 134, subject: "azure-devops", tag: "Monk Mindset & Identity", question: "How does the Indian Monk principle of 'Aparigraha' apply to Azure DevOps identity?", answer: "By eliminating administrative clutter, unlinked local accounts, and loose permissions to maintain one sacred source of truth via Azure Entra ID." },
    { id: 135, subject: "azure-devops", tag: "Nudge Theory & Security Defaults", question: "How does Nudge Theory eliminate human error in Azure DevOps organization security?", answer: "By setting secure defaults like disabling public projects, restricting project creation, and disallowing PAT creation for non-admin users." },
    { id: 136, subject: "azure-devops", tag: "KISS Principle & RBAC", question: "Why does the KISS principle prohibit direct user-level permission assignments?", answer: "Direct assignments create complex, un-auditable permission trees; using Entra ID group rules ensures flat, role-based access that syncs automatically." },
    { id: 137, subject: "azure-devops", tag: "Just-In-Time Elevation", question: "How does Just-In-Time (JIT) access prevent standing admin privilege risks?", answer: "Engineers receive temporary, time-bounded elevation via Entra ID PIM with mandatory MFA and ticket references, leaving zero static admin accounts." },
    { id: 138, subject: "azure-devops", tag: "Monk Mindset & Sacred Codebase", question: "What is the 'Eka Vriksha' concept in version control management?", answer: "Treating the 'main' branch as a sacred, unpolluted trunk where direct commits are forbidden and all code arrives through verified, intentional pull requests." },
    { id: 139, subject: "azure-devops", tag: "KISS & Trunk-Based Dev", question: "Why does Trunk-Based Development align with the KISS principle over GitFlow?", answer: "It eliminates cognitive overload from tangled release and develop branches by using short-lived feature branches that squash-merge back into 'main'." },
    { id: 140, subject: "azure-devops", tag: "Nudge Theory & Code Review", question: "How do Azure Repos branch policies act as a subtle nudge for code quality?", answer: "They keep the 'Complete PR' button disabled until automated build checks pass, work items are linked, and two independent reviewers approve." },
    { id: 141, subject: "azure-devops", tag: "Advanced Security & Secret Scanning", question: "How does Advanced Security Push Protection protect repository hygiene?", answer: "It scans commits at the local git push command line and rejects pushes instantly if unencrypted secrets or API keys are detected." },
    { id: 142, subject: "azure-devops", tag: "Monk Mindset & Declarative Pipelines", question: "Why are YAML pipelines viewed as 'Sutras' in the Monk's DevOps philosophy?", answer: "They replace messy visual UI panels with succinct, version-controlled, declarative statements that execute deterministically without manual drift." },
    { id: 143, subject: "azure-devops", tag: "KISS & Modular Templates", question: "How do modular YAML templates uphold the KISS principle across microservices?", answer: "They centralize build and security steps into reusable template files, keeping microservice pipeline files under 15 lines of code." },
    { id: 144, subject: "azure-devops", tag: "Secretless OIDC & Workload Identity", question: "Why is Workload Identity Federation (OIDC) superior to static service principal keys?", answer: "It exchanges short-lived, federated tokens dynamically per pipeline run, eliminating static passwords, rotation overhead, and credential leaks." },
    { id: 145, subject: "azure-devops", tag: "Nudge Theory & Multi-Stage CI/CD", question: "How does multi-stage pipeline isolation enforce secure delivery?", answer: "It separates artifact compilation from deployment stages, nudging teams to deploy only immutable, pre-tested build drop packages." },
    { id: 146, subject: "azure-devops", tag: "Monk Mindset & Secret Sanctuary", question: "What is 'Gupteya' in the context of cloud configuration management?", answer: "The principle of treating secrets as invisible entities stored in a central Key Vault sanctuary, fetched dynamically in memory, and never logged." },
    { id: 147, subject: "azure-devops", tag: "KISS & Variable Groups", question: "How do linked Key Vault Variable Groups simplify secret management?", answer: "They abstract secret fetching from application code, allowing pipelines to reference variables naturally without custom secret-retrieval scripts." },
    { id: 148, subject: "azure-devops", tag: "Nudge Theory & Secret Masking", question: "How does Azure DevOps protect pipeline logs from accidental credential exposure?", answer: "It automatically scans stdout/stderr console streams in real time and replaces any detected secret variable values with '***'." },
    { id: 149, subject: "azure-devops", tag: "Static Code Analysis & Sanctuary Scans", question: "How does a sanctuary secret scan step prevent secret leaks before deployment?", answer: "It runs regex checks against source files during compilation and fails the build stage immediately if plain-text password signatures exist." },
    { id: 150, subject: "azure-devops", tag: "Monk Mindset & Production Sanctuary", question: "Why is the Production Environment viewed as a 'Garbhagriha' (Sacred Threshold)?", answer: "Because crossing into live production requires passing silent, automated health guardians rather than rushing blindly with untested code." },
    { id: 151, subject: "azure-devops", tag: "Nudge Theory & Azure Monitor Gates", question: "Why are automated Azure Monitor gates preferred over manual human approvals?", answer: "Automated gates query Application Insights telemetry objectively, aborting deployments immediately if error rates spike and avoiding human rubber-stamping." },
    { id: 152, subject: "azure-devops", tag: "KISS & Environment Branch Control", question: "How do environment branch controls enforce release predictability?", answer: "They restrict production environment deployments strictly to the 'main' branch, making accidental releases from feature branches impossible." },
    { id: 153, subject: "azure-devops", tag: "Canary Rollout & Automated Rollback", question: "How does a Canary deployment strategy protect live users during releases?", answer: "It routes a small fraction of traffic to the new build, runs synthetic health probes, and automatically rolls back if latency or error thresholds fail." },
    { id: 154, subject: "azure-devops", tag: "Monk Mindset & Sakshi Bhava", question: "How does 'Sakshi Bhava' (Pure Witness) manifest in DevOps observability?", answer: "Through continuous, unattached witnessing of system telemetry and streaming all audit logs to a central Log Analytics Workspace in real time." },
    { id: 155, subject: "azure-devops", tag: "Nudge Theory & Drift Detection", question: "How do nightly scheduled Terraform dry-runs enforce zero-drift operations?", answer: "They silently compare running cloud infrastructure against Git source code every night and alert engineers instantly if unauthorized manual UI tweaks occurred." },
    { id: 156, subject: "azure-devops", tag: "KISS & Centralized Auditing", question: "Why is streaming Azure DevOps audit logs to Azure Log Analytics essential?", answer: "It consolidates security, repository, and permission events into a single searchable KQL store, eliminating siloed dashboards and compliance gaps." },
    { id: 157, subject: "azure-devops", tag: "Continuous Hygiene & Self-Cleaning", question: "What daily hygiene rituals keep an Azure DevOps workspace free of entropy?", answer: "Automatically deleting completed PR branches, revoking idle PAT tokens, and running automated cleanup scripts for orphaned preview environments." }
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
          <option value="azure-devops">☁️ Azure DevOps Mastery</option>
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
