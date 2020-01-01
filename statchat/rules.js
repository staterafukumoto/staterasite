async function enlargeRules(){
    // window.location.href = 'rules.htm'
    window.open("rules.htm", "the stat chat rules", "width=1024,height=600")
}

async function joinGroup(){
    window.location.href = "tg://resolve?domain=thestatchat"
    window.setTimeout(function(){
        document.getElementById("didntwork").style.visibility = "visible"
    },3500)
}

async function openWeb(){
    window.location.href = "https://t.me/thestatchat"
}

async function closeDiag(){
    document.getElementById("didntwork").style.visibility = "hidden"
}