const navigation = document.getElementById("navigation");
navigation.innerHTML = `  <ul>
<li><a>HABAD OLAD</a></li>
<li><a>PORTFOLIO</a></li>
<li><a>PROJECTS</a></li>
<li><a>BLOG</a></li>
<li><a>CONTACT</a></li>
<li id="date"></li>
</ul>
<footer>©2025 Habad Olad. All rights reserved.</footer>`;

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
