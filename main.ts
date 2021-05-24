input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(145)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(35)
})
servos.P0.setAngle(35)
basic.forever(function () {
	
})
