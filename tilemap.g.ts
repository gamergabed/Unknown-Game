// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Test Arena":
            case "level1":return tiles.createTilemap(hex`100010000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0202020b0b0b0b0b0b0b0b0b0b0b0b0b020b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b02020b0b0b0b0b0b0b0b0b0b0b0c0b0b0b020b0b0b0b0b0b0b0b0b0b0b010b0b0b020b0b0b0b0b0b020b0b0b080a030b0b0b0b0b0b0b0b0b020b0b0b090a040b0b0b0b0b0b0b0b0b0b0b0b0b0706050b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b02020b0b0b0b0b02020b0b0b0b0b0b0b0b020b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b02020b0b0b0b0b0b0b0b0b0b0b0b0b0b0b02020b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . 2 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 . . 
. . . 2 2 . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . . 2 2 . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile4,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tileGrass3,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "miniPathUP":
            case "tile1":return tile1;
            case "miniPathSIDE":
            case "tile3":return tile3;
            case "myTile1":
            case "tile5":return tile5;
            case "The Knights who say Neihs Shrubry":
            case "tile4":return tile4;
            case "myTile0":
            case "tile2":return tile2;
            case "miniPathUPend":
            case "tile6":return tile6;
            case "miniPathUPend0":
            case "tile7":return tile7;
            case "miniPathUPend1":
            case "tile8":return tile8;
            case "miniPathUPend2":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
