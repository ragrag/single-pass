import filter from "../src/filter";

const arr = Array.from({ length: 1e6 }, () => 1);
const predicates = new Array(1000).fill((el) => el % 2 === 0);

const t1 = performance.now();
filter(arr, ...predicates);
console.log(performance.now() - t1);
