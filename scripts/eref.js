function clipboardCopy(input){
    var cpbx = document.getElementById("copybox")
    cpbx.value = input
    cpbx.select()
    document.execCommand('copy')
    cpbx.blur()
}

function openThis(input){
    var win = window.open(input, '_blank');
    win.focus();
}