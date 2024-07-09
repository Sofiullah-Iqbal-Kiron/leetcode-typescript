// accepted 
// but why `(prefix_sum % k + k) % k` is not same as `Math.abs(prefix_sum % k)`?

function subarraysDivByK(numbers: number[], k: number): number {
    let counter = 0
    let prefix_sum = 0
    let mod_map = new Map<number, number>()

    mod_map.set(0, 1)

    for (var i = 0; i < numbers.length; i++) {
        prefix_sum += numbers[i]
        const current_mod = Math.abs(prefix_sum % k)
        if (mod_map.has(current_mod)) {
            const current_value = mod_map.get(current_mod) ?? 0
            counter += current_value
            mod_map.set(current_mod, current_value + 1)
        }
        else
            mod_map.set(current_mod, 1)
    }

    return counter
};