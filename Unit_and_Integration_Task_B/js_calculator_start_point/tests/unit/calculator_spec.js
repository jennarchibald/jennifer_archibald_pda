var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  let calculator;

  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // - `calculator.add()` - add 1 to 4 and get 5
  it('should be able to add one number to another', function(){

    calculator.previousTotal = 4;
    calculator.add(1);
    const actual = calculator.runningTotal;

    assert.equal(actual, 5)
  });

  // - `calculator.subtract()` subtract 4 from 7 and get 3

  it('should be able to subtract one number from another', function () {

    calculator.previousTotal = 7;
    calculator.subtract(4);

    const actual = calculator.runningTotal;

    assert.equal(actual, 3)
  })
  // - `calculator.multiply()` - multiply 3 by 5 and get 15

  it('should be able to multiply 2 numbers together', function () {

    calculator.previousTotal = 3;
    calculator.multiply(5);

    const actual = calculator.runningTotal;

    assert.equal(actual, 15)

  })

  // - `calculator.divide()` - divide 21 by 7 and get 3
  it('should be able to divide one number by another', function(){

    calculator.previousTotal = 21;
    calculator.divide(7);

    const actual = calculator.runningTotal;

    assert.equal(actual, 3)

  })

  // - `calculator.numberClick()` - concatenate multiple number button clicks

  it('should concatenate multiple number button clicks', function () {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);

    const actual = calculator.runningTotal;

    assert.equal(actual, 123)

  })
  // - `calculator.operatorClick()` - chain multiple operations together\

  it('should chain multiple operations together',  function () {

    calculator.numberClick(1);
    calculator.operatorClick('+')
    calculator.numberClick(1);
    calculator.operatorClick('*')
    calculator.numberClick(4);
    calculator.operatorClick('=')

    const actual = calculator.runningTotal;

    assert.equal(actual, 8)

  })
  // - `calculator.clearClick()` - clear the running total without affecting the calculation

  it('should be able to clear the running total without affecting the calculation', function () {

    calculator.numberClick(1);
    calculator.operatorClick('+')
    calculator.numberClick(1);
    calculator.clearClick()
    calculator.numberClick(2);
    calculator.operatorClick('=')

    actual = calculator.runningTotal;

    assert.equal(actual, 3)
  })

});
