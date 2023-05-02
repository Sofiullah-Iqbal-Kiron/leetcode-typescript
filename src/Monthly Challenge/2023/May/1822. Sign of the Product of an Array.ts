// Accepted in first term.
// Previous java solution was not optimized.

function arraySign(nums: number[]): number {
    let numOfNeg: number = 0;

    for (var n of nums) {
        if (n === 0) return 0;
        else if (n < 0) numOfNeg++;
    }

    return numOfNeg % 2 === 0 ? 1 : -1;
}

// Another amazing solution.
function arraySign2(nums: number[]): number {
    // Edge case.
    if (nums.includes(0)) return 0;

    let numOfNeg: number = 0;
    nums.forEach(n => n < 0 && numOfNeg++);

    return numOfNeg % 2 === 0 ? 1 : -1;
}