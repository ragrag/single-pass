import { Predicate } from "./shared";

export default function findIndex<T, P extends Predicate<T>[]>(
  arr: T[],
  ...predicates: P
): { [K in keyof P]: T[] } {
  let results: number[] = new Array(predicates.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < predicates.length; j++) {
      if (results[j] === -1 && predicates[j](arr[i], i)) {
        results[j] = i;
      }
    }
  }

  return results as { [K in keyof P]: T[] };
}
