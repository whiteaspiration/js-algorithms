export function len(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Аргумент должен быть строкой');
    }
    let i = 0;
    for (; str[i] !== undefined; i++) {}
    return i;
}