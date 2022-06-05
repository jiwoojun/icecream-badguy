let badguy = sprites.create(assets.image`badguy`, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    3 3 3 3 3 3 
    3 3 3 3 3 3 
    a a a a a a 
    2 4 5 7 4 2 
    2 4 5 7 4 2 
    2 4 5 7 4 2 
    . d d d d . 
    . d d d d . 
    `, SpriteKind.Food)
let mySprite3 = sprites.create(img`
    3 3 3 3 3 . 
    3 3 3 3 3 . 
    3 3 3 3 3 . 
    a a a a a . 
    a a a a a . 
    d d d d d . 
    . d d d . . 
    . . d . . . 
    `, SpriteKind.Food)
controller.moveSprite(badguy, 100, 100)
badguy.setStayInScreen(false)
badguy.setPosition(127, 175)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(7)
scene.cameraFollowSprite(badguy)
