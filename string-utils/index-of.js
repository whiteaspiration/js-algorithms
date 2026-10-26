import { len } from './len.js';

export function indexOf(str, search) {
    if (typeof str !== 'string') {
        throw new TypeError('Первый аргумент должен быть строкой');
    }
    if (typeof search !== 'string') {
        throw new TypeError('Второй аргумент должен быть строкой');
    }

    if (search === '') {
        return 0;
    }

    const strLen = len(str);
    const searchLen = len(search);

    if (searchLen > strLen) {
        return -1;
    }

    const maxIndex = strLen - searchLen;

    // Внешний цикл: двигает окно поиска по главной строке
    for (let i = 0; i <= maxIndex; i++) {
        let found = true;

        // Внутренний цикл
        for (let j = 0; j < searchLen; j++) {
            if (str[i + j] !== search[j]) {
                found = false;
                break; // 
            }
        }

        if (found) {
            return i; 
        }
    }

    return -1;
}