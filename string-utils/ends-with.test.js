import { describe, test, expect } from 'bun:test';
import { endsWith } from './ends-with.js';

describe('endsWith', () => {
    test('должна вернуть true для одного символа', () => {
        expect(endsWith('hello', 'o')).toBe(true);
    });

    test('должна вернуть true для подстроки', () => {
        expect(endsWith('hello', 'llo')).toBe(true);
    });

    test('должна вернуть false для несовпадающего вхождения', () => {
        expect(endsWith('hello', 'ell')).toBe(false);
    });

    test('должна вернуть true для пустой поисковой строки', () => {
        expect(endsWith('hello', '')).toBe(true);
    });

    test('должна вернуть false если поисковая строка длиннее', () => {
        expect(endsWith('llo', 'hello')).toBe(false);
    });

    test('должна вернуть true для точного совпадения', () => {
        expect(endsWith('abc', 'abc')).toBe(true);
    });

    test('должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => endsWith(123, 'hello')).toThrow(TypeError);
    });

    test('должна выбросить TypeError если второй аргумент не строка', () => {
        expect(() => endsWith('hello', 123)).toThrow(TypeError);
    });
});