/* ---------- LOGS PAGE ---------- */
const logs = [
  "[INFO] Booting Relationship Monitor... Hope gabasu doesn’t notice the bugs 🤞",
  "[INFO] Loading emotional dependencies... Please don't crash, Mallu queen 👑",
  "[WARNING] Girlfriend (gabasu) too cute for this simple Gujju boy’s codebase 😵‍💫",
  "[INFO] Running compatibility checks... Fingers crossed Mallu magic > Gujju logic",
  "[ERROR] Valentine’s Date not found — maybe because I’m still debugging my courage 😳",
  "[INFO] Boyfriend (that’s me) stuck in infinite loop of thoughts about gabasu 💭",
  "[CRITICAL] Immediate action required — must impress before gabasu bugs out!"
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


