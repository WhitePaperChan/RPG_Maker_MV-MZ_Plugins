/*:
@target MZ
@plugindesc Змінює зовнішній вигляд стандартних полос RPG Maker MZ (HP, MP, TP, дії та інших на основі Sprite_Gauge)
@author WhitePaper
@url https://github.com/WhitePaperChan/RPG_Maker_MV-MZ_Plugins

@param GaugeHeight
@text Висота полоси
@type number
@default 32
@min 3
@desc
Висота полоси у пікселях.

@param GaugeWidth
@text Ширина полоси
@type number
@default 128
@min 3
@desc
Ширина полоси у пікселях (включає місце під текст).

@param TextHeight
@text Висота місця під текст
@type number
@default 24
@min 3
@desc
Висота місця під текст у пікселях. (НЕ ВПЛИВАЄ НА РОЗМІР ШРИФТА!)

@param IsMaxShown
@text Показувати максимальне значення?
@type boolean
@default false
@desc
Чи буде показано максимум HP/MP/TP.

@param 
@help

Ви можете:
 - використовувати цей плагін у будь-яких проектах;
 - редагувати/покращувати цей плагін;
 - розповсюджувати цей плагін, відредактованим або невідредактованим.
Вказувати авторство не обов'язково. 

Цей плагін розповсюджується за ліцензією MIT-0 (MIT No Attribution License)

MIT No Attribution

Copyright 2024 WhitePaperChan

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

WP_SimpleGaugeCustomization_params = PluginManager.parameters('WhitePaper_SimpleGaugeCustomizationMZ');
WP_SimpleGaugeCustomization_gaugeHeight = eval(WP_SimpleGaugeCustomization_params['GaugeHeight']);
WP_SimpleGaugeCustomization_gaugeWidth = eval(WP_SimpleGaugeCustomization_params['GaugeWidth']);
WP_SimpleGaugeCustomization_textHeight = eval(WP_SimpleGaugeCustomization_params['TextHeight']);
WP_SimpleGaugeCustomization_isMaxShown = eval(WP_SimpleGaugeCustomization_params['IsMaxShown']);

Window_StatusBase.prototype.gaugeLineHeight = function() {
    return Math.max(WP_SimpleGaugeCustomization_gaugeHeight, WP_SimpleGaugeCustomization_textHeight);
};

Sprite_Gauge.prototype.gaugeHeight = function() {
    return WP_SimpleGaugeCustomization_gaugeHeight;
};

Sprite_Gauge.prototype.bitmapHeight = function() {
    return Math.max(WP_SimpleGaugeCustomization_gaugeHeight, WP_SimpleGaugeCustomization_textHeight);
};

Sprite_Gauge.prototype.bitmapWidth = function() {
    return WP_SimpleGaugeCustomization_gaugeWidth;
};

Sprite_Gauge.prototype.textHeight = function() {
    return WP_SimpleGaugeCustomization_textHeight;
};

Sprite_Gauge.prototype.drawGauge = function() {
    const gaugeX = this.gaugeX();
    const gaugeY = Math.max(this.textHeight() - this.gaugeHeight(), 0);
    const gaugewidth = this.bitmapWidth() - gaugeX;
    const gaugeHeight = this.gaugeHeight();
    this.drawGaugeRect(gaugeX, gaugeY, gaugewidth, gaugeHeight);
};

WP_SimpleGaugeCustomization_Sprite_Gauge_prototype_drawValue = Sprite_Gauge.prototype.drawValue;
Sprite_Gauge.prototype.drawValue = function() {
    if (WP_SimpleGaugeCustomization_isMaxShown){
        const width = this.bitmapWidth();
        const height = this.textHeight();
        this.setupValueFont();
        this.bitmap.drawText(this.drawValueText(), 0, 0, width, height, "right");
    } else {
        WP_SimpleGaugeCustomization_Sprite_Gauge_prototype_drawValue.call(this);
    }
};

Sprite_Gauge.prototype.drawValueText = function(){
    return this.currentValue() + "/" + this.currentMaxValue();
}