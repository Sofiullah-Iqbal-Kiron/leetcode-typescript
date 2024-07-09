// accepted in first attempt
// just: single-server-queuing simulation

function averageWaitingTime(customers: number[][]): number {
    let nextIdleTime = 0
    let totalWaitingTime = 0

    customers.forEach(customer => {
        nextIdleTime = Math.max(nextIdleTime, customer[0]) + customer[1]
        totalWaitingTime += nextIdleTime - customer[0]
    })

    return totalWaitingTime / customers.length
};
