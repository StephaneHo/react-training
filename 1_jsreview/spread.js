const tab = [...[1, 2, 3]];

console.log(tab);

const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

const attemptToMerge = [array1, array2];

console.log(attemptToMerge);

const mergedArray = [...array1, ...array2];

console.log(mergedArray);

const original = ["zero", "one"];

const newArray = [...original];

newArray[1] = "notOne";

console.log(original);

console.log(newArray);
