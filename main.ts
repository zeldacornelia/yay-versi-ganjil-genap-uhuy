let running = 0
let Pengatur = 0
let Pencacah = 0
input.onButtonPressed(Button.A, function () {
    running = 1
    Pengatur = 1
    Pencacah = 0
})
input.onButtonPressed(Button.AB, function () {
    running = 0
})
input.onButtonPressed(Button.B, function () {
    running = 1
    Pengatur = 2
    Pencacah = 1
})
basic.forever(function () {
    if (running == 1) {
        if (Pengatur == 1) {
            if (Pencacah <= 10) {
                basic.showNumber(Pencacah)
                Pencacah += 2
                basic.pause(200)
            } else {
                Pencacah = 0
            }
        }
        if (Pengatur == 2) {
            if (Pencacah <= 10) {
                basic.showNumber(Pencacah)
                Pencacah += 2
                basic.pause(200)
            } else {
                Pencacah = 1
            }
        }
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
