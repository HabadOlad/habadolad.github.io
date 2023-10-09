var quotes = [
    "Success is not obtained overnight. It comes in installments; you get a little bit today, a little bit tomorrow until the whole package is given out. The day you procrastinate, you lose that day\’s success.",
    "Anyone can do any amount of work, provided it isn\’t the work he is supposed to be doing at that moment",
    "Do not wait to strike till the iron is hot; but make it hot by striking. ",
    "Set a timer and compete to beat the clock to conquer procrastination. ",
    "Start by doing what\’s necessary, then what\’s possible, and suddenly you are doing the impossible.",
    "You can't just turn on creativity like a faucet. You must be in the right mood. What mood is that? Last minute panic.",
    "You may delay, but time will not",
    "Only put off until tomorrow what you are willing to die having left undone",
    "I can't think about that right now. If I do, I'll go crazy. I'll think about that tomorrow",
    "Procrastination is the thief of time, collar him",
    "I'm a big believer in putting things off, In fact, I even put off procrastinating.",
    "Procrastination is the art of keeping up with yesterday",
    "It is awfully hard work doing nothing. However, I don't mind hard work where there is no definite object of any kind",
    "Nothing is born into this world without labour",
    "If you take too long in deciding what to do with your life, you'll find you've done it",
    "In your actions, don't procrastinate. In your conversations, don't confuse. In your thoughts, don't wander. In your soul, don't be passive or aggressive. In your life, don't be all about business.",
    "Procrastination is also a subtle act of corruption , it corrupts valuable time",
    "Just get started.",
    "Serial killers don't procrastinate, so neither should you",
    "Think of many things; do one",
    "Time is an equal opportunity employer. Each human being has exactly the same number of hours and minutes every day. Rich people can't buy more hours. Scientists can't invent new minutes. And you can't save time to spend it on another day. Even so, time is amazingly fair and forgiving. No matter how much time you've wasted in the past, you still have an entire tomorrow.",
    "You cannot escape the responsibility of tomorrow by evading it today",
    "Someday is not a day of the week.",
    "Meteorologists seem to be better at forecasting the weather (at least in the short term) than we are at forecasting our own mood in the future",
    "We want things to go perfectly, so we tell ourselves that we'll get started once the conditions are right...it'd be better to focus on making do with how things actually are...",
    "Prime reasons for failure; fear, procrastination, anger",
    "Done is better than perfect",
    






    
];
function quoteRandomizer() {
var randomNumber = Math.floor(Math.random()* (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}