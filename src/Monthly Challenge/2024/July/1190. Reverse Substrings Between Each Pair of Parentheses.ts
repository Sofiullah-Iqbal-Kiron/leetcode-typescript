// accepted
// wormhole teleportation technique

function reverseParentheses(s: string): string {
    let stack = new Array()
    let parenthesesPair = new Array(s.length)
    parenthesesPair.fill(0)
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(')
            stack.push(i)
        else if (s[i] === ')') {
            const j = stack.pop()
            parenthesesPair[i] = j
            parenthesesPair[j] = i
        }
    }

    let iterator = 0
    let direction = 1
    let answer = ""
    while (iterator < s.length) {
        if (s[iterator] === '(' || s[iterator] === ')') {
            iterator = parenthesesPair[iterator]
            direction = -direction
        }
        else
            answer += s[iterator]
        iterator += direction
    }

    return answer
};