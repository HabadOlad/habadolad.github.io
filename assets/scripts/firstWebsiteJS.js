var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

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
  var dateString = now.toLocaleDateString(undefined, dateOptions);

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
    "@Habad Olad " + timeString + amPM + " | " + dateString + " | " + gmtString;
}

// Call updateClock function every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
//updateClock();
