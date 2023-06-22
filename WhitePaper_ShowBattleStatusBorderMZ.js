//=============================================================================
// WhitePaper_ShowBattleStatusBorderMZ.js
//=============================================================================

//=============================================================================
/*:
@target MZ
@plugindesc Додає рамку до вікна стану (статусу) в битві.
@author WhitePaper
@url https://github.com/WhitePaperChan/RPG_Maker_MV-MZ_Plugins

@help

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
ShowBattleStatusBorder_Window_BattleStatus_initialize = Window_BattleStatus.prototype.initialize;
Window_BattleStatus.prototype.initialize = function(rect) {
    ShowBattleStatusBorder_Window_BattleStatus_initialize.call(this, rect);
    this.frameVisible = true;
};

Scene_Battle.prototype.statusWindowRect = function() {
    const ww = Graphics.boxWidth - 192;
    const wh = this.windowAreaHeight();
    const wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;
    const wy = Graphics.boxHeight - wh;
    return new Rectangle(wx, wy, ww, wh);
};