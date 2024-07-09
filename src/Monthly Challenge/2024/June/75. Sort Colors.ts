// accepted in first term

function sortColors(nums: number[]): void {
    let zeros = 0, ones = 0, twos = 0
    nums.forEach((value) => {
        if (value === 0) zeros++
        else if (value === 1) ones++
        else twos++
    })

    for (var i = 0; i < nums.length; i++) {
        if (zeros > 0) {
            nums[i] = 0
            zeros--
        }
        else if (ones > 0) {
            nums[i] = 1
            ones--
        }
        else {
            nums[i] = 2
            twos--
        }
    }
};
