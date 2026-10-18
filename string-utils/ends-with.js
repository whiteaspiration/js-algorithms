export function endsWith(str, search) {
    if (typeof str !== 'string') {
        throw new TypeError('Первый аргумент должен быть строкой');
    }
    if (typeof search !== 'string') {
        throw new TypeError('Второй аргумент должен быть строкой');
    }

    const strLen = str.length;
    const searchLen = search.length;

    if (searchLen > strLen) {
        return false;
    }

    const startIndex = strLen - searchLen;

    for (let i = 0; i < searchLen; i++) {
        if (str[startIndex + i] !== search[i]) {
            return false;
        }
    }

    return true;
}