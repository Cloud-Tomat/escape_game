let statut = 0
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    if (statut == 0) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1 || (pins.digitalReadPin(DigitalPin.P2) == 1 || pins.digitalReadPin(DigitalPin.P4) == 1)) {
            basic.showIcon(IconNames.Skull)
        } else {
            if (pins.digitalReadPin(DigitalPin.P0) == 1) {
                statut = 1
                basic.showString("" + (statut))
            }
        }
    }
})
basic.forever(function () {
    if (statut == 1) {
        if (pins.digitalReadPin(DigitalPin.P0) == 0 || (pins.digitalReadPin(DigitalPin.P2) == 1 || pins.digitalReadPin(DigitalPin.P4) == 1)) {
            basic.showIcon(IconNames.Skull)
        } else {
            if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                statut = 2
                basic.showString("" + (statut))
            }
        }
    }
})
basic.forever(function () {
    if (statut == 2) {
        if (pins.digitalReadPin(DigitalPin.P0) == 0 || (pins.digitalReadPin(DigitalPin.P1) == 0 || pins.digitalReadPin(DigitalPin.P4) == 1)) {
            basic.showIcon(IconNames.Skull)
        } else {
            if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                statut = 3
                basic.showString("" + (statut))
            }
        }
    }
})
basic.forever(function () {
    if (statut == 3) {
        if (pins.digitalReadPin(DigitalPin.P0) == 0 || (pins.digitalReadPin(DigitalPin.P1) == 0 || pins.digitalReadPin(DigitalPin.P2) == 0)) {
            basic.showIcon(IconNames.Skull)
        } else {
            if (pins.digitalReadPin(DigitalPin.P4) == 1) {
                statut = 4
                basic.showIcon(IconNames.Heart)
            }
        }
    }
})
