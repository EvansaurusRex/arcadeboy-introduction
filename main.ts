scene.setBackgroundColor(7)
game.splash("HI!", "You are using an ArcadeBoy!")
game.splash("While using this device,", "Keep plugged in while playing.")
game.splash("You never know when the battery could Die!")
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
game.showLongText("As you can see, I have set up a world.", DialogLayout.Bottom)
game.showLongText("You can move the character around with the Dpad.", DialogLayout.Bottom)
info.setLife(3)
controller.moveSprite(mySprite)
pause(3000)
controller.moveSprite(mySprite, 0, 0)
game.showLongText("", DialogLayout.Bottom)
