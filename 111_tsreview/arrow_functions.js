const a = () => true;
const b = () => {
  return true;
};
const c = (x) => x + 1;
const d = (x, y) => x + y;

console.log(a());
console.log(b());
console.log(c(1));
console.log(d(3, 4));
