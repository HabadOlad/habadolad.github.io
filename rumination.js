//JS file for rumination quotes
var quotes = [
    "When we are tired, we are attacked by ideas we conquered long ago.",
    "Life can only be understood backwards; but it must be lived forwards.",
    "Shut up, she tells her monkey mind. Please shut up, you picker of nits, presser of bruises, counter of losses, fearer of failures, collector of grievances future and past.",
    "As cow, deer, and goat chew food again and again in endless circles, overthinking creates an endless loop and exhaust energy. Conscious mindfulness can bring you out of the loop.",
    "Flood a pool of bloody thoughts with a pool of happy ones.",
    "But it is a melancholy of mine own, compounded of many simples, extracted from many objects, and indeed the sundry contemplation of my travels, which, by often rumination, wraps me in the most humorous sadness.",
    "It would be much better if I could only stop thinking. Thoughts are the dullest things. Duller than flesh. They stretch out and there's no end to them and they leave a funny taste in the mouth. Then there are words, inside the thoughts, unfinished words, a sketchy sentence which constantly returns...It goes, it goes ... and there's no end to it. It's worse than the rest because I feel responsible and have complicity in it. For example, this sort of painful rumination: I exist, I am the one who keeps it up. ",
    "What is life but an unpleasant interruption to a peaceful nonexistence.",
    "I spend many months in apparently listless rumination out of which I hope something will emerge.",
    "What is essential to practice the Tao is to get rid of cravings and vexations. If these afflictions are not removed, it is impossible to attain stability. This is like the case of the fertile field, which cannot produce good crops as long as the weeds are not cleared away. Cravings and ruminations are the weeds of the mind; if you do not clear them away, concentration and wisdom do not develop.",
    "I have bad days. Sometimes I have a lot of bad days. By and large, I think most people fall into a bad mood because they're able to ruminate on whatever the problem at hand is, and that makes it worse. But when you intercept the rumination process with something that requires your full attention - that's stimulating and absorbing, that places a demand on your intellectual focus - you don't get to ruminate. In a way, it's a mental health aid to be able to do that so much. My routine, what I do, it just feels like home. It's my comfort food.",
    "You must learn some of my philosophy. Think only of the past as its remembrance gives you pleasure.",
    "The past can't hurt you anymore, not unless you let it.",
    "You’re just another story I can’t tell anymore.",
    "The past is a foreign country; they do things differently there.",
    "The past was always there, lived inside of you, and it helped to make you who you were. But it had to be placed in perspective. The past could not dominate the future.",
    "No man is rich enough to buy back his past.",
    "Rumination tends to be eased if we learn to be mindful; if we are able to be aware of, and understand how our own thoughts work.",
    "There is nothing either good or bad, but thinking makes it so.",
    "We ruminate on suffering, regret, and sorrow. We chew on them, swallow them, bring them back up, and eat them again and again. If we’re feeding our suffering while we’re walking, working, eating, or talking, we are making ourselves victims of the ghosts of the past, of the future, or our worries in the present. We’re not living our lives.",
    "There are animals that are ruminants, like water buffalo and cows. After chewing and swallowing, they bring up the food again and they chew and swallow it again. There are people who continue to consume the suffering of the past in that way. They spend their time during the day ruminating over their own suffering from the past.",
    "In fact, whenever a human being genuinely turns to the inner world and tries to know himself—not by ruminating about his subjective thoughts and feelings, but by following the expressions of his own objective nature such as dreams and genuine fantasies—then sooner or later the Self emerges. The ego will then find an inner power that contains all the possibilities of renewal.",
    "My past is trying to catch up to me and I must continue run from it. It's the only way I can live.",
    "Let the past be content with itself, for man needs forgetfulness as well as memory",
    "Mindfulness helps especially for those of us for whom every setback, hurt or dissapointment creates endless cascades of rumination",
    "When we endlessly ruminate over distant times, we miss extraordinary things in the present moment. These extraordinary things are, in actual fact, all we have: the here and now.",
    "But research shows that rumination does exactly the opposite: our ability to solve problems actually deteriorates markedly during rumination",
    "What are you ruminating on? Old suffering?",
    "Rumination can also make the depression stronger by creating conditions that are, well, more depressing.",
    "excessive ruminating isn't just a type of procrastination. It's actually a form of self-protection.",
    "Any form of negative rumination - for example, worrying about your financial future or health - will stimulate the release of destructive neurochemicals",
    "Man is not worried by real problems so much as by his imagined anxieties about real problems.",
    "Worry is like a rocking chair: it gives you something to do but never gets you anywhere",
    "I think and think and think, I've thought myself out of happiness one million times, but never once into it.",
    "Nothing can harm you as much as your own thoughts unguarded.",
    "Rule number one is, don’t sweat the small stuff. Rule number two is, it’s all small stuff.",
    "Everyone does stupid things they regret. I, for one, do them daily. So stop your downward spiral by heaving a big sigh and saying ‘OK, that happened.’ And then move on.",
    "Overthinking ruins you. Ruins the situation, twists things around, makes you worry and just makes everything much worse than it actually is.",
    "Thinking about all the things you could have done differently, second-guessing every decision you make, and imagining all the worst-case scenarios in life can be exhausting.",
    "Life is too short to be spent at war with yourself.",
    "Perfectionists and overachievers have tendencies to overthink because the fear of failing and the need to be perfect take over.",
    "There is nothing more exhausting than going through the same pattern of negative thoughts over and over again.",
    "Overthinking sometimes involves beating yourself up for the decisions you already made.",
    "If overthinking burned calories, I would be a supermodel.",
    "We can’t solve our problems with the same level of thinking that created them.",
    "Frankly, my dear, I don't give a damn.",
    "Worrying how things go wrong doesn’t help things go right.",
    "You can accept or reject the way you are treated by other people, but until you heal the wounds of your past, you will continue to bleed. You can bandage the bleeding with food, with alcohol, with drugs, with work, with cigarettes, with sex, but eventually, it will all ooze through and stain your life. You must find the strength to open the wounds, stick your hands inside, pull out the core of the pain that is holding you in your past, the memories, and make peace with them.",
    "The one charm of the past is that it is the past.",
    "Don't let yesterday use up too much of today.",
    "The more anger towards the past you carry in your heart, the less capable you are of loving in the present.",
    "Your past is just a story. And once you realize this it has no power over you.",
    "We need not destroy the past. It is gone.",
    "Let go. Why do you cling to pain? There is nothing you can do about the wrongs of yesterday. It is not yours to judge. Why hold on to the very thing which keeps you from hope and love?",
    "You are not defined by your past. You are prepared by your past.",
    "No matter how painful your past has been, you have made it through.",
    "Concentrate the mind on the present moment.",
    "Thinking too little about things or thinking too much both make us obstinate and fanatical",
    "We drink the poison our minds pour for us and wonder why we feel sick.",
    "It’s important not to be embarrassed by your past. The contradictions are part of what we are.",
    "Reality is an acquired taste.",
    
    













    
    


    











];
function quoteRandomizer() {
var randomNumber = Math.floor(Math.random()* (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
