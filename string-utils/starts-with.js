import { len } from './len.js';

export function startsWith(str, search) {
    if (typeof str !== 'string') {
        throw new TypeError('Первый аргумент должен быть строкой');
    }
    if (typeof search !== 'string') {
        throw new TypeError('Второй аргумент должен быть строкой');
    }

    const strLen = len(str);
    const searchLen = len(search);

    if (searchLen > strLen) {
        return false;
    }

    for (let i = 0; i < searchLen; i++) {
        if (str[i] !== search[i]) {
            return false;
        }
    }

    return true;
}