//halloween countdown code
var lengthofday = 1000 * 60 * 60 * 24 
var present_date = new Date()
var halloween = new Date(present_date.getFullYear(), 9, 31) 
var math = Math.round(halloween.getTime() - present_date.getTime()) / (lengthofday)
var finalresult = math.toFixed(0)

document.getElementById("hlwncounter").innerHTML = finalresult

function adjustBanner(){
    //higher the number, the slower it scrolls, and choppier it looks
    // CANNOT BE GREATER THAN 10
    var scrollRatio = 5.5

    var current = document.getElementById("rightwrapper").scrollTop         // current position
    var total = document.getElementById('rightwrapper').scrollHeight / 2    // total page height, divide by 2 because it's faster than viewport math
    var operation = current / total                                         // fractions!
    var moremath = operation * 100                                          // now get it to a meaningful number

    if (mobilecheck() == true){

        // do not scroll animate on phones, it breaks hard.

    } else if(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1){

        // do not scroll animate on iPads, it breaks slightly less so, but still

    }else{
        if (moremath => 0){

            document.getElementById("mainsitebanner").style.top = moremath * scrollRatio + "px"

        } else{

            //don't put the banner lower than the absolute top of the screen

        }
    }
}

document.getElementById("rightwrapper").addEventListener("scroll", adjustBanner);
window.setTimeout(adjustBanner,8)



// document.getElementById("mainsitebanner").style.top