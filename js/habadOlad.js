document.addEventListener("DOMContentLoaded", () => {
  // --- 1. STATUS BAR LOGIC (Runs on ALL pages) ---
  const locationBar = document.querySelector(".location");

  if (locationBar) {
    const path = window.location.pathname;

    switch (true) {
      case path.includes("/blog"):
        locationBar.innerHTML =
          "LOCATION: BLOG... YOU ARE NOW READING THE MUSINGS OF A GENIUS.";
        break;
      case path.includes("/portfolio"):
        locationBar.innerHTML =
          "LOCATION: PORTFOLIO... YOU ARE VIEWING THE INVENTIONS OF A MAD SCIENTIST.";
        break;
      case path.includes("/contact"):
        locationBar.innerHTML =
          "LOCATION: TRANSMISSION ROOM... LEAVE A MESSAGE FOR THE MASTERMIND.";
        break;
      case path.includes("/about"):
        locationBar.innerHTML =
          "LOCATION: DOSSIER... ENQUIRING ABOUT THE FINE GENTLEMAN WHO RUNS THIS SITE.";
        break;
      default:
        locationBar.innerHTML =
          "LOCATION: HOME... GREETINGS! YOU'VE STUMBLED UPON THE MOST DOPE WEBSITE ON THE NET!";
        break;
    }
  }

  // --- 2. TERMINAL LOGIC (Only runs if elements exist) ---
  const inputEl = document.getElementById("input");
  const outputEl = document.getElementById("output");
  const nameprompt = document.getElementById("nameprompt");

  if (inputEl && outputEl && nameprompt) {
    let playerName = "";

    inputEl.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        let inputText = inputEl.value.trim();

        if (playerName === "") {
          if (inputText === "") return;

          playerName = inputText;
          inputEl.value = "";

          outputEl.innerHTML += `<div>You register as <strong>"${playerName}."</strong> The terminal hums in acknowledgment. Welcome to Habad Olad's corner of the net—watch your step, and do not overstay your welcome.</div><br />`;
          outputEl.innerHTML += `<div>So ${playerName} type Help....or PLAY </div><br />`;

          nameprompt.innerHTML = "$> ";
        }
      }
    });

    // Initial output setup
    outputEl.innerHTML += `<pre class="welcome-art">${`   
░██     ░██            ░██                          ░██      ░██████   ░██                   ░██ 
░██     ░██            ░██                          ░██     ░██   ░██  ░██                   ░██ 
░██     ░██  ░██████   ░████████   ░██████    ░████████    ░██     ░██ ░██  ░██████    ░████████ 
░██████████       ░██  ░██    ░██       ░██  ░██    ░██    ░██     ░██ ░██       ░██  ░██    ░██ 
░██     ░██  ░███████  ░██    ░██  ░███████  ░██    ░██    ░██     ░██ ░██  ░███████  ░██    ░██ 
░██     ░██ ░██   ░██  ░███   ░██ ░██   ░██  ░██   ░███     ░██   ░██  ░██ ░██   ░██  ░██   ░███ 
░██     ░██  ░█████░██ ░██░█████   ░█████░██  ░█████░██      ░██████   ░██  ░█████░██  ░█████░██ 
`}</pre><br />`;
    outputEl.innerHTML += `<div>You stand before a glowing CRT monitor humming quietly in a dark room. On screen: a live portfolio session waiting for input.</div><br />`;
    outputEl.innerHTML += `<div>Do you wish to initialize the portfolio session? Read thy blog? Or enquire about the fine gentleman who runs this page?</div><br />`;
  }
});
