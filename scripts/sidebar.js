const content = document.getElementById("leftwrapper")
const cookieconsent = document.getElementById("cookieconsent")
const phrases = [
    "up all night to get lucky!",
    "uses dark mode",
    "canonically taller than batman",
    "are we gonna have a problem?",
    "put hotdog in mouth s o f t l y",
    "egg, extra egg",
    "alexa, print me some dank ass memes",
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
    "giving you what discord won't",
    "lomve triangle",
    "you have cancelled your stadia pro subscription",
    "w for wupwards",
    "*drinks milk*",
    "/r/hmmm",
    "statera likes guys",
    "ᶜʰᵒᵐᵖ💥",
    "when you don't know what to do, do.",
    "my sexuality is anger",
    "and then i whipped out my blackberry",
    "where is corona-chan",
    "okay, boomer",
    "like a good neigbour, clorox eclair",
    "mom, that's your fursona",
    "you can't put me in a straight jacket because i like men",
    "honk if you're gay",
    "give me back my happiness molecules",
    "#teamwitt",
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
    "#reechu",
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
    "this will be <i> a day to remember</i>",
    "hi kids, do you like violence?",
    "dogchamp",
    "task failed successfully",
    "succ",
    "yeet",
    "kilometres morales!",
    "kilometres edgeworth!",
    "y'all got any baked beans?",
    "probably a simp",
    "mom, grill me about the newest llvm compiler",
    "origami mommy",
    "this tastes different, did you put anything different in here?",
    "smooth criminal!",
    "outside studio door detected motion",
    "fldsmdfr",
    "brogle",
    "perpetually humorous",
    "gallows humour",
    "several people are typing...",
    "does chris moisturise?",
    "i guess they never miss",
    "¯\\_(ツ)_/¯",
    "bruh",
    "bruh moment",
    "road work ahead? uh yeah, i sure hope it does.",
    "k-pop for racial equality!",
    "monke",
    "toilet squad!",
    "kraft singles in your area",
    "rest in peace, vine",
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
    "karen",
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
    "🕹️❒"
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