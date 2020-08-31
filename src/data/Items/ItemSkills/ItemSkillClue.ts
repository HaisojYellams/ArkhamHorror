import ItemSkill from './ItemSkill';

abstract class ItemSkillClue extends ItemSkill {
  protected constructor(name: string, skill: string) {
    super(
      name,
      [
        `+1 ${skill}`,
        `When you spend a Clue token to add to any ${skill} Check, add one extra bonus die.`
      ]
    );
  }
}

export default ItemSkillClue;
