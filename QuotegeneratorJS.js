var quotes = [
    "You can't just turn on creativity like a faucet. You must be in the right mood. What mood is that? Last-minute panic.”,
    "You may delay, but time will not.”,
    "Only put off until tomorrow what you are willing to die having left undone”,
    "I can't think about that right now. If I do, I'll go crazy. I'll think about that tomorrow.”,
    "Procrastination is the thief of time, collar him.”,
    "I'm a big believer in putting things off, In fact, I even put off procrastinating",
    "Procrastination is the art of keeping up with yesterday”,
    "It is awfully hard work doing nothing. However, I don't mind hard work where there is no definite object of any kind",
    "Nothing is born into this world without labour.”,
    "If you take too long in deciding what to do with your life, you'll find you've done it.”,
    "In your actions, don't procrastinate. In your conversations, don't confuse. In your thoughts, don't wander. In your soul, don't be passive or aggressive. In your life, don't be all about business.”,
    "Procrastination is also a subtle act of corruption – it corrupts valuable time”,
    "Just get started.”,
    "Serial killers don't procrastinate, so neither should you.”,
    "Think of many things; do one.”,
    "Success is not obtained overnight. It comes in installments; you get a little bit today, a little bit tomorrow until the whole package is given out. The day you procrastinate, you lose that day’s success.",
    "Anyone can do any amount of work, provided it isn’t the work he is supposed to be doing at that moment. – Robert Benchley",
    "Do not wait to strike till the iron is hot; but make it hot by striking. ",
    "Set a timer and compete to beat the clock to conquer procrastination. ",
    "Start by doing what’s necessary, then what’s possible, and suddenly you are doing the impossible. ",
    "Time is an equal opportunity employer. Each human being has exactly the same number of hours and minutes every day. Rich people can't buy more hours. Scientists can't invent new minutes. And you can't save time to spend it on another day. Even so, time is amazingly fair and forgiving. No matter how much time you've wasted in the past, you still have an entire tomorrow.”,
    "You cannot escape the responsibility of tomorrow by evading it today.”,
    "Someday is not a day of the week.”,
    "Meteorologists seem to be better at forecasting the weather (at least in the short term) than we are at forecasting our own mood in the future ",
    "We want things to go perfectly, so we tell ourselves that we'll get started once the conditions are right...it'd be better to focus on making do with how things actually are...”,
    "Done is better than perfect. ",
    "Waiting for perfect is never as smart as making progress. ",
    "Perfectionism is the enemy of progress. ",
    "I’m a perfectionist, which I think is just a fancy way of saying I’m too scared to do any work",
    "Don’t wait for extraordinary opportunities. Seize common occasions and make them great. ",
    "Perfectionism is often an excuse for procrastination. ",
    "Better to do something imperfectly than to do nothing perfectly.",
    "I never put off till tomorrow what I can do the day after. ",
    "Tomorrow is the only day in the year that appeals to a lazy man. ",
    "How does a project get to be a year behind schedule? One day at a time. ",
    "He who has begun has half done. Dare to be wise, begin ",
    "Tea is slow, in growing, in drinking, in enjoying, It makes sense. Good things take time.",
    "Continuous improvement is better than delayed perfection.",
    "Procrastination is opportunity’s natural assassin.",
    "Delay negates purpose, procrastination adds pressure.",
    "You can delegate the activity but not the responsibility; you can share the praise but not the blame.”,
    "Don't wait for tomorrow; tomorrow is for the dead.”,
    "Be prolific, not perfect.”,
    "Don’t procrastinate, life is too short. Do things as they come to you, live your life like a high-speed sport.",
    "I have spent my days stringing and unstringing my instrument, while the song I came to sing remains unsung.”,
    "The shortest answer is doing.”,
    "Deadlines just aren't real to me until I'm staring one in the face.”,
    "Procrastination is the fire where great dreams go to burn.”,
    "One of these days, is none of these days.”,
    "Somebody should tell us, right at the start of our lives, that we are dying. Then we might live life to the limit, every minute of every day. Do it! I say. Whatever you want to do, do it now! There are only so many tomorrows.”,
    "You need to spend time crawling alone through shadows to truly appreciate what it is to stand in the sun.”,
    "Even bad times are temporary.”,
    "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.”,
    "I can't eat and I can't sleep. I'm not doing well in terms of being a functional human, you know?”
    "Mental pain is less dramatic than physical pain, but it is more common and also more hard to bear. The frequent attempt to conceal mental pain increases the burden: it is easier to say “My tooth is aching” than to say “My heart is broken.”,
    "Do you not see how necessary a world of pains and troubles is to school an intelligence and make it a soul?”,
    "I'll never forget how the depression and loneliness felt good and bad at the same time. Still does.”,
    "The sun stopped shining for me is all. The whole story is: I am sad. I am sad all the time and the sadness is so heavy that I can't get away from it. Not ever.”,
    "Even for me life had its gleams of sunshine.”,
    "In addition to my other numerous acquaintances, I have one more intimate confidant… My depression is the most faithful mistress I have known — no wonder, then, that I return the love.”,
    "I've got a bad case of the 3:00 am guilts - you know, when you lie in bed awake and replay all those things you didn't do right? Because, as we all know, nothing solves insomnia like a nice warm glass of regret, depression and self-loathing.”,
    "If you are chronically down, it is a lifelong fight to keep from sinking ”,
    "Maybe we all have darkness inside of us and some of us are better at dealing with it than others.”,
    "A rose trapped inside a fist.”,
    "I took a deep breath and listened to the old brag of my heart. I am, I am, I am.”,
    "The wound is the place where the Light enters you.",
    "But a mermaid has no tears, and therefore she suffers so much more.”,
    "When you've suffered a great deal in life, each additional pain is both unbearable and trifling.”.
    "At some point we all look up and realize we are lost in a maze.”,
    "Sometimes, life will kick you around, but sooner or later, you realize you’re not just a survivor. You’re a warrior, and you’re stronger than anything life throws your way.",
    "And if today all you did was hold yourself together, I’m proud of you.”,
    "No darkness lasts forever. And even there, there are stars. Ursula K. Le Guin",
    "Depression lies. It tells you you’ve always felt this way, and you always will. But you haven’t, and you won’t.",
    "Depression isn’t a disease; depression is a normal response to abnormal life experiences. ",
    "I need one of those long hugs where you kinda forget whatever else is happening around you for minute. ",
    "Nothing changes if nothing changes",
    "When you don’t know what you need, you want everything. ",
    "The act of releasing your shame is – in itself – healing. ",
    "Persistent in life? I think, yes, I am. I’m going to do something until I get it right.”,
    "Do you get a promotion every year? In your job? No, right? So every year you work is a failure? Yes or no? No. Every year you work, you work towards something, towards a goal — which is to get a promotion, to be able to take care of your family, provide a house for them, or take care of your parents. You work towards a goal — it’s not a failure. It’s steps to success. I don’t want to make it personal. There’s always steps to it. Michael Jordan played 15 years, won six championships. The other nine years was a failure? That’s what you’re telling me. I’m asking you a question, yes or no? Exactly. So why you ask me that question? It’s the wrong question",
    "Some old wounds never truly heal, and bleed again at the slightest word.”,
    "One thing you can't hide - is when you're crippled inside.”,
    "I am in that temper that if I were under water I would scarcely kick to come to the top.”,
    "The truth is, we know so little about life, we don’t really know what the good news is and what the bad news is,”,
    "There are more things … likely to frighten us than there are to crush us; we suffer more often in imagination than in reality. ",
    "I didn’t want my picture taken because I was going to cry. I didn’t know why I was going to cry, but I knew that if anybody spoke to me or looked at me too closely the tears would fly out of my eyes and the sobs would fly out of my throat and I’d cry for a week. I could feel the tears brimming and sloshing in me like water in a glass that is unsteady and too full.",
    "I keep wanting to crawl back into the womb ",
    "A terrible depression yesterday. Visions of my life petering out into a kind of soft-brained stupor from lack of use. ",
    "You have lost all delight in life. Ahead is a large array of blind alleys. You are half-deliberately, half-desperately cutting off your grip on creative life. You are becoming a neuter machine. You cannot love, even if you knew how to begin to love. Every thought is a devil, a hell-if you could do a lot of things over again, ah, how differently you would do them! You want to go home, back to the womb. You watch the world bang door after door in your face, numbly, bitterly. You have forgotten the secret you knew, once, ah, once, of being joyous, of laughing, of opening doors. ",
    "Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways. ",
    "Many, many men have been just as troubled morally and spiritually as you are right now. Happily, some of them kept records of their troubles. You’ll learn from them – if you want to. ",
    "If you run away from pain without identifying and solving the underlying issue, you will probably run to exactly the same situation again. Justin Kan",
    "I believe depression is legitimate. But I also believe that if you don’t: exercise, eat nutritious foods, get sunlight, get enough sleep, consume positive material, surround yourself with support, then you aren’t giving yourself a fighting chance. ",
    "It’s okay to worry; it’s okay to be sad. It’s okay to get scared; it’s okay to be mad. It’s okay to embrace our humanity. In fact we don’t have any choice but to be the sensitive, vulnerable creatures we were made to be. Breathe. Let go a bit. It’s okay to be you just as you are. ",
    "Things not to say to someone with mental illness: Ignore it. Forget about it. Fight it. You are better than this. You are over thinking.” ,
    "In three words I can sum up everything I've learned about life: it goes on.”,
    "To live is the rarest thing in the world. Most people exist, that is all.”,
    "I have not failed. I've just found 10'000 ways that won't work",
    "Wounds won’t heal the way you want them to, they heal the way they need to",
    "Every day begins with an act of courage and hope: getting out of bed.”,
    "You never know how strong you are, until being strong is the only choice you have.” ,
];

var randomNumber = Math.floor(Math.random()* (quotes.length));
console.log(randomNumber);
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];














]