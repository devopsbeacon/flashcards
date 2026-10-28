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
            <option value="all">⚡ All Docker Topics (10 Questions)</option>
            <option value="foundations">🐳 Docker Foundations & Mindset (3 Qs)</option>
            <option value="multistage">🛠️ Multi-Stage Builds & Compose (4 Qs)</option>
            <option value="security">🔒 Advanced Security & Hardening (3 Qs)</option>
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
