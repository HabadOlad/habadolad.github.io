var quotes = [
    "Success is not obtained overnight. It comes in installments; you get a little bit today, a little bit tomorrow until the whole package is given out. The day you procrastinate, you lose that day’s success.",
    "Anyone can do any amount of work, provided it isn’t the work he is supposed to be doing at that moment",
    "Do not wait to strike till the iron is hot; but make it hot by striking. ",
    "Set a timer and compete to beat the clock to conquer procrastination. ",
    "Start by doing what’s necessary, then what’s possible, and suddenly you are doing the impossible.",
    "Time is an equal opportunity employer. Each human being has exactly the same number of hours and minutes every day. Rich people can't buy more hours. Scientists can't invent new minutes. And you can't save time to spend it on another day. Even so, time is amazingly fair and forgiving. No matter how much time you've wasted in the past, you still have an entire tomorrow.”,
    "You never know how strong you are, until being strong is the only choice you have",
];

var randomNumber = Math.floor(Math.random()* (quotes.length));
console.log(randomNumber);
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];