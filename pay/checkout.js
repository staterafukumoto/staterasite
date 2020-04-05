const paymenturl = "https://paypal.me/staterafukumoto/"
const currencycode = "USD"

function openPaypal(){
    var value = document.getElementById("moneyinput").value.substr(3).replace(/[^\d.-]/g, '')
    if(value > 0){
        // document.location.href = paymenturl + value
        window.open(paymenturl + value + currencycode)
    } else{
        //do nothing
        alert("you can't donate nothing")
    }
}

function fillMoney(amnt){
    document.getElementById("moneyinput").value = "US$" + amnt
}