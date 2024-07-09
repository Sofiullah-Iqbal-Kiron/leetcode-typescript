function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let maxUnsatisfied: number = 0

    for (var i = 0; i < minutes; i++)
        maxUnsatisfied += customers[i] * grumpy[i]

    i = 0
    var j = minutes
    let currentUnsatisfied = maxUnsatisfied
    while (j < customers.length) {
        currentUnsatisfied -= customers[i] * grumpy[i]
        currentUnsatisfied += customers[j] * grumpy[j]
        maxUnsatisfied = Math.max(maxUnsatisfied, currentUnsatisfied)
        i++
        j++
    }

    let totalSatisfied = 0
    for (i = 0; i < customers.length; i++)
        totalSatisfied += customers[i] * (1 - grumpy[i])

    return totalSatisfied + maxUnsatisfied
};