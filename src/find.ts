import { Predicate } from "./shared";

export default function find<T, P extends Predicate<T>[]>(
  arr: T[],
  ...predicates: P
): { [K in keyof P]: T[] } {
  let results: T[] = new Array(predicates.length);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < predicates.length; j++) {
      if (!results[j] && predicates[j](arr[i], i)) {
        results[j] = arr[i];
      }
    }
  }

  return results as { [K in keyof P]: T[] };
}
