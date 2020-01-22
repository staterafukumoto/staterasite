const content = document.getElementById("leftwrapper")

async function load_home(){
    content.innerHTML = await (await fetch('/sidebar.html')).text();
}

document.body.onload = load_home