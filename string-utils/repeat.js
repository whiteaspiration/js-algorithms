export function repeat(str, count) {
    if (typeof str !== 'string') {
        throw new TypeError('Первый аргумент должен быть строкой');
    }

    if (count === undefined) {
        return '';
    }

    if (typeof count !== 'number' || Number.isNaN(count)) {
        throw new TypeError('Второй аргумент должен быть числом');
    }

    if (count < 0) {
        throw new RangeError('Количество повторений не может быть отрицательным');
    }

    const times = Math.floor(count);
    let result = '';

    for (let i = 0; i < times; i++) {
        result += str;
    }

    return result;
}