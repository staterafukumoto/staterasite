/* Check if it is april fools day */

function pranks(){
    addCSS("/styles/april-fools.css")
    document.getElementById("leeksound").play()
    var audio = new Audio('/img/bruh.mp3');
    document.addEventListener("mousedown",function(){
        audio.play();
    })
    document.getElementById("leeksound").addEventListener("mousedown",function(){
        audio.play()
    })
    document.getElementById("oops").addEventListener("mousedown",function(){
        flippyBoi()
    })
}

function flippyBoi(){
    if (window.isFlipped == true){
        document.body.style.transform = "rotate(0deg)"
        window.isFlipped = false
    } else{
        document.body.style.transform = "rotate(180deg)"
        window.isFlipped = true
    }
}

var aprilFools = {
    month: 3,
    date: 1
  }
  
  function isItAprilFoolDay() {
    var now = new Date();
    return (now.getMonth() == aprilFools.month && now.getDate() == aprilFools.date);
  }
  
  if(isItAprilFoolDay()){
    // fuck with people
    pranks()
  } else {
    // there is less fake stuff today
    console.log("you are safe... for now...")

}

aprilFools

function disablePranks(){
    notificationInput("no")
}

function bruh(){
    var audio = new Audio('/img/bruh.mp3');
    audio.play()
}