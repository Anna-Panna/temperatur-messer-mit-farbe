def on_button_a():
    basic.show_string("" + str((input.temperature())))
    if input.temperature() < 20:
        basic.set_led_colors(0x0000ff, 0x0000ff, 0x0000ff)
        music.play(music.string_playable("B A G A G F A C5 ", 120),
            music.PlaybackMode.UNTIL_DONE)
    elif input.temperature() > 20:
        basic.set_led_colors(0xff0000, 0xff0000, 0xff0000)
        music.play(music.string_playable("B A G A G F A C5 ", 120),
            music.PlaybackMode.UNTIL_DONE)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)
