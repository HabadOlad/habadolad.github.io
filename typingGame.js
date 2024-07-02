const words = "My autobiography written as it's happening. The theme is about staying alive, getting a job, finding a mate, having a place to live, finding a creative outlet. Life is a war of attrition. You have to stay active on all fronts. It's one thing after another. I've tried to control a chaotic universe. And it's a losing battle. But I can't let go. I've tried, but I can't."
const wordCount = words.length


function randomWord(){
    const randomIndex = Math.cell(Math.random() * wordCount)
    return words[randomIndex];
}

function newGame(){
    document.getElementById('words').innerHTML = '';
    for (let i = 0; i < 200; i++){
        document.getElementById('words').innerHTML += randomWord;

    }
}

newGame()
