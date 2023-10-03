import { describe, test, expect } from "bun:test";
import findIndex from "../src/findIndex";

describe("findIndex", () => {
  test("find item indices", () => {
    const [one, two, twenty] = findIndex(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      (n) => n === 1,
      (n) => n === 2,
      (n) => n === 20
    );

    expect(one).toEqual(0);
    expect(two).toEqual(1);
    expect(twenty).toEqual(-1);
  });
});
