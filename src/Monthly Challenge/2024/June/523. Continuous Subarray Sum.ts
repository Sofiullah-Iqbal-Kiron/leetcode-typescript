// accepted
// but how this testcase is true: numbers = [5, 0, 0, 0] and k = 3
// cause 0 is divisible by all number

function checkSubarraySum(numbers: number[], k: number): boolean {
    let prefix_sum: number = 0
    let mod_map = new Map<number, number>()

    mod_map.set(0, -1)

    for (var i = 0; i < numbers.length; i++) {
        prefix_sum += numbers[i]
        const current_mod: number = prefix_sum % k
        if (mod_map.has(current_mod)) {
            const subarray_size: number = i - (mod_map.get(current_mod) ?? 0)
            if (subarray_size > 1)
                return true
        }
        else
            mod_map.set(current_mod, i)
    }

    return false
}
