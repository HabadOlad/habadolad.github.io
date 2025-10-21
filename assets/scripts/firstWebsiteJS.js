const navigation = document.getElementById("navigation");
navigation.innerHTML = `  <ul>
<li><a>HABAD OLAD</a></li>
<li><a>PORTFOLIO</a></li>
<li><a>PROJECTS</a></li>
<li><a>BLOG</a></li>
<li><a>CONTACT</a></li>
<li id="date"></li>
</ul>`;

const aboutTheAuthor = document.getElementById("aboutTheAuthor");
aboutTheAuthor.innerHTML = ` <section class="about-text is-hidden" id="about-section">
<div class="image-with-caption">
<img src="assets/images/mestaringatarainbow.jpeg" alt="Me staring at a rainbow">
<figcaption>Me (the author) staring at a rainbow!</figcaption>
</div>

<p>Currently living my dream job as a software engineer! Prior I was a qualified tutor and postgraduate researcher with a background in consulting. Worked on the UK’s most high-profile infrastructure developments such as High Speed 2 and Heathrow terminal expansion. Skilled in creating positive relationships with customers and stakeholders. Experienced in data analytics, tutoring, project management, database administration and consulting.</p>

<p>My earliest programming experience was with Neopets back in the 90's/early 2000s. I initially would make mini websites for my neopets and change the colour of the font with html. For some odd reason I never pursued this further and veered away from the programming and had a passion for the environment. I always felt intimidated by programmers, thinking they were mathematical savants but it was just insecurity on my part. I studied geography as an undergrad and a masters in environmental technology. My first job was in consulting, although rewarding I knew it was not my forte. I moved onto data analytics which meant I had to learn python to manipulate CSV files and create graphs using matplotlib/numpy/seaborn (and a little bit of VB basic!). This reinvigorated my passion for code. This website not only showcases my skill with html, css and javascript it's also an aide with a plethora of links, motivational quotes and fun little games!</p>

<p>Habad Olad holds a Msc in Environmental Technology from Imperial College London and a Bsc in Geography and Geology from the University of Hull.</p>
</section>`;

const footer = document.getElementById("footer");
footer.innerHTML = `<footer>©2025 Habad Olad. All rights reserved.</footer>`;

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Pad single digit minutes and seconds with leading zeros
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Determine if it's AM or PM
  var amPM = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, make it 12

  // Display date
  var dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var dateString = now.toLocaleDateString(undefined, dateOptions).toUpperCase();

  var timeString = `${hours}:${minutes}:${seconds}`;
  let timezoneOffset = 0;
  if (now.getTimezoneOffset() !== 0) {
    timezoneOffset = Math.abs(now.getTimezoneOffset() / 60);
  }
  let timezonePolarity = now.getTimezoneOffset() > 0 ? "-" : "+";
  const offsetString = !!timezoneOffset
    ? timezonePolarity + timezoneOffset
    : "";
  var gmtString = `GMT ${offsetString}`;

  // Display GMT
  document.getElementById("date").innerText =
    "LONDON, UK " + timeString + amPM + "  " + dateString + "  " + gmtString;
}

// Call updateClock function every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
