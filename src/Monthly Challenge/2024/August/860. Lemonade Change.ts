// This same algorithm is accepted in python but why not in typescript?

function lemonadeChange(bills: number[]): boolean {
    let fives = 0;
    let tens = 0;

    bills.forEach(bill => {
        if (bill == 5)
            fives++
        else if (bill == 10) {
            tens++
            if (fives > 0)
                fives--
            else
                return false
        }
        else {
            if (tens > 0 && fives > 0) {
                tens--
                fives--
            }
            else if (fives >= 3)
                fives -= 3
            else
                return false
        }
    })

    return true
}
