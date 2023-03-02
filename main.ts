namespace SpriteKind {
    export const Object = SpriteKind.create()
    export const Selection = SpriteKind.create()
}
function Gui () {
    info.setLife(10)
}
function MarketPlace () {
    Render.setViewMode(ViewMode.tilemapView)
    myMenu.close()
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
        bf555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999944499999999999999999999999999999999999999999999999fb
        bf555555555555555555555555555599955599999999999999999999999999999999999999999999999999999999999999999999999944499999999999999999999999999999999999999999999999fb
        bf555555555555555555555555555599955599999999999999999999999999999999999999999999999999999999999999999999999944499999999999999999999999999999999999999999999999fb
        bf555555555555555555555555555599955599999999999999999999999999999999999999999999999999999999999999999999999944449999999999999999999999999999999999999999999999fb
        bf555555555555555555555555555599999999999999999999944444444449999999999999999999999999999999999999999999999944449999999999999999999999999999999999999999999999fb
        bf555555555555555555555555555599999999999999999999444444444444999999999999999999999999999444999944499999999944449999999999999999999999999999999999999999999999fb
        bf555555555555555555555555555999999999999999999999444444444444999999999999999999999999999444999944499999999944449999999999999999999999999999999999999999999999fb
        bf555555555555555555555555555999995559999999999999444999994444499999999999999999999999999444999944499999999944449999999999999999999999999999999999999999999999fb
        bf555555555555555555555555555999995559999999999999444999999444499999999999999999999999999999999944499999999944449999999999999999999999999999999999999999999999fb
        bf555555555555555555555555559999995559999999999994444999999444499999999999999999999999999999999944499999999944449999999999999944499994444499999999999999999999fb
        bf555555555555555555555555599999999999999999999994444999944444499999999999999999999999999999999944499999999944449999999999999944444444444444999999999999999999fb
        bf555555555555555555555555599999999999999999999994449994444444499999999999999999999999999999999944499999999944449999999999999944444444444444499999999999999999fb
        bf555555555555555555555555999999999999999999999994444444444444444999999999999999999999999444999444499999999944449999999999999944444444494444499999999999999999fb
        bf555555555555555555555559999999999999999999999994444444444444444999999999999994449999999444999444499999999944449999994449999944444449999444499999999999999999fb
        bf555555555555555555555599999999999999999999999994444444444444444999994449999994449999999444999444999999999944449994444444499944444499999944499999999999999999fb
        bf555555555555555555555599999999999999999999999994449999999999444999994449999994449999999444999444999999999944449994444444444994444999999999999999994449999999fb
        bf555555555555555555555999955599999999999999999994449999999999444999994449999994449999999444999444999999444444449994444444444994444999999999999999994449999999fb
        bf555555555555555555559999955599999999999999999994449999999994444999994449999994449999999444999444999994444444449994449994444994449999999999999999994449999999fb
        bf555555555555555555999999955599999999999999999994449999999944444999994449999994449999999444999444999994444444449994444444444994449999999999999994444444449999fb
        bf555555555555555599999999999999999999999999999994449999994444444999994449999944449999999444999444999944444994449994444444444994449999999999999994444444449999fb
        bf555555555555599999999999999999999999999999999994449999944444449999994449999944449999999444999444999944449994449994444444444994444999999999999994444444449999fb
        bf555555599999999999999999999999999999999999999994444444444444999999994444449444499999999444999444999944444994449994444999999994444999999999999999994449999999fb
        bf999999999999999999999999999999999999999999999994444444444449999999994444444444499999999444999444999944444444449994444999999999444999999999999999994449999999fb
        bf999999999999955599999999999999999999999999999999444444444999999999999444444444999999999444999444499994444444449999444449999999444999999999999999994449999999fb
        bf999999999999955599999999999999999999999999999999444499999999999999999994444444999999999444999444499999444444449999444444999999444999999999999999999999999999fb
        bf999555999999955599999999999999999999999999999999999999999999999999999999999999999999999999999444444499999444499999944444999999999999999999999999999999999999fb
        bf999555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999944444499999999999999994444999999999999999999999999999997777777fb
        bf999555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999944444499999999999999999999999999999999999999997777777777777777fb
        bf999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777777fb
        bf999999999999999999999999999999999999999999999999999999999777777777777777777777777777779999999999999999999999999999999999977777777777777777777777777777777777fb
        bf777999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777779999999999977777777777777777777777777777777777777777777fb
        bf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fb
        bf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fb
        bf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fb
        bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    mySprite = sprites.create(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `, SpriteKind.Player)
    textSprite4 = textsprite.create("No Content Availible")
    textSprite4.setPosition(80, 57)
    textSprite4.setFlag(SpriteFlag.RelativeToCamera, true)
    mySprite.setPosition(70, 65)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Menus == true) {
    	
    } else {
        loopTile(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.placeOnTile(Render.getRenderSpriteInstance(), tiles.getTileLocation(32, 71))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Menus == true) {
    	
    } else {
        tile = tiles.getTileLocation((Render.getRenderSpriteInstance().x + Render.getAttribute(Render.attribute.dirX) * dist) / scale, (Render.getRenderSpriteInstance().y + Render.getAttribute(Render.attribute.dirY) * dist) / scale)
        tiles.setTileAt(tile, indexTexture)
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        tiles.setWallAt(tile, true)
    }
})
function loopTile (delta: number) {
    Render.toggleViewMode()
    dist = 27
    scale = 16
    tile = tiles.getTileLocation((Render.getRenderSpriteInstance().x + Render.getAttribute(Render.attribute.dirX) * dist) / scale, (Render.getRenderSpriteInstance().y + Render.getAttribute(Render.attribute.dirY) * dist) / scale)
    indexTexture = tilesToBuildWith[0]
    myMenu3 = miniMenu.createMenu(
    miniMenu.createMenuItem("Destroy", img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 . . . . . . . . . . . . . 2 
        2 . 2 . . . . . . . . . . . . 2 
        2 . . 2 . . . . . . . . . . . 2 
        2 . . . 2 . . . . . . . . . . 2 
        2 . . . . 2 . . . . . . . . . 2 
        2 . . . . . 2 . . . . . . . . 2 
        2 . . . . . . 2 . . . . . . . 2 
        2 . . . . . . . 2 . . . . . . 2 
        2 . . . . . . . . 2 . . . . . 2 
        2 . . . . . . . . . 2 . . . . 2 
        2 . . . . . . . . . . 2 . . . 2 
        2 . . . . . . . . . . . 2 . . 2 
        2 . . . . . . . . . . . . 2 . 2 
        2 . . . . . . . . . . . . . 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `),
    miniMenu.createMenuItem("Bricks", img`
        4 d 4 4 4 4 4 4 4 d 4 4 4 4 4 4 
        4 d 4 4 4 4 4 4 4 d 4 4 4 4 4 4 
        e d e e e e e e e d e e e e e e 
        d d d d d d d d d d d d d d d d 
        4 4 4 4 4 d 4 4 4 4 4 4 4 d 4 4 
        4 4 4 4 4 d 4 4 4 4 4 4 4 d 4 4 
        e e e e e d e e e e e e e d e e 
        d d d d d d d d d d d d d d d d 
        4 d 4 4 4 4 4 4 4 d 4 4 4 4 4 4 
        4 d 4 4 4 4 4 4 4 d 4 4 4 4 4 4 
        e d e e e e e e e d e e e e e e 
        d d d d d d d d d d d d d d d d 
        4 4 4 4 4 d 4 4 4 4 4 4 4 d 4 4 
        4 4 4 4 4 d 4 4 4 4 4 4 4 d 4 4 
        e e e e e d e e e e e e e d e e 
        d d d d d d d d d d d d d d d d 
        `),
    miniMenu.createMenuItem("Raw Stone", img`
        d d d d d d c d d d d d d d d d 
        b b b b b c c c c b b b b b c b 
        b b b b c c d d d c c b b c c b 
        b b b c c d b b b d c c c c d b 
        b b c c d c c b b b c c c c c b 
        c c c d b d c b b b c d d d c c 
        d d d b b b c c c c c b b b d d 
        b b b b b b b c d c c b b b b b 
        b b b b b c c d b d d c c b b b 
        b b b b b c d b b b b d d c c b 
        c c c c c c b b b b b b c d c b 
        c d d c c c b b b b b c c b d c 
        d b b d d c c c c c c c d b b d 
        b b b b b d c d d d d c b b b b 
        b b b b b c c b b b b c b b b b 
        c c c c c c c c c c c c c c c c 
        `),
    miniMenu.createMenuItem("Hill", img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        e 7 e 7 e 7 e 7 e 7 7 7 e e 7 e 
        e 7 e e e e 7 e e e 7 7 e e 7 e 
        e e 7 e e e e e 7 e e 7 e 7 e e 
        e e e e e e e e e e e e e e b e 
        e e e e b e e e e e e e e e e e 
        e e e e e e e b e e b e e e e e 
        e b e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e b e e e e e e e e e e 
        e e e e e e e e e b e e e b e e 
        e e e e e e e e e e e e e e e e 
        e e e e b e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `),
    miniMenu.createMenuItem("Mixed Wall", img`
        b d d d d d d c d 1 1 1 1 1 1 c 
        d b b b b b b c 1 d d d d d d c 
        d b b b b b b c 1 d d d d d d c 
        d b b b b b b c 1 d d d d d d c 
        d b b b b b b c 1 d d d d d d c 
        d b b b b b b c 1 d d d d d d c 
        d b b b b b b b 1 d d d d d d d 
        c c c c c c b a c c c c c c d a 
        d 1 1 1 1 1 1 c b d d d d d d c 
        1 d d d d d d c d b b b b b b c 
        1 d d d d d d c d b b b b b b c 
        1 d d d d d d c d b b b b b b c 
        1 d d d d d d c d b b b b b b c 
        1 d d d d d d c d b b b b b b c 
        1 d d d d d d d d b b b b b b b 
        c c c c c c d a b c c c c c c a 
        `),
    miniMenu.createMenuItem("White Bricks", img`
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `),
    miniMenu.createMenuItem("Wooden Door", img`
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e 5 5 e f 
        f e e e e e e e e e e e 5 5 e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        `),
    miniMenu.createMenuItem("Chest", img`
        b b b b b b b b b b b b b b b b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        `),
    miniMenu.createMenuItem("Gate Locked", img`
        c b b b b b b b b b b b b b b c 
        c b b b b b b b b b b b b b b c 
        c d d d d d d d d d d d d d d c 
        c d d d d d d d d d d d d d d c 
        c c c c c c c c c c c c c c c c 
        c b b c b b b b b b b b c b b c 
        c d d c b b b b b b b b c d d c 
        c d d c 4 b b 5 5 b b 4 c d d c 
        c d d c b e 5 b b 5 e b c d d c 
        c d d c b e 4 5 5 4 e b c d d c 
        c b b c 4 b 5 4 f 5 b 4 c b b c 
        c d d c b b 4 4 e 4 b b c d d c 
        c d d c b b e 4 4 e b b c d d c 
        c d d c b b b e e b b b c d d c 
        c d d c b b b b b b b b c d d c 
        a c c c c c c c c c c c c c c a 
        `),
    miniMenu.createMenuItem("Oak Planks", img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 e 4 4 
        4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 
        4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 
        e e e e e e e e e e e e e e e e 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 e 4 4 4 4 4 4 4 4 4 e 4 4 
        4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 
        e e e e e e e e e e e e e e e e 
        4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 
        4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 
        e e e e e e e e e e e e e e e e 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 e 4 4 4 4 4 4 4 e 4 4 4 
        e e e e e e e e e e e e e e e e 
        `),
    miniMenu.createMenuItem("Mystery Block", img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
        6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `),
    miniMenu.createMenuItem("Button", img`
        b b b b b b b b b b b b b b b b 
        b c b e 4 4 4 4 4 4 4 4 e b c b 
        b b e 4 4 4 4 4 4 4 4 4 4 e b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
        b b 4 4 d d d d d d d d 4 4 b b 
        b b c 4 4 4 4 4 4 4 4 4 4 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `)
    )
    Top_Selector = miniMenu.createMenu(
    miniMenu.createMenuItem("Blocks"),
    miniMenu.createMenuItem("Decorations")
    )
    myMenu3.setPosition(10, 30)
    myMenu3.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 6)
    myMenu3.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 1)
    myMenu3.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.IconOnly, 1)
    myMenu3.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 2)
    myMenu3.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 15)
    myMenu3.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 5)
    myMenu3.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 2)
    myMenu3.setTitle("Inventory")
    myMenu3.setFlag(SpriteFlag.RelativeToCamera, true)
    myMenu3.setDimensions(100, 60)
    myMenu3.onButtonPressed(controller.A, function (selection, selectedIndex) {
        indexTexture = tilesToBuildWith[selectedIndex]
        myMenu3.close()
        Render.toggleViewMode()
    })
}
function OnSTART_gAME () {
    Ganerator_of_Worlds = randint(0, 0)
    if (Ganerator_of_Worlds == 0) {
        tiles.setCurrentTilemap(tilemap`level5`)
    }
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    Render.getRenderSpriteInstance().setPosition(114, 115)
    Render.getRenderSpriteInstance().setFlag(SpriteFlag.BounceOnWall, true)
    bound = sprites.create(assets.image`myImage`, SpriteKind.Selection)
    animation.runMovementAnimation(
    bound,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    for (let index = 0; index <= 9; index++) {
        let list: Image[] = []
        list.push(tiles.tileImageAtLocation(tiles.getTileLocation(index + 1, 1)))
        tiles.setTileAt(tiles.getTileLocation(index + 1, 1), assets.tile`transparency16`)
    }
    lastTile = tiles.getTileLocation(0, 0)
    Gui()
    for (let value of tiles.getTilesByType(assets.tile`Tree Spawn`)) {
        Tree = sprites.create(img`
            ................86..................
            ...........6688867886...............
            ...........8666877688868............
            ............868777767768............
            .........688667777776688............
            ........67767777777778666...........
            .........6776667767666868...........
            ..........866667667677688...........
            .........8666666666667778...........
            ........667766666666666676..........
            .......67766667666776667776.........
            ......886667776676777666688.........
            .....67766777667767777666768........
            ....6776666666777667776666776.......
            .....8667776667766676677776776......
            ......8777666666667776777776688.....
            ....6887766776677677777777776776....
            ..8866666677767777777777766666778...
            .86666666777667767777766666776668...
            ..88677666666777677677666667776668..
            ..86776677666666666666667776666668..
            886666677766667666666776677766668...
            6668666676667766767767766677666668..
            88866666666777677677667666666776668.
            .86668866666766776776666667766666668
            .86688666666666776666667667776666688
            .668866666666666666666677666666688..
            ..8866686666666666677667776666668...
            ...866886666666666677667776666668...
            ...86886668666666667666666666888....
            ....88866886686666666666666668......
            ......86886668666866668666868.......
            ......88866688668866688866888.......
            ........8888888688888ce868..........
            ..............e88e88.ec.8...........
            ...............eeee..e..............
            ...............ceef.ce..............
            ...............ceefcec..............
            ...............feefce...............
            ...............fceeec...............
            ...............ffceec...............
            `, SpriteKind.Object)
        tiles.placeOnTile(Tree, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.setWallAt(value, true)
    }
    Render.setSpriteAnimations(bound, Render.createAnimations(150, [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 5 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 5 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 5 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 5 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 5 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 5 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 5 5 5 5 4 . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        `]))
}
function Level_Selecter () {
    myMenu.close()
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff9999999999999999999999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff9999999999999999999999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff9999999999999999999999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff9999999999999999999999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff9999999999999999999999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff9999999999999999999999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff9999999999999999999999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff9999999999999999999999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff9999999999999999999999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff9999999999999999999999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99ffffffffffffffff9999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99ffffffffffffffff9999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99ffffffffffffffff9999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99fff7777777777fff9999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99fff7777777777fff9999999999999999999fff5555555555555555ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99fff7777777777fff9999999999999999999fffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99fff7777777777fff9999999999999999999fffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99fff7777777777fff9999999999999999999fffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99fff7777777777fff99999999999999999999999999999999999999ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99fff7777777777fff99999999999999999999999999999999999999ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99ffffffffffffffff99999999999999999999999999999999999999ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99ffffffffffffffff99999999999999999999999999999999999999ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99ffffffffffffffff99999999999999999999999999999999999999ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99999fffeeeefff99999999999999999999999999999999999999999ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99999fffeeeefff99999999999999999999999999999999999999999ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99999fffeeeefff99999999999999999999999999999999999999999ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99999fffeeeefff99999999999999999999999999999999999999999ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99999fffeeeefff99999999999999999999999999999999999999999ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff99999fffeeeefff99999999999999999999999999999999999999999ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff77777777777777777777777777777777777777777777777777777777ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff77777777777777777777777777777777777777777777777777777777ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffff77777777777777777777777777777777777777777777777777777777ffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    Cover = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.Player)
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Create ", img`
        f f f f f f f f f f f f f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 f 7 f 7 f 7 f 7 7 7 f f 7 f 
        f 7 f f e f 7 f e f 7 7 f f 7 f 
        f f 7 f e e f e 7 e f 7 f 7 f f 
        f e f e e e e e e e e f e f b f 
        f e e e b e e e e e e e e e e f 
        f e e e e e e b e e b e e e e f 
        f b e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e b e e e e e e e e e f 
        f e e e e e e e e b e e e b e f 
        f e e e e e e e e e e e e e e f 
        f e e e b e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        `),
    miniMenu.createMenuItem("General", img`
        f f f f f f f f f f f f f f f f 
        f 4 4 4 4 f e e e e f 4 4 4 4 f 
        f 4 4 4 4 f e e e e f 4 4 4 4 f 
        f 4 4 4 f f 4 4 4 4 f f 4 4 4 f 
        f 4 4 f f 4 4 4 4 4 4 f f 4 4 f 
        f f f f 4 f f f f f f 4 f f f f 
        f e e 4 4 f 4 4 4 4 f 4 4 e e f 
        f e e 4 4 f 4 4 4 4 f 4 4 e e f 
        f e e 4 4 f 4 4 4 4 f 4 4 e e f 
        f e e 4 4 f 4 4 4 4 f 4 4 e e f 
        f f f f 4 f f f f f f 4 f f f f 
        f 4 4 f f 4 4 4 4 4 4 f f 4 4 f 
        f 4 4 4 f f 4 4 4 4 f f 4 4 4 f 
        f 4 4 4 4 f e e e e f 4 4 4 4 f 
        f 4 4 4 4 f e e e e f 4 4 4 4 f 
        f f f f f f f f f f f f f f f f 
        `),
    miniMenu.createMenuItem("Plugins", img`
        . . . . . f f f . f f f . . . . 
        . . . . . f 1 f . f 1 f . . . . 
        . . . . . f 1 f . f 1 f . . . . 
        . . . . . f 1 f . f 1 f . . . . 
        . . . . . f 1 f . f 1 f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f b b b b b b b f . . . 
        . . . . f b b b b b b b f . . . 
        . . . . f b b b b b b b f . . . 
        . . . . f b b b b b b b f . . . 
        . . . . f f b b b b b f f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . f b f . . . . . . 
        . . . . . . f f b f . . . . . . 
        . . . . . . f b b f . . . . . . 
        . . . . . . f f f f . . . . . . 
        `),
    miniMenu.createMenuItem("Terrain", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f 7 7 7 f . . . . . 
        . . . . . . f 7 7 7 f . f f f f 
        . . . . . . f f f f f . f 7 7 f 
        . . . . . . . f e f . . f 7 e f 
        f f f f . . f f f f f . f 7 e f 
        f 7 7 f . . f 7 7 7 f f f 7 e f 
        f e 7 f f f f 7 e 7 7 f 7 7 e f 
        f e 7 7 f f 7 7 e e 7 7 7 e e f 
        f e e 7 7 7 7 e e e e e e e f f 
        f f f e e e e e f f f f f f f f 
        f b f f f f f f f b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `),
    miniMenu.createMenuItem("Exit", img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . f f f f f f f f f . . . . . . 
        . f 1 1 1 f . . . . . . . . . . 
        . f 1 1 1 f . . . . . . . . . . 
        . f 1 1 1 f . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    )
    SavesMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Creative"),
    miniMenu.createMenuItem("Adventure")
    )
    SavesMenu.setPosition(75, 30)
    myMenu2.setPosition(0, 68)
    SavesMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 1)
    myMenu2.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 12)
    myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
    SavesMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 7)
    SavesMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 1)
    myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 11)
    SavesMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    myMenu2.setDimensions(69, 55)
    SavesMenu.setDimensions(80, 60)
    SavesMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Alignment, 10)
    sprites.destroy(textSprite)
    sprites.destroy(textsprite2)
    textsprite2 = textsprite.create("World Editor", 0, 11)
    textsprite2.setOutline(0, 11)
    textsprite2.setPosition(80, 5)
    myMenu2.setFlag(SpriteFlag.RelativeToCamera, true)
    textsprite2.setFlag(SpriteFlag.RelativeToCamera, true)
    SavesMenu.setFlag(SpriteFlag.RelativeToCamera, true)
    textSprite = textsprite.create("Game Mode", 0, 1)
    textSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    textSprite.setPosition(100, 20)
    Cover.setFlag(SpriteFlag.RelativeToCamera, true)
    SavesMenu.setButtonEventsEnabled(false)
    SavesMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            Adventure_Mode = false
        } else if (selectedIndex == 1) {
            Adventure_Mode = true
        }
    })
    myMenu2.onButtonPressed(controller.right, function (selection, selectedIndex) {
        myMenu2.setButtonEventsEnabled(false)
        SavesMenu.setButtonEventsEnabled(true)
    })
    SavesMenu.onButtonPressed(controller.left, function (selection, selectedIndex) {
        myMenu2.setButtonEventsEnabled(true)
        SavesMenu.setButtonEventsEnabled(false)
    })
    myMenu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            OnSTART_gAME()
            myMenu2.close()
            SavesMenu.close()
            Menus = false
            sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            sprites.destroy(Cover)
        } else if (selectedIndex == 1) {
            myMenu2.close()
            Level_Selecter()
        } else if (selectedIndex == 2) {
        	
        } else if (selectedIndex == 3) {
        	
        } else {
            game.reset()
        }
    })
}
let Adventure_Mode = false
let SavesMenu: miniMenu.MenuSprite = null
let myMenu2: miniMenu.MenuSprite = null
let Cover: Sprite = null
let Tree: Sprite = null
let lastTile: tiles.Location = null
let bound: Sprite = null
let Ganerator_of_Worlds = 0
let Top_Selector: miniMenu.MenuSprite = null
let myMenu3: miniMenu.MenuSprite = null
let indexTexture: Image = null
let scale = 0
let dist = 0
let tile: tiles.Location = null
let textSprite4: TextSprite = null
let mySprite: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let textsprite2: TextSprite = null
let textSprite: TextSprite = null
let Menus = false
let tilesToBuildWith: Image[] = []
let UserName = "Beta"
let Player1 = Render.getRenderSpriteInstance()
tilesToBuildWith = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    4 d 4 4 4 4 4 4 4 d 4 4 4 4 4 4 
    4 d 4 4 4 4 4 4 4 d 4 4 4 4 4 4 
    e d e e e e e e e d e e e e e e 
    d d d d d d d d d d d d d d d d 
    4 4 4 4 4 d 4 4 4 4 4 4 4 d 4 4 
    4 4 4 4 4 d 4 4 4 4 4 4 4 d 4 4 
    e e e e e d e e e e e e e d e e 
    d d d d d d d d d d d d d d d d 
    4 d 4 4 4 4 4 4 4 d 4 4 4 4 4 4 
    4 d 4 4 4 4 4 4 4 d 4 4 4 4 4 4 
    e d e e e e e e e d e e e e e e 
    d d d d d d d d d d d d d d d d 
    4 4 4 4 4 d 4 4 4 4 4 4 4 d 4 4 
    4 4 4 4 4 d 4 4 4 4 4 4 4 d 4 4 
    e e e e e d e e e e e e e d e e 
    d d d d d d d d d d d d d d d d 
    `,
img`
    d d d d d d c d d d d d d d d d 
    b b b b b c c c c b b b b b c b 
    b b b b c c d d d c c b b c c b 
    b b b c c d b b b d c c c c d b 
    b b c c d c c b b b c c c c c b 
    c c c d b d c b b b c d d d c c 
    d d d b b b c c c c c b b b d d 
    b b b b b b b c d c c b b b b b 
    b b b b b c c d b d d c c b b b 
    b b b b b c d b b b b d d c c b 
    c c c c c c b b b b b b c d c b 
    c d d c c c b b b b b c c b d c 
    d b b d d c c c c c c c d b b d 
    b b b b b d c d d d d c b b b b 
    b b b b b c c b b b b c b b b b 
    c c c c c c c c c c c c c c c c 
    `,
img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    e 7 e 7 e 7 e 7 e 7 7 7 e e 7 e 
    e 7 e e e e 7 e e e 7 7 e e 7 e 
    e e 7 e e e e e 7 e e 7 e 7 e e 
    e e e e e e e e e e e e e e b e 
    e e e e b e e e e e e e e e e e 
    e e e e e e e b e e b e e e e e 
    e b e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e b e e e e e e e e e e 
    e e e e e e e e e b e e e b e e 
    e e e e e e e e e e e e e e e e 
    e e e e b e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    `,
