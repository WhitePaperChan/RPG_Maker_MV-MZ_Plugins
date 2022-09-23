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
 * You can:
 *  - use this plugin and its extentions in any projects; 
 *  - edit/modify this plugin and its extentions.
 * Credit is desirable, but isn't necessarily.
 * 
 * You can find UkrainianNameInput.js and my other plugins here: 
 * https://github.com/WhitePaperChan/RPG_Maker_MV-MZ_Plugins
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
 * Вы можете:
 *  - использовать этот плагин и его расширения в любых проектах; 
 *  - редактировать/улучшать этот плагин и его расширения.
 * Указывать авторство желательно, но не обязательно.
 * 
 * Вы можете найти UkrainianNameInput.js и другие мои плагины здесь: 
 * https://github.com/WhitePaperChan/RPG_Maker_MV-MZ_Plugins
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
 * Ви можете:
 *  - використовувати цей плагін та його розширення у будь-яких проектах; 
 *  - редагувати/покращувати цей плагін та його розширення.
 * Вказувати авторство бажано, але не обов'язково.
 * 
 * Ви можете знайти UkrainianNameInput.js і мої інші плагіни тут: 
 * https://github.com/WhitePaperChan/RPG_Maker_MV-MZ_Plugins
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
