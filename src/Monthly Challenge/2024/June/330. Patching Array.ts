function minPatches(numbers: number[], n: number): number {
    let countPatches = 0
    let prefixSum = 1
    let currentIndex = 0

    while (prefixSum <= n) {
        if (currentIndex < numbers.length && prefixSum >= numbers[currentIndex]) {
            prefixSum += numbers[currentIndex]
            currentIndex++
        }
        else {
            prefixSum += prefixSum
            countPatches++
        }
    }

    return countPatches
}
