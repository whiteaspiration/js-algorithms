import { describe, test, expect } from 'bun:test';
import { isNotEqual } from './is-not-equal.js';

describe('isNotEqual()', () => {
  test("должна вернуть true для разных строк", () => {
    expect(isNotEqual('hello', 'world')).toBe(true);
  });

  test("должна вернуть false для одинаковых строк", () => {
    expect(isNotEqual('abc', 'abc')).toBe(false);
  });

  test("должна вернуть true для строк разной длины", () => {
    expect(isNotEqual('hi', 'hello')).toBe(true);
  });

  test("должна вернуть false для пустых строк", () => {
    expect(isNotEqual('', '')).toBe(false);
  });

  test("должна выбросить TypeError если аргумент(ы) не строка", () => {
    expect(() => isNotEqual(123, 'hello')).toThrow(TypeError);
    expect(() => isNotEqual('hello', null)).toThrow(TypeError);
  });
});