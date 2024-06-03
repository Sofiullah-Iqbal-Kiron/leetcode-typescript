"use strict";
// Accepted in first term.
function maxVowels(s, k) {
    let vowels = 0;
    let vowels_list = Array.from('aeiou');
    let first_window = s.substring(0, k);
    for (let c of first_window)
        if (vowels_list.includes(c))
            vowels++;
    let ans = vowels;
    let slow = 0;
    let fast = k;
    while (fast < s.length) {
        if (vowels_list.includes(s[slow++]))
            vowels--;
        if (vowels_list.includes(s[fast++]))
            vowels++;
        ans = Math.max(ans, vowels);
    }
    return ans;
}
;
