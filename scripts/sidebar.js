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
    "carriage utility mechanism",
    "medium dick energy",
    "garlic bread!",
    "i lost my fucking dongle",
    "father i cannot click the book",
    "cave5.ogg",
    "dummy thicc",
    "you wouldn't reimplement an api",
    "zed's not dead",
    "i shouldn't have said it that way, but still.",
    "too angry to die",
    "also try minecraft!",
    "also try terraria",
    "dogchamp",
    "task failed successfully",
    "succ",
    "yeet",
    "kilometres morales!",
    "kilometres edgeworth!",
    "smooth criminal!",
    "fldsmdfr",
    "brogle",
    "several people are typing...",
    "¯\\_(ツ)_/¯",
    "bruh moment",
    "road work ahead? uh yeah, i sure hope it does.",
    "k-pop for racial equality!",
    "return to monke",
    "kraft singles in your area",
    "can i see your passport?",
    "you will have your bad smells",
    "he's gay and we're also all gay",
    "need 2010s emo mommy",
    "dump truck ass",
    "that's my wife!",
    "*unreal sippage*",
    "trans rights!",
    "leave britney alone",
    "keep your love lockdown.",
    "delet this",
    "<span style='font-family: monospace'> i   s e e   y o u </span>",
    "20 goto 10",
    "absolutely disgusting!",
    "and my axe!",
    "and my ass!",
    "woah here she comes",
    "scared and horny.",
    "gimme love",
    "joji spoon",
    "my name jeff",
    "cucumber joe",
    "kill beef, go ham",
    "getting pegged",
    "crack and cheese",
    "hidden valley granola bars",
    "this better not awaken anything in me",
    "my sexuality is maybe",
    "<span style='font-family: impact; font-family: 300;'> GameStonk </span> <br> <span style='font-size: 10px'> power to the masses </span>",
    "and then i said no, you know, like a liar",
    "angy",
    "<span style='font-family: inter;'>i can't believe it's not helvetica<span>",
    "<span style='font-family: \"Comic Sans MS\",\"Comic Sans\",cursive;'>i can't believe it's not helvetica<span>",
    "<span style='font-family: \"Comic Sans MS\",\"Comic Sans\",cursive;'>i can't believe it's not lexend deca<span>",
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
    "one hell of a website",
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
    "SO BRITISH 🇬🇧",
    "one hundred and who gives a shit horsepower",
    "MUST EAT",
    "SO FULL FROM ISOPROPYL ALCOHOL YUM",
    "SO FULL FROM D20 DICE YUM",
    "downshift and weeᵉᵉᵉᵉ",
    "where feMBOY hhhnnRRGG",
    "euGH hooOOOOOO [rich coughing] (unintelligible)",
    "oooh you drive a honda pilot",
    "i know that bedrock",
    "97 corolla with 3 spare wheels on",
    "oohhh yeah, digital gauges",
    "<b>m</b>iata <b>i</b>s <b>a</b>lways <b>t</b>he <b>a</b>nswer",
    "and we're giving you a truck engine",
    "foursome, threesome, twosome, lonesome",
    "postmodern",
    "ow my nipple",
    "very nais",
    "statera: nismo edition",
    "the 2nd coolest juke on twitter",
    "ladies and gentlemen, the car no longer starts",
    "must be made by BMW the way i8 the booty",
    "pls do not the cat",
    "someone stole my cat(alytic converter)",
    "yes officer, it's stock.",
    "death yearns for mitch mcconnel",
    "not quite down with the sickness, more like tolerating the sickness",
    "LONG LIVE THE MR16DDT",
    "boost creep",
    "sussy baka",
    "stuck out his gyatt for the rizzler",
    "sorta understands skibidi toilet",
    "meme school",
    "spell icup",
    "shinji get in the robot",
    "colourful!",
    "<span style='text-shadow: 0px 0px 2px #555;'> <span style='color: skyblue'>c</span><span style='color: orange'>o</span><span style='color: yellow'>l</span><span style='color: lime'>o</span><span style='color: aqua'>u</span><span style='color: pink'>r</span><span style='color: turquoise'>f</span><span style='color: aliceblue'>u</span><span style='color: antiquewhite'>l</span>!",
    "<span style='display: block'>css <br><br><br> is awesome</span>"
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
