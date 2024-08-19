
export const sliceArray = (arr, num) => {
    const start = (num - 1) * 6;
    return arr.slice(start, start + 6);
}
