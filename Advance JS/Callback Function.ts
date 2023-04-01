function performAction(num1, num2, callback) {
    let result = num1 + num2;
    callback(result);
}

function printResult(output) {
    console.log("The result is: " + output);
}

performAction(5, 10, printResult);

// By using a callback function, we can ensure that the printResult() function is executed only 
// after the calculation is complete, without blocking the main thread: Async nature of JS