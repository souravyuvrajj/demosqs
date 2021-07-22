function squareOfNumberAfter2Seconds(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number * number)
        }, 800)
    })
}
async function calculate() {
    try {
        const resultArray = await Promise.all([squareOfNumberAfter2Seconds(10), squareOfNumberAfter2Seconds(20), squareOfNumberAfter2Seconds(40)])

        return resultArray[0] + resultArray[1] + resultArray[2];
    }
    catch (error) {
        return error;
    }
}
// Noticeable change in function parameters, there is no callback
exports.handler = async (event) => {
    let calculationResult = await calculate();
    console.log('calculationResult =', calculationResult);
    return calculationResult;
}