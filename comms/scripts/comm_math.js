function calculateStickerCost(){
    var poserate = 1.25

    var expressions = document.getElementById("sticker-exp-quant").value
    var bodypose = document.getElementById("sticker-bdm-quant").value
    var rate = document.getElementById("sticker-costper").value

    var bdrate = rate * poserate

    var expcost = expressions * rate
    var bodycost = bodypose * bdrate
    var total = expcost + bodycost

    function generateOutput(input){
        return input.toFixed(2)
    }

    document.getElementById("stickertotal").innerHTML = "$" + generateOutput(total)
}

function discount(){
    window.open("https://www.youtube.com/watch?v=iK5dlRu-NkU")
}