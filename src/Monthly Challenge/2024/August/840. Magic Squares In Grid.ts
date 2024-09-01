// accepted

function isMagicSubgrid(grid: Array<Array<number>>, startRow: number, startColumn: number): boolean {
    const entries = []

    for (var i = startRow; i < startRow + 3; i++) {
        for (var j = startColumn; j < startColumn + 3; j++) {
            const currentEntry = grid[i][j]
            if (currentEntry < 10 && currentEntry > 0)
                entries.push(currentEntry)
        }
    }

    const entriesSet = new Set(entries)
    if (entriesSet.size != 9)
        return false

    const diagonal1 = grid[startRow][startColumn] + grid[startRow + 1][startColumn + 1] + grid[startRow + 2][startColumn + 2]
    const diagonal2 = grid[startRow][startColumn + 2] + grid[startRow + 1][startColumn + 1] + grid[startRow + 2][startColumn]

    const row1 = grid[startRow][startColumn] + grid[startRow][startColumn + 1] + grid[startRow][startColumn + 2]
    const row2 = grid[startRow + 1][startColumn] + grid[startRow + 1][startColumn + 1] + grid[startRow + 1][startColumn + 2]
    const row3 = grid[startRow + 2][startColumn] + grid[startRow + 2][startColumn + 1] + grid[startRow + 2][startColumn + 2]

    const column1 = grid[startRow][startColumn] + grid[startRow + 1][startColumn] + grid[startRow + 2][startColumn]
    const column2 = grid[startRow][startColumn + 1] + grid[startRow + 1][startColumn + 1] + grid[startRow + 2][startColumn + 1]
    const column3 = grid[startRow][startColumn + 2] + grid[startRow + 1][startColumn + 2] + grid[startRow + 2][startColumn + 2]

    let ans = diagonal1 === diagonal2
    ans = ans && row1 === row2
    ans = ans && row2 === row3
    ans = ans && row3 === column1
    ans = ans && column1 === column2
    ans = ans && column2 === column3

    return ans
}

function numMagicSquaresInside(grid: number[][]): number {
    let count = 0

    for (var i = 0; i < grid.length - 2; i++) {
        for (var j = 0; j < grid[0].length - 2; j++) {
            if (isMagicSubgrid(grid, i, j))
                count++
        }
    }

    return count
}
