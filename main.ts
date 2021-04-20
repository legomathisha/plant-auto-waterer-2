input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
let graph_moiture = 0
let moiture = 0
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    moiture = pins.analogReadPin(AnalogPin.P0)
    if (moiture > 600) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    graph_moiture = Math.map(moiture, 750, 150, 0, 5)
    led.plotBarGraph(
    graph_moiture,
    5
    )
    basic.pause(1000)
    basic.showNumber(Math.round(moiture))
    basic.clearScreen()
})
