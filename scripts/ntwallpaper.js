function previewSet(name,resolution,filename,num){
    // var parsed = input.replace("/imgs/thumbs/","/imgs/full/")
    document.getElementById("nt_tc_title").innerHTML = name
    document.getElementById("nt_tc_res").innerHTML = resolution
    document.getElementById("nt_tc_image").src= "/wallpapers/imgs/thumbs/" + filename
    document.getElementById("nt_tc_background").src= "/wallpapers/imgs/thumbs/" + filename

    var elements = document.getElementsByClassName('nt_card_img_actuve')
    while(elements.length > 0){
        elements[0].classList.remove('nt_card_img_actuve')
    }

    document.getElementById("wallpaper_" + num).classList.add("nt_card_img_actuve")
    
    var count = wallpapers.length - num + " / " + wallpapers.length

    document.getElementById("nt_counter").innerHTML = "#" + count

    window.currentimagefilename = filename
}

function openCurrent(){
    var URL = window.location.origin + "/wallpapers/imgs/full/" + currentimagefilename
    window.open(URL)
}

function handleImg(src){
    var URL = window.location.origin + "/wallpapers/imgs/full/" + src
    window.open(URL) 
}

function copyCurrent(){
    var URL = window.location.origin + "/wallpapers/imgs/full/" + currentimagefilename
    cbCopy(URL)
}

function cbCopy(input) {
    navigator.clipboard.writeText(input).then(function() {
        /* clipboard successfully set */
        console.log("copy successful!")
    }, function() {
        /* clipboard write failed */
    })
}

function createCards(imgname, imgsrc, imgres, num){

    var cardimg  = document.createElement("img")
    cardimg.src = "imgs/thumbs/" + imgsrc
    cardimg.draggable = false
    cardimg.classList = "nt_card_img"
    cardimg.dataNum = num
    cardimg.id = "wallpaper_" + num
    cardimg.onclick = previewSet.bind(cardimg, imgname, imgres, imgsrc, num)
    cardimg.ondblclick = handleImg.bind(cardimg, imgsrc)

    document.getElementById("bottomWrapper").appendChild(cardimg)
}

async function buildGallery(){
    for (i = 0; i < wallpapers.length; i++ ){
        var currentSet = wallpapers[i]
        createCards(currentSet[0], currentSet[1], currentSet[2],i)
    }

    document.getElementById("bottomWrapper").style.width = wallpapers.length * 180 + "px"
}

buildGallery()
//always select the first one 
document.getElementsByClassName("nt_card_img")[0].click()

function scrollHorizontally(e) {
    e = window.event || e
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
    document.getElementById('bottomContent').scrollLeft -= (delta*30) // Multiplied by 40
    e.preventDefault()
}

if (document.getElementById('bottomContent').addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.getElementById('bottomContent').addEventListener("mousewheel", scrollHorizontally, false)
    // Firefox
    document.getElementById('bottomContent').addEventListener("DOMMouseScroll", scrollHorizontally, false)
} else {
    // IE 6/7/8
    document.getElementById('bottomContent').attachEvent("onmousewheel", scrollHorizontally)
}

function getSelectedNumber(){
    var current = document.getElementsByClassName("nt_card_img_actuve")[0].id
    return parseInt(current.replace("wallpaper_",""))
}

function goNext(){
    var next = getSelectedNumber() + 1

    if(next < wallpapers.length){
        document.getElementById("wallpaper_" + next).click()
    } else{
        // *softly* don't
    }
}

function goPrevious(){
    var prev = getSelectedNumber() - 1

    if(prev >= 0){
        document.getElementById("wallpaper_" + prev).click()
    } else{
        // *softly* don't
    }
}

//code to disable the buttons if you're at the start or end

function arrowStatus(){
    if(getSelectedNumber() == wallpapers.length - 1){
        //if the current number is the same as the length of
        //the string, you're at the end, disable the advance arrow
        document.getElementById("nt_counter_right").classList = "nt_counter_disabled"
    } else{
        document.getElementById("nt_counter_right").classList = ""
    }

    if(getSelectedNumber() == 0){
        //if the current number is the same as the length of
        //the string, you're at the end, disable the advance arrow
        document.getElementById("nt_counter_left").classList = "nt_counter_disabled"
    } else{
        document.getElementById("nt_counter_left").classList = ""
    }
}
window.setInterval(function(){
    arrowStatus()
},66)

arrowStatus()

// thanks to stackoverflow for most of this code, it's 02:36
// i'm tired, and i'm not fucking writing it myself

document.onkeydown = keyCheck
function keyCheck(e) {
    e = e || window.event
    if (e.keyCode == '37') {
        //left arrow
        e.preventDefault()
        goPrevious()
    }
    else if (e.keyCode == '39') {
        //right arrow
        e.preventDefault()
        goNext()
    }
}

function adjustPseudoTable(){
    if (document.getElementById("rightwrapper").clientWidth > 700){
        //side by side layout
        document.getElementById("nt_tc_image_container").style.display = "inline-block"
        document.getElementById("nt_tc_title_container").style.left = "50%"
        document.getElementById("nt_tc_background").style.filter = "blur(20px)"

    } else{
        //top and bottom layout
        document.getElementById("nt_tc_image_container").style.display = "none"
        document.getElementById("nt_tc_title_container").style.left = "0%"
        document.getElementById("nt_tc_background").style.filter = "blur(5px)"
    }

    console.log(document.getElementById("rightwrapper").clientWidth)
}

adjustPseudoTable()
adjustPseudoTable()
window.onresize = adjustPseudoTable