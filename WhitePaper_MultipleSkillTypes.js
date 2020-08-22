//=============================================================================
// WhitePaper_MultipleSkillTypes.js
//=============================================================================

/*:
 * @target MV, MZ
 * @plugindesc Allows to use multiple skill types (stypes).
 * @author WhitePaper
 *
 * @help
 * Notetags:
 * <stype:x,y> - additional skill types x and y
 *
 * Other info:
 * If at least one of the skill types is sealed/blocked, skill is also sealed/blocked.
 * 
 */
/*:ru
 * @target MV, MZ
 * @plugindesc Даёт возможность использовать несколько типов навыка.
 * @author WhitePaper
 *
 * @help
 * Теги:
 * <stype:x,y> - дополнительные типы навыка x и y
 *
 * Другая информация:
 * Если хотя бы один из типов навыка заблокирован, навык тоже будет заблокирован.
 * 
*/
/*:uk
 * @target MV, MZ
 * @plugindesc Надає можливість використовувати кілька типів навички.
 * @author WhitePaper
 *
 * @help
 * Теги:
 * <stype:x,y> - додаткові типи навички x та y
 *
 * Інша інформація
 * Якщо хоча б один з типів навички заблокований, навичка теж буде заблокована.
 * 
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