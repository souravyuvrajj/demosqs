function squareOfNumberAfter2Seconds(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number * number)
        }, 800)
    })
}
async function calculate() {
    try {
        let responseOne = await squareOfNumberAfter2Seconds(10);
        let responseTwo = await squareOfNumberAfter2Seconds(20);
        let responseThree = await squareOfNumberAfter2Seconds(40);
        return responseOne + responseTwo + responseThree;
    }
    catch(error) {
        return error;
    }
}
// Noticeable change in function parameters, there is no callback
exports.handler = async (event) => {
    let calculationResult = await calculate();
    console.log('calculationResult =', calculationResult);
    return calculationResult;
}