window.domain = "https://staterafukumoto.github.io"
window.sep = "#"

function copyClipboard(input){
    var cpbx = document.getElementById("copybox")

    cpbx.value = domain + sep + input
    cpbx.select()
    document.execCommand('copy')
    cpbx.blur()
    notificationInput('copied url to clipboard')
}