img`
    b d d d d d d c d 1 1 1 1 1 1 c 
    d b b b b b b c 1 d d d d d d c 
    d b b b b b b c 1 d d d d d d c 
    d b b b b b b c 1 d d d d d d c 
    d b b b b b b c 1 d d d d d d c 
    d b b b b b b c 1 d d d d d d c 
    d b b b b b b b 1 d d d d d d d 
    c c c c c c b a c c c c c c d a 
    d 1 1 1 1 1 1 c b d d d d d d c 
    1 d d d d d d c d b b b b b b c 
    1 d d d d d d c d b b b b b b c 
    1 d d d d d d c d b b b b b b c 
    1 d d d d d d c d b b b b b b c 
    1 d d d d d d c d b b b b b b c 
    1 d d d d d d d d b b b b b b b 
    c c c c c c d a b c c c c c c a 
    `,
img`
    d 1 d d d d d d d 1 d d d d d d 
    d 1 d d d d d d d 1 d d d d d d 
    d 1 d d d d d d d 1 d d d d d d 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    d d d d d 1 d d d d d d d 1 d d 
    d d d d d 1 d d d d d d d 1 d d 
    d d d d d 1 d d d d d d d 1 d d 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 d d d d d d d 1 d d d d d d 
    d 1 d d d d d d d 1 d d d d d d 
    d 1 d d d d d d d 1 d d d d d d 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    d d d d d 1 d d d d d d d 1 d d 
    d d d d d 1 d d d d d d d 1 d d 
    d d d d d 1 d d d d d d d 1 d d 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    f f f f f f f f f f f f f f f f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e 5 5 e f 
    f e e e e e e e e e e e 5 5 e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    `,
