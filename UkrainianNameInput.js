//=============================================================================
// UkrainianNameInput
// UkrainianNameInput.js
//=============================================================================

//=============================================================================
 /*:
 * @target MV MZ
 * @plugindesc (version 1.0.1) It's just an ukrainian keyboard for name input. It can be used all alone or with plugin  WhitePaper_AllNameInputs.js
 * @author WhitePaper
 *
 * @param Only Ukrainian usage?
 * @type boolean
 * @on Yes
 * @off No
 * @desc If yes, ONLY this keyboard will be used. If no, this keyboard won't be used without other plugins.
 * No - false     Yes - true
 * @default false
 *
 *
 * @help
 * Only Ukrainian usage:
 * Choose "Yes" in the parameter "Only Ukrainian usage?".
 *
 * Usage with WhitePaper_AllNameInputs.js:
 * Add UKRAINE in the parameter "Keyboards"  
 *
 * You can:
 *  - use this plugin in any projects; 
 *  - edit/modify this plugin;
 *  - redistribute this plugin, edited or unedited.
 * Credit isn't necessarily.
 */

 /*:ru
 * @target MV MZ
 * @plugindesc (версия 1.0.1) Просто украинская клавиатура для ввода имени. Может использоваться самостоятельно или с плагином WhitePaper_AllNameInputs.js
 * @author WhitePaper
 *
 * @param Использовать только украинский?
 * @type boolean
 * @on Да
 * @off Нет
 * @desc Если да, будет использоваться ТОЛЬКО эта клавиатура. Если нет, то она не будет использоваться без других плагинов.
 * Нет - false     Да - true
 * @default false
 *
 *
 * @help
 * Использование только украинского:
 * В параметре "Использовать только украинский?" выбрать "Да".
 *
 * Использование с WhitePaper_AllNameInputs.js:
 * В параметре "Клавиатуры" добавить UKRAINE. 
 *
 * Вы можете:
 *  - использовать этот плагин в любых проектах; 
 *  - редактировать/улучшать этот плагин;
 *  - распространять этот плагин, отредактированным или неотредактированным.
 * Указывать авторство не обязательно.
 */
 
 /*:uk
 * @target MV MZ
 * @plugindesc (версія 1.0.1) Просто українська клавіатура для вводу імені. Може використовуватися самостійно або з плагіном WhitePaper_AllNameInputs.js
 * @author WhitePaper
 *
 * @param Використовувати лише українську?
 * @type boolean
 * @on Так
 * @off Ні
 * @desc Якщо так, буде використовуватися ЛИШЕ ця клавіатура. Якщо ні, то вона не буде використовуватися без інших плагінів.
 * Ні - false     Так - true
 * @default false
 *
 *
 * @help
 * Використання лише української:
 * У параметрі "Використовувати лише українську?" обрати "Так".
 *
 * Використання з WhitePaper_AllNameInputs.js:
 * У параметрі "Клавіатури" додати UKRAINE. 
 *
 * Ви можете:
 *  - використовувати цей плагін у будь-яких проектах; 
 *  - редагувати/покращувати цей плагін;
 *  - розповсюджувати цей плагін, відредактованим або невідредактованим.
 * Вказувати авторство не обов'язково.
 */
//=============================================================================

UkrainianNameInput_params = PluginManager.parameters('UkrainianNameInput');
UkrainianNameInput_isOnlyUkrainian = eval(UkrainianNameInput_params['Only Ukrainian usage?']) || eval(UkrainianNameInput_params['Использовать только украинский?']) || eval(UkrainianNameInput_params['Використовувати лише українську?']);

Window_NameInput.UKRAINE =
        [ 'А','Б','В','Г','Ґ',  'а','б','в','г','ґ',
          'Д','Е','Є','Ж','З',  'д','е','є','ж','з',
          'И','І','Ї','Й','К',  'и','і','ї','й','к',
          'Л','М','Н','О','П',  'л','м','н','о','п',
          'Р','С','Т','У','Ф',  'р','с','т','у','ф',
          'Х','Ц','Ч','Ш','Щ',  'х','ц','ч','ш','щ',
          'Ь','Ю','Я','^','_',  'ь','ю','я','%','\'',
          '0','1','2','3','4',  '(',')','*','+','-',
          '5','6','7','8','9',  ':',';',' ','Далі','OK' ];

UkrainianNameInput_Window_NameInput_table = Window_NameInput.prototype.table;
Window_NameInput.prototype.table = function() {
	if (UkrainianNameInput_isOnlyUkrainian){
		Window_NameInput.UKRAINE[88] = '';
		return [Window_NameInput.UKRAINE];
	} else {
		return UkrainianNameInput_Window_NameInput_table.call(this);
	};
};
