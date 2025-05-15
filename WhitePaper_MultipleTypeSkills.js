//=============================================================================
// WhitePaper_MultipleTypeSkills.js
//=============================================================================

/*:
 * @target MV, MZ
 * @plugindesc Allows to use multiple types (stypes) for one skill.
 * @author WhitePaper
 *
 * @help
 * Notetags:
 * <stype:x,y> - additional skill types x and y
 *
 * Other info:
 * If at least one of the skill types is sealed/blocked, skill is also sealed/blocked.
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
 * @target MV, MZ
 * @plugindesc Даёт возможность использовать несколько типов для одного навыка.
 * @author WhitePaper
 *
 * @help
 * Теги:
 * <stype:x,y> - дополнительные типы навыка x и y
 *
 * Другая информация:
 * Если хотя бы один из типов навыка заблокирован, навык тоже будет заблокирован.
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
 * @target MV, MZ
 * @plugindesc Надає можливість використовувати кілька типів для однієї навички.
 * @author WhitePaper
 *
 * @help
 * Теги:
 * <stype:x,y> - додаткові типи навички x та y
 *
 * Інша інформація:
 * Якщо хоча б один з типів навички заблокований, навичка теж буде заблокована.
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

WP_Stypes_Game_BattlerBase_meetsSkillConditions = Game_BattlerBase.prototype.meetsSkillConditions 
Game_BattlerBase.prototype.meetsSkillConditions = function(skill) {
    return WP_Stypes_Game_BattlerBase_meetsSkillConditions.call(this, skill) &&
			!this.wpStypesisAnyAdditionalSkillTypeSealed(skill);
};

Game_BattlerBase.prototype.wpStypesisAnyAdditionalSkillTypeSealed = function(skill){
	stypes = skill.meta.stype
	if (stypes != undefined){
		stypes = stypes.split(",")
		for (i in stypes){
			stype = parseInt(stypes[i])
			if (this.isSkillTypeSealed(stype)){
				return true;
			}
		}
	}
	return false;
}

WP_Stypes_Window_SkillList_includes = Window_SkillList.prototype.includes
Window_SkillList.prototype.includes = function(item) {
    return WP_Stypes_Window_SkillList_includes.call(this, item) || (item && this.wpStypesitemStypes(item));
};

Window_SkillList.prototype.wpStypesitemStypes = function(item){
	return (item.meta.stype && item.meta.stype.split(",").contains(this._stypeId.toString()));
}
