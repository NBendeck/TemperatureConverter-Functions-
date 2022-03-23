
function askName() {
    var name = prompt(`Enter your name:`)
    return name
}

function greeting(a) {
    alert(`Welcome, ${a}!`)
}

greeting(askName())

function whichTemp() {
    var temp = prompt(`f to c (type c), or c to f (type f)`)
    return temp

    if (temp == `c`) {
        ftoc()
    } else if (temp == `f`) {
        ctof()
    } else {
        alert(error)
    }
}

enterTemp(whichTemp())

function enterTemp(b) {
    var enterTem = prompt(`# of temp`)
    return enterTem

    if (b == `c`) {
        ftoc()
    } else if (b == `f`) {
        ctof()
    } else {
        alert(error)
    }
}

function ftoc() {
    var eqfc = ((enterTem * 9) / 5 ) + 32
    return eqfc
}

function ctof() {
    var eqcf =  ((enterTem - 32 ) * 5 ) / 9
    return eqcf
}
