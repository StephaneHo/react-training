const tableau = [1, 2, 3];
const res1 = tableau.slice(); // [1, 2, 3]
console.log(res1);
const res2 = tableau.slice(1); // [2, 3]
console.log(res2);
const res3 = tableau.slice(0, 1); // [1]
console.log(res3);

const res4 = tableau.slice(-1); // [3]
console.log(res4);
const res5 = tableau.slice(0, -1); // [1, 2]
console.log(res5);

const res6 = tableau.slice(4); // []
console.log(res6);
const res7 = tableau.slice(0, 6);
console.log(res7); // [1, 2, 3]
