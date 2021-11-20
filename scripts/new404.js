function nav(input){
    window.location.href = "/" + input
}

function bruh(){
    var audio = new Audio('/img/bruh.mp3');
    audio.play()
}
function onSplashLoad(){
    document.getElementById("bg").classList = "bgloaded"
}