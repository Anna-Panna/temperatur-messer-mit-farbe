input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("" + (input.temperature()))
    if (input.temperature() < 20) {
        basic.setLedColors(0x0000ff, 0x0000ff, 0x0000ff)
        music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
    } else if (input.temperature() > 20) {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
        music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
    }
})
