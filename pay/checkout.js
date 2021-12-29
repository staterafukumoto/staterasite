const paypalurl = "https://paypal.me/staterafukumoto/"
const cashappurl = "https://cash.app/$stuffbystat/"
const venmomobileurl = "venmo://paycharge?txn=pay&recipients=stuffbystat&amount="
const venmourl = "https://venmo.com/stuffbystat?txn=pay&amount="
const currencycode = "USD"

function processPayment(type){
    var value = document.getElementById("moneyinput").value.substr(3).replace(/[^\d.-]/g, '')
    if(value > 0){
        if (type == "paypal"){
            window.open(paypalurl + value + currencycode)
        } else if(type == "cashapp"){
            window.open(cashappurl + value)
        } else if(type == "venmo"){
            if(mobilecheck() == true){
                // window.open(venmomobileurl + value)
                window.location.href = venmomobileurl + value
            } else{
                window.open(venmourl + value)
            }
        } else{
            createToast("invalid payment type???? how???")
        }
    } else{
        //do nothing
        createToast("you cannot send us$0.00")
    }
}

function fillMoney(amnt){
    document.getElementById("moneyinput").value = "US$" + amnt
}

// https://cash.app/$stuffbystat/12.50