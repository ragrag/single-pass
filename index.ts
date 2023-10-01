type Predicate<T> = (el: T) => boolean;
export function filter<T, P extends Predicate<T>[]>(
  arr: T[],
  ...predicates: P
): { [K in keyof P]: T[] } {
  let results: T[][] = new Array(predicates.length);

  for (let i = 0; i < predicates.length; i++) {
    results[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < predicates.length; j++) {
      if (predicates[j](arr[i])) {
        results[j].push(arr[i]);
      }
    }
  }

  return results as { [K in keyof P]: T[] };
}

export function map<T, R extends any[]>(
  arr: T[],
  ...cbs: { [K in keyof R]: (el: T) => R[K] }
): { [K in keyof R]: R[K][] } {
  let results: R[][] = new Array(cbs.length);
  for (let i = 0; i < cbs.length; i++) {
    results[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < cbs.length; j++) {
      results[j].push(cbs[j](arr[i]));
    }
  }

  return results as { [K in keyof R]: R[K][] };
}
