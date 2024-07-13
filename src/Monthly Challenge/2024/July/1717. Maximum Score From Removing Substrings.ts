// accepted in first attempt

function remover(s: string, r: string) {
    const stack = new Array()

    for (const c of s) {
        if (stack.length > 0 && stack[stack.length - 1] + c === r)
            stack.pop()
        else stack.push(c)
    }

    let newString = ""
    for (const c of stack)
        newString += c

    return newString
}

function maximumGain(s: string, x: number, y: number): number {
    let score = 0
    let previousLength = s.length

    const maxSubStr = x > y ? "ab" : "ba"
    const minSubStr = maxSubStr === "ab" ? "ba" : "ab"

    // remove maxSubStr first
    s = remover(s, maxSubStr)
    score += ((previousLength - s.length) / 2) * Math.max(x, y)
    previousLength = s.length

    // remove minSubStr then
    s = remover(s, minSubStr)
    score += ((previousLength - s.length) / 2) * Math.min(x, y)

    return score
}
