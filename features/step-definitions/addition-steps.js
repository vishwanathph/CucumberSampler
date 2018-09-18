const assert = require('assert');
const { Before, Given, When, Then } = require('cucumber');
const Calculator = require('../../lib/calculator');
let calculator;


Given('the numbers {int} and {int}', function (x, y) {
    // Write code here that turns the phrase above into concrete actions
    calculator = new Calculator(x, y);
   // callback(null, 'pending');
});


When('they are added together', function () {
    calculator.add();
    // Write code here that turns the phrase above into concrete actions
   // callback(null, 'pending');
});

Then('should the result be {int}', function (expected) {
    // Write code here that turns the phrase above into concrete actions
  //  callback(null, 'pending');
  assert.equal(calculator.getResult(), expected)

});