function telegramUser(handle){
    window.location.href = "tg://resolve?domain=" + handle;
}

function telegramStickers(packid){
    window.location.href = "tg://addstickers?set=" + packid;
}
