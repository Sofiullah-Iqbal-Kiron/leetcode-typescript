function calculate(s: string): number {
    const stack: Array<string> = []

    for (const c of s) {
        if(c===' ')
            continue
        else if(c in [0,1,2,3,4,5,6,])
    }

    return parseInt(stack[stack.length - 1])
};