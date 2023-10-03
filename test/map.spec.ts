import { describe, test, expect } from "bun:test";
import map from "../src/map";

describe("map", () => {
  test("all arrays mapped", () => {
    const [one, two, three] = map(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      (n) => n * 1,
      (n) => n * 2,
      (n) => n * 3
    );

    expect(one).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(two).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    expect(three).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
  });
});
