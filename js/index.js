const buttons = document.querySelectorAll(".button")
let numberSet = ""

buttons.forEach((item) => {
    switch(item.value) {
        case "clean": 
            item.addEventListener("click", () => {clean()})
            break

        case "back": 
            item.addEventListener("click", () => {back()})
            break

        case "calc": 
            item.addEventListener("click", () => {calculate()})
            break

        default:
            item.addEventListener("click", () => {insertNum(item.value)})
            break
    }
})

function insertNum(num) {
    const operators = ["/", "*", "-", "+"]
    const result = document.getElementById("result").innerHTML
    const lastDigit = result.charAt(result.length - 1)

    if (operators.includes(num)) numberSet = ""
        
    if (numberSet.includes(".") && num === ".") {
        return
    }
    else if ((operators.includes(lastDigit) && result !== "") && isNaN(num)) {
        back()

        const result = document.getElementById("result").innerHTML
        document.getElementById("result").innerHTML = result + num
    }
    else {
        numberSet += num
        document.getElementById("result").innerHTML = result + num
    }
}

function clean() {
    numberSet = ""

    document.getElementById("result").innerHTML = ""
}

function back() {
    const result = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = result.substring(0, result.length - 1)

    numberSet = numberSet.substring(0, numberSet.length - 1)
}

function calculate() {
    const result = document.getElementById("result").innerHTML
    const lastDigit = result.charAt(result.length - 1)

    if (result && !isNaN(lastDigit)) {
        numberSet = ""
        document.getElementById("result").innerHTML = eval(result)
    }
}