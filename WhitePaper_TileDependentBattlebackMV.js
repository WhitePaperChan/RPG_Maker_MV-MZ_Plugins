//=============================================================================
// WhitePaper_TileDependentBattlebackMV.js
//=============================================================================
/*:
 * @target MV
 * @plugindesc Allows to customize dependency of battlebacks on tiles in overworld.
 * @author WhitePaper
 * 
 * @param Default batlleback1
 * @type file
 * @dir img/battlebacks1
 * @default Grassland
 * @require 1
 * @desc Default battleback1
 * 
 * @param Default batlleback2
 * @type file
 * @dir img/battlebacks2
 * @default Grassland
 * @require 1
 * @desc Default battleback2
 * 
 * @param Ship batlleback1
 * @type file
 * @dir img/battlebacks1
 * @default Ship
 * @require 1
 * @desc Battleback1 when player is on a ship
 *
 * @param Ship batlleback2
 * @type file
 * @dir img/battlebacks2
 * @default Ship
 * @require 1
 * @desc Battleback2 when player is on a ship
 * 
 * @param Tile dependent battlebacks
 * 
 * @param Tile 0
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 1
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 2
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 3
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 4
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 5
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 6
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 7
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 8
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 9
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 10
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 *
 * @param Tile 11
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 12
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 13
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 14
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 15
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 16
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 17
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 18
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 19
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 20
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 21
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 22
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 23
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 24
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 25
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 26
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 27
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 28
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 29
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 30
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 31
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 32
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 33
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 34
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 35
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 36
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 37
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 38
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 39
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 40
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 41
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 42
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 43
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 44
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 45
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 46
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @param Tile 47
 * @parent Tile dependent battlebacks
 * @type struct<TileBattlebacks>
 * 
 * @help
 * 
 * If a map uses a tileset with world type, battleback depends on tiles 
 * on which player stands. This plugin allows to control this dependency.
 * 
 * You can:
 *  - use this plugin and its extentions in any projects; 
 *  - edit/modify this plugin and its extentions.
 * Credit is desirable, but isn't necessarily.
 * 
 */
/*~struct~TileBattlebacks:
 * @param Battleback1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @desc Battleback1 when player is on this tile
 * 
 * @param Battleback2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @desc Battleback2 when player is on this tile
 */


WP_Tilebattleback_params = PluginManager.parameters('WhitePaper_TileDependentBattlebackMV');
WP_Tilebattleback_default1 = WP_Tilebattleback_params['Default batlleback1'];
WP_Tilebattleback_default2 = WP_Tilebattleback_params['Default batlleback2'];
WP_Tilebattleback_ship1 = WP_Tilebattleback_params['Ship batlleback1'];
WP_Tilebattleback_ship2 = WP_Tilebattleback_params['Ship batlleback2'];

Spriteset_Battle.prototype.shipBattleback1Name = function() {
    return WP_Tilebattleback_ship1;
};

Spriteset_Battle.prototype.shipBattleback2Name = function() {
    return WP_Tilebattleback_ship2;
};

Spriteset_Battle.prototype.defaultBattleback1Name = function() {
    return WP_Tilebattleback_default1;
};

Spriteset_Battle.prototype.defaultBattleback2Name = function() {
    return WP_Tilebattleback_default2;
};

Spriteset_Battle.prototype.terrainBattleback1Name = function(type) {
    let battlebacks = WP_Tilebattleback_params["Tile " + type];
    if (battlebacks != undefined && battlebacks != ""){
        return JSON.parse(battlebacks)["Battleback1"];
    }
    return null;
};

Spriteset_Battle.prototype.terrainBattleback2Name = function(type) {
    let battlebacks = WP_Tilebattleback_params["Tile " + type];
    if (battlebacks != undefined && battlebacks != ""){
        return JSON.parse(battlebacks)["Battleback2"];
    }
    return null;
};