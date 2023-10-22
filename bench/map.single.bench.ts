import map from "../src/map";

const arr = Array.from({ length: 1e6 }, () => 1);
const predicates = new Array(1000).fill((el) => el);

const t1 = performance.now();
map(arr, ...predicates);
console.log(performance.now() - t1);
