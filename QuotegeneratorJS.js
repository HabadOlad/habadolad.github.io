var quotes = [
    "Success is not obtained overnight. It comes in installments; you get a little bit today, a little bit tomorrow until the whole package is given out. The day you procrastinate, you lose that day’s success.",
    "Anyone can do any amount of work, provided it isn/’t the work he is supposed to be doing at that moment",
    "Do not wait to strike till the iron is hot; but make it hot by striking. ",
    "Set a timer and compete to beat the clock to conquer procrastination. ",
    "Start by doing what/’s necessary, then what/’s possible, and suddenly you are doing the impossible.",;
var randomNumber = Math.floor(Math.random()* (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];