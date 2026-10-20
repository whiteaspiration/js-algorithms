import { describe, test, expect } from 'bun:test';
import { repeat } from './repeat.js';

describe('repeat', () => {
    test('должна повторить 3 раза', () => {
        expect(repeat('ab', 3)).toBe('ababab');
    });

    test('должна вернуть исходную строку для count = 1', () => {
        expect(repeat('hello', 1)).toBe('hello');
    });

    test('должна вернуть "" для count = 0', () => {
        expect(repeat('hello', 0)).toBe('');
    });

    test('должна вернуть "" для пустой исходной строки', () => {
        expect(repeat('', 5)).toBe('');
    });

    test('должна повторить один символ', () => {
        expect(repeat('x', 4)).toBe('xxxx');
    });

    test('должна обрезать дробную часть', () => {
        expect(repeat('a', 2.7)).toBe('aa');
    });

    test('должна вернуть "" для count < 1', () => {
        expect(repeat('a', 0.5)).toBe('');
    });

    test('должна вернуть "" если count пропущен', () => {
        expect(repeat('a')).toBe('');
    });

    test('должна работать с кириллицей', () => {
        expect(repeat('да', 3)).toBe('дадада');
    });

    test('должна выбросить RangeError для отрицательного count', () => {
        expect(() => repeat('a', -1)).toThrow(RangeError);
    });

    test('должна выбросить TypeError если count не число', () => {
        expect(() => repeat('a', '3')).toThrow(TypeError);
    });

    test('должна выбросить TypeError если str не строка', () => {
        expect(() => repeat(123, 3)).toThrow(TypeError);
    });
});