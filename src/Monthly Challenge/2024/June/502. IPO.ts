function get_project(cp: Array<Array<number>>, w: number) {
    for (var k = 0; k < cp.length; k++)
        if (cp[k][0] <= w)
            return [cp[k][1], k]

    return [-1, -1]
}

function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    // zipping
    const cp: Array<Array<number>> = []
    for (var i = 0; i < capital.length; i++)
        cp.push([capital[i], profits[i]])

    // sort based on profit
    cp.sort((a, b) => b[1] - a[1])

    for (var j = 0; j < k; j++) {
        const [profit, index] = get_project(cp, w)
        if (profit === -1 && index === -1)
            return w
        w += profit
        cp.splice(index, 1)
    }

    return w
}