function minIncrementForUnique(numbers: number[]): number {
    let count = 0
    numbers.sort()

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] <= numbers[i - 1]) {
            count = count + numbers[i - 1] + 1 - numbers[i]
            numbers[i] = numbers[i - 1] + 1
        }
    }

    return count
};