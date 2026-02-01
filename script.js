/* ---------- LOGS PAGE ---------- */
const logs = [
  "[INFO] Booting Relationship Monitor...",
  "[INFO] Loading emotional dependencies...",
  "[WARNING] Girlfriend too cute for current configuration",
  "[INFO] Running compatibility checks...",
  "[ERROR] Valentine's Date not found",
  "[INFO] Boyfriend experiencing emotional dependency",
  "[CRITICAL] Immediate action required"
];

const terminal = document.getElementById("terminal");
const runFixBtn = document.getElementById("runFixBtn");

if (terminal) {
  let index = 0;

  function typeLog() {
    if (index < logs.length) {
      terminal.innerHTML += logs[index] + "<br>";
      terminal.scrollTop = terminal.scrollHeight;
      index++;
      setTimeout(typeLog, 700);
    } else if (runFixBtn) {
      runFixBtn.classList.remove("hidden");
    }
  }

  typeLog();
}

/* ---------- FIX PAGE ---------- */
const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("statusText");
const viewResultBtn = document.getElementById("viewResultBtn");

if (progressBar) {
  let progress = 0;

  const messages = [
    "Installing feelings...",
    "Resolving past mistakes...",
    "Optimizing hugs...",
    "Injecting confidence...",
    "Finalizing romance build..."
  ];

  const interval = setInterval(() => {
    progress += 20;
    progressBar.style.width = progress + "%";
    statusText.textContent = messages[Math.min(progress / 20 - 1, messages.length - 1)];

    if (progress >= 100) {
      clearInterval(interval);
      statusText.textContent = "Fix completed with warnings.";
      viewResultBtn.classList.remove("hidden");
    }
  }, 900);
}
/* ---------- RESULT PAGE ---------- */
/* ---------- RESULT PAGE ---------- */
function approve() {
  window.location.href = "success.html";
}

const rejectBtn = document.getElementById("rejectBtn");

let rejectUsed = false;

if (rejectBtn) {
  // FIRST click allowed
  rejectBtn.addEventListener("click", () => {
    if (!rejectUsed) {
      rejectUsed = true;
      alert("Chota babu ke sath aisa kiya 🥺");

      // After first click, activate dodge mode
      activateRejectDodge();
    }
  });
}

function activateRejectDodge() {
  rejectBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    rejectBtn.style.left = x + "px";
    rejectBtn.style.top = y + "px";
  });
}

