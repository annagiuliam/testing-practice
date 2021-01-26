const calculator = {
    add : (a, b) => a + b,
    subtract : (a, b) => a - b,
    multiply : (a, b) => a * b,
    divide : (a, b) => {
        if (b === 0) return "invalid"
        else return a / b
    }
}

module.exports = calculator;