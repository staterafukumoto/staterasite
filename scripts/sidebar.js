const content = document.getElementById("leftwrapper")
const cookieconsent = document.getElementById("cookieconsent")
const phrases = [
    "are we gonna have a problem?",
    "egg, extra egg",
    "now with seductive reasoning",
    "hey everybody, i love swords",
    "you are poggers, you are not cringe.",
    "thinkin about strawberry milkshakes",
    "i don't wanna be the little spoon, i'm actually a fork",
    "i no longer have a manager, i can't be managed",
    "oops! all bottoms!",
    "via twitter for samsung smart fridge",
    "you have cancelled your stadia pro subscription",
    "w for wupwards",
    "*drinks milk*",
    "ᶜʰᵒᵐᵖ💥",
    "like a good neigbour, clorox eclair",
    "you can't put me in a straight jacket because i like men",
    "honk if you're gay",
    "give me back my happiness molecules",
    "i am once again asking for emotional support",
    "phantom of the web server",
    "we do NOT skip the neon genesis intro in this house",
    "no talk me, im angy",
    "medium dick energy",
    "garlic bread!",
    "i lost my fucking dongle",
    "father i cannot click the book",
    "cave5.ogg",
    "dummy thicc",
    "you wouldn't reimplement an api",
    "everything a to zedd",
    "i shouldn't have said it that way, but still.",
    "too angry to die",
    "also try minecraft!",
    "also try terraria",
    "task failed successfully",
    "succ",
    "yeet",
    "smooth criminal!",
    "brogle",
    "several people are typing...",
    "¯\\_(ツ)_/¯",
    "bruh moment",
    "road work ahead? uh yeah, i sure hope it does.",
    "return to monke",
    "kraft singles in your area",
    "can i see your passport?",
    "he's gay and we're also all gay",
    "need 2010s emo mommy",
    "dump truck ass",
    "that's my wife!",
    "*unreal sippage*",
    "trans rights!",
    "keep your love lockdown.",
    "delet this",
    "<span style='font-family: monospace'> i   s e e   y o u </span>",
    "20 goto 10",
    "absolutely disgusting!",
    "and my axe!",
    "and my ass!",
    "scared and horny.",
    "joji spoon",
    "kill beef, go ham",
    "getting pegged",
    "crack and cheese",
    "hidden valley granola bars",
    "this better not awaken anything in me",
    "my sexuality is maybe",
    "and then i said no, you know, like a liar",
    "angy",
    "<span style='font-family: inter;'>i can't believe it's not helvetica<span>",
    "<span style='font-family: \"Comic Sans MS\",\"Comic Sans\",cursive;'>i can't believe it's not helvetica<span>",
    "<img height='40px' src='/img/OMEGALUL.png' style='pointer-events: none;'>",
    "<img height='40px' src='/img/twerk.gif' style='pointer-events: none;'>",
    "<img height='60px' src='/img/anime.gif' style='pointer-events: none;'>",
    "<img height='68px' src='/img/peggle.gif' style='pointer-events: none;'>",
    "<img height='68px' src='/img/dsrn.gif' style='pointer-events: none;'>",
    "she took my arm, i don't know how it happened",
    "<img height='58px' src='/img/sadyeet.gif' style='pointer-events: none;'>",
    "here for a good time not for a long time",
    "<img height='40px' src='/img/jebaited.png' style='pointer-events: none;'>",
    "<img height='14px' src='/img/kekw.png' style='pointer-events: none; line-height: 12px;'>",
    "excuse me mommy? sorry. mommy? sorry. mommy? sorry.",
    "screenshot for the blocked?",
    "based? based on what?",
    "so you're telling me a shrimp fried this rice?",
    "swear on your fuckin yeezies frankenstein",
    "unfortunately french",
    "oh no, our table, it's broken",
    "sheeeeeeeeeeesh",
    "i'm simply one hell of a website",
    "an excellent website",
    "a special thanks to the kirito is always right foundation",
    "raging pussy meter",
    "le stink",
    "scared to get a little wet?",
    "<span style='font-family: Impact; -webkit-text-stroke: 4px black; text-stroke: 4px black; paint-order: stroke fill; font-size: 24px;'>TOP TEXT<span>",
    "<span style='font-family: Impact; -webkit-text-stroke: 4px black; text-stroke: 4px black; paint-order: stroke fill; font-size: 24px;'>BOTTOM TEXT<span>",
    "black on black on black on black on black on black on black on black on-",
    "because volvo",
    "B R O W N",
    "i lost my <span style='font-family: inter; -webkit-text-stroke: 4px black; text-stroke: 4px black; paint-order: stroke fill; font-size: 20px;'>fucking</span> 10mm socket",
    "born to shit, forced to wipe",
    "(unintelligible)",
    "one hundred and who gives a shit horsepower",
    "MUST EAT",
    "SO FULL FROM ISOPROPYL ALCOHOL YUM",
    "SO FULL FROM D20 DICE YUM",
    "downshift and weeᵉᵉᵉᵉ",
    "where feMBOY hhhnnRRGG",
    "where goth mommy hhhnnRRGG",
    "euGH hooOOOOOO [rich coughing] (unintelligible)",
    "oooh you drive a honda pilot",
    "i know that bedrock",
    "97 corolla with 3 spare wheels on",
    "oohhh yeah, digital gauges",
    "<b>m</b>iata <b>i</b>s <b>a</b>lways <b>t</b>he <b>a</b>nswer",
    "and we're giving you a truck engine",
    "postmodern",
    "very nais",
    "f-sport deez nuts",
    "ladies and gentlemen, the car no longer starts",
    "must be made by BMW the way i8 the booty",
    "pls do not the cat",
    "someone stole my cat(alytic converter)",
    "yes officer, it's stock.",
    "death yearns for mitch mcconnel",
    "not quite down with the sickness, more like tolerating the sickness",
    "LONG LIVE THE MR16DDT",
    "2GR-FSE my beloved",
    "boost creep",
    "sorta understands skibidi toilet",
    "meme school",
    "spell icup",
    "shinji get in the robot",
    "<span style='display: block'>css <br><br><br> is awesome</span>",
    "nuh uh",
    "WHAT IS IT THE BRAIDS?",
    "le smooch",
    "now with chemically induced gay frogs",
    "now with frog induced gay chemicals",
    "now with gay induced frog chemicals",
    "who up drum",
    "CVT go BRRRRR",
    "I AM DRIVING A LIFTED DODGE RAM PICKUP TRUCK",
    "naturally aspirate THIS DICK",
    "WILL RUN",
    "#1 weezer fan! (i hate weezer)",
    "if u like that.",
    "be so fr",
    "can i get a owa owa",
    "because lexus",
    "god's greatest engine, the 2GR",
    "don't talk to me until i've eaten this mug whole",
    "what if it was called freaktera and nothing changed",
    "mustard",
    "what if the balls got hard too",
    "we can finally be bees.",
    "you can be a bee",
    "you'll live like a bee. a pet.",
    "my ex wife still misses me. butter. b u t t e r",
    "pebble's time",
    "i use(d) arch btw",
    "wahOOOOO (plapping)",
    "better find a mop it's getting sticky in this bitch",
    "MUSTAAAARRRDDD",
    "butter",
    "obliterate your car on i-95",
    "where's my gooch cooler",
    "where's my super suit?",
    "heUGH HOOO",
    "bark bark bark",
    "toyota how i'm supposed to get the fucking bolt out",
    "wo' oh bo' ohl",
    "<s>barking like a dog.</s> i mean type shit",
    "paranormal groaning"
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
