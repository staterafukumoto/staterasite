var lengthofday = 1000 * 60 * 60 * 24 
var present_date = new Date(); 
var halloween = new Date(present_date.getFullYear(), 9, 31) 
var math = Math.round(halloween.getTime() - present_date.getTime()) / (lengthofday); 
var finalresult = math.toFixed(0); 

// console.log(Final_Result)
document.getElementById("hlwncounter").innerHTML = finalresult

function getScroll(){
    var current = document.getElementById("rightwrapper").scrollTop
    var total = document.getElementById('rightwrapper').scrollHeight / 2
    var math = current / total
    var moremath = math * 100
    var moremoremath = Math.floor(moremath)
}


document.getElementById("rightwrapper").addEventListener("scroll", adjustBanner);

function adjustBanner(){
    //higher the number, the slower it scrolls, and choppier it looks
    // CANNOT BE HIGHER THAN 10
    var scrollRatio = 4

    var current = document.getElementById("rightwrapper").scrollTop
    var total = document.getElementById('rightwrapper').scrollHeight / 2
    var math = current / total
    var moremath = math * 100
    var moremoremath = Math.floor(moremath)

    if (mobilecheck() == true){
        // do not scroll animate on phones
    } else if(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1){
        // do not scroll animate on iPads :(
    }else{
        document.getElementById("mainsitebanner").style.top = moremoremath * scrollRatio + "px"
    }

}



// document.getElementById("mainsitebanner").style.top