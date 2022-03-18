scene.setBackgroundColor(12)
let myDart = darts.create(img`
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
