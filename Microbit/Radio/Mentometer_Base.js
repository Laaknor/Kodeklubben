radio.onReceivedNumber(function (receivedNumber) {
    registrerStemme(receivedNumber, radio.receivedPacket(RadioPacketProperty.SerialNumber))
})
function registrerStemme (styrke: number, id: number) {
    velgerindeks = velger.indexOf(id)
    if (velgerindeks < 0) {
        velger.push(id)
        velgerindeks = velger.indexOf(id)
    }
    ledX = Math.floor(velgerindeks / 5)
    ledY = 4 - (velgerindeks - ledX * 5)
    led.plotBrightness(ledX, ledY, styrke)
}
input.onButtonPressed(Button.B, function () {
    velger = []
    ledX = 0
    ledY = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let ledY = 0
let ledX = 0
let velgerindeks = 0
let velger: number[] = []
velger = []
radio.setGroup(1)
basic.forever(function () {
	
})
