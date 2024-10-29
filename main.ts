input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("TEMERATUR")
    if (input.temperature() < 20) {
        basic.setLedColors(0x0000ff, 0x0000ff, 0x0000ff)
    } else if (input.temperature() > 20) {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    }
})
