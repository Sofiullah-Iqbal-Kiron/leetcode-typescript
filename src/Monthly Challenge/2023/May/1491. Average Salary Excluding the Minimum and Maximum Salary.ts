// Accepted in first term.
// First typescript code accepted in first term.
// TypeScript, not bad.

function average(salary: number[]): number {
    let total: number = 0;
    let avg: number;
    let max: number = Math.max(...salary);
    let min: number = Math.min(...salary);

    for (let i of salary) total += i; // Learn then use Array.prototype.reduce() method.
    avg = (total - max - min) / (salary.length - 2);

    return avg;
}

// Time Complexity: O(N): N = salary.length