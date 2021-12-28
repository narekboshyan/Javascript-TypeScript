// !  Union types
var combine = function (input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedAges = combine("20", "40", "as-number");
console.log(combinedAges);
var combinedNames = combine("Max", "Ann", "as-text");
console.log(combinedNames);