window.theme = getTheme()

function setLightTheme(){
    document.getElementById("themesection").href = "/theme/light.css"
    storeTheme("light")
    document.getElementById("thmmsg").innerHTML = "switch to dark mode"
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ededed');
}

function setDarkTheme(){
    document.getElementById("themesection").href = "/theme/dark.css"
    storeTheme("dark")
    document.getElementById("thmmsg").innerHTML = "switch to light mode"
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#0a0b0d');
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

// proof of concept changing with system thing

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme)')){
//     alert("Browser supported")
// } else{
//     alert("browser unsupported")
// }

// function changeWithSystem(){
// 	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         if (window.theme == "dark"){
//             //
//         } else{
//             setDarkTheme()
//         }
// 	} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
//         if (window.theme == "light"){
//             //
//         } else{
//             setLightTheme()
//         }
//     } else{
//         setDarkTheme()
//     }
// }
// changeWithSystem()
// window.setInterval(function(){
//     changeWithSystem()
// },200)

checkTheme()