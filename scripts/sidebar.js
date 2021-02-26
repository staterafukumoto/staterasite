const content = document.getElementById("leftwrapper")
const cookieconsent = document.getElementById("cookieconsent")
const phrases = [
    "up all night to get lucky!",
    "are we gonna have a problem?",
    "egg, extra egg",
    "now with seductive reasoning",
    "hey everybody, i love swords",
    "pogchamp",
    "you are poggers, you are not cringe.",
    "thinkin about strawberry milkshakes",
    "i don't wanna be the little spoon, i'm actually a fork",
    "i no longer have a manager, i can't be managed",
    "oops! all bottoms!",
    "haha website go brrr",
    "orfo; cokie for mikl",
    "via twitter for samsung smart fridge",
    "just tsundere things",
    "lomve triangle",
    "you have cancelled your stadia pro subscription",
    "w for wupwards",
    "*drinks milk*",
    "/r/hmmm",
    "ᶜʰᵒᵐᵖ💥",
    "when you don't know what to do, do.",
    "my sexuality is anger",
    "and then i whipped out my blackberry",
    "like a good neigbour, clorox eclair",
    "mom, that's your fursona",
    "you can't put me in a straight jacket because i like men",
    "honk if you're gay",
    "give me back my happiness molecules",
    "i am once again asking for emotional support",
    "drink my ascended milk",
    "hello, gordon!",
    "phantom of the web server",
    "we do NOT skip the neon genesis intro in this house",
    "no talk me, im angy",
    "dumb bitch hours",
    "new york stonk exchange",
    "tech tips",
    "rtx on",
    "davinci shittertons",
    "complicatedly simple!",
    "carriage utility mechanism",
    "medium dick energy",
    "no more owie plastic",
    "garlic bread!",
    "lost his dongle",
    "father i cannot click the book",
    "cave5.ogg",
    "was forced to eat beans several times",
    "dummy thicc",
    "you wouldn't reimplement an api",
    "zedex express",
    "zed's not dead",
    "i shouldn't have said it that way, but still.",
    "spoons, motherfucker, do you sell them?",
    "too angry to die",
    "the greatest show",
    "also try minecraft!",
    "also try terraria",
    "hi kids, do you like violence?",
    "dogchamp",
    "task failed successfully",
    "succ",
    "yeet",
    "kilometres morales!",
    "kilometres edgeworth!",
    "y'all got any baked beans?",
    "origami mommy",
    "this tastes different, did you put anything different in it?",
    "smooth criminal!",
    "outside studio door detected motion",
    "fldsmdfr",
    "brogle",
    "perpetually humorous",
    "gallows humour",
    "several people are typing...",
    "i guess they never miss",
    "¯\\_(ツ)_/¯",
    "bruh",
    "bruh moment",
    "road work ahead? uh yeah, i sure hope it does.",
    "k-pop for racial equality!",
    "monke",
    "toilet squad!",
    "kraft singles in your area",
    "yesterday, i asked you...",
    "🤔🤔🤔",
    "can i see your passport?",
    "geir! geir! geir!",
    "ichoons",
    "yeah, nah mate",
    "dollarydoo",
    "you will have your bad smells",
    "he's gay and we're also all gay",
    "hide the pain",
    "goth gf",
    "i met heather chandler and all i got was abused",
    "downward spiral 🌀",
    "subscribe to dolan dark",
    "subscribe to grandayy",
    "#stateraisoverparty",
    "2010s emo mommy",
    "dump truck ass",
    "nooooooooooooooo",
    "street smarts!",
    "i'm hungry",
    "(not clickbait)",
    "batchry",
    "na no",
    "that's my wife!",
    "*unreal sippage*",
    "you can't scare me with this",
    "trans rights!",
    "leave britney alone",
    "i live by two words: <br> 'fuck you', 'pay me'",
    "keep your love lockdown.",
    "delet this",
    "a new thing to unpack!",
    "<span style='font-family: monospace'> i   s e e   y o u </span>",
    "colourful!",
    "20 goto 10",
    "absolutely disgusting!",
    "and my axe!",
    "and my ass!",
    "i won award 42",
    "the demon barber on feet street.",
    "woah here she comes",
    "it all began with a smile",
    "scared and horny.",
    "gimme love",
    "joji spoon",
    "i have presidential aids",
    "my name jeff",
    "cucumber joe",
    "quality is (not) our recipe!",
    "hollywoo!",
    "hello gor- look gordon, ropes!",
    "that's what the werewolves wan't you to think",
    "didn't my tiger eat your ass?",
    "kill beef, go ham",
    "getting pegged",
    "crack and cheese",
    "hidden valley granola bars",
    "in 2077 what makes someone a criminal?",
    "this better not awaken anything in me",
    "peggedchamp",
    "my sexuality is maybe",
    "<span style='font-family: impact; font-family: 300;'> GameStonk </span> <br> <span style='font-size: 10px'> power to the masses </span>",
    "on my rise like $gme",
    "and then i said no, you know, like a liar",
    "omelette du fromage",
    "3d model me like one of your french girls",
    "angy",
    "<span style='font-family: inter;'>i can't believe it's helvetica<span>",
    "<span style='font-family: \"Comic Sans MS\",\"Comic Sans\",cursive;'>i can't believe it's not helvetica<span>",
    "<span style='font-family: \"Comic Sans MS\",\"Comic Sans\",cursive;'>i can't believe it's not lexend deca<span>",
    "lexend deca!",
    "<img height='40px' src='/img/OMEGALUL.png' style='pointer-events: none;'>",
    "<img height='40px' src='/img/twerk.gif' style='pointer-events: none;'>",
    "<img height='60px' src='/img/anime.gif' style='pointer-events: none;'>",
    "<img height='68px' src='/img/peggle.gif' style='pointer-events: none;'>",
    "<img height='68px' src='/img/dsrn.gif' style='pointer-events: none;'>",
    "she took my arm, i don't know how it happened",
    "<img height='58px' src='/img/sadyeet.gif' style='pointer-events: none;'>",
    "here for a good time not for a long time",
    "<img height='40px' src='/img/jebaited.png' style='pointer-events: none;'>",
    "<img height='14px' src='/img/kekw.png' style='pointer-events: none; line-height: 12px;'>"
]

async function load_home(){
    content.innerHTML = await (await fetch('/sidebar.html')).text();
    load_cookie()
    assignMarker()
    pickSubtitle()
    checkTheme()
}

function assignMarker(){
    var path = window.location.pathname
    var origin = window.location.origin
    var collection = document.getElementById("socialmedia").getElementsByTagName("A")

    for (i = 0; i < collection.length; i++) {
        if (collection.item(i).href.replace(origin,"") == path){
            collection.item(i).classList.add("currentActive")
        }
    } 
}

function pickSubtitle(){
    // for debug
    // var luckyone = phrases[phrases.length - 1]

    var luckyone = phrases[Math.floor(Math.random() * phrases.length)]

    document.getElementById("sidebarsubtitle").innerHTML = luckyone
}

async function load_cookie(){
    if (localStorage["cc-consent"] != "true"){
        cookieconsent.classList = "cookieconsentactive"
        cookieconsent.innerHTML = await (await fetch('/cookieconsent.html')).text()
    }
}

function closeThis(){
    localStorage["cc-consent"] = "true"
    removeTag("cookieconsent")
}

function noThanks(){
    window.location.href = "http://corndog.io/"
}

document.body.onload = load_home
