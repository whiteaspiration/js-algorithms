export function isEqual(a, b) {
    if (typeof a !== 'string') {
        throw new TypeError('Аргумент должен быть строкой!') 
    }
    if (typeof b !== 'string') {
        throw new TypeError('Аргумент должен быть строкой!')
    }
    let i = 0
    for (; a[i] !== undefined || b[i] !== undefined; i++) {
        if (a[i] !== b[i]) {
            return false // если на каком-то шаге символы не равны ,они точно не равны
        }
    }
    return true;
}