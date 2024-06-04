"use strict";

function longestPalindrome(given_string) {
    // may be premature optimization
    if (given_string.length === 1)
        return 1;

    const char_tracker = new Set();
    var counter = 0;
    
    for (const current_char of given_string) {
        // if char_tracker set has current_char already, means pair found, remove it and add 2 to the counter
        if (char_tracker.has(current_char)) {
            char_tracker.delete(current_char);
            counter += 2;
        }
        // else add current_char to the char_tracker set
        else
            char_tracker.add(current_char);
    }

    if (char_tracker.size > 0)
        return counter + 1;

    return counter;
}
