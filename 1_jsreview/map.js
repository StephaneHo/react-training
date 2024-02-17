const tableau = [1, 2, 3];
let res1 = tableau.map((value) => value + 1);
console.log(res1);
let res2 = tableau.map((value, index) => value + index);
console.log(res2);
let res3 = tableau.map((_, index, array) => array[index]);
console.log(res3);
