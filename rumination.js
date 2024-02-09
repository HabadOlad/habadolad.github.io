//JS file for rumination quotes
var quotes = [
    "When we are tired, we are attacked by ideas we conquered long ago.",
    "Life can only be understood backwards; but it must be lived forwards.",
    "Shut up, she tells her monkey mind. Please shut up, you picker of nits, presser of bruises, counter of losses, fearer of failures, collector of grievances future and past.",
    "As cow, deer, and goat chew food again and again in endless circles, overthinking creates an endless loop and exhaust energy. Conscious micro meditation (Laghu gayan kriya) can bring you out of the loop.",

    
    


    











];
function quoteRandomizer() {
var randomNumber = Math.floor(Math.random()* (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
