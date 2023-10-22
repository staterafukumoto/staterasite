window.scrollRatio = 5.432
window.postmaload = 16


function adjustBanner(){
    // higher the number, the slower it scrolls, and choppier it looks
    // CANNOT BE GREATER THAN 10
    var current = document.getElementById("rightwrapper").scrollTop         // current position
    var total = document.getElementById('rightwrapper').scrollHeight / 2    // total page height, divide by 2 because it's faster than viewport math
    var operation = current / total                                         // fractions!
    var moremath = operation * 100                                          // now get it to a meaningful number

    if (mobilecheck() == true){
        // case: phones

        document.getElementById("mainsitebanner").style.top = moremath * scrollRatio + "px"

    } else if(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1){
        // case: ipads

        document.getElementById("mainsitebanner").style.top = moremath * scrollRatio + "px"

    }else{
        if (moremath => 0){

            document.getElementById("mainsitebanner").style.top = moremath * scrollRatio + "px"

        } else{

            //don't put the banner lower than the absolute top of the screen

        }
    }
}


// adjust on page load 
window.setTimeout(adjustBanner,postmaload)



// document.getElementById("mainsitebanner").style.top

function bannerOnLoad(id){
    document.getElementById(id).classList.add("msb-img-loaded")
}