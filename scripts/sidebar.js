const content = document.getElementById("leftwrapper")

async function load_home(){
    content.innerHTML = await (await fetch('/sidebar.html')).text();
}

document.body.onload = load_home

function enableLightMode(){
    notificationInput("we don't do that here, suffer.")
    window.setTimeout(function(){
        flippyBoi()
    },1500)
}