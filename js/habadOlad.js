const locationBar = document.querySelector(".location");
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const nameprompt = document.getElementById("nameprompt");

let playerName = "";

inputEl.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    let inputText = inputEl.value.trim();

    if (playerName === "") {
      if (inputText === "") return;

      playerName = inputText;
      inputEl.value = "";

      outputEl.innerHTML += `<div>"Ah, so your name is <strong>${playerName}</strong>"welcome to the site... </div><br />`;
      outputEl.innerHTML += `<div>"Welcome to the Eerie Estate ${playerName}...do not overstay your welcome here......." </div><br />`;

      // NOW WE SWAP IT! Only after they press enter does it become a permanent prompt.
      nameprompt.innerHTML = "$> ";
    }
  }
});

//status bar = location and updates of the location
locationBar.innerHTML = `Greetings! Salutations! You've stumbled upon the most dope happening website in the web! `;

// Initial output for the text
outputEl.innerHTML += `<div>Habad's funky website,Copyright (c) 2021 - ${new Date().getFullYear()} ,
Habadcorp, Inc. All rights reserved.
Habad's fun website is a registered trademark of
HabadCorp, Inc.</div>`;
outputEl.innerHTML += `<br />`;
outputEl.innerHTML += `<pre class="welcome-art">${`   
dMP dMP .aMMMb  dMMMMb  .aMMMb  dMMMMb        .aMMMb  dMP     .aMMMb  dMMMMb 
dMP dMP dMP"dMP dMP"dMP dMP"dMP dMP VMP       dMP"dMP dMP     dMP"dMP dMP VMP 
dMMMMMP dMMMMMP dMMMMK" dMMMMMP dMP dMP       dMP dMP dMP     dMMMMMP dMP dMP  
dMP dMP dMP dMP dMP.aMF dMP dMP dMP.aMP       dMP.aMP dMP     dMP dMP dMP.aMP   
dMP dMP dMP dMP dMMMMP" dMP dMP dMMMMP"        VMMMP" dMMMMMP dMP dMP dMMMMP"    
                                                                                                                                            
`}</pre>`;
outputEl.innerHTML += `<br />`;
outputEl.innerHTML += `<div>You stand before a glowing CRT monitor humming quietly in a dark room. On screen: a live portfolio session waiting for input.</div>`;
outputEl.innerHTML += `<div>The developer who crafted this dungeon speaks in HTML5, CSS grid, and Vanilla JS. Beyond this terminal lies an inventory of past projects, code experiments, and dev logs.</div>`;
outputEl.innerHTML += `<br />`;
outputEl.innerHTML += `<div>Do you wish to initialize the portfolio session? Read thy blog? Or enquire about the fine gentleman who runs this page?</div>`;
outputEl.innerHTML += `<br />`;
