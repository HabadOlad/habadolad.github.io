const footer = document.getElementById("footer");
footer.innerHTML = `<footer> &copy; ${new Date().getFullYear()} Habad Olad. All rights reserved.</footer>`;

document.addEventListener("DOMContentLoaded", function () {
  const trigger = document.getElementById("click-word");

  trigger.addEventListener("click", function (e) {
    // 1. Stop the event from bubbling up (optional)
    e.stopPropagation();

    // 2. Toggle the 'show-photo' class
    // This class uses the CSS rule above to make the image visible until clicked again.
    trigger.classList.toggle("show-photo");

    // Optional: Add a smooth visual effect on click
    if (trigger.classList.contains("show-photo")) {
      trigger.style.backgroundColor = "lightblue";
    } else {
      trigger.style.backgroundColor = "transparent";
    }
  });

  // 3. OPTIONAL: Hide the photo if the user clicks anywhere else on the page
  document.addEventListener("click", function (e) {
    if (
      trigger.classList.contains("show-photo") &&
      !trigger.contains(e.target)
    ) {
      trigger.classList.remove("show-photo");
      trigger.style.backgroundColor = "transparent"; // Reset background
    }
  });
});

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
  document.getElementById("clock").innerHTML =
    "LONDON, UK " +
    timeString +
    amPM +
    "<br>" +
    "  " +
    dateString +
    "  " +
    gmtString;
}

// Call updateClock function every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
