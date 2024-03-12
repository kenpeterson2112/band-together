// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "School View Tilemap":
            case "level1":return tiles.createTilemap(hex`180018000000000000000000060505050505050d00000000000000000000000000000000030101010101010400000000000000000000000000000000030101010101010400000000000000000000000000000000030101010101010400000000000000000000000000000000030101010101010400000000000000000000000000000000030101010101010400000000000000000000000000000000030101010101010400000000000000000000000000000000030101010101010400000000000000000000000000000000030101010101010400000000000000000000000000000000030101010101010400000000000000000605050505050505090101010101010a050505050505050d03010101010101010101010101010101010101010101010e03010101010101010101010101010101010101010101010e03010101010101010101010101010101010101010101010e03010101010101010101010101010101010101010101010e03010101010101010101010101010101010101010101010e0b020202020202020801010101010107020202020202020c000000000000000003010101010101040000000000000000000000000000000003010101010101040000000000000000000000000000000003010101010101040000000000000000000000000000000003010101010101040000000000000000000000000000000003010101010101040000000000000000000000000000000003010101010101040000000000000000000000000000000003010101010101040000000000000000`, img`
........22222222........
........2......2........
........2......2........
........2......2........
........2......2........
........2......2........
........2......2........
........2......2........
........2......2........
........2......2........
222222222......222222222
2......................2
2......................2
2......................2
2......................2
2......................2
222222222......222222222
........2......2........
........2......2........
........2......2........
........2......2........
........2......2........
........2......2........
........2......2........
`, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast1,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.