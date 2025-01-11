const billInput = document.getElementById("bill")
const numberOfPeople = document.getElementById("numberOfPeople")
const customInput = document.getElementById("customInput")
const radioButtons = document.querySelectorAll('input[type="radio"]')
const tipAmountResult = document.getElementById("tipAmount")
const totalAmount = document.getElementById("totalAmount")

const billErrorText = document.getElementById("billErrorText")
const peopleErrorText = document.getElementById("peopleErrorText")


function calculateTip() {
    const billValue = parseFloat(billInput.value)
    const peopleValue = parseFloat(numberOfPeople.value)
    let tipPercentage = 0

    radioButtons.forEach(button => {
        if(button.checked) {
            tipPercentage = parseFloat(button.value)
        }
    })

    if(customInput.value) {
        tipPercentage = parseFloat(customInput.value)
    }

    if(isNaN(billValue) || billValue <= 0) {
        billErrorText.textContent = "Can't be zero"
        return
    } else {
        billErrorText.textContent = ""
    }

    if(isNaN(peopleValue) || peopleValue <= 0) {
        peopleErrorText.textContent = "Can't be zero"
        return
    } else {
        peopleErrorText.textContent = ""
    }

    const tipAmount = (billValue * tipPercentage) / 100
    const total = (billValue + tipAmount) / peopleValue

    tipAmountResult.textContent = `$${tipAmount.toFixed(2)}`
    totalAmount.textContent = `$${total.toFixed(2)}`
}