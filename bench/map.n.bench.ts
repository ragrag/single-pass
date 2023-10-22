const arr = Array.from({ length: 1e6 }, () => 1);
const predicate = (el) => el;

const t1 = performance.now();
for (let i = 0; i < 1000; i++) {
  arr.map(predicate);
}
console.log(performance.now() - t1);
