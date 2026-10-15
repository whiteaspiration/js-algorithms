import { describe, test, expect } from 'bun:test';
import { isMoreOrEqual } from './is-more-or-equal.js';

describe('isMoreOrEqual()', () => {
  test("должна вернуть true если a больше ('cat', 'car')", () => {
    expect(isMoreOrEqual('cat', 'car')).toBe(true);
  });

  test("должна вернуть true если строки равны ('hello', 'hello')", () => {
    expect(isMoreOrEqual('hello', 'hello')).toBe(true);
  });

  test("должна вернуть false если a меньше ('car', 'cat')", () => {
    expect(isMoreOrEqual('car', 'cat')).toBe(false);
  });

  test("должна вернуть true если a длиннее и символы совпадают ('hello!', 'hello')", () => {
    expect(isMoreOrEqual('hello!', 'hello')).toBe(true);
  });

  test("должна вернуть false если a короче и символы совпадают ('hello', 'hello!')", () => {
    expect(isMoreOrEqual('hello', 'hello!')).toBe(false);
  });

  test("должна вернуть true для пустых строк ('', '')", () => {
    expect(isMoreOrEqual('', '')).toBe(true);
  });

  test("должна выбросить TypeError если аргумент(ы) не строка", () => {
    expect(() => isMoreOrEqual(123, 'a')).toThrow(TypeError);
    expect(() => isMoreOrEqual('a', null)).toThrow(TypeError);
  });
});