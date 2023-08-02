input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # # #
        . . # . .
        # # # # #
        `)
    music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.pause(1000)
    终点()
    wuKong.stopAllMotor()
    掉头()
    wuKong.stopAllMotor()
    basic.pause(2000)
    起点()
    wuKong.stopAllMotor()
})
function 巡线 () {
    Trackbit.Trackbit_get_state_value()
    if (Trackbit.TrackbitState(Trackbit.TrackbitStateType.Tracking_State_1)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        wuKong.setAllMotor(-40, 40)
    }
    if (Trackbit.TrackbitState(Trackbit.TrackbitStateType.Tracking_State_3) || Trackbit.TrackbitState(Trackbit.TrackbitStateType.Tracking_State_11)) {
        basic.showLeds(`
            . . # # #
            . . . # #
            . . # . #
            . # . . .
            # . . . .
            `)
        wuKong.setAllMotor(10, 30)
    }
    if (Trackbit.TrackbitState(Trackbit.TrackbitStateType.Tracking_State_8)) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
        wuKong.setAllMotor(10, 30)
    }
    if (Trackbit.TrackbitState(Trackbit.TrackbitStateType.Tracking_State_2) || Trackbit.TrackbitState(Trackbit.TrackbitStateType.Tracking_State_14)) {
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            . . . # .
            . . . . #
            `)
        wuKong.setAllMotor(30, 10)
    }
    if (Trackbit.TrackbitState(Trackbit.TrackbitStateType.Tracking_State_12)) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
        wuKong.setAllMotor(30, 10)
    }
}
function 终点 () {
    前进(100)
    Trackbit.Trackbit_get_state_value()
    while (!(Trackbit.TrackbitState(Trackbit.TrackbitStateType.Tracking_State_0))) {
        巡线()
    }
}
function 前进 (数字: number) {
    wuKong.setAllMotor(-50, 50)
    basic.pause(数字)
}
function 起点 () {
    Trackbit.Trackbit_get_state_value()
    while (!(Trackbit.TrackbitState(Trackbit.TrackbitStateType.Tracking_State_0))) {
        巡线()
    }
    前进(100)
}
function 掉头 () {
    wuKong.setAllMotor(30, 40)
    basic.pause(500)
    Trackbit.Trackbit_get_state_value()
    while (!(Trackbit.TrackbitChannelState(Trackbit.TrackbitChannel.Two, Trackbit.TrackbitType.State_1) || Trackbit.TrackbitChannelState(Trackbit.TrackbitChannel.Three, Trackbit.TrackbitType.State_1))) {
        wuKong.setAllMotor(30, 40)
    }
}
basic.showLeds(`
    # # # # #
    . # . # .
    # # # # #
    . # . # .
    # . . # .
    `)
music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 200, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 200, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
