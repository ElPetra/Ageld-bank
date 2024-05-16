export function isObj(val: unknown): val is object {
    return typeof val === 'object' && !Array.isArray(val) && val !== null;
}