img`
    b b b b b b b b b b b b b b b b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    `,
img`
    c b b b b b b b b b b b b b b c 
    c b b b b b b b b b b b b b b c 
    c d d d d d d d d d d d d d d c 
    c d d d d d d d d d d d d d d c 
    c c c c c c c c c c c c c c c c 
    c b b c b b b b b b b b c b b c 
    c d d c b b b b b b b b c d d c 
    c d d c 4 b b 5 5 b b 4 c d d c 
    c d d c b e 5 b b 5 e b c d d c 
    c d d c b e 4 5 5 4 e b c d d c 
    c b b c 4 b 5 4 f 5 b 4 c b b c 
    c d d c b b 4 4 e 4 b b c d d c 
    c d d c b b e 4 4 e b b c d d c 
    c d d c b b b e e b b b c d d c 
    c d d c b b b b b b b b c d d c 
    a c c c c c c c c c c c c c c a 
    `,
img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 e 4 4 
    4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 
    4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 
    e e e e e e e e e e e e e e e e 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 e 4 4 4 4 4 4 4 4 4 e 4 4 
    4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 
    e e e e e e e e e e e e e e e e 
    4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 
    4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 
    e e e e e e e e e e e e e e e e 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 e 4 4 4 4 4 4 4 e 4 4 4 
    e e e e e e e e e e e e e e e e 
    `,
img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `,
img`
    b b b b b b b b b b b b b b b b 
    b c b e 4 4 4 4 4 4 4 4 e b c b 
    b b e 4 4 4 4 4 4 4 4 4 4 e b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b d 4 4 4 4 4 4 4 4 4 4 d b b 
    b b d 4 4 4 4 4 4 4 4 4 4 d b b 
    b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
    b b 4 4 d d d d d d d d 4 4 b b 
    b b c 4 4 4 4 4 4 4 4 4 4 c b b 
    b b b c c c c c c c c c c b b b 
    b c b b b b b b b b b b b b c b 
    b b b b b b b b b b b b b b b b 
    `,
