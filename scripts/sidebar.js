const content = document.getElementById("leftwrapper")

async function load_home(){
    content.innerHTML = await (await fetch('/sidebar.html')).text();
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
document.body.onload = load_home
