import { describe, test, expect } from 'bun:test';
import { reverse } from './reverse.js';

describe('reverse', () => {
    test('должна перевернуть строку', () => {
        expect(reverse('hello')).toBe('olleh');
    });

    test('должна вернуть пустую строку для пустой строки', () => {
        expect(reverse('')).toBe('');
    });

    test('должна вернуть ту же строку для строки из одного символа', () => {
        expect(reverse('a')).toBe('a');
    });

    test('должна вернуть ту же строку для палиндрома', () => {
        expect(reverse('racecar')).toBe('racecar');
    });

    test('должна перевернуть строку с пробелами', () => {
        expect(reverse('a b c')).toBe('c b a');
    });

    test('должна работать с кириллицей', () => {
        expect(reverse('привет')).toBe('тевирп');
    });

    test('должна выбросить TypeError если аргумент не строка', () => {
        expect(() => reverse(123)).toThrow(TypeError);
    });

    test('должна выбросить TypeError если аргумент null', () => {
        expect(() => reverse(null)).toThrow(TypeError);
    });
});