bitbot.select_model(BBModel.XL)
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.rotatems(BBRobotDirection.Left, 30, 10)
    } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotatems(BBRobotDirection.Right, 30, 10)
    } else {
        bitbot.goms(BBDirection.Forward, 60, 10)
    }
})
