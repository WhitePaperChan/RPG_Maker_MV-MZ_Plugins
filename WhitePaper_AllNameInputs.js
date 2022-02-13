//=============================================================================
// WhitePaper All Name Inputs 
// WhitePaper_AllNameInputs.js
//=============================================================================

//=============================================================================
 /*:
 * @plugindesc Allows using custom set of keybords for name input
 * @author WhitePaper
 *
 * @param Keyboards
 * @type []
 * @default ["LATIN1", "LATIN2"]
 * @desc Which keybords are used in game (LATIN1, LATIN2, JAPAN1, JAPAN2, JAPAN3, RUSSIA + extra)
 *
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
 */
 /*:ru
 * @plugindesc Даёт возможность использовать свой набор клавиатур для ввода имени.
 * @author WhitePaper
 *
 * @param Клавиатуры
 * @type []
 * @default ["RUSSIA"]
 * @desc Какие клавиатуры используются в игре (LATIN1, LATIN2, JAPAN1, JAPAN2, JAPAN3, RUSSIA + дополнительные)
 *
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
 */
 /*:uk
 * @plugindesc Надає можливість використовувати свій набір клавіатур для вводу імені
 * @author WhitePaper
 *
 * @param Клавіатури
 * @type []
 * @default ["RUSSIA"]
 * @desc Які клавіатури використовуються у грі (LATIN1, LATIN2, JAPAN1, JAPAN2, JAPAN3, RUSSIA + додаткові)
 *
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
 * Клавиатури повинні називатись Window_NameInput.НазваКлавіатури = [ ... ];
 * У параметрі "Клавиатури" писати НазваКлавіатури.
 *
 * Вы можете:
 *  - використовувати цей плагін та його розширення у будь-яких проектах; 
 *  - редагувати/покращувати цей плагін та його розширення.
 * Вказувати авторство бажано, але не обов'язково.
 */
//=============================================================================

WhitePaper_AllNameInputs_params = PluginManager.parameters('WhitePaper_AllNameInputs');
input_keyboards = eval(WhitePaper_AllNameInputs_params['Keyboards']) || eval(WhitePaper_AllNameInputs_params['Клавиатуры']) || eval(WhitePaper_AllNameInputs_params['Клавіатури']);

_Window_NameInput_initialize = Window_NameInput.prototype.initialize;
Window_NameInput.prototype.initialize = function(editWindow){
	this.createKeyboards();
	_Window_NameInput_initialize.call(this, editWindow);
}
Window_NameInput.prototype.createKeyboards = function(){
	Window_NameInput.keyboards = [];
	for (let lang of input_keyboards){
		language = eval("Window_NameInput." + lang);
		if (language != undefined){
			Window_NameInput.keyboards.push(language);
		} else {
			throw new Error("Keyboard " + lang + " doesn't exist. Make sure, that your table named Window_NameInput." + lang)
		}
	}
}

Window_NameInput.prototype.table = function() {
	return Window_NameInput.keyboards;
};