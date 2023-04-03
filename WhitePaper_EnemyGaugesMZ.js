/*:
@target MZ
@plugindesc Додає полоси HP, MP, TP та дії противни_цям.
@author WhitePaper
@url https://github.com/WhitePaperChan/RPG_Maker_MV-MZ_Plugins

@param ShowTime
@text Показувати полосу дії?
@type boolean
@default true
@on ТАК
@off НІ
@desc
Якщо ТАК, показує полосу дії (якщо нема тегу <HideTime>). Якщо НІ, приховує полосу дії (якщо нема тегу <ShowTime>).

@param ShowHP
@text Показувати полосу HP?
@type boolean
@on ТАК
@off НІ
@default true
@desc
Якщо ТАК, показує полосу HP (якщо нема тегу <HideHP>). Якщо НІ, приховує полосу HP (якщо нема тегу <ShowHP>).

@param ShowMP
@text Показувати полосу MP?
@type boolean
@on ТАК
@off НІ
@default true
@desc
Якщо ТАК, показує полосу MP (якщо нема тегу <HideMP>). Якщо НІ, приховує полосу MP (якщо нема тегу <ShowMP>).

@param ShowTP
@text Показувати полосу TP?
@type boolean
@on ТАК
@off НІ
@default true
@desc
Якщо ТАК, показує полосу TP (якщо нема тегу <HideTP>). Якщо НІ, приховує полосу TP (якщо нема тегу <ShowTP>).

@param OffsetY
@text Зсув по координаті Y
@type number
@default 0
@min -600
@desc
Зсув вниз у пікселях (або вверх, якщо значення від'ємне).

@param GaugeSpacing
@text Відстань між полосами
@type number
@default 24
@desc
Відстань між верхніми краями полос у пікселях. За замовчуванням 24.

@help
Теги для показу:
<ShowHP> - показати полосу HP
<ShowMP> - показати полосу MP
<ShowTP> - показати полосу TP
<ShowTime> - показати полосу дії

Теги для приховання:
<HideHP> - приховати полосу HP
<HideMP> - приховати полосу MP
<HideTP> - приховати полосу TP
<HideTime> - приховати полосу дії

Технічні подробиці:
Цей плагін створює полоси/шкали на основі тих, що використовуються 
для герої_нь.

Ви можете:
 - використовувати цей плагін у будь-яких проектах;
 - редагувати/покращувати цей плагін;
 - розповсюджувати цей плагін, відредактованим або невідредактованим.
Вказувати авторство не обов'язково. 

Цей плагін розповсюджується за ліцензією MIT-0 (MIT No Attribution License)

MIT No Attribution

Copyright 2023 WhitePaperChan

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is 
furnished to do so.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE. 
*/

//Plugin parameters
WP_EnemyGauges_params = PluginManager.parameters('WhitePaper_EnemyGaugesMZ');
WP_EnemyGauges_showTime = eval(WP_EnemyGauges_params['ShowTime']);
WP_EnemyGauges_showHP = eval(WP_EnemyGauges_params['ShowHP']);
WP_EnemyGauges_showMP = eval(WP_EnemyGauges_params['ShowMP']);
WP_EnemyGauges_showTP = eval(WP_EnemyGauges_params['ShowTP']);
WP_EnemyGauges_offsetY = eval(WP_EnemyGauges_params['OffsetY']);
WP_EnemyGauges_gaugeSpacing = eval(WP_EnemyGauges_params['GaugeSpacing']);

//Which gauges should be created
WP_EnemyGauges_Sprite_Enemy_initialize = Sprite_Enemy.prototype.initialize;
Sprite_Enemy.prototype.initialize = function(battler) {
    WP_EnemyGauges_Sprite_Enemy_initialize.call(this, battler);
    var meta = this._enemy.enemy().meta;
    if ((WP_EnemyGauges_showTime && !meta.HideTime) || meta.ShowTime){
        this.createGauge('time');
    }
    if ((WP_EnemyGauges_showHP && !meta.HideHP) || meta.ShowHP){
        this.createGauge('hp');
    }
    if ((WP_EnemyGauges_showMP && !meta.HideMP) || meta.ShowMP){
        this.createGauge('mp');
    }
    if ((WP_EnemyGauges_showTP && !meta.HideTP) || meta.ShowTP){
        this.createGauge('tp');
    }
};

//Init gauges in initMembers
WP_EnemyGauges_Sprite_Enemy_initMembers = Sprite_Enemy.prototype.initMembers;
Sprite_Enemy.prototype.initMembers = function() {
    WP_EnemyGauges_Sprite_Enemy_initMembers.call(this);
    this._gauges = [];
};

//Create gauges
Sprite_Enemy.prototype.createGauge = function(type){
    var id = this._gauges.length;
    this._gauges.push(new Sprite_Gauge());
    this._gauges[id].setup(this._battler, type);
    this.addChild(this._gauges[id]);
    this._gauges[id].move(- this._gauges[id].bitmapWidth() / 2, id * WP_EnemyGauges_gaugeSpacing + WP_EnemyGauges_offsetY);
    this._gauges[id].show();
}
