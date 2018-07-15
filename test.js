const parser = require('./app');

let numTested = 0;
let numPassed = 0;

console.log("   Starting test\n");

test("Donald Lee", "Donald", "Lee");
test("Donald Lee Qian Siang", "Donald", "Lee");
test("Lee Qian Siang Donald", "Donald", "Lee");
test("Wong Jie Min", "Jie Min", "Wong");
test("Jie Min, Wong", "Jie Min", "Wong");
test("Matthew Low", "Matthew", "Low");
test("Matthew Low Min De", "Matthew", "Low");
test("Low Min De Matthew", "Matthew", "Low");
test("Lee Kuan Yew", "Kuan Yew", "Lee");
test("Kuan Yew, Lee", "Kuan Yew", "Lee");

test("Mohammad Rafiq Bin Muzaffar", "Rafiq", "Muzaffar");
test("Muhammad Danial Nur Hakim", "Danial", "Hakim");
test("Mohamed Hadi Bin Haziq", "Hadi", "Hadiz");

console.log(`\n   ${numPassed}/${numTested} passed.\n`)

function test(fullName, expectedFirst, expectedLast) {

    const result = parser.parseName(fullName);
    numTested++;

    if (result.firstName === expectedFirst && result.lastName === expectedLast) {
        numPassed++;
        console.log(`${numTested}. passed: ${fullName} returns ${result.firstName} and ${result.lastName}.`)
    } else {
        console.log(`${numTested}. failed: ${fullName} should return ${expectedFirst} and ${expectedLast} but instead returns ${result.firstName} and ${result.lastName}.`)
    }
}