import {describe, expect, test} from "bun:test";
import { isEqual } from "./is-equal";

describe('Тесты isEqual', () => {
    test('должна вернуть true для равных строк', () => {
        expect(isEqual('hello', 'hello')).toBe(true);
    });

    test ('должна вернуть true для равных пустык строк', () => {
        expect(isEqual('', '')).toBe(true);
    });
    test ("должна вернуть false для разных строк одинаковой длины", () => {
        expect(isEqual('hello', 'world')).toBe(false);
    });
    test("должна вернуть false для строк разной длины ('hi', 'hello')", () => {
    expect(isEqual('hi', 'hello')).toEqual(false);
    });
    test("должна вернуть false для строки с пробелом ('hi', 'hi ')", () => {
    expect(isEqual('hi', 'hi ')).toEqual(false);
    });
    test("должна вернуть false если одна строка пустая, а другая нет ('', 'a')", () => {
    expect(isEqual('', 'a')).toEqual(false);
    });
    test("должна вернуть false если пробелы различаются (' a', 'a')", () => {
    expect(isEqual(' a', 'a')).toEqual(false);
    });
    test("должна вернуть true для кириллицы ('привет', 'привет')", () => {
    expect(isEqual('привет', 'привет')).toEqual(true);
    });
    test("должна выбросить TypeError если первый аргумент не строка (123, 'hello')", () => {
    expect(() => isEqual(123, 'hello')).toThrow(TypeError);
    });
    test("должна выбросить TypeError если второй аргумент не строка ('hello', null)", () => {
    expect(() => isEqual('hello', null)).toThrow(TypeError);
    });
    
});