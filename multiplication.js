function multiply(numbers) {
    return numbers
        .split(',')
        .map(x =&gt; parseInt(x))
        .reduce((a, b) =&gt; a * b)
}
exports.multiply = multiply;