let mySprite = sprites.create(assets.image`badguy`, SpriteKind.Player)
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
    2 2 2 2 2 . 
    2 2 2 2 2 . 
    a a a a a . 
    a a a a a . 
    3 3 3 3 3 . 
    d d d d d . 
    . d d d . . 
    . . d . . . 
    `, SpriteKind.Food)
mySprite2.setPosition(38, 20)
scene.setBackgroundColor(7)
