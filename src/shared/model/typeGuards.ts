export function isObj(val: unknown): val is object {
    if (typeof val === 'object' && !Array.isArray(val) && val !== null) {
        return true;
    }
    return false;
}
