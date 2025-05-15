//=============================================================================
// WhitePaper All Name Inputs 
// WhitePaper_AllNameInputs.js
//=============================================================================

//=============================================================================
 /*:
 * @target MV MZ
 * @plugindesc (version 1.1) Allows using custom set of keybords for name input
 * @author WhitePaper
 * @url https://github.com/WhitePaperChan/RPG_Maker_MV-MZ_Plugins
 *
 * @param Keyboards
 * @type []
 * @default ["LATIN1", "LATIN2"]
 * @desc Which keybords are used in game (LATIN1, LATIN2, JAPAN1, JAPAN2, JAPAN3, RUSSIA + extra)
 *
 * @param SamePageButton
 * @text Use the same page button for all keyboards?
 * @type boolean
 * @default false
 * @desc Use the same page button for all keyboard?
 * 
 * @param PageButtonText
 * @text Text for the page button
 * @parent SamePageButton
 * @type string
 * @default ➔
 * @desc Text for the page button
 *
 * @help
 *
 * Available keyboards:
 *  - LATIN1
 *  - LATIN2
 *  - JAPAN1
 *  - JAPAN2
 *  - JAPAN3
 *  - RUSSIA
 *  - UKRAINE (requires UkrainianNameInput.js)
 *
 * Keyboards must be named Window_NameInput.NameOfKeyboard = [ ... ];
 * Type NameOfKeyboard in parameter "Keyboard".
 *
 * This plugin is distributed with MIT-0 license (MIT No Attribution License)
 * 
 * MIT No Attribution
 * 
 * Copyright 2025 WhitePaperChan
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy 
 * of this software and associated documentation files (the "Software"), to deal 
 * in the Software without restriction, including without limitation the rights 
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
 * copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
 * SOFTWARE. 
 */
 /*:ru
 * @plugindesc (version 1.1) Даёт возможность использовать свой набор клавиатур для ввода имени.
 * @author WhitePaper
 * @url https://github.com/WhitePaperChan/RPG_Maker_MV-MZ_Plugins
 *
 * @param Keyboards
 * @text Клавиатуры
 * @type []
 * @default ["LATIN1"]
 * @desc Какие клавиатуры используются в игре (LATIN1, LATIN2, JAPAN1, JAPAN2, JAPAN3, RUSSIA + дополнительные)
 *
 * @param SamePageButton
 * @text Использовать одиноковую кнопку страницы для всех клавиатур?
 * @type boolean
 * @default false
 * @desc Использовать одиноковую кнопку страницы для всех клавиатур?
 * 
 * @param PageButtonText
 * @text Текст для кнопки страницы
 * @parent SamePageButton
 * @type string
 * @default ➔
 * @desc Текст для кнопки страницы
 *
 * @help
 * Доступные клавиатуры:
 *  - LATIN1
 *  - LATIN2
 *  - JAPAN1
 *  - JAPAN2
 *  - JAPAN3
 *  - RUSSIA
 *  - UKRAINE (требует UkrainianNameInput.js)
 *
 * Клавиатуры должны называться Window_NameInput.НазваниеКлавиатуры = [ ... ];
 * В параметре "Клавиатуры" писать НазваниеКлавиатуры.
 *
 * Этот плагин распространяется за лицензией MIT-0 (MIT No Attribution License)
 * 
 * MIT No Attribution
 * 
 * Copyright 2025 WhitePaperChan
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy 
 * of this software and associated documentation files (the "Software"), to deal 
 * in the Software without restriction, including without limitation the rights 
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
 * copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
 * SOFTWARE. 
 */
 /*:uk
 * @plugindesc (version 1.1) Надає можливість використовувати свій набір клавіатур для вводу імені
 * @author WhitePaper
 * @url https://github.com/WhitePaperChan/RPG_Maker_MV-MZ_Plugins
 *
 * @param Keyboards
 * @text Клавіатури
 * @type []
 * @default ["LATIN1"]
 * @desc Які клавіатури використовуються у грі (LATIN1, LATIN2, JAPAN1, JAPAN2, JAPAN3, RUSSIA + додаткові)
 *
 * @param SamePageButton
 * @text Використовувати однакову кнопку сторінки для всіх клавіатур?
 * @type boolean
 * @default false
 * @desc Використовувати однакову кнопку сторінки для всіх клавіатур?
 * 
 * @param PageButtonText
 * @text Текст для кнопки сторінки
 * @parent SamePageButton
 * @type string
 * @default ➔
 * @desc Текст для кнопки сторінки
 *
 * @help
 * Доступні клавіатури:
 *  - LATIN1
 *  - LATIN2
 *  - JAPAN1
 *  - JAPAN2
 *  - JAPAN3
 *  - RUSSIA
 *  - UKRAINE (потребує UkrainianNameInput.js)
 *
 * Клавіатури повинні називатись Window_NameInput.НазваКлавіатури = [ ... ];
 * У параметрі "Клавіатури" писати НазваКлавіатури.
 *
 * Цей плагін розповсюджується за ліцензією MIT-0 (MIT No Attribution License)
 * 
 * MIT No Attribution
 * 
 * Copyright 2025 WhitePaperChan
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy 
 * of this software and associated documentation files (the "Software"), to deal 
 * in the Software without restriction, including without limitation the rights 
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
 * copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
 * SOFTWARE. 
 */
//=============================================================================
WhitePaper_AllNameInputs = {};
WhitePaper_AllNameInputs_params = PluginManager.parameters('WhitePaper_AllNameInputs');
WhitePaper_AllNameInputs.inputKeyboards = eval(WhitePaper_AllNameInputs_params['Keyboards'])
WhitePaper_AllNameInputs.samePageButton = eval(WhitePaper_AllNameInputs_params['SamePageButton']);
WhitePaper_AllNameInputs.pageButtonText = WhitePaper_AllNameInputs_params['PageButtonText'];

_Window_NameInput_initialize = Window_NameInput.prototype.initialize;
Window_NameInput.prototype.initialize = function(editWindow){
	this.createKeyboards();
	_Window_NameInput_initialize.call(this, editWindow);
}
Window_NameInput.prototype.createKeyboards = function(){
	Window_NameInput.keyboards = [];
	for (let lang of WhitePaper_AllNameInputs.inputKeyboards){
		language = eval("Window_NameInput." + lang);
		if (language != undefined){
			if (WhitePaper_AllNameInputs.samePageButton){
				language[88] = WhitePaper_AllNameInputs.pageButtonText;
			}
			Window_NameInput.keyboards.push(language);
		} else {
			throw new Error("Keyboard " + lang + " doesn't exist. Make sure, that your table named Window_NameInput." + lang)
		}
	}
}

Window_NameInput.prototype.table = function() {
	return Window_NameInput.keyboards;
};
