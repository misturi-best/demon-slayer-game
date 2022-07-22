input.onGesture(Gesture.Shake, function () {
    if (randint(1, 6) == 1) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (randint(1, 6) == 2) {
        basic.showLeds(`
            # # . # #
            # # # # #
            . . # . .
            # # # # #
            # # . # #
            `)
    } else if (randint(1, 6) == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (randint(1, 6) == 4) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (randint(1, 6) == 5) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            . . # . .
            . # . . .
            `)
    } else if (randint(1, 6) == 6) {
        basic.showLeds(`
            . # . # .
            # # # # #
            . . # . .
            # # # # #
            . # . # .
            `)
    }
})
