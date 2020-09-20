function mobileimgHandler(input){
    // input will be something like "/imgs/thumbs/amplitude.png"
    // output needs to be something like "/imgs/full/amplitude.png"

    var parsed = input.replace("/imgs/thumbs/","/imgs/full/")
    window.open(parsed) //was going to open this in a popout window. it freaks out google chrome
}