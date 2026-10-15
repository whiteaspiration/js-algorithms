import { describe, test, expect } from 'bun:test';
import { isLessOrEqual } from './is-less-or-equal.js';

describe('isLessOrEqual()', () => {
  test("должна вернуть true если a меньше ('car', 'cat')", () => {
    expect(isLessOrEqual('car', 'cat')).toBe(true);
  });

  test("должна вернуть true если строки равны ('hello', 'hello')", () => {
    expect(isLessOrEqual('hello', 'hello')).toBe(true);
  });

  test("должна вернуть false если a больше ('cat', 'car')", () => {
    expect(isLessOrEqual('cat', 'car')).toBe(false);
  });

  test("должна вернуть true если a короче и символы совпадают ('hello', 'hello!')", () => {
    expect(isLessOrEqual('hello', 'hello!')).toBe(true);
  });

  test("должна вернуть false если a длиннее и символы совпадают ('hello!', 'hello')", () => {
    expect(isLessOrEqual('hello!', 'hello')).toBe(false);
  });

  test("должна вернуть true для пустых строк ('', '')", () => {
    expect(isLessOrEqual('', '')).toBe(true);
  });

  test("должна выбросить TypeError если аргумент(ы) не строка", () => {
    expect(() => isLessOrEqual(123, 'a')).toThrow(TypeError);
    expect(() => isLessOrEqual('a', null)).toThrow(TypeError);
  });
});