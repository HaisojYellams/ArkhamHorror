import ItemSpell from 'src/data/Items/ItemSpells/ItemSpell';

export default class BindMonster extends ItemSpell {
  constructor() {
    super(
      'Bind Monster',
      'Any Phase: Cast and discard this spell to pass one Combat check. You must roll successes equal to the monster\'s toughness to cast this spell. This spell doesn\'t work on Ancient Ones.',
      2
    );
    this.setCastingStats(4, 2);
    this.setHandsUsed(2);
  }

}
