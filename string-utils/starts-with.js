export function startsWith(str, search) {
    if (typeof str !== 'string') {
        throw new TypeError('Первый аргумент должен быть строкой');
    }
    if (typeof search !== 'string') {
        throw new TypeError('Второй аргумент должен быть строкой');
    }

    if (search.length > str.length) {
        return false;
    }

    for (let i = 0; i < search.length; i++) {
        if (str[i] !== search[i]) {
            return false;
        }
    }

    return true;
}