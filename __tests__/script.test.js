import { shufflings, findOddInt, countSmileys } from "../script";

describe("test Shufflings function", () => {
  test("input 'a'", () => {
    const result = shufflings("a");
    expect(result.length).toBe(1);
    expect(result).toEqual(["a"]);
  });

  test("input 'ab'", () => {
    const result = shufflings("ab");
    expect(result.length).toBeGreaterThan(1);

    const mockResult = ["ab", "ba"];
    mockResult.forEach((item) => expect(result).toContain(item));
  });

  test("input 'abc'", () => {
    const result = shufflings("abc");
    expect(result.length).toBeGreaterThan(1);

    const mockResult = ["abc", "acb", "bac", "bca", "cab", "cba"];
    mockResult.forEach((item) => expect(result).toContain(item));
  });

  test("input 'aabb'", () => {
    const result = shufflings("aabb");
    expect(result.length).toBeGreaterThan(1);
  });
});

describe("test FindOddInt function", () => {
  it("should return 7, because it occurs 1 time (which is odd).", () => {
    const result = findOddInt([7]);
    expect(result).toBe(7);
  });

  it("should return 0, because it occurs 1 time (which is odd).", () => {
    const result = findOddInt([0]);
    expect(result).toBe(0);
  });

  it("should return 2, because it occurs 1 time (which is odd).", () => {
    const result = findOddInt([1, 1, 2]);
    expect(result).toBe(2);
  });

  it("should return 0, because it occurs 3 times (which is odd).", () => {
    const result = findOddInt([0, 1, 0, 1, 0]);
    expect(result).toBe(0);
  });

  it("should return 4, because it appears 1 time (which is odd).", () => {
    const result = findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
    expect(result).toBe(4);
  });
});

describe("test CountSmileys function", () => {
  it("should return 2", () => {
    const result = countSmileys([":)", ";(", ";}", ":-D"]);
    expect(result).toBe(2);
  });

  it("should return 3", () => {
    const result = countSmileys([";D", ":-(", ":-)", ";~)"]);
    expect(result).toBe(3);
  });

  it("should return 1", () => {
    const result = countSmileys([";]", ":[", ";*", ":$", ";-D"]);
    expect(result).toBe(1);
  });

  it("should return 0", () => {
    const result = countSmileys([]);
    expect(result).toBe(0);
  });
});
