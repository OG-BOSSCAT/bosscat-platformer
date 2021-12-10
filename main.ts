scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Dog`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    BOSSCAT.setVelocity(100, -100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Food`, function (sprite, location) {
    game.over(true, effects.hearts)
})
let BOSSCAT: Sprite = null
scene.setBackgroundColor(9)
BOSSCAT = sprites.create(assets.image`BOSSCAT`, SpriteKind.Player)
BOSSCAT.ay = 200
controller.moveSprite(BOSSCAT, 100, 100)
info.setLife(9)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(BOSSCAT)
for (let index = 0; index < 2; index++) {
    music.playMelody("C E F E D E D C ", 250)
    music.playMelody("C A A B B A A G ", 251)
    music.playMelody("E F E F D D E F ", 251)
}
