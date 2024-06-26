var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
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
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var timeString = hours + ':' + minutes + ':' + seconds;


// Display date
var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var dateString = currentDate.toLocaleDateString(undefined, dateOptions);

// Display GMT
var gmtString = "GMT" + (currentDate.getTimezoneOffset() > 0 ? "-" : "+") + (currentDate.getTimezoneOffset() / 60);

document.getElementById('date').innerText = timeString + ' | ' + dateString + ' | ' + gmtString;;
}

// Call updateClock function every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
//updateClock();
