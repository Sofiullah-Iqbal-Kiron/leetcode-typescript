function findDifference(nums1: number[], nums2: number[]): number[][] {
    return Array.of(Array.of(...new Set(set_difference(nums1, nums2))), Array.of(...new Set(set_difference(nums2, nums1))));
};

function set_difference(first: number[], second: number[]): number[] {
    return first.filter((x) => !second.includes(x));
}