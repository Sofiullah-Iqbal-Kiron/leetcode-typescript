function construct2DArray(original: number[], m: number, n: number): number[][] {
    const ans: Array<Array<number>> = []
    let iterator = 0;

    if (original.length != m * n) return ans

    for (var i = 0; i < m; i++) {
        const newArr = []
        for (var j = 0; j < n; j++)
            newArr.push(original[iterator++])
        ans.push(newArr)
    }

    return ans
}