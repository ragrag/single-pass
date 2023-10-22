import { Predicate } from "./shared";

export default function filter<T, P extends Predicate<T>[]>(
  arr: T[],
  ...predicates: P
): { [K in keyof P]: T[] } {
  let results: T[][] = new Array(predicates.length);

  for (let i = 0; i < predicates.length; i++) {
    results[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < predicates.length; j++) {
      if (predicates[j](arr[i], i)) {
        results[j].push(arr[i]);
      }
    }
  }

  return results as { [K in keyof P]: T[] };
}
