const tableau = [1, 3, 2, 7, 5];
const res1 = tableau.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  // a doit être égal à b
  return 0;
});
console.log(res1);

const res2 = tableau.sort((a, b) => a - b);
console.log(res2);

const res3 = tableau.sort((a, b) => b - a);
console.log(res3);
