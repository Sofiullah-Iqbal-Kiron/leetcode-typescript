function smallestDistancePair(nums: number[], k: number): number {
    let smallestNumber = Math.min(nums[0], nums[1])
    let largestNumber = Math.max(nums[0], nums[1])

    for (var i = 2; i < nums.length; i++) {
        smallestNumber = Math.min(smallestNumber, nums[i])
        largestNumber = Math.max(largestNumber, nums[i])
    }

    // define and populate distanceBucket
    let largestDistance = largestNumber - smallestNumber
    let distanceBucket = new Array(largestDistance + 1)
    distanceBucket.fill(0)

    // calculating distanceBucket
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            let currentAbsoluteDistance = Math.abs(nums[i] - nums[j])
            distanceBucket[currentAbsoluteDistance]++
        }
    }

    // find out K-th element
    for (var distance = 0; distance <= largestDistance; distance++) {
        k -= distanceBucket[distance]
        if (k <= 0)
            return distance
    }

    return -1
}
