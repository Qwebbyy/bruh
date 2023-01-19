input.onButtonPressed(Button.A, function () {
    music.playTone(440, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(494, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(587, music.beat(BeatFraction.Whole))
})
