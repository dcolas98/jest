// import the function sum from the app.js file
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('One euro should be 1.206 dollars', () => {
    //inside the test we call our sum function with 2 numbers
    let dollar = fromEuroToDollar(1);

    // we expect the sum of those 2 numbers to be 23
    expect(dollar).toBe(1.206);
});


// start your first test
test('One dollar should be 127.9 yen', () => {
    //inside the test we call our sum function with 2 numbers
    let yen = fromDollarToYen(1);

    // we expect the sum of those 2 numbers to be 23
    expect(yen).toBe(127.9);
});

test('One yen should be 0.006 pounds', () => {
    let pounds = fromYenToPound(1);
    expect(yen).toBe(0.006);
})