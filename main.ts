controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
let myDart: Dart = null
scene.setBackgroundColor(12)
myDart = darts.create(img`
    . . . . 4 4 4 4 f 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 f 4 4 4 4 4 . . . 
    . . f 4 4 4 4 4 f 4 4 4 4 4 f . . 
    . 4 4 f 4 4 4 4 f 4 4 4 4 f 4 4 . 
    4 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 4 
    4 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 4 
    4 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 4 
    4 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 4 
    f f f f f f f f f f f f f f f f f 
    4 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 4 
    4 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 4 
    4 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 4 
    4 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 4 
    . 4 4 f 4 4 4 4 f 4 4 4 4 f 4 4 . 
    . . f 4 4 4 4 4 f 4 4 4 4 4 f . . 
    . . . 4 4 4 4 4 f 4 4 4 4 4 . . . 
    . . . . 4 4 4 4 f 4 4 4 4 . . . . 
    `, SpriteKind.Projectile)
myDart.setTrace()
myDart.controlWithArrowKeys()
let basket = sprites.create(img`
    ................
    111111111111111.
    111111111111111.
    111222222222111.
    111211111112111.
    111211111112111.
    111211111112111.
    111211111112111.
    111211111112111.
    111211111112111.
    111222fff222111.
    1111ff111ff1111.
    111f1111111f111.
    11f111111111f11.
    ...f...e...f....
    ....ff.e.ff.....
    ......fff.......
    .......e........
    .......e........
    .......e........
    .......e........
    .......e........
    .......e........
    .......e........
    .......e........
    ....eeeeeee.....
    ................
    ................
    ................
    ................
    `, SpriteKind.Player)
