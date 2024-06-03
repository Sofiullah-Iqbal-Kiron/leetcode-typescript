function appendCharacters(s: string, t: string): number {
    let s_pointer: number = 0
    let t_pointer: number = 0

    while (s_pointer < s.length && t_pointer < t.length) {
        if (s[s_pointer] === t[t_pointer]) t_pointer++
        s_pointer++
    }

    return t.length - t_pointer
}
