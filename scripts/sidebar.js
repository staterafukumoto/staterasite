const content = document.getElementById("leftwrapper")
const cookieconsent = document.getElementById("cookieconsent")
const phrases = [
    "up all day to get lucky!",
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
    "you have cancelled stadia pro",
    "proudly does not have an onlyfans",
    "w for wupwards",
    "*drinks milk*",
    "/r/hmmm",
    "statera likes guys",
    "ᶜʰᵒᵐᵖ",
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
    "phantom of the webserver",
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
    "was forced to eat beans several times"
]

async function load_home(){
    content.innerHTML = await (await fetch('/sidebar.html')).text();
    load_cookie()
    assignMarker()
    pickSubtitle()
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