import { describe, test, expect } from 'bun:test';
import { startsWith } from './starts-with.js';

describe('startsWith', () => {
    test('должна вернуть true для одного символа', () => {
        expect(startsWith('hello', 'h')).toBe(true);
    });

    test('должна вернуть true для подстроки', () => {
        expect(startsWith('hello', 'hel')).toBe(true);
    });

    test('должна вернуть false для несовпадающего вхождения', () => {
        expect(startsWith('hello', 'el')).toBe(false);
    });

    test('должна вернуть true для пустой поисковой строки', () => {
        expect(startsWith('hello', '')).toBe(true);
    });

    test('должна вернуть false если поисковая строка длиннее', () => {
        expect(startsWith('hell', 'hello')).toBe(false);
    });

    test('должна вернуть true для точного совпадения', () => {
        expect(startsWith('abc', 'abc')).toBe(true);
    });

    test('должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => startsWith(123, 'hello')).toThrow(TypeError);
    });

    test('должна выбросить TypeError если второй аргумент не строка', () => {
        expect(() => startsWith('hello', 123)).toThrow(TypeError);
    });
});