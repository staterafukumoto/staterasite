window.theme = getTheme()

function setLightTheme(){
    document.getElementById("themesection").href = "/theme/light.css"
    storeTheme("light")
    document.getElementById("thmmsg").innerHTML = "switch to dark mode"
}

function setDarkTheme(){
    document.getElementById("themesection").href = "/theme/dark.css"
    storeTheme("dark")
    document.getElementById("thmmsg").innerHTML = "switch to light mode"
}

function toggleTheme(){
    if (window.theme == "dark"){
        setLightTheme()
    } else{
        setDarkTheme()
    }
}

function storeTheme(input){
    localStorage["theme"] = input
    window.theme = input
}

function getTheme(){
    if (localStorage["theme"] == undefined){
        return "dark"
    } else{
        return localStorage["theme"]
    }
}

function checkTheme(){
    if (getTheme() == "light"){
        setLightTheme()
        return "set to light"
    } else{
        setDarkTheme()
        return "set to dark"
    }
}

checkTheme()

// window.setInterval(function(){
//     window.theme = getTheme()
//     checkTheme()
// })