function nfStepZero(){
    var region = document.getElementById("notification")
    region.classList = ""  
}

function nfStepOne(){
    var region = document.getElementById("notification")
    region.classList = "nfStepOne"
}

function nfStepTwo(){
    var region = document.getElementById("notification")
    region.classList = "nfStepOne nfStepTwo"
}

function notificationInput(input){
    document.getElementById("notification").innerHTML = input
    nfStepOne()
    window.setTimeout(nfStepTwo,333)
    window.setTimeout(nfStepOne,3333)
    window.setTimeout(nfStepZero,3666)
}