// Accepted in first term.

function maxVowels(s: string, k: number): number {
    let vowels: number = 0;
    let vowels_list: string[] = Array.from('aeiou');

    let first_window: string = s.substring(0, k);
    for (let c of first_window)
        if (vowels_list.includes(c))
            vowels++;

    let ans: number = vowels;

    let slow: number = 0;
    let fast: number = k;
    while (fast < s.length) {
        if (vowels_list.includes(s[slow++])) vowels--;
        if (vowels_list.includes(s[fast++])) vowels++;
        ans = Math.max(ans, vowels);
    }

    return ans;
};