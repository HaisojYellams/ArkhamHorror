import ItemSpell from 'src/data/Items/ItemSpells/ItemSpell';

export default class Heal extends ItemSpell {
  constructor() {
    super(
      'Heal',
      'Upkeep: You may cast and exhaust. You or another investigator in your area gains Stamina equal to the success you rolled on your Spell check. This stamina cannot be split between mulitiple investigators.',
      3
    );
    this.setIsMagicalSpell(false);
    this.setCastingStats(1, 1);
  }
}
