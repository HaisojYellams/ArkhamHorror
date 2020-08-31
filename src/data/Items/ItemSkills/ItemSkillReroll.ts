import ItemSkill from './ItemSkill';

abstract class ItemSkillReroll extends ItemSkill {
  protected constructor(name: string, skill: string) {
    const article = /^[AEIOU]/.exec(skill) === null ? 'a' : 'an';
    super(
      name,
      `Any phase: Exhaust to re-roll ${article} ${skill} Check.`
    );
  }
}

export default ItemSkillReroll;
