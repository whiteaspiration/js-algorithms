// string-utils/len.test.js
import { describe, test, expect } from 'bun:test';
import { len } from './len.js';

describe('Тесты len', () => {
    test('должна вернуть 5 для строки "hello"', () => {
        expect(len('hello')).toEqual(5); 
    });
    test('должна вернуть 0 для пустой строки ""', () => {
        expect(len('')).toEqual(0);
    });
    test('должна корректно считать кириллицу - len("привет")', () => {
        expect(len('привет')).toEqual(6);
    });
    test("должна выбросить TypeError если аргумент - число '123'", () => {
        expect(() => len(123)).toThrow(TypeError);
        expect(() => len(123)).toThrow('Аргумент должен быть строкой');
    });
});