const content = document.getElementById("leftwrapper")
const cookieconsent = document.getElementById("cookieconsent")

async function load_home(){
    content.innerHTML = await (await fetch('/sidebar.html')).text();
    load_cookie()
    assignMarker()
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