img`
    b b b b b b b b b b b b b b b b 
    b c b c 6 6 6 6 6 6 6 6 c b c b 
    b b c 6 6 6 6 6 6 6 6 6 6 c b b 
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
    b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
    b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
    b b 6 9 6 6 6 6 6 6 6 6 9 6 b b 
    b b 6 6 9 9 9 9 9 9 9 9 6 6 b b 
    b b c 6 6 6 6 6 6 6 6 6 6 c b b 
    b b b c c c c c c c c c c b b b 
    b c b b b b b b b b b b b b c b 
    b b b b b b b b b b b b b b b b 
    `,
img`
    b b b b b b b b b b b b b b b b 
    b c b a 3 3 3 3 3 3 3 3 a b c b 
    b b a 3 3 3 3 3 3 3 3 3 3 a b b 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
    b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
    b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
    b b 3 1 3 3 3 3 3 3 3 3 1 3 b b 
    b b 3 3 1 1 1 1 1 1 1 1 3 3 b b 
    b b c 3 3 3 3 3 3 3 3 3 3 c b b 
    b b b c c c c c c c c c c b b b 
    b c b b b b b b b b b b b b c b 
    b b b b b b b b b b b b b b b b 
    `
]
let More_tiles_to_build_with = [
img`
    b b b b b b b b b b b b b b b b 
    b c b a 3 3 3 3 3 3 3 3 a b c b 
    b b a 3 3 3 3 3 3 3 3 3 3 a b b 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
    b b 3 3 3 3 7 7 3 3 3 3 3 3 b b 
    b b 3 3 3 3 3 7 7 3 3 3 3 3 b b 
    b b 1 3 3 3 3 3 3 7 3 3 3 1 b b 
    b b 1 3 3 3 3 3 3 3 7 7 3 1 b b 
    b b 3 1 3 3 3 3 3 3 3 7 1 3 b b 
    b b 3 3 1 1 1 1 1 1 1 1 3 3 b b 
    b b c 3 3 3 3 3 3 3 3 3 3 c b b 
    b b b c c c c c c c c c c b b b 
    b c b b b b b b b b b b b b c b 
    b b b b b b b b b b b b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
0,
0,
0,
0
]
Menus = true
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
let Username_Text = textsprite.create(UserName)
Username_Text.setPosition(14, 115)
textSprite = textsprite.create("Makecode")
textSprite.setPosition(55, 10)
textSprite.setOutline(2, 4)
textSprite.setMaxFontHeight(10)
textsprite2 = textsprite.create("Blocks Edition")
textsprite2.setPosition(76, 20)
textsprite2.setOutline(2, 4)
let Random_Text = randint(0, 8)
let textSprite3 = textsprite.create("Splash!")
textSprite3.setOutline(2, 4)
if (Random_Text == 0) {
    textSprite3.setText("Makecode Builder!")
} else if (Random_Text == 1) {
    textSprite3.setText("Unique is Amazing")
} else if (Random_Text == 2) {
    textSprite3.setText("In Beta Dev")
} else if (Random_Text == 3) {
    textSprite3.setText("AqeeAqee is Amazing")
} else if (Random_Text == 4) {
    textSprite3.setText("Maketendo")
} else if (Random_Text == 5) {
    textSprite3.setText("Makecode Forums")
} else if (Random_Text == 6) {
    textSprite3.setText("randomuser")
} else if (Random_Text == 7) {
    textSprite3.setText("Sonicblaston")
} else {
    textSprite3.setText("Raycasting")
}
textSprite3.setPosition(80, 100)
myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("Play", img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `),
miniMenu.createMenuItem("Marketplace", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f 1 1 f 2 2 f 1 1 f 2 2 f 1 1 f 
    f 1 1 f 2 2 f 1 1 f 2 2 f 1 1 f 
    f 1 1 f 2 2 f 1 1 f 2 2 f 1 1 f 
    f 1 1 f 2 2 f 1 1 f 2 2 f 1 1 f 
    f 1 1 f 2 2 f 1 1 f 2 2 f 1 1 f 
    f 1 1 f 2 2 f 1 1 f 2 2 f 1 1 f 
    f f f f f f f f f f f f f f f f 
    . f e f . . . . . . . . f e f . 
    . f e f . . . . . . . . f e f . 
    . f e f . . . . . . . . f e f . 
    . f e f f f f f f f f f f e f . 
    . f e f b b b b b b b b f e f . 
    . f f f f f f f f f f f f f f . 
    `),
miniMenu.createMenuItem("Bound Maker", assets.image`myImage`)
)
myMenu.setPosition(30, 30)
myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 6)
myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 1)
myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 2)
myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 15)
textSprite3.setFlag(SpriteFlag.RelativeToCamera, true)
myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
textsprite2.setFlag(SpriteFlag.RelativeToCamera, true)
textSprite.setFlag(SpriteFlag.RelativeToCamera, true)
Username_Text.setFlag(SpriteFlag.RelativeToCamera, true)
myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    if (selectedIndex == 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        Level_Selecter()
    } else if (selectedIndex == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        MarketPlace()
    } else {
        sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    }
})
game.onUpdate(function () {
    tiles.placeOnTile(bound, tiles.getTileLocation((Render.getRenderSpriteInstance().x + Render.getAttribute(Render.attribute.dirX) * dist) / scale, (Render.getRenderSpriteInstance().y + Render.getAttribute(Render.attribute.dirY) * dist) / scale))
})
forever(function () {
    if (true) {
        if (controller.menu.isPressed()) {
        	
        }
    }
})
forever(function () {
	
})
