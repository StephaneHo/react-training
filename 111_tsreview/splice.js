let tableau = ["a", "b", "c"];
tableau.splice(); // [a, b, c]
console.log(tableau);

tableau = ["a", "b", "c"];
tableau.splice(1); // [a]
console.log(tableau);

tableau = ["a", "b", "c"];
tableau.splice(0, 1); // [b, c]
console.log(tableau);

tableau = ["a", "b", "c"];
tableau.splice(-1); // [a, b]
console.log(tableau);

tableau = ["a", "b", "c"];
tableau.splice(4); // [a, b, c]
console.log(tableau);

tableau = ["a", "b", "c"];
tableau.splice(0, 6); // [1, 2, 3]
console.log(tableau);
