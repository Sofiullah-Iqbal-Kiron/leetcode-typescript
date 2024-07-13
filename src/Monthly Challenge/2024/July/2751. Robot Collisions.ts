// accepted in 4'th term

class Robot {
    serial: number
    position: number
    health: number
    direction: 'R' | 'L'

    constructor(serial: number, position: number, health: number, direction: 'R' | 'L') {
        this.serial = serial
        this.position = position
        this.health = health
        this.direction = direction
    }
}

function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    const numsOfRobots = positions.length
    const robots = new Array()

    // objectify Robots
    for (var i = 0; i < numsOfRobots; i++) {
        const serial = i + 1
        const position = positions[i]
        const health = healths[i]
        const direction = directions[i] === 'R' ? 'R' : 'L'
        robots.push(new Robot(serial, position, health, direction))
    }

    // sort robots based on position
    robots.sort((rob1, rob2) => rob1.position - rob2.position)

    const stack = new Array<Robot>()
    stack.push(robots[0])

    // determine collisions
    for (var i = 1; i < robots.length; i++) {
        let currentRobot = robots[i]
        let immediateRobot = stack[stack.length - 1]
        let collidePossible = immediateRobot != undefined && immediateRobot.direction === 'R' && currentRobot.direction === 'L'
        if (collidePossible) {
            while (collidePossible) {
                if (immediateRobot.health === currentRobot.health) {
                    stack.pop()
                    collidePossible = false
                }
                else if (immediateRobot.health < currentRobot.health) {
                    stack.pop()
                    currentRobot.health--
                    if (stack.length > 0) {
                        immediateRobot = stack[stack.length - 1]
                        collidePossible = immediateRobot.direction === 'R' && currentRobot.direction === 'L'
                        if (!collidePossible)
                            stack.push(currentRobot)
                    }
                    else {
                        stack.push(currentRobot)
                        collidePossible = false
                    }
                }
                else {
                    immediateRobot.health--
                    collidePossible = false
                }
            }
        }
        else
            stack.push(currentRobot)
    }

    stack.sort((rob1, rob2) => rob1.serial - rob2.serial)
    const ans = new Array()
    for (const robot of stack)
        ans.push(robot.health)

    return ans
}