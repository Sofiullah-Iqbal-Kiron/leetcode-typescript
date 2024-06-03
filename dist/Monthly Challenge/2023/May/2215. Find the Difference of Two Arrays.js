"use strict";
function findDifference(nums1, nums2) {
    return Array.of(Array.of(...new Set(set_difference(nums1, nums2))), Array.of(...new Set(set_difference(nums2, nums1))));
}
;
function set_difference(first, second) {
    return first.filter((x) => !second.includes(x));
}
