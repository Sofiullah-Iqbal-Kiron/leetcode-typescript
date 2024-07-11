// accepted in first attempt


function minOperations(logs: string[]): number {
    let answer = 0

    logs.forEach(log => {
        if (log === "../") {
            answer--
            answer = Math.max(answer, 0)
        }
        else if (log != "./")
            answer++
    })

    return answer
}
