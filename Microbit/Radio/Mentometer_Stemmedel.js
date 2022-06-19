input.onButtonPressed(Button.A, function () {
    radio.sendNumber(255)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.No)
})
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
basic.showIcon(IconNames.Heart)
