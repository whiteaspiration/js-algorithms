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

    const strLen = str.length;
    const searchLen = search.length;

    if (searchLen > strLen) {
        return -1;
    }
     // внешний цикл: двигает окно по главной строке
    for (let i = 0; i <= strLen - searchLen; i++) {
        let found = true;

             // внутренний цикл: проверяет буквы внутри окна
        for (let j = 0; j < searchLen; j++) {
            if (str[i + j] !== search[j]) {
                found = false;
                break; // если буква не совпала, прерываем проверку этого окна
            }
        }
        if (found) {
            return i;
        }
    }

    return -1;
}