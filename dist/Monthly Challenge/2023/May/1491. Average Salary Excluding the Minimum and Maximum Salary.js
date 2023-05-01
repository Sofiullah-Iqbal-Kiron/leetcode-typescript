"use strict";
// Accepted in first term.
// First typescript code accepted in first term.
// TypeScript, not bad.

function average(salary) {
    let total = 0;
    let avg = 0;
    let max = Math.max(...salary);
    let min = Math.min(...salary);
    for (let i of salary)
        total += i;
    avg = (total - max - min) / (salary.length - 2);
    return avg;
}
