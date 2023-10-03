import { describe, test, expect } from "bun:test";
import find from "../src/find";

describe("find", () => {
  test("find items", () => {
    const [one, two, twenty] = find(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      (n) => n === 1,
      (n) => n === 2,
      (n) => n === 20
    );

    expect(one).toEqual(1);
    expect(two).toEqual(2);
    expect(twenty).toEqual(undefined);
  });
});
