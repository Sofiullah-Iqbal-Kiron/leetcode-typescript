"use strict";

function appendCharacters(s, t) {
    let s_pointer = 0;
    let t_pointer = 0;
    while (s_pointer < s.length && t_pointer < t.length) {
        if (s[s_pointer] === t[t_pointer])
            t_pointer++;
        s_pointer++;
    }
    
    return t.length - t_pointer;
}
