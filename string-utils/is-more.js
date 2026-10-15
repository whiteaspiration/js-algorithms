export function isMore(a, b) {
    if (typeof a !== 'string') {
        throw new TypeError('Аргумент должен быть строкой!') 
    }
    if (typeof b !== 'string') {
        throw new TypeError('Аргумент должен быть строкой!')
    }
    let i = 0;
    for (; a[i] !== undefined || b[i] !== undefined; i++) {

        if (a[i] === undefined) return false;
        if (b[i] === undefined) return true;

        if (a[i] > b[i]) return true;
        if (a[i] < b[i]) return false;
         // если на каком-то шаге символы a больше b ,то a точно больше b
    }
    
    return false;
}
    