controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 . 6 6 6 6 . . . . . 
        . 8 8 . 6 8 6 7 7 7 c c . . . . 
        . 6 7 6 8 6 7 7 7 e e e c . . . 
        . . 6 7 7 7 7 6 e 2 2 e e c . . 
        . . . 6 7 6 2 2 2 2 2 2 e e c . 
        . . 6 6 7 7 6 2 2 4 2 e e e c . 
        . 6 6 8 7 7 7 6 2 2 2 4 2 e c . 
        6 6 8 e 7 7 7 7 6 2 2 2 2 2 e c 
        . 8 8 2 2 6 6 6 6 2 2 2 4 2 c c 
        . . e 2 4 2 2 2 2 4 2 2 2 e e c 
        . . e 2 4 4 2 2 2 2 2 2 2 2 e c 
        . . e 2 2 4 5 4 2 2 2 2 e e 2 c 
        . . . e 2 2 4 4 4 4 4 2 2 e e c 
        . . . . e e 2 2 2 2 2 2 e e e c 
        . . . . . . e e e e e e e e e . 
        `,img`
        . . . . . . . . c c c c c c c . 
        . . . . . c c c e c e e 2 e e e 
        . . . . c e e e 2 2 e 2 e e e e 
        . . . c e e e 2 2 4 2 2 e 2 e e 
        . . c e e 2 e 4 2 2 2 2 2 2 2 e 
        . 6 c e 2 2 2 2 2 2 2 2 2 4 2 e 
        . 6 7 e 2 2 4 2 2 2 4 2 2 4 2 e 
        . 6 7 7 e 2 2 2 6 6 2 2 2 4 2 e 
        . 6 7 7 6 2 2 6 7 6 2 2 4 4 2 e 
        . . 6 7 7 2 6 7 7 6 2 2 5 4 2 e 
        . 8 8 6 7 6 7 7 7 6 2 4 4 2 e . 
        . . 6 8 7 7 7 7 7 2 4 4 2 2 e . 
        . . . 6 7 6 6 8 e 2 2 2 2 e . . 
        . . 8 7 6 . 6 6 8 8 e e e . . . 
        . . 8 6 . . . 6 6 8 . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        `,img`
        . e e e e e e e e e . . . . . . 
        c e e e 2 2 2 2 2 2 e e . . . . 
        c e e 2 2 4 4 4 4 4 2 2 e . . . 
        c 2 e e 2 2 2 2 4 5 4 2 2 e . . 
        c e 2 2 2 2 2 2 2 2 4 4 2 e . . 
        c e e 2 2 2 4 2 2 2 2 4 2 e . . 
        c c 2 4 2 2 2 6 6 6 6 2 2 8 8 . 
        c e 2 2 2 2 2 6 7 7 7 7 e 8 6 6 
        . c e 2 4 2 2 2 6 7 7 7 8 6 6 . 
        . c e e e 2 4 2 2 6 7 7 6 6 . . 
        . c e e 2 2 2 2 2 2 6 7 6 . . . 
        . . c e e 2 2 e 6 7 7 7 7 6 . . 
        . . . c e e e 7 7 7 6 8 6 7 6 . 
        . . . . c c 7 7 7 6 8 6 . 8 8 . 
        . . . . . 6 6 6 6 . 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `,img`
        . e e e e e e e e e . . . . . . 
        c e e e 2 2 2 2 2 2 e e . . . . 
        c e e 2 2 4 4 4 4 4 2 2 e . . . 
        c 2 e e 2 2 2 2 4 5 4 2 2 e . . 
        c e 2 2 2 2 2 2 2 2 4 4 2 e . . 
        c e e 2 2 2 4 2 2 2 2 4 2 e . . 
        c c 2 4 2 2 2 6 6 6 6 2 2 8 8 . 
        c e 2 2 2 2 2 6 7 7 7 7 e 8 6 6 
        . c e 2 4 2 2 2 6 7 7 7 8 6 6 . 
        . c e e e 2 4 2 2 6 7 7 6 6 . . 
        . c e e 2 2 2 2 2 2 6 7 6 . . . 
        . . c e e 2 2 e 6 7 7 7 7 6 . . 
        . . . c e e e 7 7 7 6 8 6 7 6 . 
        . . . . c c 7 7 7 6 8 6 . 8 8 . 
        . . . . . 6 6 6 6 . 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . c c c c c c c . 
        . . . . . c c c e c e e 2 e e e 
        . . . . c e e e 2 2 e 2 e e e e 
        . . . c e e e 2 2 4 2 2 e 2 e e 
        . . c e e 2 e 4 2 2 2 2 2 2 2 e 
        . 6 c e 2 2 2 2 2 2 2 2 2 4 2 e 
        . 6 7 e 2 2 4 2 2 2 4 2 2 4 2 e 
        . 6 7 7 e 2 2 2 6 6 2 2 2 4 2 e 
        . 6 7 7 6 2 2 6 7 6 2 2 4 4 2 e 
        . . 6 7 7 2 6 7 7 6 2 2 5 4 2 e 
        . 8 8 6 7 6 7 7 7 6 2 4 4 2 e . 
        . . 6 8 7 7 7 7 7 2 4 4 2 2 e . 
        . . . 6 7 6 6 8 e 2 2 2 2 e . . 
        . . 8 7 6 . 6 6 8 8 e e e . . . 
        . . 8 6 . . . 6 6 8 . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 . 6 6 6 6 . . . . . 
        . 8 8 . 6 8 6 7 7 7 c c . . . . 
        . 6 7 6 8 6 7 7 7 e e e c . . . 
        . . 6 7 7 7 7 6 e 2 2 e e c . . 
        . . . 6 7 6 2 2 2 2 2 2 e e c . 
        . . 6 6 7 7 6 2 2 4 2 e e e c . 
        . 6 6 8 7 7 7 6 2 2 2 4 2 e c . 
        6 6 8 e 7 7 7 7 6 2 2 2 2 2 e c 
        . 8 8 2 2 6 6 6 6 2 2 2 4 2 c c 
        . . e 2 4 2 2 2 2 4 2 2 2 e e c 
        . . e 2 4 4 2 2 2 2 2 2 2 2 e c 
        . . e 2 2 4 5 4 2 2 2 2 e e 2 c 
        . . . e 2 2 4 4 4 4 4 2 2 e e c 
        . . . . e e 2 2 2 2 2 2 e e e c 
        . . . . . . e e e e e e e e e . 
        `],
    100,
    true
    )
})
let mySprite: Sprite = null
scene.setBackgroundColor(3)
mySprite = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
music.baDing.playUntilDone()
