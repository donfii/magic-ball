input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    número_aleatorio = randint(0, 8)
    if (número_aleatorio == 2) {
        basic.showString("SI")
    } else if (número_aleatorio == 1) {
        basic.showString("NO")
    } else if (número_aleatorio == 3) {
        basic.showString("POSIBLEMENTE")
    } else if (número_aleatorio == 4) {
        basic.showString("SEGURAMENTE")
    } else if (número_aleatorio == 5) {
        basic.showString("PROBABLEMENTE NO")
    } else if (número_aleatorio == 6) {
        basic.showString("PROBABLEMENTE SÍ")
    } else if (número_aleatorio == 7) {
        basic.showString("SI QUIERES SÍ")
    } else {
        basic.showString("NO SÉ")
    }
    basic.showNumber(8)
})
let número_aleatorio = 0
basic.showString("Haz una pregunta")
basic.showNumber(8)
basic.forever(function () {
	
})
