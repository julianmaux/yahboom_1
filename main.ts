Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 37, 0)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 0, 70)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Minus, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
})
Mbit_IR.onPressEvent(RemoteButton.Light, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 37, 0)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 0, 70)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Plus, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
})
Mbit_IR.init(Pins.P8)
