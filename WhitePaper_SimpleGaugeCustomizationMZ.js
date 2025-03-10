/*:
@target MZ
@plugindesc (версія 1.2) Змінює зовнішній вигляд стандартних полос RPG Maker MZ (HP, MP, TP, дії та інших на основі Sprite_Gauge)
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

@param IsGaugeAfterLabel
@text Полоса після тексту?
@type boolean
@default true
@desc
Чи буде полоса починатися після назви.

@param TextHeight
@text Висота місця під текст
@type number
@default 24
@min 3
@desc
Висота місця під текст у пікселях. (НЕ ВПЛИВАЄ НА РОЗМІР ШРИФТА!)

@param TextLabelY
@text Y тексту назви полоси
@type number
@default 0
@min 0
@desc
Y-координата тексту назви полоси

@param TextLabelSize
@text Розмір тексту назви полоси
@type number
@default 0
@min 0
@desc
Розмір шрифта значення (якщо 0 - стандартне значення)

@param TextValueSize
@text Розмір тексту значення
@type number
@default 0
@min 0
@desc
Розмір шрифта значення (якщо 0 - стандартне значення)

@param IsMaxShown
@text Показувати макс. значення?
@type boolean
@default false
@desc
Чи буде показано максимум HP/MP/TP.

@param UseNumberFormat
@text Використовувати форматування числа?
@type boolean
@default false
@desc
Чи використовувати форматування числа, відповідне заданій локалі.

@param NumberFormatLocale
@text Локаль форматування числа
@default uk-UA
@desc
Локаль для форматування числа (приклад: при uk-UA 1000000 показано як 1 000 000).

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
WP_SimpleGaugeCustomization_isGaugeAfterLabel = eval(WP_SimpleGaugeCustomization_params['IsGaugeAfterLabel']);
WP_SimpleGaugeCustomization_textHeight = eval(WP_SimpleGaugeCustomization_params['TextHeight']);
WP_SimpleGaugeCustomization_textLabelY = eval(WP_SimpleGaugeCustomization_params['TextLabelY']) || 0;
WP_SimpleGaugeCustomization_textLabelSize = eval(WP_SimpleGaugeCustomization_params['TextLabelSize']) || 0;
WP_SimpleGaugeCustomization_textValueSize = eval(WP_SimpleGaugeCustomization_params['TextValueSize']) || 0;
WP_SimpleGaugeCustomization_isMaxShown = eval(WP_SimpleGaugeCustomization_params['IsMaxShown']) || false;
WP_SimpleGaugeCustomization_useNumberFormat = eval(WP_SimpleGaugeCustomization_params['UseNumberFormat']) || false;
WP_SimpleGaugeCustomization_numberFormatLocale = WP_SimpleGaugeCustomization_params['NumberFormatLocale'] || 'uk-UA';


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

WP_SimpleGaugeCustomization_Sprite_Gauge_prototype_gaugeX = Sprite_Gauge.prototype.gaugeX;
Sprite_Gauge.prototype.gaugeX = function() {
    if (!WP_SimpleGaugeCustomization_isGaugeAfterLabel){
        return 0
    } else {
        return WP_SimpleGaugeCustomization_Sprite_Gauge_prototype_gaugeX.call(this)
    }
};


Sprite_Gauge.prototype.labelY = function() {
    return WP_SimpleGaugeCustomization_textLabelY;
};

WP_SimpleGaugeCustomization_Sprite_Gauge_prototype_drawValue = Sprite_Gauge.prototype.drawValue;
Sprite_Gauge.prototype.drawValue = function() {
    const width = this.bitmapWidth();
    const height = this.textHeight();
    this.setupValueFont();
    if (WP_SimpleGaugeCustomization_isMaxShown){
        this.bitmap.drawText(this.drawValueWithMaxText(), 0, 0, width, height, "right");
    } else {
        this.bitmap.drawText(this.drawValueText(), 0, 0, width, height, "right");
    }
};

Sprite_Gauge.prototype.drawValueWithMaxText = function(){
    if (WP_SimpleGaugeCustomization_useNumberFormat){
        return new Intl.NumberFormat(WP_SimpleGaugeCustomization_numberFormatLocale).format(this.currentValue()) + "/" + 
            new Intl.NumberFormat(WP_SimpleGaugeCustomization_numberFormatLocale).format(this.currentMaxValue());
    } else {
        return this.currentValue() + "/" + this.currentMaxValue()
    }
}

Sprite_Gauge.prototype.drawValueText = function(){
    if (WP_SimpleGaugeCustomization_useNumberFormat){
        return new Intl.NumberFormat(WP_SimpleGaugeCustomization_numberFormatLocale).format(this.currentValue());
    } else {
        return this.currentValue()
    }
}

WP_SimpleGaugeCustomization_Sprite_Gauge_prototype_valueFontSize = Sprite_Gauge.prototype.valueFontSize;
Sprite_Gauge.prototype.valueFontSize = function() {
    if (WP_SimpleGaugeCustomization_textValueSize != 0){
        return WP_SimpleGaugeCustomization_textValueSize;
    } else {
        return WP_SimpleGaugeCustomization_Sprite_Gauge_prototype_valueFontSize.call(this);
    }
};

WP_SimpleGaugeCustomization_Sprite_Gauge_prototype_labelFontSize = Sprite_Gauge.prototype.labelFontSize;
Sprite_Gauge.prototype.labelFontSize = function() {
    if (WP_SimpleGaugeCustomization_textLabelSize != 0){
        return WP_SimpleGaugeCustomization_textLabelSize;
    } else {
        return WP_SimpleGaugeCustomization_Sprite_Gauge_prototype_labelFontSize.call(this);
    }
};
